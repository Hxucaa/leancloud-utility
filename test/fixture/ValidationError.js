/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

import ValidationError from "../../src/validation/utility/validation/ValidationError";

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
  "WhatsUp shoudl be less than 30 characters."
);

export const nicknameLength = new ValidationError(
  1005,
  "Nickname should be less than 20 characters."
);

export const streetLength = new ValidationError(
  1005,
  "Street has to have 100 or less characters."
);

export const TypeNotMatchEnumValue = new ValidationError(
  1100,
  "Type has to match its enum value."
);

export const emailFormat = new ValidationError(
  1111,
  "Email format has to be valid. e.g. toucan@lai.io"
);
