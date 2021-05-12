var broj1=234567;
var suma=0;
if(broj1>99){
suma=parseInt(prvaZnamenka(broj1))+parseInt(zadnjaZnamenka(broj1));
console.log(suma);
}
else{
    console.log("Broj mora biti veci od 99");
}
function prvaZnamenka(x)
{
    while (x >= 10) {
        x /= 10;
    }
    return x;
}
function zadnjaZnamenka(y){
    return (y%10);
}