/**
 * Created by Lance on 2016-03-11.
 */

import Validator from "validator";
import { curryN, ValidationError, ValidationAF } from "./utility/validation/index";
import { matchEnum } from "./utility/Toolbox";
import EventType from "../model/enum/EventType";
import EventStatus from "../model/enum/EventStatus";

const success = ValidationAF.Success;
const failure = ValidationAF.Failure;

/**
 * @namespace validation
 */

/**
 * @module EventValidation
 * @memberof validation
 */

/**
 * Verify the event type.
 * @alias module:EventValidation.verifyEventType
 * @param {number|model.EventType} type - The enum EventType.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyEventType(type) {

  /**
   * Check whether the type variable matches the values of enum EventType.
   * @function isTypeEnumEventType
   * @param {number|model.EventType} type - The enum EventType.
   * @returns {Validation} An Validation object containing the results.
   */
  function isTypeEnumEventType(type) {
    return matchEnum(type, EventType, [new ValidationError(
      1100,
      "Type has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isTypeEnumEventType(type));
}

/**
 * Verify the status.
 * @alias module:EventValidation.verifyStatus
 * @param {number|model.EventStatus} status - The enum EventStatus.
 * @returns {Validation} An Validation object containing the results.
 */
export function verifyStatus(status) {

  /**
   * Check whether the type variable matches the values of enum EventStatus.
   * @function isStatusEnumEventStatus
   * @param {number|model.EventStatus} status - The enum EventStatus.
   * @returns {Validation} An Validation object containing the results.
   */
  function isStatusEnumEventStatus(status) {
    return matchEnum(status, EventStatus, [new ValidationError(
      1100,
      "Status has to match its enum value."
    )]);
  }

  return success(curryN(1, a => {
    return [a];
  }))
    .ap(isStatusEnumEventStatus(status));
}

