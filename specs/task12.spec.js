var assert = require("assert");
var assesment = require("../src/task12");
describe("App #start_test", function() {
  it("should return uppercase", function() {
    assert.equal(assesment().up("kOnfinIty"), "KONFINITY");
  });
  it("should return lowercase", function() {
    assert.equal(assesment().low("kOnfinIty"), "konfinity");
  });
  it("should return length", function() {
    assert.equal(assesment().len("konfinity"), 9);
  });
  it("should return array #end_test", function() {
    assert.deepEqual(assesment().sta("konfinity"), [
      "k",
      "o",
      "n",
      "f",
      "i",
      "n",
      "i",
      "t",
      "y"
    ]);
  });
});
