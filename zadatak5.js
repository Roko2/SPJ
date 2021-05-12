var aPolje=[];
var aParniBrojevi=[];
var i=1;
while(i<=50){
    if(i%7==0){
        aPolje.push(i);
    }
    i++;
}
for(var x=0;x<aPolje.length;x++){
    if(aPolje[x]%2==0){
    console.log(aPolje[x]);
    }
}
