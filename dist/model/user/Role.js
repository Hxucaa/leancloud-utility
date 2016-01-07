"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _avoscloudSdk = require("avoscloud-sdk");

var _avoscloudSdk2 = _interopRequireDefault(_avoscloudSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _avoscloudSdk2.default.Object.extend("_Role", {
  initialize: function initialize() {
    Object.defineProperty(this, "name", {
      get: function get() {
        return this.get("name");
      },
      set: function set(value) {
        this.set("name", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "isActive", {
      get: function get() {
        return this.get("isActive");
      },
      set: function set(value) {
        this.set("isActive", value);
      },

      enumerable: true
    });
  }
}, {});