"use strict";

function createMatrix(row, col) {
    var arr = [], int = 0;

    for (var i = 0; i < row; i++) {
        for (var j = 0, x = []; j < col; j++) {
            int++;
            x[j] = int;
        }
        arr[i] = x;
    }

    return arr;
}

function sortArray(arr) {
    var $arr = arr.slice();

    for (var i = 0; i < $arr.length; i++) {
        for (var j = 0, x = 0; j < $arr.length; j++) {
            if ($arr[j + 1] < $arr[j]) {
                x = $arr[j];
                $arr[j] = $arr[j + 1];
                $arr[j + 1] = x;
            }
        }
    }

    return $arr;
}

function maxArray(arr) {
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function reduceArray(arr, min, max) {
    var $arr = arr.slice();

    for (var i = 0; i < arr.length; i++) {
        if ($arr[i] < min || $arr[i] > max) {
            $arr.splice(i--, 1);
        }
    }

    return $arr;
}

/*SEPARATOR*/

var arr = [5, 1, 3, 9, 2, 4, 0];

var out = [
    createMatrix(3, 3),//0
    sortArray(arr),//1
    maxArray(arr),//2
    reduceArray(arr, 2, 4),//3
];

console.log(out[3]);
