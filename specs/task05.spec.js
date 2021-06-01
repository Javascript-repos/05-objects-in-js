var assert = require('assert');
var ass = require ("../src/task05");
describe('App', function() {
  var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
  it('should return the object', function() {
    assert.equal(ass(library).prop1[0].author,"Bill Gates");
  });

  it('should return the object', function() {
    assert.equal(ass(library).prop1[0].title,"The Road Ahead");
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop1.length,2);
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop2.length,1);
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop2[0].author,"Suzanne Collins");
  });
});


describe('App', function() {
  var library = [ 
    {
        title: 'Chasing The Monsoon: A Modern Pilgrimage Through India',
        author: 'Alexander Frater',
        readingStatus: true
    },
    {
        title: 'One Life to Ride: A Motorcycle Journey to the High Himalayas',
        author: 'Ajit Harisinghani',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
  it('should return the object', function() {
    assert.equal(ass(library).prop1[0].author,"Alexander Frater");
  });

  it('should return the object', function() {
    assert.equal(ass(library).prop1[0].title,"Chasing The Monsoon: A Modern Pilgrimage Through India");
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop1.length,2);
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop2.length,1);
  });
  it('should return the object', function() {
    assert.equal(ass(library).prop2[0].author,"Suzanne Collins");
  });
});