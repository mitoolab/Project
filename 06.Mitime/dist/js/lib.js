"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 2017 JavaScript Mitoo all rights reserved.

var pi = exports.pi = Math.PI;

function square(x) {
  return x * x;
}

var Person = exports.Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};