/**
 * Created by hxucaa on 2015-11-19.
 */

"use strict";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import ValidationMatchers from "../helper/ValidationMatchers";
import * as Fixture from "../fixture/index";
import AV from "avoscloud-sdk";

chai.should();
chai.use(chaiAsPromised);
ValidationMatchers(chai); // eslint-disable-line new-cap

AV.initialize("ID", "KEY", "MASTER_KEY");

global.expect = chai.expect;
global.assert = chai.assert;
global.Fixture = Fixture;
global.Validation = require("../../src/index")(AV);

before(done => {
  console.log("---------------------------------------------------------------------------------");
  console.log("                   Generative      Test      Starting                            ");
  console.log("---------------------------------------------------------------------------------");
  console.log("");
  done();
});
