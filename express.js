'use strict';

let express = require('express');
let app = express();
let csurf = require('csurf');

let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });

app.use(cookieParser());

app.use(csrf());
app.use(function (req, res, next) {
  /*res.cookie('XSRF-TOKEN', req.csrfToken());
  res.locals.csrftoken = req.csrfToken();
  next();*/
});


app.get('/form', csrfProtection, function(req, res) {
  // pass the csrfToken to the view
  res.render('send', { csrfToken: req.csrfToken() })
})

app.use(app.router);

app.listen(process.env.PORT || 80);