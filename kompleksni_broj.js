function KompleksniBroj(relBroj,imBroj){
    this.m_nRealniBroj=relBroj;
    this.m_nImaginarniBroj=imBroj;
}
var kBroj1=new KompleksniBroj(1,2);
var kBroj2=new KompleksniBroj(3,4);
var kBroj3=new KompleksniBroj(150,23);
var kBroj4=new KompleksniBroj(66,1);
var kBroj5=new KompleksniBroj(23,89);

var _kb = {
    ispisiKompleksniBroj: function (broj)
    {
    return "z="+broj.m_nRealniBroj+"+"+broj.m_nImaginarniBroj+"i";
    }
    ,zbroji: function(KompBroj1,KompBroj2){
        return "z="+(KompBroj1.m_nRealniBroj+KompBroj2.m_nRealniBroj)+"+"+(KompBroj1.m_nImaginarniBroj+KompBroj2.m_nImaginarniBroj)+"i";
    }
    ,pomnozi: function(kompleksniBroj1,kompleksniBroj2){
        return "z="+((kompleksniBroj1.m_nRealniBroj*kompleksniBroj2.m_nRealniBroj)-kompleksniBroj1.m_nImaginarniBroj*kompleksniBroj2.m_nImaginarniBroj+"+"+(kompleksniBroj1.m_nRealniBroj*kompleksniBroj2.m_nImaginarniBroj+kompleksniBroj2.m_nRealniBroj*kompleksniBroj1.m_nImaginarniBroj))+"i";
    }
   };

   console.log(_kb.ispisiKompleksniBroj(kBroj1)+"\n"+_kb.ispisiKompleksniBroj(kBroj2)+"\n"+_kb.ispisiKompleksniBroj(kBroj3)+"\n"+_kb.ispisiKompleksniBroj(kBroj4)+"\n"+_kb.ispisiKompleksniBroj(kBroj5)+"\n");
   console.log("Zbroj:"+_kb.zbroji(kBroj1,kBroj2)+"\n");
   console.log("Pomnozi:"+_kb.pomnozi(kBroj1,kBroj2));

   var vrijednostOpcije=document.getElementById("opcije");
   function Izracunaj(){
    var prviBroj=new KompleksniBroj(parseInt(document.getElementById("realniDio1").value),parseInt(document.getElementById("imaginarniDio1").value));
    var drugiBroj=new KompleksniBroj(parseInt(document.getElementById("realniDio2").value),parseInt(document.getElementById("imaginarniDio2").value));
   if(vrijednostOpcije.value==1){
    document.getElementById("rezultat").innerHTML=_kb.zbroji(prviBroj,drugiBroj);
   }
    else if(vrijednostOpcije.value==2){
     document.getElementById("rezultat").innerHTML=_kb.pomnozi(prviBroj,drugiBroj);
   }
   }
 

   
  