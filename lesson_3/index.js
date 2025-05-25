"use strict";
// function, signature function, function overloads
// functions //
// function pow(x, y){
//   return x ** y;
// }  //javascriptda shunday
function pow(x, y) {
    return x ** y;
}
const add = (x, y) => x + y;
function log(x) {
    console.log(x); // qiymat qaytarmaydigan function void function deyiladi
}
function some(s) {
    throw new Error(s); // dasturni shu yerda to'xtatadigan funksiya
}
// Signature functions //
let c; // funksiya elon qilib, keyin shu parametrlarga mos boshqa funksiya meros qilib olinaveradi
c = function (a, b) {
    return `$${b}: ${a}`;
};
//  function overloads
function overload(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} & ${y}`;
    }
}
function overload2(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} & ${y}`;
    }
}
console.log(overload2(2, "Number"));
