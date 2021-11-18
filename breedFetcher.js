const request = require('request');
let search = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {

  // Print the error if one occurred
  if (error) {
    return console.log(error);
  }

  let parsed = JSON.parse(body);
  let breed = parsed[0];
  if (!breed) {
    return console.log('Does Not Exist');

  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  console.log('body:', breed.description); // Print the data
});