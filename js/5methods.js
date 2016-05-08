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

/*SEPARATOR*/

document.getElementById("scripts").innerHTML = setObject();

var out = [
    setObject(),//0
];

console.log(out[0]);
