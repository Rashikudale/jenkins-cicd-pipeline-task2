var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Needed to parse JSON body from GitHub
app.use(express.json());

// Home route
app.get('/', function(request, response) {
  response.send('Hello World!');
});

// GitHub webhook route
/*app.post('/github-webhook/', function(request, response) {
  console.log('🚀 Webhook received:', request.body); // For debugging
  response.sendStatus(200); // Respond to GitHub
});*/
app.post('/github-webhook/', function(request, response) {
  console.log('🚀 Headers:', request.headers);
  console.log('🚀 Body:', JSON.stringify(request.body, null, 2));
  response.sendStatus(200);
});


// Start server
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
