var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var path = require('path')

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
    console.log('User connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(8888, function(){
    console.log('Listening on port : 8888');
});