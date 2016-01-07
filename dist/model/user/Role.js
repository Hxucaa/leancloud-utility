"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (av) {
  return av.Object.extend("_Role", {
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
};