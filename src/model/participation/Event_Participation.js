"use strict";

import AV from "avoscloud-sdk";

/**
 * @constructor Event_Participation
 * @extends external:AV.Object
 * @memberof model
 */
export default AV.Object.extend("Event_Participation", {

  initialize() {

    /**
     * A user that is participating.
     * @name model.Event_Participation#participant
     * @type {model.User}
     */
    Object.defineProperty(this, "participant", {
      get() {
        return this.get("participant");
      },
      set(value) {
        this.set("participant", value);
      },
      enumerable: true
    });

    /**
     * Phone number of a Business.
     * @name model.Event_Participation#event
     * @type {model.Event}
     */
    Object.defineProperty(this, "event", {
      get() {
        return this.get("event");
      },
      set(value) {
        this.set("event", value);
      },
      enumerable: true
    });

    /**
     * The status of the event.
     * @name model.Event_Participation#status
     * @type {number|model.EventParticipationStatus}
     */
    Object.defineProperty(this, "status", {
      get() {
        return this.get("status");
      },
      set(value) {
        this.set("status", value);
      },
      enumerable: true
    });
  }

}, {

});
