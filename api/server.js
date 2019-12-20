const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),

    const app = express();
    let port = process.env.PORT || 3000;

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });
