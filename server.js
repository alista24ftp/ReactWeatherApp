var express = require('express');

// Create our app
var app = express();

// Tell it which folder we want to serve
app.use(express.static('public'));

// Start server
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
