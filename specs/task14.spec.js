var assert = require("assert");
var assesment = require("../src/task14");

var data1 = {
  name: "root",
  contents: [
    {
      name: "dirA",
      contents: [
        {
          name: "fileA1",
          contents: ["Hello World from A1!"]
        }
      ]
    },
    {
      name: "dirB",
      contents: [
        {
          name: "dirB1",
          contents: [
            {
              name: "fileB1.1",
              contents: ["Hello World from B1.1!"]
            }
          ]
        },
        {
          name: "fileB1",
          contents: ["Hello from B1!"]
        },
        {
          name: "dirB2",
          contents: [
            {
              name: "dirB2.1",
              contents: [
                {
                  name: "fileB2.1.1",
                  contents: ["Hello World from B2.1.1!"]
                },
                {
                  name: "fileB2.1.2",
                  contents: ["Hello World from B2.1.2!"]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

var data2 = {
  name: "JS!",
  contents: [
    {
      name: "Dman",
      contents: [
        {
          name: "fileD1",
          contents: ["Hello everyone from D1!"]
        }
      ]
    },
    {
      name: "dirC",
      contents: [
        {
          name: "fileC1",
          contents: ["Hello World from C1!"]
        }
      ]
    },
    {
      name: "dirB",
      contents: [
        {
          name: "dirB1",
          contents: [
            {
              name: "fileB1.1",
              contents: ["Hello World from B1.1!"]
            }
          ]
        },
        {
          name: "fileB1",
          contents: ["tatabyebye from B1!"]
        },
        {
          name: "dirB2",
          contents: [
            {
              name: "B2.1",
              contents: [
                {
                  name: "B2xxxoo",
                  contents: ["Hello World from B2.1.1!"]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

var result = "";
const traverse = obj => {
  for (let k in obj) {
    if (obj[k] && typeof obj[k] === "object") {
      traverse(obj[k]);
    } else {
      result += obj[k] + "\n";
    }
  }
  return result;
};

describe("Directory Tree #start_test", function() {
  it("should return the correct traversal", function() {
    assert.equal(assesment(data1), traverse(data1));
    result = "";
  });
  it("should return the correct traversal #end_test", function() {
    assert.equal(assesment(data2), traverse(data2));
  });
});
