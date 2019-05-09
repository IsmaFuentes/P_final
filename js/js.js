
//Window onload
$(document).ready(function(){

	$("#fav").change(function(){
		if(this.checked){
			$("#fav-pelicula").fadeIn();
			closeAlertBox();
		}
	});

});

function closeAlertBox(){
	window.setTimeout(function(){
		$("#fav-pelicula").fadeOut(300)
	},1000);
}