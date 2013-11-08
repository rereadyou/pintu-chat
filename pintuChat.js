//pintuchat
//
var http = require('http');
var fs = require('fs');
var url = require('url');
var socket = require('socket.io');
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
var httpServer = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
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


    var user = db.user.find({'name': 'rereadyou'});
}).listen(12000);

console.log('server started, listen on port: 12000');
