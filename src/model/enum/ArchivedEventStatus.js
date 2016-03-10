/**
 * Created by Lance on 2016-02-29.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * ArchivedEventStatus enum of 3 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const ArchivedEventStatus = {
  /** 完成 */
  Completed: 3,
  /** 暂停 */
  Suspended: 4,
  /** 取消 */
  Cancelled: 5
};

export default deepFreeze(ArchivedEventStatus);
