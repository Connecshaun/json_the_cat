
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error);
    }

    let parsed = JSON.parse(body);
    let breed = parsed[0];

    callback(null, breed.description);
  });
};


module.exports = { fetchBreedDescription };