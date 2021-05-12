$(document).ready(function()
{
	var gumb=$("#gumb");
    gumb.click(function ()
    {
        var Ime=$("#inputIme").val();
        var Prezime=$("#inputPrezime").val();
        var Jmbag=$("#JMBAG").val();
        var Oib=$("#OIB").val();
        var datumRodjenja=$("#datumRodjenja").val();
        var Adresa=$("#adresa").val();
        var postanskiBroj=$("#postanskiBroj").val();
        var Grad=$("#Grad").val();
        if(Ime=="" || Prezime=="" || Jmbag=="" || Oib=="" || !(/^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/.test(datumRodjenja)) || Adresa=="" || postanskiBroj=="" || Grad==""){
            alert("Niste popunili sva polja ispravno!");
        }
        else{
            var objekt={
                m_sIme:Ime,
                m_sPrezime:Prezime,
                m_nJmbag:Jmbag,
                m_nOib:Oib,
                m_nDatumRodjenja:datumRodjenja,
                m_sAdresa:Adresa,
                m_nPostanskiBroj:postanskiBroj,
                m_sGrad:Grad
            };
            console.log(objekt);
        }
    })  
});