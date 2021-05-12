import {dajSlucajanBroj} from './zadatak6.js';
var i=0;
var brojevi=[];
while(i<3){
    brojevi.push(dajSlucajanBroj(10,100));
    i++;
}
function zadnjaZnamenka(y){
    return (y%10);
}
if(zadnjaZnamenka(brojevi[0])==zadnjaZnamenka(brojevi[1])){
    console.log("True");
}
if(zadnjaZnamenka(brojevi[0])==zadnjaZnamenka(brojevi[2])){
    console.log("True");
}
if(zadnjaZnamenka(brojevi[1])==zadnjaZnamenka(brojevi[2])){
    console.log("True");
}
