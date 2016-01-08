

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curryN;
function curryN(n, f) {
  return function _curryN(as) {
    return function () {
      var args = as.concat([].slice.call(arguments));
      return args.length < n ? _curryN(args) : f.apply(null, args);
    };
  }([]);
}