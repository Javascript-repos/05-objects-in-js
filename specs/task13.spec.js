var assert = require("assert");
var assesment = require("../src/task13");

const p = (n, p) => {
  var arr = "";
  for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = 1; j < n - i; j++) {
      str = str + " ";
    }
    for (var k = 1; k <= 2 * i + 1; k++) {
      str = str + p;
    }
    arr += str;
    arr += "\n";
  }
  return arr;
};

const d = (n, p) => {
  var space = n - 1;
  arr = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < space; j++) arr += " ";
    for (j = 0; j <= i; j++) arr += p + " ";
    arr += "\n";
    space--;
  }
  space = 0;
  for (i = n; i > 0; i--) {
    for (j = 0; j < space; j++) arr += " ";
    for (j = 0; j < i; j++) arr += p + " ";
    arr += "\n";
    space++;
  }
  return arr;
};

describe("Patterns #start_test", function() {
  it("should return pyramid", function() {
    assert.equal(assesment().pyramid(5, "&"), p(5, "&"));
  });
  it("should return pyramid", function() {
    assert.equal(assesment().pyramid(10, "#"), p(10, "#"));
  });
  it("should return diamond", function() {
    assert.equal(assesment().diamond(6, "@"), d(6, "@"));
  });
  it("should return diamond #end_task", function() {
    assert.equal(assesment().diamond(11, "-"), d(11, "-"));
  });
});
