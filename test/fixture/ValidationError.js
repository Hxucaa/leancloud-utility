/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

import ValidationError from "../../src/utility/validation/ValidationError";

export const alphanumeric = new ValidationError(
  1001,
  "Username can only contain only letters and numbers."
);

export const usernameLength = new ValidationError(
  1002,
  "Username has to have between 5 to 30 characters."
);

export const whatsUpLength = new ValidationError(
  1005,
  "WhatsUp has to have 30 or less characters."
);

export const TypeNotMatchEnumValue = new ValidationError(
  1100,
  "Type has to match its enum value."
);
