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

    describe("Region", () => {
      it("should export properly", () => {

        Model.Region.should.not.be.null;
      });

      describe("member", () => {

        const RegionData = require("../../../../src/model/enum/RegionData");

        describe("data", () => {
          it("should export `RegionData` properly", () => {

            expect(RegionData.results).to.eql(Model.Region.data);
          });
        });

        describe("matchByCode", () => {
          it("should retrieve a region record based on code", () => {
            const data = {
              "code": "110101",
              "countryCode": "CN",
              "regionNameE": "dongchengqu",
              "regionNameC": "东城区",
              "level": "3",
              "upperRegion": "1101"
            };

            expect(Model.Region.matchByCode(data.code)).to.eql(data);
          });

          context("when given a wrong code", () => {
            it("should return undefined", () => {
              expect(Model.Region.matchByCode("898908098908908")).to.be.undefined;
            });
          });

          describe("providing a subset of region data to the 2nd parameter", () => {

            const rangeOfData = RegionData.results.slice(0, 100);

            const data = rangeOfData[30];

            it("should return a record based on code", () => {

              expect(Model.Region.matchByCode(data.code, rangeOfData)).to.eql(data);

            });

            context("when given a wrong name", () => {
              it("should return undefined", () => {
                expect(Model.Region.matchByCode("111111111111111", rangeOfData)).to.be.undefined;
              });
            });
          });
        });

        describe("matchByName", () => {
          it("should retrieve a region record based on name", () => {
            const data = {
              "code": "110101",
              "countryCode": "CN",
              "regionNameE": "dongchengqu",
              "regionNameC": "东城区",
              "level": "3",
              "upperRegion": "1101"
            };

            expect(Model.Region.matchByName(data.regionNameC)).to.eql(data);
          });

          context("when given a wrong name", () => {
            it("should return undefined", () => {
              expect(Model.Region.matchByName("找不到")).to.be.undefined;
            });
          });

          describe("providing a subset of region data to the 2nd parameter", () => {

            const rangeOfData = RegionData.results.slice(0, 100);

            const data = rangeOfData[30];

            it("should return a record based on code", () => {

              expect(Model.Region.matchByName(data.regionNameC, rangeOfData)).to.eql(data);

            });

            context("when given a wrong name", () => {
              it("should return undefined", () => {
                expect(Model.Region.matchByName("找不到", rangeOfData)).to.be.undefined;
              });
            });
          });
        });

        describe("province", () => {
          it("should retrieve a list of provinces", () => {
            Model.Region.province().forEach(r => r.level.should.equal("1"));
          });
        });

        describe("municipality", () => {
          it("should retrieve a list of municipalities", () => {
            Model.Region.municipality().forEach(r => r.level.should.equal("2"));
          });
        });

        describe("district", () => {
          it("should retrieve a list of districts", () => {
            Model.Region.district().forEach(r => r.level.should.equal("3"));
          });
        });

        describe("levelFourRegions", () => {
          it("should retrieve a list of levelFourRegions", () => {
            Model.Region.levelFourRegions().forEach(r => r.level.should.equal("4"));
          });
        });
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
  });

});
