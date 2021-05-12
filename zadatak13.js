import {dajSlucajanBroj} from './zadatak6.js';
var i=0;
var aBrojevi=[];
while(i<30){
aBrojevi.push(dajSlucajanBroj(10,20));
i++;
}
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

  bubbleSort(aBrojevi);
  console.log(aBrojevi);