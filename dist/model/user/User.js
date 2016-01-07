"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _avoscloudSdk = require("avoscloud-sdk");

var _avoscloudSdk2 = _interopRequireDefault(_avoscloudSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _avoscloudSdk2.default.Object.extend("_User", {
  initialize: function initialize() {
    Object.defineProperty(this, "mobilePhoneNumber", {
      get: function get() {
        return this.get("mobilePhoneNumber");
      },
      set: function set(value) {
        this.set("mobilePhoneNumber", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "mobilePhoneNumberVerified", {
      get: function get() {
        return this.get("mobilePhoneNumberVerified");
      },
      set: function set(value) {
        this.set("mobilePhoneNumberVerified", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "salt", {
      get: function get() {
        return this.get("salt");
      },
      set: function set(value) {
        this.set("salt", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "sessionToken", {
      get: function get() {
        return this.get("sessionToken");
      },
      set: function set(value) {
        this.set("sessionToken", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "authData", {
      get: function get() {
        return this.get("authData");
      },
      set: function set(value) {
        this.set("authData", value);
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

    Object.defineProperty(this, "emailVerified", {
      get: function get() {
        return this.get("emailVerified");
      },
      set: function set(value) {
        this.set("emailVerified", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "username", {
      get: function get() {
        return this.get("username");
      },
      set: function set(value) {
        this.set("username", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "password", {
      get: function get() {
        return this.get("password");
      },
      set: function set(value) {
        this.set("password", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "type", {
      get: function get() {
        return this.get("type");
      },
      set: function set(value) {
        this.set("type", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "status", {
      get: function get() {
        return this.get("status");
      },
      set: function set(value) {
        this.set("status", value);
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

    Object.defineProperty(this, "nickname", {
      get: function get() {
        return this.get("nickname");
      },
      set: function set(value) {
        this.set("nickname", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "gender", {
      get: function get() {
        return this.get("gender");
      },
      set: function set(value) {
        this.set("gender", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "birthday", {
      get: function get() {
        return this.get("birthday");
      },
      set: function set(value) {
        this.set("birthday", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "ageGroup", {
      get: function get() {
        return this.get("ageGroup");
      },
      set: function set(value) {
        this.set("ageGroup", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "horoscope", {
      get: function get() {
        return this.get("horoscope");
      },
      set: function set(value) {
        this.set("horoscope", value);
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

    Object.defineProperty(this, "coverPhoto", {
      get: function get() {
        return this.get("coverPhoto");
      },
      set: function set(value) {
        this.set("coverPhoto", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "whatsUp", {
      get: function get() {
        return this.get("whatsUp");
      },
      set: function set(value) {
        this.set("whatsUp", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "latestLocation", {
      get: function get() {
        return this.get("latestLocation");
      },
      set: function set(value) {
        this.set("latestLocation", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "aaCount", {
      get: function get() {
        return this.get("aaCount");
      },
      set: function set(value) {
        this.set("aaCount", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "treatCount", {
      get: function get() {
        return this.get("treatCount");
      },
      set: function set(value) {
        this.set("treatCount", value);
      },

      enumerable: true
    });

    Object.defineProperty(this, "toGoCount", {
      get: function get() {
        return this.get("toGoCount");
      },
      set: function set(value) {
        this.set("toGoCount", value);
      },

      enumerable: true
    });
  }
}, {});