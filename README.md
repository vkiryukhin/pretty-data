# pretty-data

nodejs plugin to **pretty-print** or **minify**
text in **XML**, **JSON** and **CSS** formats.

**Version** - 0.20.0-beta

**Copyright** (c) 2012 Vadim Kiryukhin ( vkiryukhin @ gmail.com )

**Home page:** [http://www.eslinstructor.net/pretty-data/](http://www.eslinstructor.net/pretty-data/) 

**License:** Dual licensed under
the MIT and GPL licenses:

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

##Description

* `pd.xml(text )` - pretty print XMLtext; 

* `pd.json(text)` - pretty print JSON text; 

* `pd.css(text )` - pretty print CSS text; 

* `pd.xmlmin(text [, preserveComments] ` - minify XML
text; 

* `pd.jsonmin(text preserveComments)` - minify JSON text;

* `pd.cssmin(text [, preserveComments] )` - minify CSS text; 

**PARAMETERS:**

`@text` - String; XML, JSON or CSS text to beautify; 

`@preserveComments` - 
Bool (optional, used in npp.minxml and npp.mincss only); Set this flag
to true to prevent removing comments from @text; 

`@Return` - String;


**USAGE:**

`var xml_pp = require(./pd).pd.xml(xml_text); `

`var xml_min = require(./pd).pd.xmlmin(xml_text [,true]);` 

`var json_pp = require(./pd).pd.json(json_text);` 

`var json_min = require(./pd).pd.jsonmin(json_text);` 

`var css_pp = require(./pd).pd.css(css_text); `

`var css_min = require(./pd).pd.cssmin(css\text [, true]);`
