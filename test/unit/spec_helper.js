/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import ValidationMatchers from "../helper/ValidationMatchers";
import * as Fixture from "../fixture/index";
import AV from "avoscloud-sdk";
import { configure, model, validation } from "../../src/index";

chai.should();
chai.use(chaiAsPromised);
ValidationMatchers(chai); // eslint-disable-line new-cap

AV.initialize("ID", "KEY", "MASTER_KEY");
configure(AV);

global.expect = chai.expect;
global.assert = chai.assert;
global.Fixture = Fixture;
global.Validation = validation();
global.Model = model();

before(done => {
  console.log("---------------------------------------------------------------------------------");
  console.log("                   Unit      Test      Starting                                  ");
  console.log("---------------------------------------------------------------------------------");
  console.log("");
  done();
});
