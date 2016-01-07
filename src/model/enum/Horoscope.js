/**
 * Created by Lance Zhu on 2015-12-07.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * Horoscope enum of 12 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const Horoscope = {
  /** 摩羯座 */
  Capricorn: 1,
  /** 水瓶座 */
  Aquarius: 2,
  /** 双鱼座 */
  Pisces: 3,
  /** 白羊座 */
  Aries: 4,
  /** 金牛座 */
  Taurus: 5,
  /** 双子座 */
  Gemini: 6,
  /** 巨蟹座 */
  Cancer: 7,
  /** 狮子座 */
  Leo: 8,
  /** 处女座 */
  Virgo: 9,
  /** 天秤座 */
  Libra: 10,
  /** 天蝎座 */
  Scorpio: 11,
  /** 射手座 */
  Sagittarius: 12
};

export default deepFreeze(Horoscope);
