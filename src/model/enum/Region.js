/**
 * Created by Lance on 2015-12-12.
 */
"use strict";

import { matchesProperty } from "lodash/utility";
import { find, filter } from "lodash/collection";

import data from "./RegionData.json";
import deepFreeze from "../utility/deepFreeze";

/**
 * Region
 * @readonly
 * @memberof model
 */
const Region = {
  /**
   * 地图数据
   * {{code: string, countryCode: string, regionNameE: string, regionNameC: string, level: number, upperRegion: string}[]}
   */
  data: data.results,

  /**
   * 通过code寻找匹配的Region
   * @param {string} code - Unique identifier of a Region.
   * @param {Object[]} [source=data] - 搜索的Region范围. 如不提供则默认为原始数据. Can compose with other functions to specify the range of search.
   * @returns {Object} 根据code所找到的匹配的Region
   */
  matchByCode(code, source = data.results) {
    return find(source, matchesProperty("code", code));
  },

  /**
   * 通过name寻找匹配的Region
   * @param {string} name - Name of a region.
   * @param {Object[]} [source=data] - 搜索的Region范围. 如不提供则默认为原始数据. Can compose with other functions to specify the range of search.
   * @returns {Object} 根据name所找到的匹配的Region
   */
  matchByName(name, source = data.results) {
    return find(source, matchesProperty("regionNameC", name));
  },

  /**
   * 省
   * @returns {Object[]} 省
   */
  province() {
    return filter(data.results, matchesProperty("level", "1"));
  },

  /**
   * 市
   * @returns {Object[]} 市
   */
  municipality() {
    return filter(data.results, matchesProperty("level", "2"));
  },

  /**
   * 区,县
   * @returns {Object[]} 区,县
   */
  district() {
    return filter(data.results, matchesProperty("level", "3"));
  },

  levelFourRegions() {
    return filter(data.results, matchesProperty("level", "4"));
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
