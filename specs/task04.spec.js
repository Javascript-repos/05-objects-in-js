var assert = require('assert');
var ass = require ("../src/task04");
describe('App', function() {
  var nestedObject = {
    
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 38000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
    var countryName = "Germany";
    var capital = "Berlin";
    var population = 38000;
    it('should return capital when the value is present', function() {
      assert.equal(ass(nestedObject,countryName, capital, population).capital,"Berlin");
    });
    it('should return population when the value is present', function() {
        assert.equal(ass(nestedObject,countryName, capital, population).population,38000);
      });
  });


  describe('App', function() {
    var nestedObject = {
      
      speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
      data: {
        continents: {
          europe: {
            countries: {
              switzerland: {
                capital: "Bern",
                population: 3800000
              }
            }
          }
        },
        languages: {
          spanish: {
              hello: "Hola"
          },
          french: {
              hello: "Bonjour"
          }
        }
      }
    }
      var countryName = "France";
      var capital = "Paris";
      var population = 380000;
      it('should return capital when the value is present', function() {
        assert.equal(ass(nestedObject,countryName, capital, population).capital,"Paris");
      });
      it('should return population when the value is present', function() {
          assert.equal(ass(nestedObject,countryName, capital, population).population,380000);
        });
    });