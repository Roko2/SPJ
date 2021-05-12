var oElement=new _lib("h1");
oElement.ubaciElement(0,"h1","noviNaslov","istiId","Moj tekst");
oElement.Sakrij();
oElement.Prikazi();
oElement.dodajKlasu("da");
//oElement.dodajAtribut("id","NaslovID");
localStorage.clear();
localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail');
var lista=document.getElementById("footerID");
for(var i=0;i<localStorage.length;i++){
 console.log(localStorage.getItem(localStorage.key(i)));
    var NoviElement=document.createElement('li');
    var link=document.createElement('a');
   link.innerHTML=localStorage.key(i);
   lista.appendChild(NoviElement);
   link.setAttribute("href",localStorage.getItem(localStorage.key(i)));
   NoviElement.appendChild(link);
 }