/**
 * Created by cwang on 2016-1-7.
 */

 "use strict";

 //import _ from "lodash";

 const AddressValidation = Validation.AddressValidation;

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
