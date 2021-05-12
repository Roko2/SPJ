function Grad(nazivGrada,brojStanovnika,lat,long){
    this.m_sNazivGrada=nazivGrada;
    this.m_nBrojStanovnika=brojStanovnika;
    this.m_dLatituda=lat;
    this.m_dLongituda=long;
}

var oVirovitica=new Grad("Virovitica",21291,45.83194,17.38388);
var oSlatina=new Grad("Slatina",13.686,45.70333,17.70278);
var oBjelovar= new Grad("Bjelovar",40.276,45.89861,16.84889);
var oOsijek=new Grad("Osijek",108.048,45.55111,18.69389);
var oZagreb=new Grad("Zagreb",790.017,45.81444,15.97798);

Grad.prototype.dajVelicinuGrada=function(){
    if(this.m_nBrojStanovnika<30000){
        return 1;
    }
    if(this.m_nBrojStanovnika>30000 && this.m_nBrojStanovnika<200000){
        return 2;
    }
    if(this.m_nBrojStanovnika>200000){
        return 3;
    }

}

function dajUdaljenost(prviGrad,drugiGrad)
{
    const φ1 = prviGrad.m_dLatituda * Math.PI/180, φ2 = drugiGrad.m_dLatituda * Math.PI/180, Δλ = (drugiGrad.m_dLongituda-prviGrad.m_dLongituda) * Math.PI/180, R = 6371e3;
    const d = Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;
    return Math.round(d/1000);
}

console.log(oVirovitica.dajVelicinuGrada());