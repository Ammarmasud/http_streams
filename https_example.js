var https = require('https');

var options = {
  host: 'webcache.googleusercontent.com',
  path: '/search?q=cache:39oPFzYFz9MJ:https://example.org/&num=1&hl=en&gl=ca&strip=0&vwsrc=0'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");