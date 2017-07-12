let SweetData = require('../sweet-data').SweetData;
let should = require('should');

describe('jsonmin', () => {

    it('should exist', () => {
        should.exist(SweetData.jsonmin);
    });

    it('should minify json', () => {
        const json = '{"menu":{"id": "file","value": \n[[1,2,3],[4,5,6] ],\n"popup":{"menuitem":[{"value":    ["one","two"],\n"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}';

        const expected = '{"menu":{"id":"file","value":[[1,2,3],[4,5,6]],"popup":{"menuitem":[{"value":["one","two"],"onclick":"CreateNewDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}';
        const actual = SweetData.jsonmin(json);

        should.equal(actual, expected);
    });
})