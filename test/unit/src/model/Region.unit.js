/**
 * Created by hxucaa on 2016-01-08.
 */

"use strict";


describe("Region", () => {

  const Region = Model.Region;

  const levelThree = {
    "code": "445122",
    "countryCode": "CN",
    "regionNameE": "chaozhoushiraopingxian",
    "regionNameC": "潮州市饶平县",
    "level": "3",
    "upperRegion": "4451"
  };

  const levelTwo = {
    "code": "4451",
    "countryCode": "CN",
    "regionNameE": "chaozhoushi",
    "regionNameC": "潮州市",
    "level": "2",
    "upperRegion": "44"
  };

  const levelOne = {
    "code": "44",
    "countryCode": "CN",
    "regionNameE": "guangdongsheng",
    "regionNameC": "广东省",
    "level": "1",
    "upperRegion": "0"
  };

  const levelFour = {
    "code": "4421",
    "countryCode": "CN",
    "regionNameE": "shiqiqu",
    "regionNameC": "石岐区",
    "level": "4",
    "upperRegion": "4421"
  };

  it("should export properly", () => {

    Region.should.not.be.null;
  });

  describe("member", () => {

    const RegionData = require("../../../../src/model/enum/RegionData");

    describe("data", () => {
      it("should export `RegionData` properly", () => {

        expect(RegionData.results).to.eql(Region.data);
      });
    });

    describe("matchByCode", () => {
      it("should retrieve a region record based on code", () => {

        expect(Region.matchByCode(levelThree.code)).to.eql(levelThree);
      });

      context("when given a wrong code", () => {
        it("should return undefined", () => {
          expect(Region.matchByCode("898908098908908")).to.be.undefined;
        });
      });

      describe("providing a subset of region data to the 2nd parameter", () => {

        const rangeOfData = RegionData.results.slice(0, 100);

        const data = rangeOfData[30];

        it("should return a record based on code", () => {

          expect(Region.matchByCode(data.code, rangeOfData)).to.eql(data);

        });

        context("when given a wrong name", () => {
          it("should return undefined", () => {
            expect(Region.matchByCode("111111111111111", rangeOfData)).to.be.undefined;
          });
        });
      });
    });

    describe("matchByName", () => {
      it("should retrieve a region record based on name", () => {

        expect(Region.matchByName(levelThree.regionNameC)).to.eql(levelThree);
      });

      context("when given a wrong name", () => {
        it("should return undefined", () => {
          expect(Region.matchByName("找不到")).to.be.undefined;
        });
      });

      describe("providing a subset of region data to the 2nd parameter", () => {

        const rangeOfData = RegionData.results.slice(0, 100);

        const data = rangeOfData[30];

        it("should return a record based on code", () => {

          expect(Region.matchByName(data.regionNameC, rangeOfData)).to.eql(data);

        });

        context("when given a wrong name", () => {
          it("should return undefined", () => {
            expect(Region.matchByName("找不到", rangeOfData)).to.be.undefined;
          });
        });
      });
    });

    describe("province", () => {
      it("should retrieve a list of provinces", () => {
        Region.province().forEach(r => r.level.should.equal("1"));
      });
    });

    describe("municipality", () => {
      it("should retrieve a list of municipalities", () => {
        Region.municipality().forEach(r => r.level.should.equal("2"));
      });
    });

    describe("district", () => {
      it("should retrieve a list of districts", () => {
        Region.district().forEach(r => r.level.should.equal("3"));
      });
    });

    describe("levelFour", () => {
      it("should retrieve a list of levelFourRegions", () => {
        Region.levelFourRegions().forEach(r => r.level.should.equal("4"));
      });
    });

    describe("isProvince", () => {
      context("given region that is level 1", () => {
        it("should return true", () => {
          Region.isProvince(levelOne).should.be.true;
        });
      });

      context("given region that is not level 1", () => {
        it("should return false", () => {
          Region.isProvince(levelFour).should.be.false;

        });
      });
    });

    describe("isMunicipality", () => {
      context("given region that is level 2", () => {
        it("should return true", () => {
          Region.isMunicipality(levelTwo).should.be.true;
        });
      });

      context("given region that is not level 2", () => {
        it("should return false", () => {
          Region.isMunicipality(levelOne).should.be.false;

        });
      });
    });

    describe("isDistrict", () => {
      context("given region that is level 3", () => {
        it("should return true", () => {
          Region.isDistrict(levelThree).should.be.true;
        });
      });

      context("given region that is not level 3", () => {
        it("should return false", () => {
          Region.isDistrict(levelOne).should.be.false;

        });
      });
    });

    describe("isLevelFourRegion", () => {
      context("given region that is level 4", () => {
        it("should return true", () => {
          Region.isLevelFourRegion(levelFour).should.be.true;
        });
      });

      context("given region that is not level 4", () => {
        it("should return false", () => {
          Region.isLevelFourRegion(levelOne).should.be.false;

        });
      });
    });

    describe("parent", () => {
      it("should return the parent of the region", () => {
        Region.parent(levelThree).should.eql(levelTwo);
      });

      context("when given a level 1 region", () => {
        it("should return undefined", () => {
          expect(Region.parent(levelOne)).to.be.undefined;
        });
      });
    });

    describe("allParents", () => {

      context("when given level 3 region", () => {
        it("should return an array of parent regions with the region itself", () => {

          const expectedResult = [levelOne, levelTwo, levelThree];

          Region.allParents(levelThree).should.eql(expectedResult);
        });
      });

      context("when given a level 1 region", () => {
        it("should return an array containing only the level 1 region", () => {
          Region.allParents(levelOne).should.eql([levelOne]);
        });
      });

      context("when give a level 4 region", () => {
        it("should return an array containing only the level 4 region", () => {
          Region.allParents(levelFour).should.eql([levelFour]);
        });
      });
    });
  });
});
