"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (av) {
  return av.Object.extend("Business", {
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

      Object.defineProperty(this, "phone", {
        get: function get() {
          return this.get("phone");
        },
        set: function set(value) {
          this.set("phone", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "email", {
        get: function get() {
          return this.get("email");
        },
        set: function set(value) {
          this.set("email", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "websiteUrl", {
        get: function get() {
          return this.get("siteUrl");
        },
        set: function set(value) {
          this.set("siteUrl", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "address", {
        get: function get() {
          return this.get("address");
        },
        set: function set(value) {
          this.set("address", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "coverImage", {
        get: function get() {
          return this.get("coverImage");
        },
        set: function set(value) {
          this.set("coverImage", value);
        },

        enumerable: true
      });

      Object.defineProperty(this, "description", {
        get: function get() {
          return this.get("description");
        },
        set: function set(value) {
          this.set("description", value);
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