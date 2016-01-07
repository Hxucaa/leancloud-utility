"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (av) {
  return av.Object.extend("Address", {
    initialize: function initialize() {
      Object.defineProperty(this, "street", {
        get: function get() {
          return this.get("street");
        },
        set: function set(value) {
          this.set("street", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "region", {
        get: function get() {
          return this.get("region");
        },
        set: function set(value) {
          this.set("region", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "postalCode", {
        get: function get() {
          return this.get("postalCode");
        },
        set: function set(value) {
          this.set("postalCode", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "geoLocation", {
        get: function get() {
          return this.get("geoLocation");
        },
        set: function set(value) {
          this.set("geoLocation", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "fullAddress", {
        get: function get() {
          return this.get("fullAddress");
        },
        set: function set(value) {
          this.set("fullAddress", value);
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