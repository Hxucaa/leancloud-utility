/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

//import _ from "lodash";

import { UserValidation } from "~/src/index";
import Chance from "chance";

describe("User controller validation rules", () => {

  describe("#RULE isUsernameValid", () => {

    describe("success", () => {

      context("when username is between 5 to 30 in length and only alphanumeric", () => {
        it("should yield success", () => {
          const username = "sjdflkjslkdfjklsdjklf";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {

      describe("username has whitespace", () => {

        context("is entirely whitespace", () => {
          it("should yield failure", () => {
            const username = "           ";
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.alphanumeric]);
          });
        });

        context("contains whitespace", () => {
          it("should yield failure", () => {
            const username = "dfsdfsdfsdf ";
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.alphanumeric]);
          });
        });
      });

      describe("when username contains chinese character", () => {
        it("should yield failure", () => {
          const username = "用户名用户名";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.alphanumeric]);
        });
      });

      describe("when username contains symbols", () => {
        it("should yield failure", () => {
          const username = "fjdkf*&";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.alphanumeric]);
        });
      });

      describe("when username length is less than 5", () => {
        it("should yield failure", () => {
          const username = "a";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.length]);
        });


        it("should yield failure", () => {
          const username = "用户名";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([
            Fixture.ValidationError.alphanumeric,
            Fixture.ValidationError.length
          ]);
        });
      });

      describe("when username length is greater than 30", () => {
        it("should yield failure", () => {
          const username = Array(31).join("a");
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.length]);
        });
      });
    });


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
            expect(result).to.have.errors([Fixture.ValidationError.length]);
          });
        });
      });

      describe("generate string shorter than 5 characters", () => {
        it("should yield failure", () => {
          generator.alphanumeric(1, 4, 100).forEach(username => {
            const result = UserValidation.verifyUsername(username);

            expect(result).to.be.failure;
            expect(result).to.have.errors([Fixture.ValidationError.length]);
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
});
