var express = require('express'),
    api     = require('./api'),
    users   = require('./accounts'),
    app     = express();

app
    .use(express.static('./public'))
    .use(users)
    .use('/api', api)
    .get('*', function (req, res) {
        if (!req.user) {
            res.redirect('/login');
        } else {
            res.sendFile(__dirname + '/public/main.html');
        }
    })
    .listen(3000);
    // .listen(process.env.PORT); // For Heroku Deployment
