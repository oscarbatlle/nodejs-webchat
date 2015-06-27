var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response){
    response.sendfile(__dirname + 'index.html');
});

io.on('connection', function(socket){
    console.log('User connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(8888, function(){
    console.log('Listening on port : 8888');
});