/**
 * Created by cwang on 2016-1-7.
 */

"use strict";

//import _ from "lodash";
import Chance from "chance";

describe("User controller validation rules", () => {

  const AddressValidation = Validation.AddressValidation;


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
        generator.alphanumericAndSymbols(0, 99, 100).forEach(street => {
          const result = AddressValidation.verifyStreet(street);

          expect(result).to.be.success;
        });
      });

      describe("generate street string longer than 30 characters", () => {
        it("should yield failure", () => {
          generator.alphanumericAndSymbols(101, 200, 100).forEach(street => {
            const result = AddressValidation.verifyStreet(street);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.streetLength]);
          });
        });
      });
    });
  });
});
