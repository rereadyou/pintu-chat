//pintuchat
//
var http = require('http');
var fs = require('fs');
var url = require('url');
var socket = require('socket.io');
var qs = require('querystring');
//var mysql = require('mysql');
//var mongo = require('mongojs');
var dburl = "pintu";
var collections = ["user", "chat"];
var db = require("mongojs").connect(dburl, collections);

/*
db.user.insert({
    'name': 'rereadyou',
    'age': '29',
    'gender': 'male',
    'password': 'hehe',
});
*/
//db.user.findAll();
var httpServer = http.createServer();

var entryIndex = function(req, res) {
    req.setEncoding('utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    //sentmsg(req, res);
    //console.log(req, res);
    var url = req.url;
    //if(url == '/') {
        url = 'window.html';
    //}

    /*
    db.user.find({"gender":"male"}, function(err, users) {
        if(err || !users) console.log("No male user found!");
        else users.forEach( function (maleUser) {
            console.log(maleUser);
        });
    });
    */

    fs.readFile(url, function(err, data) {
        //console.log(url);
        //console.log(data);
        res.write(data);
        res.end();
    });
}
    //var user = db.user.find({'name': 'rereadyou'});

var sentmsg = function(req, res) {
    var post = '';
    req.on('data', function(chunk) {
        post += chunk; 
    });
    req.on('end', function() {
        post = qs.parse(post);
        console.log(post);
        res.write(post);
    });
}

httpServer.on('request', entryIndex);
httpServer.listen(12000);

console.log('server started, listen on port: 12000');
