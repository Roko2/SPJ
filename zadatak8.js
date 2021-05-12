import {dajSlucajanBroj} from './zadatak6.js';
var x=0;
var aBrojevi=[];
while(x<50){
aBrojevi.push(dajSlucajanBroj(1,20));
x++;
}
var jedinstveni = aBrojevi.filter((v, i, a) => a.indexOf(v) === i);
console.log(jedinstveni);