import {createRequire} from 'module';
const require=createRequire(import.meta.url);
var http = require('http');
var nPort = 8000;
import {dajSlucajanBroj} from './zadatak6.js';
var i=0;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
while(i<10){
    response.write(String(dajSlucajanBroj(10,100)+"\n"));
    i++;
    }
response.end();
}).listen(nPort);