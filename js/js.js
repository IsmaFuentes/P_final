// WINDOW ONLOAD
$(document).ready(function(){

	$("#fav").change(function(){
		if(this.checked){
			$("#fav-alert").fadeIn();
			closeAlert();
		}
	});

	// filtros web
	$("#apply-filters").click(function(){
		var bar = document.getElementById("progress-bar");
		$("#loading-screen").fadeIn();
		barAnimate();

		window.setTimeout(function(){
			$("#loading-screen").fadeOut(300);
			bar.style.width = "1%";
		},1500);
	});

	//filtros modal
	$("#apply-filters-modal").click(function(){
		var bar = document.getElementById("progress-bar");
		$("#loading-screen").fadeIn();
		barAnimate();

		window.setTimeout(function(){
			$("#loading-screen").fadeOut(300);
			bar.style.width = "1%";
		},1500);
	});	

});

// FUNCTIONS //

// hace desaparecer el alert
function closeAlert(){
	window.setTimeout(function(){
		$("#fav-alert").fadeOut(300)
	},1000);
}

// barra de progreso
function barAnimate(){
	var bar = document.getElementById("progress-bar");
	var width = 1;
	var barfilled = false;

	while(!barfilled){
		width ++;
		bar.style.width = width + '%';

		if(width >= 100){
			barfilled = true;
		}
	}
}