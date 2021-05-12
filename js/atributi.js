$("#odabir").change(function () {
    var odabraniTip=$("option:selected").val();
    if(odabraniTip=="Email"){
        $("#unos").attr("type","email");
    }
    else if(odabraniTip=="Number"){
        $("#unos").attr("type","number");
    }
    else if(odabraniTip=="Password"){
        $("#unos").attr("type","password");
    }
    else if(odabraniTip=="Text"){
        $("#unos").attr("type","text");
    }
});
function Spremi() {
        var podaci = $("#unos").val();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(podaci, null, 2)], {
          type: "text/plain"
        }));
        a.setAttribute("download", "data.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}