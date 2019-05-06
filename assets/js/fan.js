var input1 = document.querySelector("input");



$("#start").on("click",function(){
	var time = Number(input1.value);
	time=60/time;
	$(".image").addClass("animation");
	$(".animation").css("animation","spin " + time + "s linear infinite");
});


$("#stop").on("click",function(){
	console.log("stop");
	$(".animation").css("animation","spin  0s linear infinite");
	$(".image").removeClass("animation");
});

