$(function() { //$ signs tells that the code gets loaded at the beginning of the html file
	$("navbar-toggler").blur(function(event){
		var screenwidth=window.innerWidth;
		if(screenwidth<768){
			$("#navbarSupportedContent").collapse('hide');
		}
	});
});