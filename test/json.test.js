let SweetData = require('../lib/sweet-data').SweetData;
let should = require('should');

describe('json', () => {

    it('should exist', () => {
        should.exist(SweetData.json);
    });
});