
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require("lodash/utility");

var _collection = require("lodash/collection");

var _RegionData = require("./RegionData.json");

var _RegionData2 = _interopRequireDefault(_RegionData);

var _deepFreeze = require("../utility/deepFreeze");

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Region = {
  data: _RegionData2.default.results,

  matchByCode: function matchByCode(code) {
    var source = arguments.length <= 1 || arguments[1] === undefined ? _RegionData2.default.results : arguments[1];

    return (0, _collection.find)(source, (0, _utility.matchesProperty)("code", code));
  },
  matchByName: function matchByName(name) {
    var source = arguments.length <= 1 || arguments[1] === undefined ? _RegionData2.default.results : arguments[1];

    return (0, _collection.find)(source, (0, _utility.matchesProperty)("regionNameC", name));
  },
  province: function province() {
    return (0, _collection.filter)(_RegionData2.default.results, (0, _utility.matchesProperty)("level", "1"));
  },
  municipality: function municipality() {
    return (0, _collection.filter)(_RegionData2.default.results, (0, _utility.matchesProperty)("level", "2"));
  },
  district: function district() {
    return (0, _collection.filter)(_RegionData2.default.results, (0, _utility.matchesProperty)("level", "3"));
  },
  levelFourRegions: function levelFourRegions() {
    return (0, _collection.filter)(_RegionData2.default.results, (0, _utility.matchesProperty)("level", "4"));
  }
};

exports.default = (0, _deepFreeze2.default)(Region);