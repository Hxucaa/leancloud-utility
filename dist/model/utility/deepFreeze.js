

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepFreeze;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function deepFreeze(obj) {
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function (name) {
    var prop = obj[name];

    if ((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object" && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(obj);
}