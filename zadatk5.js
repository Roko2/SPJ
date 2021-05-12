import {dajSlucajanBroj} from './zadatak6.js';
var aBrojevi=[];
var i=0;
while(i<100){
aBrojevi.push(dajSlucajanBroj(50,5000));
i++;
}
var parni=0;
var neparni=0;
for(var j=0;j<aBrojevi.length;j++){
    if(aBrojevi[j]%2==0){
        parni++;
    }
    else{
        neparni++;
    }
}
console.log("Parnih ima "+parni+", a neparnih "+neparni);