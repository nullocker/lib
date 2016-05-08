"use strict";

function fuckJavaScript() {
    var obj = {
        key0: "cls0",
        key1: "cls1",

        setEmpty: function () {
            this.key0 = "";
        },
        changeClass: function (key, cls) {
            changeClass(this, key, cls);
        },
        toString: function (key) {
            return this[key];
        }
    };

    obj.setEmpty();
    obj.changeClass("key0", "cls0");
    document.getElementById("console").innerHTML = obj.toString("key0");
    return obj;
}

function changeClass(obj, key, cls) {

    if (obj[key] != null) {
        obj[key] = cls;
    }

    return obj;
}

/*SEPARATOR*/

var out = [
    fuckJavaScript(),//0
];

console.log(out[0]);
