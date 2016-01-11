/**
 * Created by Lance on 2015-12-12.
 */
"use strict";

import { matchesProperty } from "lodash/utility";
import { find, filter } from "lodash/collection";

import regionData from "./RegionData.json";
import deepFreeze from "../utility/deepFreeze";

/**
 * A Region data structure.
 * @typedef {Object} Region~RegionData
 * @property {string} code - A unique identifier for each region.
 * @property {string} countryCode - The standard country code.
 * @property {?string} regionNameE - The name of the region in English if available.
 * @property {string} regionNameC - The name of the region in Chinese if available.
 * @property {?string} level - The level of nesting. There are 4 levels of region identified by the `level` key. "1" represents the highest level, as in province. "2" represents municipal. "3" represents district. "4" represents special district which doesn't follow the hierarchy. level "4" should be handled different. Right now we only use the first 3 regions.
 * @property {string} upperRegion - The parent region. This key refers to the {@link code} of the region. If the value is "0", then it is the top most region.
 */

/**
 * Region
 * The actual data of all regions can be found in the `data` key. It return an array of region object.
 * Under the
 *
 *

 * @readonly
 * @memberof model
 */
const Region = {
  /**
   * 地图数据
   * @typedef {Region~RegionData[]}
   *
   */
  data: regionData.results,

  /**
   * 通过code寻找匹配的Region
   * @param {string} code - Unique identifier of a Region.
   * @param {Region~RegionData[]} [source=data] - 搜索的Region范围. 如不提供则默认为原始数据. Can compose with other functions to specify the range of search.
   * @returns {Region~RegionData|undefined} 根据code所找到的匹配的Region. If not found, return undefined.
   */
  matchByCode(code, source = this.data) {
    return find(source, matchesProperty("code", code));
  },

  /**
   * 通过name寻找匹配的Region
   * @param {string} name - Name of a region.
   * @param {Region~RegionData[]} [source=data] - 搜索的Region范围. 如不提供则默认为原始数据. Can compose with other functions to specify the range of search.
   * @returns {Region~RegionData|undefined} 根据name所找到的匹配的Region. If not found, return undefined.
   */
  matchByName(name, source = this.data) {
    return find(source, matchesProperty("regionNameC", name));
  },

  /**
   * 省
   * @returns {Region~RegionData[]} 省
   */
  province() {
    return filter(this.data, matchesProperty("level", "1"));
  },

  /**
   * 市
   * @returns {Region~RegionData[]} 市
   */
  municipality() {
    return filter(this.data, matchesProperty("level", "2"));
  },

  /**
   * 区,县
   * @returns {Region~RegionData[]} 区,县
   */
  district() {
    return filter(this.data, matchesProperty("level", "3"));
  },

  /**
   * 4th level region.
   * @returns {Region~RegionData[]}
   */
  levelFourRegions() {
    return filter(this.data, matchesProperty("level", "4"));
  },

  /**
   * Check whether the region is province.
   * @param {Region~RegionData} region - Region Data
   * @returns {boolean} return true if province, otherwise false.
   */
  isProvince(region) {
    return region.level === "1";
  },

  /**
   * Check whether the region is municipal.
   * @param {Region~RegionData} region - Region Data
   * @returns {boolean} return true if municipal, otherwise false.
   */
  isMunicipality(region) {
    return region.level === "2";
  },

  /**
   * Check whether the region is district.
   * @param {Region~RegionData} region - Region Data
   * @returns {boolean} return true if district, otherwise false.
   */
  isDistrict(region) {
    return region.level === "3";
  },

  /**
   * Check whether the region is 4th level region.
   * @param {Region~RegionData} region - Region Data
   * @returns {boolean} return true if 4th level, otherwise false.
   */
  isLevelFourRegion(region) {
    return region.level === "4";
  },

  /**
   * Find the parent region of the provided child region.
   * @param {Region~RegionData} child - The child region.
   * @returns {Region~RegionData|undefined} If found, return the parent region. Otherwise, return undefined.
   */
  getParent(child) {
    if (this.isProvince(child)) {
      return undefined;
    }
    return find(this.data, matchesProperty("code", child.upperRegion));
  },

  /**
   * Find all parents of the region.
   * @param {Region~RegionData} child - A child region.
   * @returns {Region~RegionData[]} An array of region. The top most region is at the head of the array. The lowest level region at the tail. The child region is always at the tail of the array.
   */
  getAllParents(child) {

    const findParent = this.getParent.bind(this);
    const result = [child];

    function recur(region) {

      const parent = findParent(region);

      // if parent not found, exit
      if (!parent) {
        return;
      }

      // if parent and child are the same region, exit
      if (region.code === parent.code) {
        return;
      }

      // add parent to the front of array
      result.unshift(parent);

      recur(parent);
    }


    recur(child);

    return result;
  },

  /**
   * Find the child regions (the children) of the provided parent region.
   * @param {Region~RegionData} parent - The parent region.
   * @returns {Region~RegionData[]|undefined} If found, return the an array of child regions (the children). Otherwise, return undefined.
   */
  getChildren(parent) {
    if (this.isDistrict(parent)) {
      return undefined;
    }
    else if (this.isLevelFourRegion(parent)) {
      return undefined;
    }
    return filter(this.data, matchesProperty("upperRegion", parent.code));
  }
};


export default deepFreeze(Region);

//
//import AV from "avoscloud-sdk";
//
///**
// * @constructor Region
// * @extends external:AV.Object
// * @memberof model
// */
//export default AV.Object.extend("L_Region", {
//  initialize() {
//    /**
//     * A unique code representing the record.
//     * @name model.Region#code
//     * @type {string}
//     */
//    Object.defineProperty(this, "code", {
//      get() {
//        return this.get("code");
//      },
//      set(value) {
//        this.set("code", value);
//      },
//      enumerable: true
//    });
//
//    /**
//     * A unique code representing the country.
//     * @name model.Region#countryCode
//     * @type {string}
//     */
//    Object.defineProperty(this, "countryCode", {
//      get() {
//        return this.get("countryCode");
//      },
//      set(value) {
//        this.set("countryCode", value);
//      },
//      enumerable: true
//    });
//
//    /**
//     * Region name in English.
//     * @name model.Region#regionNameE
//     * @type {string}
//     */
//    Object.defineProperty(this, "regionNameE", {
//      get() {
//        return this.get("regionNameE");
//      },
//      set(value) {
//        this.set("regionNameE", value);
//      },
//      enumerable: true
//    });
//
//    /**
//     * Region name in Chinese.
//     * @name model.Region#regionNameC
//     * @type {string}
//     */
//    Object.defineProperty(this, "regionNameC", {
//      get() {
//        return this.get("regionNameC");
//      },
//      set(value) {
//        this.set("regionNameC", value);
//      },
//      enumerable: true
//    });
//
//    /**
//     * A number representing how deep of the nesting.
//     * @name model.Region#level
//     * @type {number}
//     */
//    Object.defineProperty(this, "level", {
//      get() {
//        return this.get("level");
//      },
//      set(value) {
//        this.set("level", value);
//      },
//      enumerable: true
//    });
//
//    /**
//     * Reference the code of the region that this region belongs to.
//     * @name model.Region#upperRegion
//     * @type {string}
//     */
//    Object.defineProperty(this, "upperRegion", {
//      get() {
//        return this.get("upperRegion");
//      },
//      set(value) {
//        this.set("upperRegion", value);
//      },
//      enumerable: true
//    });
//  }
//
//}, {
//
//});
