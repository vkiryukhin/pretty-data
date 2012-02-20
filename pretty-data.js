/**
* pretty-data - nodejs plugin to pretty-print or minify data in XML, JSON and CSS formats.
*  
* Version - 0.20.0-beta
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/pretty-data/
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*	pd.xml(data ) - pretty print XML;
*	pd.json(data) - pretty print JSON;
*	pd.css(data ) - pretty print CSS;
*
*	pd.xmlmin(data [, preserveComments] ) - minify XML; 
*	pd.jsonmin(data preserveComments)     - minify JSON; 
*	pd.cssmin(data [, preserveComments] ) - minify CSS; 
*
* PARAMETERS:
*
*	@data  			- String; XML, JSON or CSS text to beautify;
* 	@preserveComments	- Bool (optional, used in npp.minxml and npp.mincss only); 
*				  Set this flag to true to prevent removing comments from @text; 
*	@Return 		- String;
*	
* USAGE:
*	
*	var xml_pp  = require('./pretty-data').pd.xml(xml_text);
*	var xml_min  = require('./pretty-data').pd.xmlmin(xml_text [,true]);
*
*	var json_pp  = require('./pretty-data').pd.json(json_text);
*	var json_min  = require('./pretty-data').pd.jsonmin(json_text);
*
*	var css_pp  = require('./pretty-data').pd.css(css_text);
*	var css_min  = require('./pretty-data').pd.cssmin(css_text [, true]);
*/

function pp() {
	this.shift = ['\n']; // array of shifts
	var step = '  ', // 2 spaces
		maxdeep = 100, // nesting level
		ix = 0;

	// initialize array with shifts //
	for(ix=0;ix<maxdeep;ix++){
		this.shift.push(this.shift[ix]+step); 
	}

};	
	
pp.prototype.xml = function(text) {

	var ar = text.replace(/>\s{0,}</g,"><").replace(/</g,"~#~<").split('~#~'),
		len = ar.length,
		inComment = false,
		deep = 0,
		str = '',
		ix = 0;

		for(ix=0;ix<len;ix++) {
			// start comment or <![CDATA[...]]> or <!DOCTYPE //
			if(ar[ix].search(/<!/) > -1) { 
				str += this.shift[deep]+ar[ix];
				inComment = true; 
				// end comment  or <![CDATA[...]]> //
				if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1 ) { 
					inComment = false; 
				}
			} else 
			// end comment  or <![CDATA[...]]> //
			if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) { 
				str += ar[ix];
				inComment = false; 
			} else 
			// <elm></elm> //
			if( /^<\w/.exec(ar[ix-1]) && /^<\/\w/.exec(ar[ix]) &&
				/^<\w+/.exec(ar[ix-1]) == /^<\/\w+/.exec(ar[ix])[0].replace('/','')) { 
				str += ar[ix];
				if(!inComment) deep--;
			} else
			 // <elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) == -1 && ar[ix].search(/\/>/) == -1 ) {
				str = !inComment ? str += this.shift[deep++]+ar[ix] : str += ar[ix];
			} else 
			 // <elm>...</elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
				str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// </elm> //
			if(ar[ix].search(/<\//) > -1) { 
				str = !inComment ? str += this.shift[--deep]+ar[ix] : str += ar[ix];
			} else 
			// <elm/> //
			if(ar[ix].search(/\/>/) > -1 ) { 
				str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// <? xml ... ?> //
			if(ar[ix].search(/<\?/) > -1) { 
				str += this.shift[deep]+ar[ix];
			} else {
				str += ar[ix];
			}
		}
		
	return  (str[0] == '\n') ? str.slice(1) : str;
}

