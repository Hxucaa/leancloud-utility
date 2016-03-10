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

    describe("Business", () => {
      it("should export properly", () => {
        const Business = Model.Business;

        const business = new Business();

        business.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Archived_Event", () => {
      it("should export properly", () => {
        const Archived_Event = Model.Archived_Event;

        const archivedEvent = new Archived_Event();

        archivedEvent.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Archived_Event_Participation", () => {
      it("should export properly", () => {
        const Archived_Event_Participation = Model.Archived_Event_Participation;

        const archivedEventParticipation = new Archived_Event_Participation();

        archivedEventParticipation.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Event", () => {
      it("should export properly", () => {
        const Event = Model.Event;

        const event = new Event();

        event.should.be.an.instanceof(AV.Object);
      });
    });

    describe("Event_Participation", () => {
      it("should export properly", () => {
        const Event_Participation = Model.Event_Participation;

        const eventParticipation = new Event_Participation();

        eventParticipation.should.be.an.instanceof(AV.Object);
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

    describe("ImageType", () => {
      it("should export properly", () => {

        Model.ImageType.should.not.be.null;
      });
    });

    describe("UserStatus", () => {
      it("should export properly", () => {

        Model.UserStatus.should.not.be.null;
      });
    });

    describe("UserType", () => {
      it("should export properly", () => {

        Model.UserType.should.not.be.null;
      });
    });

    describe("ArchivedEventParticipationStatus", () => {
      it("should export properly", () => {

        Model.ArchivedEventParticipationStatus.should.not.be.null;
      });
    });

    describe("ArchivedEventStatus", () => {
      it("should export properly", () => {

        Model.ArchivedEventStatus.should.not.be.null;
      });
    });

    describe("EventParticipationStatus", () => {
      it("should export properly", () => {

        Model.EventParticipationStatus.should.not.be.null;
      });
    });

    describe("EventStatus", () => {
      it("should export properly", () => {

        Model.EventStatus.should.not.be.null;
      });
    });

    describe("EventType", () => {
      it("should export properly", () => {

        Model.EventType.should.not.be.null;
      });
    });
  });

});
