'use strict';

var express = require('express'); // jshint ignore:line

var app = express();

var options = {
  dotfiles  : 'ignore',
  etag      : false,
  extensions: ['htm', 'html'],
  index     : false,
  maxAge    : '1d',
  redirect  : false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};

app.use(express.static(__dirname + '/app', options));
app.listen(process.env.PORT || 3006);