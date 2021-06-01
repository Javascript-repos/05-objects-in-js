var assert = require("assert");
var ex = require("../src/task09");
describe("App", function() {
  var obj = [
    {
      title: "buy meal",
      isDone: false
    },
    {
      title: "come office on time",
      isDone: false
    },
    {
      title: ["BMW", "Mercedez", "maruti"],
      isDone: true
    }
  ];

  it("should return the array", function() {
    assert.deepEqual(ex(obj), [
      "buy meal",
      "come office on time",
      ["BMW", "Mercedez", "maruti"]
    ]);
  });
});

describe("App", function() {
  var obj = [
    {
      title: "buy meal",
      isDone: false
    },
    {
      title: "come office on time",
      isDone: false
    },
    {
      title: ["BMW", "Mercedez", "maruti", "tata"],
      isDone: true
    }
  ];

  it("should return the array", function() {
    assert.deepEqual(ex(obj), [
      "buy meal",
      "come office on time",
      ["BMW", "Mercedez", "maruti", "tata"]
    ]);
  });
});