pp.prototype.json = function(text) {

	var ar = text.replace(/\s{0,}\{\s{0,}/g,"{")
				.replace(/\s{0,}\[$/g,"[")
				.replace(/\[\s{0,}/g,"[")
		  		.replace(/\s{0,}\}\s{0,}/g,"}")
				.replace(/\s{0,}\]\s{0,}/g,"]")
				.replace(/\"\s{0,}\,/g,'",')
				.replace(/\,\s{0,}\"/g,',"')
				.replace(/\"\s{0,}:/g,'":')
				.replace(/:\s{0,}\"/g,':"')
				.replace(/:\s{0,}\[/g,':[')
				
				.replace(/\{/g,"~#~{~#~")
				.replace(/\[/g,"[~#~")
				.replace(/\}/g,"~#~}")
				.replace(/\]/g,"~#~]")
				.replace(/\"\,/g,'",~#~')
				.replace(/\,\"/g,',~#~"')
				.replace(/~#~\s{0,}~#~/g,"~#~")
				.split('~#~'),
				
		len = ar.length,
		deep = 0,
		str = '',
		ix = 0;

	for(ix=0;ix<len;ix++) {
		if( /\{/.exec(ar[ix]))  { 
			str += this.shift[deep++]+ar[ix];
		} else 
		if( /\[/.exec(ar[ix]))  { 
			str += this.shift[deep++]+ar[ix];
		}  else 
		if( /\]/.exec(ar[ix]))  { 
			str += this.shift[--deep]+ar[ix];
		}  else 
		if( /\}/.exec(ar[ix]))  { 
			str += this.shift[--deep]+ar[ix];
		} else {
			str += this.shift[deep]+ar[ix];
		}
	}
	return str.replace(/^\n{1,}/,'');
}

pp.prototype.css = function(text) {

	var ar = text.replace(/\s{1,}/g,' ')
				.replace(/\{/g,"{~#~")
				.replace(/\}/g,"~#~}~#~")
				.replace(/\;/g,";~#~")
				.replace(/\/\*/g,"~#~/*")
				.replace(/\*\//g,"*/~#~")
				.replace(/~#~\s{0,}~#~/g,"~#~")
				.split('~#~'),
		len = ar.length,
		deep = 0,
		str = '',
		ix = 0;
		
		for(ix=0;ix<len;ix++) {

			if( /\{/.exec(ar[ix]))  { 
				str += this.shift[deep++]+ar[ix];
			} else 
			if( /\}/.exec(ar[ix]))  { 
				str += this.shift[--deep]+ar[ix];
			} else
			if( /\*\\/.exec(ar[ix]))  { 
				str += this.shift[deep]+ar[ix];
			}
			else {
				str += this.shift[deep]+ar[ix];
			}
		}
		return str.replace(/^\n{1,}/,'');
}

pp.prototype.xmlmin = function(text, preserveComments) {

	var str = preserveComments ? text
				   : text.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"");
	return  str.replace(/>\s{0,}</g,"><"); 
}

pp.prototype.jsonmin = function(text) {
								  
	return  text.replace(/\s{0,}\{\s{0,}/g,"{")
				.replace(/\s{0,}\[$/g,"[")
				.replace(/\[\s{0,}/g,"[")
				.replace(/:\s{0,}\[/g,':[')
		  		.replace(/\s{0,}\}\s{0,}/g,"}")
				.replace(/\s{0,}\]\s{0,}/g,"]")
				.replace(/\"\s{0,}\,/g,'",')
				.replace(/\,\s{0,}\"/g,',"')
				.replace(/\"\s{0,}:/g,'":')
				.replace(/:\s{0,}\"/g,':"');						  
}

pp.prototype.cssmin = function(text, preserveComments) {
	
	var str = preserveComments ? text
				   : text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") ;
	return str.replace(/\s{1,}/g,' ')
			  .replace(/\{\s{1,}/g,"{")
			  .replace(/\}\s{1,}/g,"}")
			  .replace(/\;\s{1,}/g,";")
			  .replace(/\/\*\s{1,}/g,"/*")
			  .replace(/\*\/\s{1,}/g,"*/");
}	
	
exports.pd= new pp;	










