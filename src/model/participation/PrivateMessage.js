//"use strict";
//
//export default function(av) {
//  return av.Object.extend("PrivateMessage", {
//
//    initialize() {
//      Object.defineProperty(this, "participationId", {
//        get() {
//          return this.get("participationId");
//        },
//        set(value) {
//          this.set("participationId", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "invitorId", {
//        get() {
//          return this.get("invitorId");
//        },
//        set(value) {
//          this.set("invitorId", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "inviteeId", {
//        get() {
//          return this.get("inviteeId");
//        },
//        set(value) {
//          this.set("inviteeId", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "messageId", {
//        get() {
//          return this.get("messageId");
//        },
//        set(value) {
//          this.set("messageId", value);
//        },
//        enumerable: true
//      });
//
//      Object.defineProperty(this, "isActive", {
//        get() {
//          return this.get("isActive");
//        },
//        set(value) {
//          this.set("isActive", value);
//        },
//        enumerable: true
//      });
//    }
//
//  }, {
//
//  });
//};
//
//module.exports = PrivateMessage;
