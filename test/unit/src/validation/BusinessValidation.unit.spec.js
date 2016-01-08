/**
 * Created by cwang on 2016-1-7.
 */

 "use strict";

 //import _ from "lodash";

 const BusinessValidation = Validation.BusinessValidation;

 describe("#RULE verifyEmail", () => {

   describe("success", () => {

     context("when email address is valid", () => {
       it("should yield success", () => {
         const email = "letoucan@has.arrived";
         const result = BusinessValidation.verifyEmail(email);

         expect(result).to.be.success;
       });
     });
   });
   describe("when email address is invalid", () => {
     it("should yield failure", () => {
       const email = "LeToucanHasArrived";
       const result = BusinessValidation.verifyEmail(email);

       expect(result).to.be.failure;
       expect(result).to.have.errors([Fixture.ValidationError.emailFormat]);
     });
   });
 });

 describe("#RULE verifyName", () => {

   describe("success", () => {

     context("when business names is less than 20 characters", () => {
       it("should yield success", () => {
         const name = "LeToucanHasArrived";
         const result = BusinessValidation.verifyName(name);

         expect(result).to.be.success;
       });
     });
   });
   describe("when business name is greater than 20 characters", () => {
     it("should yield failure", () => {
       const name = Array(21).join("a");
       const result = BusinessValidation.verifyName(name);

       expect(result).to.be.failure;
       expect(result).to.have.errors([Fixture.ValidationError.businessnameLength]);
     });
   });
 });

 describe("#RULE verifyUrl", () => {

   describe("success", () => {

     context("when url addres is valid", () => {
       it("should yield success", () => {
         const url = "wwwletoucan.io";
         const result = BusinessValidation.verifyUrl(url);

         expect(result).to.be.success;
       });
     });
   });
   describe("when url addres is invalid", () => {
     it("should yield failure", () => {
       const url = "LeToucanHasArrived";
       const result = BusinessValidation.verifyUrl(url);

       expect(result).to.be.failure;
       expect(result).to.have.errors([Fixture.ValidationError.urlFormat]);
     });
   });
 });

 describe("#RULE verifyDecription", () => {

   describe("success", () => {

     context("when business description is less than 500 characters", () => {
       it("should yield success", () => {
         const description = "LeToucanHasArrived";
         const result = BusinessValidation.verifyDecription(description);

         expect(result).to.be.success;
       });
     });
   });
   describe("when business description is greater than 500 characters", () => {
     it("should yield failure", () => {
       const description = Array(501).join("a");
       const result = BusinessValidation.verifyDecription(description);

       expect(result).to.be.failure;
       expect(result).to.have.errors([Fixture.ValidationError.descriptionLength]);
     });
   });
 });
