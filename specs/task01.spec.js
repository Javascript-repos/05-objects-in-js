var assert = require('assert');
var ass = require ("../src/task01");
describe('App', function() {
  

  describe('#indexOf()', function() {
    var numberSystem = {
      types: {
        binary: [0,1],
        decimal: [0,1,2,3,4,5,6,7,8,9],
        numberData: {
            primeNumbers: [2,3,5,7,11,13,17,19],
            fibonnaci: [1,1,2,3,5,8,13]
        }
       
      }
    }
    it('should return -1 when the value is not present', function() {
      assert.equal(ass(numberSystem).indexOf(10), -1);
    });
    it('should retturn the 3 when the value is present', function() {
      assert.equal(ass(numberSystem).indexOf(7), 3);
    });
    it('should return 1 when the value is  present', function() {
      assert.equal(ass(numberSystem).indexOf(3),1);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(2), true);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(11), true);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(17), true);
    });
  });
  describe('indexOf', function() {
    var numberSystem = {
      types: {
        binary: [0,1],
        decimal: [0,1,2,3,4,5,6,7,8,9],
        numberData: {
            primeNumbers: [2,3,5,7,11,13,17,19,21],
            fibonnaci: [1,1,2,3,5,8,13]
        }
       
      }
    }
    it('should return -1 when the value is not present', function() {
      assert.equal(ass(numberSystem).indexOf(10), -1);
    });
    it('should retturn the 3 when the value is present', function() {
      assert.equal(ass(numberSystem).indexOf(7), 3);
    });
    it('should return 1 when the value is  present', function() {
      assert.equal(ass(numberSystem).indexOf(3),1);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(2), true);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(11), true);
    });
    it('should return value when the value is  present', function() {
      assert.equal(ass(numberSystem).includes(17), true);
    });
  });
  
});