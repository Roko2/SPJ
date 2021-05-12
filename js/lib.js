function _lib(parametarSelektor){
    this.selektor=parametarSelektor;
    this.el=document.querySelectorAll(parametarSelektor);
    _lib.prototype.ubaciElement=function(index,naziv,klasa,id,tekst){
        if(naziv!=""){
           var NoviElement=document.createElement(''+naziv+'');
           if(klasa!=""){
                NoviElement.setAttribute('class',''+klasa+'');
           }
           if(id!=""){
            NoviElement.setAttribute('id',''+id+'');
       }
            NoviElement.innerHTML=tekst;
            this.el[index].appendChild(NoviElement);
        }
    }
    _lib.prototype.dodajKlasu=function(nazivKlase){
        this.el.forEach(x=>{
                x.setAttribute("class", nazivKlase);
    })
}
    _lib.prototype.dodajAtribut=function(nazivAtributa,vrijednostAtributa){
        this.el.forEach(x=>{
            x.setAttribute(""+nazivAtributa+"", vrijednostAtributa);
})
    }
    _lib.prototype.Prikazi=function(){
        this.el.forEach(x=>{
            x.style.visibility="visible"; 
})
    }
    _lib.prototype.Sakrij=function(){
        this.el.forEach(x=>{
            x.style.visibility="hidden"; 
})
    }
}

