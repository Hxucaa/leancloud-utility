/**
 * Created by cwang on 2016-1-7.
 */

"use strict";

//import _ from "lodash";

const AddressValidation = Validation.AddressValidation;

describe("Address validation", () => {

  describe("#RULE verifyStreet", () => {

    describe("success", () => {

      context("when address is less than 100 characters", () => {
        it("should yield success", () => {
          const street = "sjdflkjslkdfjklsdjklf";
          const result = AddressValidation.verifyStreet(street);

          expect(result).to.be.success;
        });
      });
    });
    describe("when username length is greater than 100", () => {
      it("should yield failure", () => {
        const street = Array(101).join("a");
        const result = AddressValidation.verifyStreet(street);

        expect(result).to.be.failure;
        expect(result).to.have.errors([Fixture.ValidationError.streetLength]);
      });
    });
  });

  describe("#RULE verifyRegionCode", () => {
    context("when providing a correct code", () => {
      it("should yield success", () => {
        const regionCode = "11";
        const result = AddressValidation.verifyRegionCode(regionCode);

        expect(result).to.be.success;
      });
    });

    context("when providing a malformed code", () => {
      it("should yield failure", () => {
        const regionCode = "31243234";
        const result = AddressValidation.verifyRegionCode(regionCode);


        expect(result).to.be.failure;
        expect(result).to.have.errors([Fixture.ValidationError.regionCodeNotMatch]);
      });
    });
  });
});
