var assert = require('assert');
var ex = require ("../src/task11");

describe('App', function() {
  var recipe={
    title:"mole",
    servings:[2,2,3,3,5,7,9,7,9,6,5,4,4],
    ingredients:["cumin","cinnamon","cocoa"]
  }
    it('should return -1 when the value is not present', function() {
      assert.equal(ex(recipe).indexOf(4), 5);
    });
    it('should retturn the 3 when the value is present', function() {
      assert.equal(ex(recipe).indexOf(5),2);
    });
    it('should return 1 when the value is  present', function() {
      assert.equal(ex(recipe).indexOf(7),3);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ex(recipe).includes(9), true);
    });
    
});


describe('App', function() {
  var recipe={
    title:"mole",
    servings:[2,1,1,1,2,3,10,10,10,9,2,3,3,5,7,9,7,9,6,5,4,4],
    ingredients:["cumin","cinnamon","cocoa"]
  }
    it('should return -1 when the value is not present', function() {
      assert.equal(ex(recipe).indexOf(4), 7);
    });
    it('should retturn the 3 when the value is present', function() {
      assert.equal(ex(recipe).indexOf(5),5);
    });
    it('should return 1 when the value is  present', function() {
      assert.equal(ex(recipe).indexOf(7),6);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ex(recipe).includes(4), true);
    });
    
});



