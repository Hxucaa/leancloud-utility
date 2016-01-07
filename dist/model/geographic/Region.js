
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (av) {
  return av.Object.extend("L_Region", {
    initialize: function initialize() {
      Object.defineProperty(this, "code", {
        get: function get() {
          return this.get("code");
        },
        set: function set(value) {
          this.set("code", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "countryCode", {
        get: function get() {
          return this.get("countryCode");
        },
        set: function set(value) {
          this.set("countryCode", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "regionNameE", {
        get: function get() {
          return this.get("regionNameE");
        },
        set: function set(value) {
          this.set("regionNameE", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "regionNameC", {
        get: function get() {
          return this.get("regionNameC");
        },
        set: function set(value) {
          this.set("regionNameC", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "level", {
        get: function get() {
          return this.get("level");
        },
        set: function set(value) {
          this.set("level", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "upperRegion", {
        get: function get() {
          return this.get("upperRegion");
        },
        set: function set(value) {
          this.set("upperRegion", value);
        },

        enumerable: true
      });
    }
  }, {});
};