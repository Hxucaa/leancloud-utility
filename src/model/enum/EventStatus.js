/**
 * Created by Lance on 2016-03-09.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * EventStatus enum of 3 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const EventStatus = {
  /** 开幕 */
  Open: 1,
  /** 进行中 */
  Started: 2
};

export default deepFreeze(EventStatus);
