"use strict";

export default function Event(AV) {

  /**
   * @constructor Event
   * @extends external:AV.Object
   * @memberof model
   */
  return AV.Object.extend("Event", {

    initialize() {

      /**
       * A user that initiates the Event.
       * @name model.Event#initiator
       * @type {model.User}
       */
      Object.defineProperty(this, "initiator", {
        get() {
          return this.get("initiator");
        },
        set(value) {
          this.set("initiator", value);
        },
        enumerable: true
      });

      /**
       * The business.
       * @name model.Event#business
       * @type {model.Business}
       */
      Object.defineProperty(this, "business", {
        get() {
          return this.get("business");
        },
        set(value) {
          this.set("business", value);
        },
        enumerable: true
      });

      /**
       * The final participant that is going to the business with the initiator.
       * @name model.Event#final_participant
       * @type {model.User}
       */
      Object.defineProperty(this, "final_participant", {
        get() {
          return this.get("final_participant");
        },
        set(value) {
          this.set("final_participant", value);
        },
        enumerable: true
      });

      /**
       * The type of Event.
       * @name model.Event#event_type
       * @type {number|model.EventType}
       */
      Object.defineProperty(this, "event_type", {
        get() {
          return this.get("event_type");
        },
        set(value) {
          this.set("event_type", value);
        },
        enumerable: true
      });

      /**
       * The status of the this Event.
       * @name model.Event#status
       * @type {number|model.EventStatus}
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
}
