var json  = '{"menu":{"id": "file","value": \n[[1,2,3],[4,5,6] ],\n"popup":{"menuitem":[{"value":    ["one","two"],\n"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}',
    json_pp  = require('../sweet-data').SweetData.json(json),
    json_min  = require('../sweet-data').SweetData.jsonmin(json);

describe('JSON', () => {

    it('should be defined', () => {
        expect(json_pp).toBeDefined();
    });
});