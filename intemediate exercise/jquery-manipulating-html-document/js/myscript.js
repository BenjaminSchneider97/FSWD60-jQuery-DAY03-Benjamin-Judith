$(document).ready(function(){

// $('div.product-image:nth-child(1),div.product-image:nth-child(2)').attr("name",'notebook').css('background-color', 'red');

var computer = [];

for (i=0; i<6; i++){
img = $(".product-image img:eq("+i+")").attr("src");
img = img.substring(4,12);
if (img == "notebook"){
  
  $("div.product-image:eq("+i+")").css("background-color", "red");



}


}




});