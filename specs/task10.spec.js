var assert = require('assert');
var ex = require ("../src/task10");
describe('App', function() {
  var obj=[{
    title:'buy meal',
    isDone:false,
},{
    title:"come office on time",
    isDone:false,
},{
    title:["BMW",[{id:01,name :"R8" },{id:02,name:"r7"}],"maruti"],
    isDone:true,
}]  ;
    it('should return the value when the value is present', function() {
      assert.equal(ex(obj),"R8");
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
    title:["BMW",[{id:01,name :"R7" },{id:02,name:"r7"}],"maruti"],
    isDone:true,
}]  ;
    it('should return the value when the value is present', function() {
      assert.equal(ex(obj),"R7");
    });
});