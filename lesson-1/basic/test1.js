"use strict";
var a = 5;
var b = 'TypeScript';
var d = ['Spring', 'Boot'];
var e = ['Spring', 'Spring Boot', 3, 'Reactive', false];
var f = 10;
function test1(a) {
    return true;
}
var test2 = function (a) {
    return a * 4 / 2;
};
d.map(function (s) { return s.toLocaleUpperCase(); });
function countCoord(coord) {
}
function getSum(a) {
    if (typeof a === 'number') {
        return [a * 2];
    }
    else if (Array.isArray(a)) {
        return a.map(function (value) { return value * 10; }).filter(function (value) { return value > 10; });
    }
    return [];
}
