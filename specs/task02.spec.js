var assert = require('assert');
var ass = require ("../src/task02");
describe('App', function() {
  describe('#indexOf()', function() {
    var nestedData = {
      innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2,3,5,7,11],
            fibonnaci: [0,1,1,2,3,5,8,13]
        },
        
      }
    }
    it('should return -1 when the value is not present', function() {
      assert.equal(ass(nestedData).indexOf(5), -1);
    });
    it('should return the 1 when the value is present', function() {
      assert.equal(ass(nestedData).indexOf(2), 1);
    });
    it('should return 2 when the value is  present', function() {
      assert.equal(ass(nestedData).indexOf(8),2);
    });
    it('should return true when the value is  present', function() {
      assert.equal(ass(nestedData).includes(0), true);
    });
    it('should return true when the value is  present', function() {
      assert.equal(ass(nestedData).includes(8), true);
    });
    
  });
  describe('#indexOf()', function() {
    var nestedData = {
      innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2,3,5,7,11],
            fibonnaci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]
        },
        
      }
    }
    it('should return -1 when the value is not present', function() {
      assert.equal(ass(nestedData).indexOf(5), -1);
    });
    it('should return the 1 when the value is present', function() {
      assert.equal(ass(nestedData).indexOf(2), 1);
    });
    it('should return 2 when the value is  present', function() {
      assert.equal(ass(nestedData).indexOf(8),2);
    });
    it('should return true when the value is  present', function() {
      assert.equal(ass(nestedData).includes(610), true);
    });
    it('should return false when the value is  present', function() {
      assert.equal(ass(nestedData).includes(82584), false);
    });
    
  });

});