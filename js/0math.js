"use strict";

function calculateExponent(int, exp) {
    var $exp = 1;

    for (var i = 0; i < exp; i++) {
        $exp *= int;
    }

    return $exp;
}

function calculateFactorial(fct) {
    var $fct = 1;

    for (var i = 0; i < fct; i++) {
        $fct += $fct * i;
    }

    return $fct;
}

function calculateFibonacci(fib) {
    var $fib = 1;

    for (var i = 1, x = 0; i < fib; i++) {
        $fib = $fib + x;
        x = $fib - x;
    }

    return $fib;
}

function calculatePercent(utc, sum, prc) {
    var $sum = sum;

    for (var i = 0; i < utc; i++) {
        $sum = $sum + ($sum * prc / 100);
    }

    return $sum;
}

function isInt(int) {
    return !isNaN(parseFloat(int) && isFinite(int) && parseInt(int));
}

/*SEPARATOR*/

var out = [
    calculateExponent(3, 3),//0
    calculateFactorial(5),//1
    calculateFibonacci(10),//2
    calculatePercent(10, 1000, 10),//3
    isInt(1),//4
];

console.log(out[4]);
