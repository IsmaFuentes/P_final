// WINDOW ONLOAD
$(document).ready(function(){

	// PELÍCULA O SERIE FAV BTN
	$("#fav").change(function(){
		if(this.checked){
			$("#fav-alert").fadeIn();
			window.setTimeout(function(){$("#fav-alert").fadeOut(300)},1000);
		}
	});

	// FILTROS WEB
	$("#apply-filters").click(function(){
		var bar = document.getElementById("progress-bar");
		$("#loading-screen").fadeIn();
		barAnimate();

		window.setTimeout(function(){
			$("#loading-screen").fadeOut(300);
			bar.style.width = "1%";
		},1500);
	});

	// FILTROS MODAL
	$("#apply-filters-modal").click(function(){
		var bar = document.getElementById("progress-bar");
		$("#loading-screen").fadeIn();
		barAnimate();

		window.setTimeout(function(){
			$("#loading-screen").fadeOut(300);
			bar.style.width = "1%";
		},1500);
	});	

	// EDIT USER - btn
	$("#user-edit").click(function(){
		$("#user-edit").hide();
		$("#changes-save").show();
		// habilita el formulario
		enableForm();
	});

	// EDIT USER - guardar cambios 
	$("#changes-save").click(function(){
		updateUser();
	});

	// EDIT USER - save password btn
	$("#save-password").click(function(){
		changePassword();
	});

	// REGISTER FORM - validation + submit
	$("#register-btn").click(function(){
		register();
	});

	// CHANGE IMG FORM - PELICULA
	$("#btn-film-img").change(function(){
		var img = $("#btn-film-img");
		var imgContainer = $("#img-container-film");
		replaceImg(imgContainer, img);
	});

	// CHANGE IMG FORM - SERIE
	$("#btn-serie-img").change(function(){
		var img = $("#btn-serie-img");
		var imgContainer = $("#img-container-serie");
		replaceImg(imgContainer, img);
	});

	// CHANGE IMG FORM - PERFIL
	$("#btn-profile-img").change(function(){
		var img = $("#btn-profile-img");
		var imgContainer = $("#img-container");
		replaceImg(imgContainer, img);
	});

	// ADD COMMENT - FILM
	$("#comment-btn-film").click(function(){
		var comment = $("#comment-txt").val();
		var container = $("#comment-container");
		addComment(comment,container);
	});

	// ADD COMMENT - SERIE
	$("#comment-btn-serie").click(function(){
		var comment = $("#comment-txt").val();
		var container = $("#comment-container");
		addComment(comment,container);
	});

	// ADD COMMENT - CHAPTER
	$("#comment-btn-chapter").click(function(){
		var comment = $("#comment-txt").val();
		var container = $("#comment-container");
		addComment(comment,container);
	});

	// DELETE COMMENT
	$("#comment-container").on("click", function(){
		$(".delete-button").click(function(){
			// borra toda la estructura del comentario
			$(this).parent().parent().parent().parent().remove();
		});
	});

	
});



// FUNCTIONS //

// PROGRESS BAR
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

// ENABLES FORM "EDITAR PERFIL"
function enableForm(){
	$("#nickname").prop("disabled",false);
	$("#email").prop("disabled",false);
	$("#aboutme").prop("disabled",false);	
}

// DISABLES FORM "EDITAR PERFIL"
function disableForm(){
	var nickname = $("#nickname").val();
	var email = $("#email").val();
	//si el formulario valida deshabilita los campos y "guardaría los cambios"
	if(validateProfileForm(nickname, email)){
		$("#nickname").prop("disabled",true);
		$("#email").prop("disabled",true);
		$("#aboutme").prop("disabled",true);	
		return true;
	}else {
		return false;
	}
}

// VALIDATES "EDIT PROFILE"
function validateProfileForm(nickname, email){	
	// comprueba el nombre
	var nameExpr = /^[a-z]+$/i;
	// comprueba el email
	var mailExpr = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/i;

	// aplicamos las expresiones regulares
	var validateEmail = mailExpr.test(email);
	var validateNickname = nameExpr.test(nickname);

	if(validateEmail == true && validateNickname == true){
		return true;
	}else{
		return false;
	}
}

