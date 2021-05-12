import {createRequire} from 'module';
const require=createRequire(import.meta.url);
var mqtt=require('mqtt');
const fs=require('fs');
var client=mqtt.connect('mqtt://localhost');
client.on('connect',function(){
    client.subscribe('temp');
});
console.log("Subscriber 1 je online");
console.log("Dohvacanje poruka");
client.on('message',function(topic,message){
   // context=message.toString();
  fs.writeFile("./brojevi.txt", message,function(x){
      if(x){
          throw x;
      }
      else{
          console.log("Radi");
      }
  });
});