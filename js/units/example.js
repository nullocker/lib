"use strict";

var chai = require("/usr/local/node/lib/node_modules/chai");
var assert = chai.assert;

describe("getLastDay", function() {
    it("last day of 01.01.2012 is 31", function() {
        assert.equal(getLastDay(2012, 0), 31);
    });
    it("last day of 01.02.2012 is 29", function() {
        assert.equal(getLastDay(2012, 1), 29);
    });
});

function getLastDay(utc, mth) {
    var $utc = new Date(utc, mth + 1, 0);
    return $utc.getDate();
}
