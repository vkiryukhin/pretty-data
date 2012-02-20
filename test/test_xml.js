	
	var	xml = '<a>  <b>  <c>zz  xxx  zz</c>\n <!-- comment -->  <d/> \n</b>\n</a>',
		pp_xml  = require('../pd').pd.xml(xml),
		pp_xmlmin_com  = require('../pd').pd.xmlmin(xml,true),
		pp_xmlmin  = require('../pd').pd.xmlmin(xml);

console.log('\n==============================================================================\n');
console.log('\n/*------- Original XML string: -------*/\n\n' + xml + '\n');
console.log('\n/*------- Beautified XML -------------*/\n\n' + pp_xml  + '\n');
console.log('\n/*------- Minified XML with preserved comments: -------*/\n\n' + pp_xmlmin_com + '\n');
console.log('\n/*------- Minified XML with deleted comments: ---------*/\n\n' + pp_xmlmin + '\n');
console.log('\n===============================================================================\n');
