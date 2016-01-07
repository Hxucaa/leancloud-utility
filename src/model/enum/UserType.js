/**
 * Created by Lance Zhu on 2015-11-19.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * UserType enum of 2 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const UserType = {
  /** User */
  User: 1,
  /** Business */
  Business: 2
};

export default deepFreeze(UserType);
