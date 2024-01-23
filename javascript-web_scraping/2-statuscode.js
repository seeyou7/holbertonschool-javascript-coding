#!/usr/bin/node

const request = require('request');
// Get the URL from the command line arguments
const url = process.argv[2];

// using GET methode to request to the specified URL
request.get(url).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
