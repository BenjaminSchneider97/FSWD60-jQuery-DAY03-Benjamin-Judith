$(document).ready(function(){
	/*for (i=0; i<8; i++){
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
		}*/

/*	$('div.product-image:eq(0),div.product-image:eq(1)').attr("name",'notebook').css('background-color', 'red');
	$('div.product-image:eq(2),div.product-image:eq(3)').attr("name",'phone').css('background-color', 'green');
	$('div.product-image:eq(4),div.product-image:eq(5)').attr("name",'tablet').css('background-color', 'blue');*/

	/*$("div.product-image img[src*='phone']").css("background-color", "green");
	$("div.product-image img[src*='tablet']").css("background-color", "blue");
	$("div.product-image img[src*='notebook']").css("background-color", "red");*/

	$('.container > div:eq(0),.container > div:eq(1)').attr("item",'notebook');
	$('.container > div:eq(2),.container > div:eq(3),.container > div:eq(4)').attr("item",'phone');
	$('.container > div:eq(5),.container > div:eq(6),.container > div:eq(7)').attr("item",'tablet');
	
		$("#notebookbutton").on("click", function(){
			for(i=0; i < 8; i++){
			var item = $(".container > div:eq("+i+")").attr("item");
			if(item != "notebook"){
				$(".container > div:eq("+i+")").fadeOut(500);
			}
			}
	});
		$("#tabletbutton").on("click", function(){
			for(i=0; i < 8; i++){
			var item = $(".container > div:eq("+i+")").attr("item");
			if(item != "tablet"){
				$(".container > div:eq("+i+")").fadeOut(500);
			}
			}
	});	
		$("#phonebutton").on("click", function(){
			for(i=0; i < 8; i++){
			var item = $(".container > div:eq("+i+")").attr("item");
			if(item != "phone"){
				$(".container > div:eq("+i+")").fadeOut(500);
			}
			}
	});	
		$("#showallbutton").on("click", function(){
			for(i=0; i < 8; i++){
			var item = $(".container > div:eq("+i+")").attr("item");
				$(".container > div:eq("+i+")").fadeIn(500);
			}
	});			
});