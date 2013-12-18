/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const VIEWS_PATH = path.join(__dirname, 'views');

var app = express();
var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(VIEWS_PATH));
env.express(app);

app.get('/', function(req, res) {
  res.render('index.html', {
    fxa_include_url: "http://localhost:3030/include.js",
    fxa_signup_url: "http://localhost:3030/signup",
    fxa_signin_url: "http://localhost:3030/signin"
  });
});


app.listen(3000);

