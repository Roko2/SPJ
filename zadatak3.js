var i=0;
while(i<100){
    if(i%5==0){
        console.log("Broj "+i+" je djeljiv sa 5");
    }
    else if(i%7==0){
        console.log("Broj "+i+" je djeljiv sa 7");
    }
    else{
        console.log("Broj "+ i+ " je djeljiv i sa 5 i sa 7");
    }
    i++;
}