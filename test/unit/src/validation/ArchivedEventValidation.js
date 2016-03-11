/**
 * Created by Lance on 2016-03-11.
 */

"use strict";

//import _ from "lodash";

describe("Archived_Event validation rules", () => {

  const validation = Validation.ArchivedEventValidation;

  describe("#RULE verifyEventType", () => {

    describe("success", () => {

      context("when type is 1", () => {
        it("should yield success", () => {
          const type = 1;
          const result = validation.verifyEventType(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 2", () => {
        it("should yield success", () => {
          const type = 2;
          const result = validation.verifyEventType(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 3", () => {
        it("should yield success", () => {
          const type = 3;
          const result = validation.verifyEventType(type);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {
      context("when type is 4", () => {
        it("should yield failure", () => {
          const type = 4;
          const result = validation.verifyEventType(type);

          expect(result).to.be.failure;
        });
      });

      context("when type is -1", () => {
        const type = -1;
        const result = validation.verifyEventType(type);

        expect(result).to.be.failure;

      });
    });
  });

  describe("#RULE verifyStatus", () => {

    describe("success", () => {

      context("when type is 3", () => {
        it("should yield success", () => {
          const type = 3;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 4", () => {
        it("should yield success", () => {
          const type = 4;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 5", () => {
        it("should yield success", () => {
          const type = 5;
          const result = validation.verifyStatus(type);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {
      context("when type is 6", () => {
        it("should yield failure", () => {
          const type = 6;
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
