/**
 * Created by Lance on 2016-02-27.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * ArchivedEventParticipationStatus enum of 1 value.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const ArchivedEventParticipationStatus = {
  /** 已完成 */
  Completed: 3
};

export default deepFreeze(ArchivedEventParticipationStatus);
