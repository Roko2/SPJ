function Printer(nivo_tonera,dvostranoIspisivanje){
    this.m_sNivoTonera=nivo_tonera;
    this.m_sDvostranoIspisivanje=dvostranoIspisivanje;
    this.ukupanBrojStranica=0;
}

var Samsung_M283x=new Printer(2,true);
var Epson_Sx105=new Printer(55,false);
var Cannon_Pixa=new Printer(99,true);
var HP_Smart_tank_500=new Printer(32,false);

Printer.prototype.dodajBoju=function(){
if(this.m_sNivoTonera<100){
this.m_sNivoTonera=100;
return this.m_sNivoTonera;
}
else{
    return "Toner je vec napunjen!";
}
}
Printer.prototype.printaj=function(brojStranica){
    var ukupanBrojStranica=0;
for(var i=0;i<brojStranica;i++){
    if(this.m_sNivoTonera>0){
        if(this.dvostranoIspisivanje==false){
            this.m_sNivoTonera-=0.1;
            ukupanBrojStranica++; 
        }
        else{
            this.m_sNivoTonera-=0.2;
            ukupanBrojStranica+=0.5; 
        }
    }
    else{
        return "Printer je prazan!";
    }
}
return "Ukupan broj isprintanih stranica je "+Math.round(ukupanBrojStranica)+", a trenutni nivo tonera je "+Math.round(this.m_sNivoTonera);
}
console.log(Cannon_Pixa.printaj(35));