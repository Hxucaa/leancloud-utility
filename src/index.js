"use strict";

import * as validationF from "./validation/index";
import modelF from "./model/index";

let configuredAV = null;

export function configure(AV) {
  configuredAV = AV;
}


export const model = () => {
  if (configuredAV) {
    return modelF(configuredAV);
  }

  console.error(
    "You have to configure an initialized avoscloud-sdk instance before invoking model!"
  );
  return null;
};

export const validation = () => {
  if (configuredAV) {
    return validationF;
  }

  console.error(
    "You have to configure an initialized avoscloud-sdk instance before invoking validation!"
  );
  return null;
};
