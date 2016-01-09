/**
 * Created by hxucaa on 2015-11-17.
 */

"use strict";

//import _ from "lodash";
import Chance from "chance";

describe("User controller validation rules", () => {

  const UserValidation = Validation.UserValidation;

  describe("#RULE verifyUsername", () => {

    describe("generative testing", () => {

      const chance = new Chance();

      const generator = {
        alphanumeric(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({
              length,
              pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            });

            array.push(str);
          }
          return array;
        },
        ascii(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({ length, pool: "!@#$%^&*()[]" });

            array.push(str);
          }
          return array;
        }
      };

      it("should generate alphanumeric string of length 10 and all yield success", () => {
        generator.alphanumeric(5, 29, 100).forEach(username => {
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.success;
        });
      });

      describe("generate string longer than 30 characters", () => {
        it("should yield failure", () => {
          generator.alphanumeric(31, 50, 100).forEach(username => {
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.usernameLength]);
          });
        });
      });

      describe("generate string shorter than 5 characters", () => {
        it("should yield failure", () => {
          generator.alphanumeric(1, 4, 100).forEach(username => {
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.usernameLength]);
          });
        });
      });

      describe("generate string with symbols", () => {
        it("should yield failure", () => {
          generator.ascii(5, 29, 100).forEach(username => {
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.alphanumeric]);
          });
        });
      });
    });
  });

  describe("#RULE verifyWhatsUp", () => {

    describe("generative testing", () => {

      const chance = new Chance();

      const generator = {
        alphanumericAndSymbols(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({
              length,
              pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]"
            });

            array.push(str);
          }
          return array;
        }
      };

      it("should generate whatsUp string of length 30 or less and all yield success", () => {
        generator.alphanumericAndSymbols(0, 29, 100).forEach(whatsUp => {
          const result = UserValidation.verifyWhatsUp(whatsUp);

          expect(result).to.be.success;
        });
      });

      describe("generate whatsUp string longer than 30 characters", () => {
        it("should yield failure", () => {
          generator.alphanumericAndSymbols(31, 50, 100).forEach(whatsUp => {
            const result = UserValidation.verifyWhatsUp(whatsUp);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.whatsUpLength]);
          });
        });
      });
    });
  });

  describe("#RULE verifyNickname", () => {

    describe("generative testing", () => {

      const chance = new Chance();

      const generator = {
        alphanumericAndSymbols(minLength, maxLength, quantity) {
          const array = [];

          for (let i = 0; i < quantity; i++) {
            const length = chance.integer({ min: minLength, max: maxLength });
            const str = chance.string({
              length,
              pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]"
            });

            array.push(str);
          }
          return array;
        }
      };

      it("should generate nickname string of length 20 or less and all yield success", () => {
        generator.alphanumericAndSymbols(1, 19, 100).forEach(nickname => {
          const result = UserValidation.verifyNickname(nickname);

          expect(result).to.be.success;
        });
      });

      describe("generate nickname string longer than 20 characters", () => {
        it("should yield failure", () => {
          generator.alphanumericAndSymbols(31, 50, 100).forEach(nickname => {
            const result = UserValidation.verifyNickname(nickname);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.nicknameLength]);
          });
        });
      });
    });
  });
});
