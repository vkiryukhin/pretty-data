let SweetData = require('../lib/sweet-data').SweetData;
let should = require('should');

describe('xmlmin', () => {

    it('should exist', () => {
        should.exist(SweetData.xmlmin);
    });

    it('should minify xml', () => {
        const xml = '<?xml version="1.0" encoding="UTF-8" ?>      <!DOCTYPE foo SYSTEM "Foo.dtd"><a>          <b>bbb</b>   <!-- comment --><c/><d><soapenv:Envelope xmlns:soapenv="http://xxx" xmlns:xsd="http://yyy" xmlns:xsi="http://zzz"></soapenv>       </d><e>        <![CDATA[ <z></z> ]]></e><f><g></g></f></a>';

        const expected = '<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE foo SYSTEM "Foo.dtd"><a><b>bbb</b><c/><d><soapenv:Envelope xmlns:soapenv="http://xxx" xmlns:xsd="http://yyy" xmlns:xsi="http://zzz"></soapenv></d><e><![CDATA[ <z></z> ]]></e><f><g></g></f></a>';
        const actual = SweetData.xmlmin(xml);

        should.equal(actual, expected);
    });
});