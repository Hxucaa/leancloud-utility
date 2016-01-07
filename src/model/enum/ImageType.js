/**
 * Created by Lance Zhu on 2015-11-19.
 */

"use strict";

import deepFreeze from "../utility/deepFreeze";

/**
 * ImageType enum of 3 values.
 * @readonly
 * @enum {number}
 * @memberof model
 */
const ImageType = {
  /** Original image */
  Main: 1,
  /** Thumbnail */
  Thumbnail: 2,
  /** Portrait */
  Portrait: 3
};

export default deepFreeze(ImageType);
