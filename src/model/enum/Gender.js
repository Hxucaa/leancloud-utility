/**
 * Created by Lance Zhu on 2015-12-07.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * Gender enum of 2 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const Gender = {
  /** 爷们 */
  Male: 1,
  /** 娘们 */
  Female: 0
};

export default deepFreeze(Gender);
