"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var arr1 = new Array(6);
var arr2 = new Array(6);
var arr3 = new Array(6);
for (var i = 0; i < arr1.length; i++) {
    console.clear();
    arr1[i] = rls.questionInt("Arr#1 -> number in position ".concat(i + 1, ": "));
    arr2[i] = rls.questionInt("Arr#2 -> number in position ".concat(i + 1, ": "));
}
for (var i = 0; i < arr3.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);
