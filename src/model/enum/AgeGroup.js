/**
 * Created by Lance Zhu on 2015-12-07.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * AgeGroup enum of 12 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const AgeGroup = {
  /** the birthday year is between 1910 and 1919 */
  Group10: 10,
  /** the birthday year is between 1920 and 1929 */
  Group20: 20,
  /** the birthday year is between 1930 and 1939 */
  Group30: 30,
  /** the birthday year is between 1940 and 1949 */
  Group40: 40,
  /** the birthday year is between 1950 and 1959 */
  Group50: 50,
  /** the birthday year is between 1960 and 1969 */
  Group60: 60,
  /** the birthday year is between 1970 and 1979 */
  Group70: 70,
  /** the birthday year is between 1980 and 1989 */
  Group80: 80,
  /** the birthday year is between 1990 and 1999 */
  Group90: 90,
  /** the birthday year is between 2000 and 2009 */
  Group100: 100,
  /** the birthday year is between 2010 and 2019 */
  Group110: 110,
  /** the birthday year is between 2020 and 2029 */
  Group120: 120
};

export default deepFreeze(AgeGroup);
