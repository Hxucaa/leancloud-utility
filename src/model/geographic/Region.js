/**
 * Created by Lance on 2015-12-12.
 */
"use strict";

export default function(av) {
  /**
   * @constructor Region
   * @extends external:AV.Object
   * @memberof model
   */
  return av.Object.extend("L_Region", {
    initialize() {
      /**
       * A unique code representing the record.
       * @name model.Region#code
       * @type {string}
       */
      Object.defineProperty(this, "code", {
        get() {
          return this.get("code");
        },
        set(value) {
          this.set("code", value);
        },
        enumerable: true
      });

      /**
       * A unique code representing the country.
       * @name model.Region#countryCode
       * @type {string}
       */
      Object.defineProperty(this, "countryCode", {
        get() {
          return this.get("countryCode");
        },
        set(value) {
          this.set("countryCode", value);
        },
        enumerable: true
      });

      /**
       * Region name in English.
       * @name model.Region#regionNameE
       * @type {string}
       */
      Object.defineProperty(this, "regionNameE", {
        get() {
          return this.get("regionNameE");
        },
        set(value) {
          this.set("regionNameE", value);
        },
        enumerable: true
      });

      /**
       * Region name in Chinese.
       * @name model.Region#regionNameC
       * @type {string}
       */
      Object.defineProperty(this, "regionNameC", {
        get() {
          return this.get("regionNameC");
        },
        set(value) {
          this.set("regionNameC", value);
        },
        enumerable: true
      });

      /**
       * A number representing how deep of the nesting.
       * @name model.Region#level
       * @type {number}
       */
      Object.defineProperty(this, "level", {
        get() {
          return this.get("level");
        },
        set(value) {
          this.set("level", value);
        },
        enumerable: true
      });

      /**
       * Reference the code of the region that this region belongs to.
       * @name model.Region#upperRegion
       * @type {string}
       */
      Object.defineProperty(this, "upperRegion", {
        get() {
          return this.get("upperRegion");
        },
        set(value) {
          this.set("upperRegion", value);
        },
        enumerable: true
      });
    }

  }, {

  });
}
