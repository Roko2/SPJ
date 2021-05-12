function Pretvori() {
   var prvaVrijednost= $("#prviUnos").val();
   var odabranaOpcija1=$("#odabirValute1 option:selected").val();
   var odabranaOpcija2=$("#odabirValute2 option:selected").val();
   switch(odabranaOpcija1){
    case "Kuna":{
        if(odabranaOpcija2=="Kuna"){
            $("#drugiUnos").html(prvaVrijednost);
        }
        else if(odabranaOpcija2=="Euro"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.13).toFixed(2));
        }
        else if(odabranaOpcija2=="Dolar"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.16).toFixed(2));
        }
        else if(odabranaOpcija2=="Kruna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*3.43).toFixed(2));
        }
        else if(odabranaOpcija2=="Funta"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.12).toFixed(2));
        }
        break;
    }
    case "Euro":{
        if(odabranaOpcija2=="Euro"){
            $("#drugiUnos").html(prvaVrijednost);
        }
        else if(odabranaOpcija2=="Kuna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*7.56).toFixed(2));
        }
        else if(odabranaOpcija2=="Dolar"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*1.21).toFixed(2));
        }
        else if(odabranaOpcija2=="Kruna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*25.96).toFixed(2));
        }
        else if(odabranaOpcija2=="Funta"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.87).toFixed(2));
        }
        break;
    }
    case "Dolar":{
        if(odabranaOpcija2=="Dolar"){
            $("#drugiUnos").html(prvaVrijednost);
        }
        else if(odabranaOpcija2=="Kuna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*6.26).toFixed(2));
        }
        else if(odabranaOpcija2=="Euro"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.83).toFixed(2));
        }
        else if(odabranaOpcija2=="Kruna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*21.50).toFixed(2));
        }
        else if(odabranaOpcija2=="Funta"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.72).toFixed(2));
        }
        break;
    }
    case "Kruna":{
        if(odabranaOpcija2=="Kruna"){
            $("#drugiUnos").html(prvaVrijednost);
        }
        else if(odabranaOpcija2=="Kuna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.29).toFixed(2));
        }
        else if(odabranaOpcija2=="Euro"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.039).toFixed(3));
        }
        else if(odabranaOpcija2=="Dolar"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.047).toFixed(3));
        }
        else if(odabranaOpcija2=="Funta"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*0.034).toFixed(3));
        }
        break;
    }
    case "Funta":{
        if(odabranaOpcija2=="Funta"){
            $("#drugiUnos").html(prvaVrijednost);
        }
        else if(odabranaOpcija2=="Kuna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*8.69).toFixed(2));
        }
        else if(odabranaOpcija2=="Euro"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*1.15).toFixed(2));
        }
        else if(odabranaOpcija2=="Dolar"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*1.39).toFixed(2));
        }
        else if(odabranaOpcija2=="Kruna"){
            $("#drugiUnos").html(parseFloat(Number(prvaVrijednost)*29.84).toFixed(2));
        }
        break;
    }
   }
}