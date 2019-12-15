'use strict';

var express = require('express'); // jshint ignore:line
var compression = require('compression');

var app = express();

var options = {
  dotfiles  : 'ignore',
  etag      : true,
  extensions: ['htm', 'html'],
  index     : false,
  redirect  : false,
};

app.use(compression({
  threshold: 512
}));

app.use(express.static(__dirname + '/app', options));
app.listen(process.env.PORT || 3007);

app.get('/', function (req, res) {
  res.redirect('index.html');
});
