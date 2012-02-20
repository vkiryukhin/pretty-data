	
	var	json  = '{"menu":{"id": "file","value": \n[1,2,3],\n"popup":{"menuitem":[{"value":    ["one","two"],\n"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}',
		json_pp  = require('../pd').pd.json(json);
		json_min  = require('../pd').pd.jsonmin(json);

console.log('\n==============================================================================\n');
console.log('\n/*------- Original JSON string: -------*/\n\n' + json + '\n');
console.log('\n/*------- Beautified JSON: -------------*/\n\n' + json_pp  + '\n');
console.log('\n/*------- Minified JSON: ---------------*/\n\n' + json_min + '\n');
console.log('\n===============================================================================\n');
