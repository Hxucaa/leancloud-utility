/**
 * Created by Lance on 2016-03-11.
 */

"use strict";

//import _ from "lodash";
import chance from "chance";

describe("Event_Participation validation rules", () => {

  const validation = Validation.EventParticipationValidation;

  describe("#RULE verifyStatus", () => {

    describe("success", () => {

      context("when type is 8", () => {
        it("should yield success", () => {
          const type = 8;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {
      context("when type is 3", () => {
        it("should yield failure", () => {
          const type = 3;
          const result = validation.verifyStatus(type);

          expect(result).to.be.failure;
        });
      });

      context("when type is -1", () => {
        const type = -1;
        const result = validation.verifyStatus(type);

        expect(result).to.be.failure;

      });
    });
  });
});
