import {dajSlucajanBroj} from './zadatak6.js';
import {createRequire} from 'module';
const require=createRequire(import.meta.url);
var mqtt=require('mqtt');
var client=mqtt.connect('mqtt://localhost');
client.on('connect',function(){
    console.log("Online");
    setInterval(function(){
        var poruka=String(dajSlucajanBroj(10,1000));
        client.publish('temp',poruka);
        console.log("Poruka je poslana->"+poruka);
    },5000);
});