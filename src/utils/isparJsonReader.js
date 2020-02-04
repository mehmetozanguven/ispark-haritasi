/* eslint-disable no-unused-vars */
import isparkJson from "../isparkJson/isparkSample.json";
import {
  townNameJsonKey,
  townIdJsonKey,
  isparkParkIdJsonKey
} from "./isparkJsonKey";

const getTownList = function() {
  const townCityArray = [];

  for (var i = 0; i < isparkJson["all"].length; i++) {
    const town = isparkJson["all"][i][townNameJsonKey];
    const townId = isparkJson["all"][i][townIdJsonKey];

    if (!townCityArray.includes(town)) {
      townCityArray.push(town);
    }
  }
  return townCityArray.sort();
};

const getAllIsparkFromTownName = function(townName) {
  const allIsparkInTown = [];
  for (var i = 0; i < isparkJson["all"].length; i++) {
    const eachTownIspark = isparkJson["all"][i];
    if (townName == eachTownIspark[townNameJsonKey]) {
      allIsparkInTown.push(eachTownIspark);
    }
  }
  return allIsparkInTown;
};

const getSpecificIsparkFromTownIdAndParkID = function(townId, parkId) {
  for (var i = 0; i < isparkJson["all"].length; i++) {
    const eachTownIspark = isparkJson["all"][i];
    if (
      townId == eachTownIspark[townIdJsonKey] &&
      parkId == eachTownIspark[isparkParkIdJsonKey]
    ) {
      return eachTownIspark;
    }
  }
};

export {
  getTownList,
  getAllIsparkFromTownName,
  getSpecificIsparkFromTownIdAndParkID
};
