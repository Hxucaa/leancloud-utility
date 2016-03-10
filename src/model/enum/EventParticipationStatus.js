/**
 * Created by Lance on 2016-02-27.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * EventParticipationStatus enum of 1 value.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const EventParticipationStatus = {
  /** 已加入 */
  Joined: 8
};

export default deepFreeze(EventParticipationStatus);
