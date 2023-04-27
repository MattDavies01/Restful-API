var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    
    "user4" : {
    "name" : "mohit",
    "password" : "password4",
    "profession" : "teacher",
    "id": 4
    }
}

var id = 2;
   
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Application listening at https://localhost8081", host, port)
})

app.post('/addUser', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", "utf-8", function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log(data)
        res.end( JSON.stringify(data));
    });
})

app.delete('/deleteUser', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", "utf-8", function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log ( data );
        res.end (JSON.stringify(data)); 
    });
})


app.get('./listusers', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", utf8 , function (err, data) {
        console.log( data );
        res.end( data );
    });
});
