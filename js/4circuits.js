"use strict";

function refactorInteger() {
    var int = 0;

    function $int() {
        if (arguments.length == 0) {
            return int;
        }
    }

    $int.set = function (set) {
        int = set;
    };
    $int.reset = function () {
        int = 0;
    };

    return $int;
}

function refactorString() {
    var str = "";

    function $str() {
        if (arguments.length == 0) {
            return str;
        }
    }

    $str.set = function (set) {
        str += set;
    };
    $str.reset = function () {
        str = "";
    };

    return $str;
}

/*SEPARATOR*/

var int = refactorInteger();
int.set(8);
var str = refactorString();
str.set("4");

var out = [
    int(),//0
    str(),//1
];

console.log(out[1]);
