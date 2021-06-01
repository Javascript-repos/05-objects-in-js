var assert = require('assert');
var ex = require ("../src/task08");
describe('App', function() {
  var obj=[{
    title:'buy meal',
    isDone:false,
},{
    title:"come office on time",
    isDone:false,
},{
    title:["BMW","Mercedez","maruti"],
    isDone:true,
}]  ;
    it('should return BMW when the value is present', function() {
      assert.equal(ex(obj)[0],"BMW");
    });
    it('should return Mercedez when the value is present', function() {
        assert.equal(ex(obj)[1],"Mercedez");
      });
      it('should return the title', function() {
        assert.equal(ex(obj).indexOf("maruti"),2);
      });
      it('should return the title', function() {
        assert.equal(ex(obj).indexOf("abcd"),-1);
      });
      it('should return the title', function() {
        assert.equal(ex(obj).indexOf(""),-1);
      });
  });


  describe('App', function() {
    var obj=[{
      title:'buy meal',
      isDone:false,
  },{
      title:"come office on time",
      isDone:false,
  },{
      title:["BMW","maruti","tata","Mercedez"],
      isDone:true,
  }]  ;
      it('should return BMW when the value is present', function() {
        assert.equal(ex(obj)[0],"BMW");
      });
      it('should return Mercedez when the value is present', function() {
          assert.equal(ex(obj)[3],"Mercedez");
        });
        it('should return the title', function() {
          assert.equal(ex(obj).indexOf("maruti"),1);
        });
        it('should return the title', function() {
          assert.equal(ex(obj).indexOf("abcd"),-1);
        });
        it('should return the title', function() {
          assert.equal(ex(obj).indexOf(""),-1);
        });
        it('should return the title', function() {
          assert.equal(ex(obj).indexOf("tata"),2);
        });
    });