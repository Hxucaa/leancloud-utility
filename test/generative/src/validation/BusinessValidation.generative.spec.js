/**
 * Created by cwang on 2016-1-7.
 */

"use strict";

//import _ from "lodash";
import Chance from "chance";

describe("User controller validation rules", () => {

  const BusinessValidation = Validation.BusinessValidation;


  describe("#RULE verifyStreet", () => {

    describe("generative testing", () => {

      const chance = new Chance();

      const generator = {
        alphanumericAndSymbols(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({
              length,
              pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]"
            });

            array.push(str);
          }
          return array;
        }
      };

      it("should generate street string of length 100 or less and all yield success", () => {
        generator.alphanumericAndSymbols(0, 19, 100).forEach(name => {
          const result = BusinessValidation.verifyName(name);

          expect(result).to.be.success;
        });
      });

      describe("generate street string longer than 30 characters", () => {
        it("should yield failure", () => {
          generator.alphanumericAndSymbols(101, 200, 500).forEach(name => {
            const result = BusinessValidation.verifyName(name);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.businessnameLength]);
          });
        });
      });
    });
  });

  describe("#RULE verifyBusinessDescription", () => {

    describe("generative testing", () => {

      const chance = new Chance();

      const generator = {
        alphanumericAndSymbols(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({
              length,
              pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]"
            });

            array.push(str);
          }
          return array;
        }
      };

      it("should business descrpition of length 500 or less and all yield success", () => {
        generator.alphanumericAndSymbols(0, 499, 100).forEach(description => {
          const result = BusinessValidation.verifyDescription(description);

          expect(result).to.be.success;
        });
      });

      describe("generate description longer than 500 characters", () => {
        it("should yield failure", () => {
          generator.alphanumericAndSymbols(501, 2500, 100).forEach(description => {
            const result = BusinessValidation.verifyDescription(description);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.descriptionLength]);
          });
        });
      });
    });
  });
});
