"use strict";

/**
 * Created by Lance on 2015-12-19.
 */

module.exports = function (AV) {
  return {
    UserValidation: require("./UserValidation")(AV)
  };
};