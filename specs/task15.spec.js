var assert = require("assert");
var assesment = require("../src/task15");

const fun1 = () => {
  return 1;
};

var arr1 = [];
var str1 = "ho";
var num1 = 0;
var d = new Date();
var str2 = new String("hey");
var ob1 = {};
var num2 = new Number(0);

describe("Objects #start_test", function() {
  it("should return false", function() {
    assert.equal(assesment(null), false);
  });
  it("should return true", function() {
    assert.equal(assesment(arr1), true);
  });
  it("should return false", function() {
    assert.equal(assesment(str1), false);
  });
  it("should return false", function() {
    assert.equal(assesment(num1), false);
  });
  it("should return true", function() {
    assert.equal(assesment(d), true);
  });
  it("should return true", function() {
    assert.equal(assesment(fun1), true);
  });
  it("should return true", function() {
    assert.equal(assesment(str2), true);
  });
  it("should return true", function() {
    assert.equal(assesment(ob1), true);
  });
  it("should return true", function() {
    assert.equal(assesment(num2), true);
  });
  it("should return true #end_test", function() {
    assert.equal(assesment(true), false);
  });
});
