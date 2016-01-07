"use strict";

import AV from "avoscloud-sdk";

/**
 * @constructor Business
 * @extends external:AV.Object
 * @memberof model
 */
export default AV.Object.extend("Business", {

  initialize() {

    ///**
    // * @name model.Business#user
    // * @type {model.User}
    // */
    // Object.defineProperty(this, "user", {
    //   get: function() {
    //     return this.get("user");
    //   },
    //   set: function(value) {
    //     this.set("user", value);
    //   },
    //   enumerable: true
    // });

    ///**
    // * @name model.Business#company
    // * @type {pointer}
    // */
    // Object.defineProperty(this, "company", {
    //   get() {
    //     return this.get("company");
    //   },
    //   set(value) {
    //     this.set("company", value);
    //   },
    //   enumerable: true
    // });

    /**
     * Name of a Business.
     * @name model.Business#name
     * @type {string}
     */
    Object.defineProperty(this, "name", {
      get() {
        return this.get("name");
      },
      set(value) {
        this.set("name", value);
      },
      enumerable: true
    });

    /**
     * Phone number of a Business.
     * @name model.Business#phone
     * @type {string}
     */
    Object.defineProperty(this, "phone", {
      get() {
        return this.get("phone");
      },
      set(value) {
        this.set("phone", value);
      },
      enumerable: true
    });

    /**
     * Email of a Business.
     * @name model.Business#email
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
     * Website of a Business.
     * @name model.Business#websiteUrl
     * @type {string}
     */
    Object.defineProperty(this, "websiteUrl", {
      get() {
        return this.get("siteUrl");
      },
      set(value) {
        this.set("siteUrl", value);
      },
      enumerable: true
    });

    /**
     * Address of a Business.
     * @name model.Business#address
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
     * Primary image of a Business.
     * @name cloudmodel.Business#coverImage
     * @type {external:AV.File}
     */
    Object.defineProperty(this, "coverImage", {
      get() {
        return this.get("coverImage");
      },
      set(value) {
        this.set("coverImage", value);
      },
      enumerable: true
    });

    /**
     * Description of a Business.
     * @name cloudmodel.Business#description
     * @type {string}
     */
    Object.defineProperty(this, "description", {
      get() {
        return this.get("description");
      },
      set(value) {
        this.set("description", value);
      },
      enumerable: true
    });

    /**
     * Status (active or inactive) of a Business.
     * @name cloudmodel.Business#isActive
     * @type {boolean}
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
  }

}, {

});
