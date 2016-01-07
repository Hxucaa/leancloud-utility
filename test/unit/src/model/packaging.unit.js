/**
 * Created by hxucaa on 2016-01-06.
 */


"use strict";

import AV from "avoscloud-sdk";

describe("Package is properly exported", () => {

  describe("Objects", () => {

    describe("User", () => {
      it("should export properly", () => {
        const User = Model.User;

        const user = new User();

        user.should.be.an.instanceof(AV.User);
      });
    });

    describe("Role", () => {
      it("should export properly", () => {
        const Role = Model.Role;

        const role = new Role();

        role.should.be.an.instanceof(AV.Role);
      });
    });

    describe("Address", () => {
      it("should export properly", () => {
        const Address = Model.Address;

        const address = new Address();

        address.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Region", () => {
      it("should export properly", () => {
        const Region = Model.Region;

        const region = new Region();

        region.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Business", () => {
      it("should export properly", () => {
        const Business = Model.Business;

        const business = new Business();

        business.should.be.an.instanceof(AV.Object);
      });
    });
  });

  describe("Enums", () => {

    describe("Activation", () => {
      it("should export properly", () => {

        Model.Activation.should.not.be.null;
      });
    });

    describe("AgeGroup", () => {
      it("should export properly", () => {

        Model.AgeGroup.should.not.be.null;
      });
    });

    describe("Gender", () => {
      it("should export properly", () => {

        Model.Gender.should.not.be.null;
      });
    });

    describe("Horoscope", () => {
      it("should export properly", () => {

        Model.Horoscope.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        Model.Activation.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        Model.Activation.should.not.be.null;
      });
    });

    describe("Activation", () => {
      it("should export properly", () => {

        Model.Activation.should.not.be.null;
      });
    });
  });

});
