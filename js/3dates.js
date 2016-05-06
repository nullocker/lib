"use strict";

function getMassive() {
    var arr = [];

    for (var i = 0; i < 65536; i++) arr[i] = true

    return arr;
}

function getFunctionTime(lvl, fnc, sgn) {
    var bit = 1024, mls = new Date();

    for (var i = 0; i < lvl; i++) {
        for (var j = 0; j < bit; j++)  fnc(sgn);
    }

    return new Date() - mls;
}

function getLastDay(utc, mth) {
    var $utc = new Date(utc, mth + 1, 0);
    return $utc.getDate();
}

/*SEPARATOR*/

var out = [
    getFunctionTime(1, getMassive),//0
    getLastDay(1972, 1),//1
];

console.log(out[1]);
