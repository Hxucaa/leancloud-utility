/**
 * Created by Lance on 2015-12-19.
 */

import { ValidationAF } from "./validation/index";
const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

export function matchEnum(value, enums, validationError) {

  for (const key in enums) {
    if (enums.hasOwnProperty(key) && enums[ key ] === value) {
      return success(value);
    }
  }
  return failure(validationError);
}
