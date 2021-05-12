$("li").click(function() {
        $(this).attr("onclick","prikazi("+this.value+")");
});

function prikazi(x) {
   $("img").each(function (y) {
    var elem = $("#"+y);
       if(elem.attr('id')==x){

           $("#"+y).css("display","block");
       }
       else{
        $("#"+y).css("display","none");
       }
   });
}
