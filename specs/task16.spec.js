var assert = require("assert");
var assesment = require("../src/task16");

var ob1 = {
  steps: 6,
  ability: [1, 3, 5]
};

var ob2 = {
  steps: 11,
  ability: [1, 2]
};

var ob3 = {
  steps: 0,
  ability: [1, 3, 5, 6]
};

var ob4 = {
  steps: 1,
  ability: [1, 5]
};

var ob5 = {
  steps: 9,
  ability: [1, 3, 5, 7]
};

describe("Stairs #start_test", function() {
  it("should return the number of ways", function() {
    assert.equal(assesment(ob1), 8);
  });
  it("should return the number of ways", function() {
    assert.equal(assesment(ob2), 144);
  });
  it("should return the number of ways", function() {
    assert.equal(assesment(ob3), 1);
  });
  it("should return the number of ways", function() {
    assert.equal(assesment(ob4), 1);
  });
  it("should return the number of ways #end_test", function() {
    assert.equal(assesment(ob5), 33);
  });
});
