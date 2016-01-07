"use strict";

import AV from "avoscloud-sdk";

/**
 * @constructor Role
 * @extends external:AV.Role
 * @memberof model
 */
export default AV.Object.extend("_Role", {

  initialize() {
    /**
     * Name of a Role.
     * @name model.Role#name
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
     * 本记录是否启用
     * @name model.Role#isActive
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
