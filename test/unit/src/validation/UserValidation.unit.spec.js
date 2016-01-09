/**
 * Created by Lance on 2015-12-19.
 */

"use strict";

//import _ from "lodash";

describe("User controller validation rules", () => {

  const UserValidation = Validation.UserValidation;

  describe("#RULE verifyUsername", () => {

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
          expect(result).to.have.errors([Fixture.ValidationError.usernameLength]);
        });


        it("should yield failure", () => {
          const username = "用户名";
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([
            Fixture.ValidationError.alphanumeric,
            Fixture.ValidationError.usernameLength
          ]);
        });
      });

      describe("when username length is greater than 30", () => {
        it("should yield failure", () => {
          const username = Array(31).join("a");
          const result = UserValidation.verifyUsername(username);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.usernameLength]);
        });
      });
    });
  });

  describe("#RULE verifyType", () => {

    describe("success", () => {

      context("when type is 1", () => {
        it("should yield success", () => {
          const type = 1;
          const result = UserValidation.verifyType(type);

          expect(result).to.be.success;
        });
      });

      context("when type is 2", () => {
        it("should yield success", () => {
          const type = 1;
          const result = UserValidation.verifyType(type);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {
      context("when type is 3", () => {
        it("should yield failure", () => {
          const type3 = 3;
          const result = UserValidation.verifyType(type3);

          expect(result).to.be.failure;
        });
      });

      context("when type is -1", () => {
        const type3 = -1;
        const result = UserValidation.verifyType(type3);

        expect(result).to.be.failure;

      });
    });
  });

  describe("#RULE verifyNickname", () => {

    describe("success", () => {

      context("when nickname is shorter than 20 in length", () => {
        it("should yield success", () => {
          const nickname = "LeToucanHasArrived";
          const result = UserValidation.verifyNickname(nickname);

          expect(result).to.be.success;
        });
      });
    });

    describe("failure", () => {

      describe("when nickname length is greater than 20", () => {
        it("should yield failure", () => {
          const nickname = Array(21).join("a");
          const result = UserValidation.verifyNickname(nickname);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.nicknameLength]);
        });
      });
    });

    describe("failure", () => {

      describe("when nickname length is less than 2", () => {
        it("should yield failure", () => {
          const nickname = "";
          const result = UserValidation.verifyNickname(nickname);

          expect(result).to.be.failure;
          expect(result).to.have.errors([Fixture.ValidationError.nicknameLength]);
        });
      });
    });
  });
});
