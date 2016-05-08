"use strict";

function setObject() {
    var obj = {
        key1: "cls1",
        key2: "cls2",
        key3: "cls3",

        resetKey: function () {
            this.key1 = "";
        },
        resetClass: function () {
            resetClass(this);
        }

    };

    obj.resetKey();
    obj.resetClass();
    return obj.key3;
}

function resetClass($this) {

    if ($this.key2 == "cls2") {
        $this.key2 = "";
    }

    return $this;
}

function getNumbers() {
    var int = {
        sum: function () {
            return this.a + this.b;
        },
        mlt: function () {
            return this.a * this.b;
        },
        inp: function (a, b) {
            this.a = a;
            this.b = b;
        }
    };

    int.inp(3, 3);
    document.getElementById("value1").innerHTML = int.sum();
    document.getElementById("value2").innerHTML = int.mlt();
    return int;
}

/*SEPARATOR*/

var out = [
    setObject(),//0
    getNumbers(),//1
];

console.log(out[1]);
