import {createRequire} from 'module';
const require=createRequire(import.meta.url);
var mosca=require('mosca');
console.log("MQTT broker je spreman za online...");
var settings={
    port:1883
}
console.log("Port je"+settings.port+"...");
var server=new mosca.Server(settings);
server.on('ready',function(){
    console.log("MQTT broker is online!");
});