// VALIDATES PASSWORDS
function validatePasswords(firstPassword, secondPassword){
	if(firstPassword != "" && secondPassword != ""){
		if(firstPassword == secondPassword){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

// VALIDATES REGISTRATION
function validateRegistration(nickname, email, firstPassword, secondPassword){	
	// comprueba el nombre
	var nameExpr = /^[a-z]+$/i;
	// comprueba el email
	var mailExpr = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/i;

	// aplicamos las expresiones regulares
	var validateEmail = mailExpr.test(email);
	var validateNickname = nameExpr.test(nickname);

	// si todos los datos del formulario validan devuelve true
	if(validateEmail == true && validateNickname == true && validatePasswords(firstPassword,secondPassword) == true){
		return true;
	}else{
		return false;
	}	
}

// REGISTER
function register(){
	// datos del formulario
	var nickname = $("#reg-nick").val();
	var email = $("#reg-email").val();
	var firstPassword = $("#reg-first-pwd").val();
	var secondPassword = $("#reg-second-pwd").val();
	// formulario
	var form = $("#form-submit");

	// validación
	if(validateRegistration(nickname, email, firstPassword, secondPassword)){
		// si valida se realiza el submit
		form.submit();
	}else{
		// alert error de validación
		$("#reg-error").fadeIn();
		window.setTimeout(function(){$("#reg-error").fadeOut();},1500);
	}
}

// CHANGE PASSWORDS
function changePassword(){
	// contraseñas
	var firstPassword = $("#first-pwd").val();
	var secondPassword = $("#second-pwd").val();

	// validación
	if(validatePasswords(firstPassword,secondPassword)){
		$("#alert-psw-success").fadeIn();
		window.setTimeout(function(){$("#alert-psw-success").fadeOut();},1500);
	}else{
		$("#alert-psw-error").fadeIn();
		window.setTimeout(function(){$("#alert-psw-error").fadeOut();},1500);
	}
}

// ENABLE / DISABLE USER FORM
function updateUser(){
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
}

// CHANGES IMG - la img tiene que estar en la carpeta "img" del proyecto
function replaceImg(imgContainer, img){
	var fileName = img[0].files[0].name;
	if(fileName != null){
		imgContainer.attr("src", "../img/" + fileName);
	}
}

// ADD COMMENT
function addComment(comment, container){
	// DATE / TIME
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes();
	var month = dt.getMonth()+1;
	var date = dt.getDay() + "/" + month + "/" + dt.getFullYear();

	// USER PROPERTIES
	var username = "Mr Bean";
	var userImg = "mrbean2.jpg";

	if(comment.length != 0){
		// COMMENT DIV
		var div = "<div class='row comment-body mb-2'>" + 
				 	"<div class='my-2 col-usuario'>" +
						"<div class='text-center'>" +
							"<img class='rounded-circle user-img' src='../img/" + userImg + "' alt='user-img'>" +
						"</div>" +
					"<div class='text-center'>" +
						"<span class='posted-data'>" + username + "</span>" + 
					"</div>" +
				  "</div>" +
				  "<div class='my-2 text-left col-comentario'>" +
					"<div class='comment' readonly>" +
						"<p class='comment-text text-justify px-2'>" +
							comment +
						"</p>" + 
						"<div class='text-right'>" + 
							"<span class='posted-data pr-2'>" + date + " - " + time + "</span>" + 
							"<button class='btn badge btn-danger mr-2 delete-button'><i class='fa fa-trash-alt'></i></button>" + 
						"</div>" +
					 "</div>" +
				   "</div>" +
				 "</div>";

		container.append(div);
	}
	else{
		$("#alert-comment").fadeIn();
		window.setTimeout(function(){$("#alert-comment").fadeOut();},1500);
	}
}
