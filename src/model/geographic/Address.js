"use strict";

import AV from "avoscloud-sdk";

/**
 * @constructor Address
 * @extends external:AV.Object
 * @memberof model
 */
export default AV.Object.extend("Address", {

  initialize() {

    /**
     * Street
     * @name model.Address#street
     * @type {string}
     */
    Object.defineProperty(this, "street", {
      get() {
        return this.get("street");
      },
      set(value) {
        this.set("street", value);
      },
      enumerable: true
    });

    /**
     * Region
     * @name model.Address#regionCode
     * @type {string|model.Region.data.code}
     */
    Object.defineProperty(this, "regionCode", {
      get() {
        return this.get("regionCode");
      },
      set(value) {
        this.set("regionCode", value);
      },
      enumerable: true
    });

    /**
     * Region
     * @name model.Address#province
     * @type {string|model.Region.data.code}
     */
    Object.defineProperty(this, "province", {
      get() {
        return this.get("province");
      },
      set(value) {
        this.set("province", value);
      },
      enumerable: true
    });

    /**
     * Region
     * @name model.Address#city
     * @type {string|model.Region.data.code}
     */
    Object.defineProperty(this, "city", {
      get() {
        return this.get("city");
      },
      set(value) {
        this.set("city", value);
      },
      enumerable: true
    });

    /**
     * Region
     * @name model.Address#district
     * @type {string|model.Region.data.code}
     */
    Object.defineProperty(this, "district", {
      get() {
        return this.get("district");
      },
      set(value) {
        this.set("district", value);
      },
      enumerable: true
    });

    /**
     * Postal code.
     * @name model.Address#postalCode
     * @type {string}
     */
    Object.defineProperty(this, "postalCode", {
      get() {
        return this.get("postalCode");
      },
      set(value) {
        this.set("postalCode", value);
      },
      enumerable: true
    });

    /**
     * Longitude and latitude of the address.
     * @name model.Address#geoLocation
     * @type {external:AV.GeoPoint}
     */
    Object.defineProperty(this, "geoLocation", {
      get() {
        return this.get("geoLocation");
      },
      set(value) {
        this.set("geoLocation", value);
      },
      enumerable: true
    });

    /**
     * Full address.
     * @name model.Address#fullAddress
     * @type {string}
     */
    Object.defineProperty(this, "fullAddress", {
      get() {
        return this.get("fullAddress");
      },
      set(value) {
        this.set("fullAddress", value);
      },
      enumerable: true
    });

    /**
     * Status (active or inactive) of this address.
     * @name model.Address#isActive
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
