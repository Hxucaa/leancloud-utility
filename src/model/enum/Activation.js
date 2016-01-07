/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * Activation enum of 2 values.
 * @readonly
 * @enum {boolean}
 * @memberof model
 */
const Activation = {
  /** the user is active */
  active: true,
  /** the user is inactive */
  inActive: false
};

export default deepFreeze(Activation);
