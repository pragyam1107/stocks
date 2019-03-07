var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http');
const cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stockArchives', {
    socketOptions: {
        socketTimeoutMS: 100000,
        connectionTimeout: 90000
    },
    reconnectTries: 400, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    //mongos : true
    //newUrlParser: true
});

app.use(bodyParser.json({limit: '5mb'}));
app.use(cors());
// app.use(bodyParser.urlencoded({extended: false, limit : '50mb'}));

require('./routes/router')(app)

// app.use(require('./api/stocksList.api'), function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     return;
// });

var server = http.createServer(app);

server.listen(8000, '0.0.0.0', function() {
    console.log('stockArchives back end running........')
});

process.on('SIGTERM', onServerEnd);

function onServerEnd() {
    mongoose.connection.close();
    process.exit(0);
}