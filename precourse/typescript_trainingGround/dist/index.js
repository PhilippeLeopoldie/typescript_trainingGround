"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonStreetNo = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    return age > 34;
}
exports.isOld = isOld;
function countOdd(array) {
    return array.filter(x => x % 2 !== 0).length;
}
exports.countOdd = countOdd;
function sumEven(arr) {
    return arr.filter(even => even % 2 === 0)
        .reduce((a, b) => a + b, 0);
}
exports.sumEven = sumEven;
function getPersonStreetNo(p) {
    return p.address.streetNo;
}
exports.getPersonStreetNo = getPersonStreetNo;
class PersonClass {
    constructor(name, birthYear) {
        this.name = '';
        this.birthYear = 0;
        this.name = name;
        this.birthYear = birthYear;
    }
}
const p = new PersonClass('Marcus', 1972);
