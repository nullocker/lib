"use strict";

function deleteClass(obj, key, cls) {
    var arr = obj[key].split(" ");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }

    obj[key] = arr.join(" ");
    return obj;
}

function convertArray(arr) {
    var obj = {}, cls;

    for (var i = 0; i < arr.length; i++) {
        cls = arr[i];
        obj[cls] = true;
    }

    return obj;
}

function convertObject(obj) {
    var arr = [], str;

    for (var key in obj) {
        str = key + ", " + obj[key];
        arr.push(str);
    }

    return arr;
}

/*SEPARATOR*/

var obj = {
    key1: "cls1",
    key2: "cls2",
    key3: "cls3"
};

var arr = [1, 2, 4, 8, 16];

var out = [
    deleteClass(obj, "key1", "cls1"),//0
    convertArray(arr),//1
    convertObject(obj),//2
];

console.log(out[2]);
