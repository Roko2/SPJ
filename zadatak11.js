import {createRequire} from 'module';
const require=createRequire(import.meta.url);
var http = require('http');
var nPort = 8000;
var fs=require('fs');
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
fs.readFile('osobe.json',function(x,podaci){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(podaci);
response.end();
});
}).listen(nPort);