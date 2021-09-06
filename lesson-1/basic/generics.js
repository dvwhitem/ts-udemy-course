"use strict";
function logTime(num) {
    console.log(new Date());
    return num;
}
logTime(10);
var MyGenClass = /** @class */ (function () {
    function MyGenClass(value) {
        this.value = value;
    }
    return MyGenClass;
}());
var genClass = new MyGenClass(19);
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
