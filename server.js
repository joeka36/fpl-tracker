const express = require("expresss");
var bodyParser  = require('body-parser');
var path        = require('path');
var http        = require('http');
var mongoose    = require('mongoose');

const app = express();

ar appRoute = require('./server/routes/app');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set up database with mongoose
mongoose.connect('mongodb://localhost/fantasy_premier_league');

app.use('/api', appRoute);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log(path.join(__dirname, 'dist/index.html'));
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// module.exports = app;

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(`API running on localhost:${port}`));


