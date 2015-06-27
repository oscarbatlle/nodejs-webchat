var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(request, response){
    response.sendfile(__dirname + 'index.html');
});

http.listen(8888, function(){
    console.log('Listening on port : 8888');
});