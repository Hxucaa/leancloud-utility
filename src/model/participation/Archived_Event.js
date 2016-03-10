/**
 * Created by Lance on 2016-03-09.
 */
"use strict";

import AV from "avoscloud-sdk";

/**
 * @constructor Archived_Event
 * @extends external:AV.Object
 * @memberof model
 */
export default AV.Object.extend("Archived_Event", {

  initialize() {

    /**
     * A user that initiated the Archived_Event.
     * @name model.Archived_Event#initiator
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
     * @name model.Archived_Event#business
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
     * The final participant that was chosen to go to the business with the initiator.
     * @name model.Archived_Event#final_participant
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
     * The type of Archived_Event.
     * @name model.Archived_Event#event_type
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
     * The status of the this Archived_Event.
     * @name model.Archived_Event#status
     * @type {number|model.ArchivedEventStatus}
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
