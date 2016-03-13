"use strict";

export default function User(AV) {

  /**
   * @constructor User
   * @extends external:AV.User
   * @memberof model
   */
  return AV.Object.extend("_User", {

    initialize() {  // eslint-disable-line max-statements
      /**
       * @name model.User#mobilePhoneNumber
       * @type {string}
       */
      Object.defineProperty(this, "mobilePhoneNumber", {
        get() {
          return this.get("mobilePhoneNumber");
        },
        set(value) {
          this.set("mobilePhoneNumber", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#mobilePhoneNumberVerified
       * @type {boolean}
       */
      Object.defineProperty(this, "mobilePhoneNumberVerified", {
        get() {
          return this.get("mobilePhoneNumberVerified");
        },
        set(value) {
          this.set("mobilePhoneNumberVerified", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#salt
       * @type {string}
       */
      Object.defineProperty(this, "salt", {
        get() {
          return this.get("salt");
        },
        set(value) {
          this.set("salt", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#sessionToken
       * @type {string}
       */
      Object.defineProperty(this, "sessionToken", {
        get() {
          return this.get("sessionToken");
        },
        set(value) {
          this.set("sessionToken", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#authData
       * @type {string}
       */
      Object.defineProperty(this, "authData", {
        get() {
          return this.get("authData");
        },
        set(value) {
          this.set("authData", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#email
       * @type {string}
       */
      Object.defineProperty(this, "email", {
        get() {
          return this.get("email");
        },
        set(value) {
          this.set("email", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#emailVerified
       * @type {boolean}
       */
      Object.defineProperty(this, "emailVerified", {
        get() {
          return this.get("emailVerified");
        },
        set(value) {
          this.set("emailVerified", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#username
       * @type {string}
       */
      Object.defineProperty(this, "username", {
        get() {
          return this.get("username");
        },
        set(value) {
          this.set("username", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#password
       * @type {string}
       */
      Object.defineProperty(this, "password", {
        get() {
          return this.get("password");
        },
        set(value) {
          this.set("password", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#type
       * @type {number|model.UserType}
       */
      Object.defineProperty(this, "type", {
        get() {
          return this.get("type");
        },
        set(value) {
          this.set("type", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#status
       * @type {number|model.UserStatus}
       */
      Object.defineProperty(this, "status", {
        get() {
          return this.get("status");
        },
        set(value) {
          this.set("status", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#isActive
       * @type {boolean|model.Activation}
       */
      Object.defineProperty(this, "isActive", {
        get() {
          return this.get("isActive");
        },
        set(value) {
          this.set("isActive", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#nickname
       * @type {string}
       */
      Object.defineProperty(this, "nickname", {
        get() {
          return this.get("nickname");
        },
        set(value) {
          this.set("nickname", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#gender
       * @type {number|model.Gender}
       */
      Object.defineProperty(this, "gender", {
        get() {
          return this.get("gender");
        },
        set(value) {
          this.set("gender", value);
        },
        enumerable: true
      });

      /**
       * @name model.User#birthday
       * @type {date}
       */
      Object.defineProperty(this, "birthday", {
        get() {
          return this.get("birthday");
        },
        set(value) {
          this.set("birthday", value);
        },
        enumerable: true
      });

      /**
       * 年龄段.此值由服务器计算.
       * @name model.User#ageGroup
       * @type {number|model.AgeGroup}
       */
      Object.defineProperty(this, "ageGroup", {
        get() {
          return this.get("ageGroup");
        },
        set(value) {
          this.set("ageGroup", value);
        },
        enumerable: true
      });

      /**
       * 星座.此值由服务器计算.
       * @name model.User#horoscope
       * @type {number|model.Horoscope}
       */
      Object.defineProperty(this, "horoscope", {
        get() {
          return this.get("horoscope");
        },
        set(value) {
          this.set("horoscope", value);
        },
        enumerable: true
      });

      /**
       * 住址.
       * A pointer pointing to an address object.
       * @name model.User#address
       * @type {model.Address}
       */
      Object.defineProperty(this, "address", {
        get() {
          return this.get("address");
        },
        set(value) {
          this.set("address", value);
        },
        enumerable: true
      });

      /**
       * 头像照片
       * @name model.User#coverPhoto
       * @type {external:AV.File}
       */
      Object.defineProperty(this, "coverPhoto", {
        get() {
          return this.get("coverPhoto");
        },
        set(value) {
          this.set("coverPhoto", value);
        },
        enumerable: true
      });

      /**
       * 用户个人状态消息
       * @name model.User#whatsUp
       * @type {string}
       */
      Object.defineProperty(this, "whatsUp", {
        get() {
          return this.get("whatsUp");
        },
        set(value) {
          this.set("whatsUp", value);
        },
        enumerable: true
      });

      /**
       * Latest whereabouts of user
       * @name model.User#latestLocation
       * @type {external:AV.GeoPoint}
       */
      Object.defineProperty(this, "latestLocation", {
        get() {
          return this.get("latestLocation");
        },
        set(value) {
          this.set("latestLocation", value);
        },
        enumerable: true
      });

      /**
       * 和他人aa过几次的统计
       * @name model.User#aaCount
       * @type {number}
       */
      Object.defineProperty(this, "aaCount", {
        get() {
          return this.get("aaCount");
        },
        set(value) {
          this.set("aaCount", value);
        },
        enumerable: true
      });

      /**
       * 请过几次客的统计
       * @name model.User#treatCount
       * @type {number}
       */
      Object.defineProperty(this, "treatCount", {
        get() {
          return this.get("treatCount");
        },
        set(value) {
          this.set("treatCount", value);
        },
        enumerable: true
      });

      /**
       * 参与过几次活动的统计
       * @name model.User#toGoCount
       * @type {number}
       */
      Object.defineProperty(this, "toGoCount", {
        get() {
          return this.get("toGoCount");
        },
        set(value) {
          this.set("toGoCount", value);
        },
        enumerable: true
      });
    }

  }, {

  });
}
