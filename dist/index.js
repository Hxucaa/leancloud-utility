"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = exports.model = undefined;

var _index = require("./validation/index");

var validationF = _interopRequireWildcard(_index);

var _index2 = require("./model/index");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var model = exports.model = _index3.default;
var validation = exports.validation = validationF;