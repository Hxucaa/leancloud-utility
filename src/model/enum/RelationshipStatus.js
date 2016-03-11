/**
 * Created by Lance on 2016-03-11.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * RelationshipStatus enum of 4 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const RelationshipStatus = {
  /** 等待中 */
  Pending: 7,
  /** 接受 */
  Accepted: 9,
  /** 拒接 */
  Declined: 10,
  /** 黑名单 */
  Blocked: 11
};

export default deepFreeze(RelationshipStatus);
