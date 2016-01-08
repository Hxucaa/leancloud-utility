/**
 * Created by cwang on 2016-1-7.
 */

 "use strict";

 //import _ from "lodash";

 const BusinessValidation = Validation.BusinessValidation;

 describe("#RULE verifyEmail", () => {

   describe("success", () => {

     context("when email addres is valid", () => {
       it("should yield success", () => {
         const email = "letoucan@has.arrived";
         const result = BusinessValidation.verifyEmail(email);

         expect(result).to.be.success;
       });
     });
   });
   describe("when email addres is invalid", () => {
     it("should yield failure", () => {
       const email = "LeToucanHasArrived";
       const result = BusinessValidation.verifyEmail(email);

       expect(result).to.be.failure;
       expect(result).to.have.errors([Fixture.ValidationError.emailFormat]);
     });
   });
 });
