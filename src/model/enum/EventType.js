/**
 * Created by Lance on 2016-02-26.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * EventType enum of 3 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const EventType = {
  /** 请客 */
  Treat: 1,
  /** 分单 */
  Split: 2,
  /** 想去 */
  ToGo: 3
};

export default deepFreeze(EventType);
