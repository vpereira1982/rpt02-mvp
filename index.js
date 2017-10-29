let express = require('express');
let app = express();
let routes = require('./controllers/routes');
var cookieParser = require('cookie-parser');
let session = require('express-session');
var FileStore = require('session-file-store')(session);

//add routes & middleware
app.use('/', express.static(__dirname + '/public'));
app.use('/api', routes);

// Server listens
let port = process.env.PORT || 8080;

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, (err, success) => {
  err ? console.log('There was an error loading your server') : console.log('The SERVER is up and running');
});

module.exports = app;