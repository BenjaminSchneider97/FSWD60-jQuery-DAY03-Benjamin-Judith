$(document).ready(function(){
/*var computer = [];*/
	for (i=0; i<6; i++){
		img = $(".product-image img:eq("+i+")").attr("src");
		notebook = img.substring(4,12);
		phone = img.substring(4, 9);
		if (notebook == "notebook"){
		  $("div.product-image:eq("+i+")").css("background-color", "red");
			}
		else if(phone == "phone"){
		  $("div.product-image:eq("+i+")").css("background-color", "green");
			}
		else{
		  $("div.product-image:eq("+i+")").css("background-color", "blue");
			}
		}

/*$('div.product-image:eq(0),div.product-image:eq(1)').attr("name",'notebook').css('background-color', 'red');
$('div.product-image:eq(2),div.product-image:eq(3)').attr("name",'phone').css('background-color', 'green');
$('div.product-image:eq(4),div.product-image:eq(5)').attr("name",'tablet').css('background-color', 'blue');*/

});