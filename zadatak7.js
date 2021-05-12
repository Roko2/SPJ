import {dajSlucajanBroj} from './zadatak6.js';
var sluc=0;
var aBrojevi=[];
while(sluc<200){
    aBrojevi.push(dajSlucajanBroj(150,1500));
    sluc++;
}
console.log("Najmanji broj je "+Math.min.apply(Math, aBrojevi)+", a najveci je "+Math.max.apply(Math, aBrojevi));