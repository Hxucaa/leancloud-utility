"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchEnum = matchEnum;

var _index = require("./validation/index");

var success = _index.ValidationAF.Success; /**
                                            * Created by Lance on 2015-12-19.
                                            */

var failure = _index.ValidationAF.Failure;

function matchEnum(value, enums, validationError) {

  for (var key in enums) {
    if (enums.hasOwnProperty(key) && enums[key] === value) {
      return success(value);
    }
  }
  return failure(validationError);
}