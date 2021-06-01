var assert = require("assert");
var assesment = require("../src/task06");
describe("App #start_test", function() {
  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" }
  ];
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[0].id, 15);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[1].id, -1);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[2].id, 3);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[3].id, 12.2);
  });
  it("should return the object #end_test", function() {
    assert.equal(assesment(arr).prop2, 5);
  });
});


describe("App #start_test", function() {
  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {id : 122},
    {id: null},
    {id: "undefined"},
    {id: NaN},
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" }
  ];
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[0].id, 15);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[1].id, -1);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[2].id, 3);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[3].id, 12.2);
  });
  it("should return the object", function() {
    assert.equal(assesment(arr).prop1[4].id, 122);
  });
  it("should return the object #end_test", function() {
    assert.equal(assesment(arr).prop2, 8);
  });
});

