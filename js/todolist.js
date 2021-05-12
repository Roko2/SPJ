$(document).ready(function(){
var oBtn = $('#btn');
oBtn.click(function ()
{
var input=$("#inputListe").val(); 
var sRow="<tr>"+
        "<td><input type='checkbox'></td>"+
        "<td><i onclick='Obrisi(this)' class='fa fa-trash ml-2' aria-hidden='true'></i></td>"+
        "<td><li class='ml-4'>"+input+"</li></td></tr>";
$('#lista').append(sRow);
});
});

function Obrisi(id){
    $(id.parentElement.parentElement).remove();
}