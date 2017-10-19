
var json  = '{"menu":{"id": "file","welcome": "text{{variable}}text","value": \n[[1,2,3],[4,5,6] ],\n"popup":{"menuitem":[{"value":    ["one","two"],\n"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}, {\n"welcome": "abc   {{variable}}   xyz"\n}]}}}',

    json_pretty  = require('../pretty-data').pd.json(json),      // pretty original
    json_min  = require('../pretty-data').pd.jsonmin(json),      // min original
    json_pretty2  = require('../pretty-data').pd.json(json_min), // pretty min
    json_min2  = require('../pretty-data').pd.jsonmin(json_pretty2);     // min pretty

console.log('\n==============================================================================\n');
console.log('\n/*------- Original JSON string: -------*/\n\n' + json + '\n');

console.log('\n/*------- Beautify original JSON: -------------*/\n\n' + json_pretty  + '\n');
console.log('\n/*------- Minify original JSON: ---------------*/\n\n' + json_min + '\n');

console.log('\n/*------- Beautify minified JSON: -------------*/\n\n' + json_pretty2  + '\n');
console.log('\n/*------- Minify beautified JSON: ---------------*/\n\n' + json_min2 + '\n');
console.log('\n===============================================================================\n');
