$(document).ready(function(){
	$(document).on("mousemove", function(e){
		$("#moveme").css("position", "absolute");
		var left = e.pageX -130;
		var top = e.pageY -115;
		$('#moveme').css({'left': left, "top": top});
		});
	$(document).on("click", function(ev){
		$("#moveme").fadeOut(500).fadeIn(500).removeAttr("id");
		});
});