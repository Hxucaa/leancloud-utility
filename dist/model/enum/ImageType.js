

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreeze = require("../utility/deepFreeze");

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageType = {
  Main: 1,

  Thumbnail: 2,

  Portrait: 3
};

exports.default = (0, _deepFreeze2.default)(ImageType);