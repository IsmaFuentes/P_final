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

	// filtros modal
	$("#apply-filters-modal").click(function(){
		var bar = document.getElementById("progress-bar");
		$("#loading-screen").fadeIn();
		barAnimate();

		window.setTimeout(function(){
			$("#loading-screen").fadeOut(300);
			bar.style.width = "1%";
		},1500);
	});	

	// editar perfil
	$("#user-edit").click(function(){
		$("#user-edit").hide();
		$("#changes-save").show();
		// habilita el formulario
		enableForm();
	});

	// guardar cambios - perfil
	$("#changes-save").click(function(){
		// deshabilita el formulario + alert
		if(disableForm()){
			$("#alert-changes-success").fadeIn();
			window.setTimeout(function(){$("#alert-changes-success").fadeOut();},1500);
			// vuelve a mostrar el botón de editar
			$("#changes-save").hide();
			$("#user-edit").show();
		}else{
			$("#alert-changes-error").fadeIn();
			window.setTimeout(function(){$("#alert-changes-error").fadeOut();},1500);
		}
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

function enableForm(){
	$("#nickname").prop("disabled",false);
	$("#email").prop("disabled",false);
	$("#aboutme").prop("disabled",false);	
}

function disableForm(){
	//si el formulario valida deshabilita los campos y "guarda los cambios" -> no esta programado
	if(validateProfileForm()){
		$("#nickname").prop("disabled",true);
		$("#email").prop("disabled",true);
		$("#aboutme").prop("disabled",true);	
		return true;
	}else {
		return false;
	}
}

function validateProfileForm(){
	var nickname = $("#nickname").val();
	var email = $("#email").val();
	
	// comprueba el nombre
	var nameExpr = /^[a-z]+$/i;
	// comprueba el email
	var mailExpr = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/i;

	var validateEmail = mailExpr.test(email);
	var validateNickname = nameExpr.test(nickname);

	if(validateEmail == true && validateNickname == true){
		return true;
	}else{
		return false;
	}
}