var assert = require('assert');
var ass = require ("../src/task03");
describe('App', function() {
  var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: [{item:"chips",cost:20},{itemName:"Banana",cost:40},{itemName:"fruits",cost:80} ],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      }
      
    }
  }
  it('should return -1 when the value is not present', function() {
    assert.equal(ass(nestedData),"Banana");
  });
});
describe('App', function() {
  var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: [{item:"chips",cost:20},{itemName:"Chocolate",cost:40},{itemName:"fruits",cost:80} ],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      }
      
    }
  }
  it('should return -1 when the value is not present', function() {
    assert.equal(ass(nestedData),"Chocolate");
  });
});

describe('App', function() {
  var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: [{item:"chips",cost:20},{itemName:"Pizza",cost:40},{itemName:"fruits",cost:80} ],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      }
      
    }
  }
  it('should return -1 when the value is not present', function() {
    assert.equal(ass(nestedData),"Pizza");
  });
});