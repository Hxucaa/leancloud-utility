"use strict";

/* eslint-disable new-cap */

import Business from "./business/Business.js";
//import BusinessHour from "./business/BusinessHour.js";
//import Company from "./business/Company.js";

import Address from "./geographic/Address.js";

import Event from "./participation/Event";
import Event_Participation from "./participation/Event_Participation";
import Archived_Event from "./participation/Archived_Event";
import Archived_Event_Participation from "./participation/Archived_Event_Participation";

import User from "./user/User.js";
import Role from "./user/Role.js";
//import UserPhoto from "./user/UserPhoto.js";

// Enums
import Activation from "./enum/Activation";
import ImageType from "./enum/ImageType";
import UserStatus from "./enum/UserStatus";
import UserType from "./enum/UserType";
import AgeGroup from "./enum/AgeGroup";
import Horoscope from "./enum/Horoscope";
import Gender from "./enum/Gender";
import Region from "./enum/Region.js";
import EventType from "./enum/EventType";
import EventStatus from "./enum/EventStatus";
import EventParticipationStatus from "./enum/EventParticipationStatus";
import ArchivedEventStatus from "./enum/ArchivedEventStatus";
import ArchivedEventParticipationStatus from "./enum/ArchivedEventParticipationStatus";
import RelationshipStatus from "./enum/RelationshipStatus";

  /**
   * Cloud Model.
   * @namespace model
   */
export default function model(AV) {
  return {
    Business: Business(AV),
    //BusinessHour,
    //Company,

    Address: Address(AV),

    Event: Event(AV),
    Event_Participation: Event_Participation(AV),
    Archived_Event: Archived_Event(AV),
    Archived_Event_Participation: Archived_Event_Participation(AV),

    User: User(AV),
    Role: Role(AV),
    //UserPhoto,

    // Enums
    Activation,
    ImageType,
    UserStatus,
    UserType,
    AgeGroup,
    Horoscope,
    Gender,
    Region,
    EventType,
    EventStatus,
    EventParticipationStatus,
    ArchivedEventStatus,
    ArchivedEventParticipationStatus,
    RelationshipStatus
  };
}
