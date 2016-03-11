/**
 * Created by Lance on 2016-03-11.
 */

"use strict";

//import _ from "lodash";
import chance from "chance";

describe("Relationship validation rules", () => {

  const validation = Validation.RelationshipValidation;

  describe("#RULE verifyStatus", () => {

    describe("success", () => {

      context("when type is 7", () => {
        it("should yield success", () => {
          const type = 7;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 9", () => {
        it("should yield success", () => {
          const type = 9;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 10", () => {
        it("should yield success", () => {
          const type = 10;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 11", () => {
        it("should yield success", () => {
          const type = 8;
          const result = validation.verifyStatus(type);

          expect(result).to.be.failure;
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
