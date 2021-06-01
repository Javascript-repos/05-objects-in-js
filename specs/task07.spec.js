var assert = require("assert");
var ex = require("../src/task07");
describe("App", function() {
  var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true
    }
  ];
  it("should return the score", function() {
    assert.equal(ex(personnel), 420);
  });
});

describe("App", function() {
  var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 5612,
      isForceUser: true
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 7312,
      shootingScore: 9933,
      isForceUser: false
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 2032,
      shootingScore: 59112,
      isForceUser: false
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 4322,
      shootingScore: 6733,
      isForceUser: true
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71434,
      shootingScore: 8543,
      isForceUser: true
    }
  ];
  it("should return the score", function() {
    assert.equal(ex(personnel), 96742);
  });
});
