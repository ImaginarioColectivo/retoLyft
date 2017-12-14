/* query vista splash que no funciona*/
$(document).ready(function() {
  $(".vistaSplash").fadeIn(2000).fadeOut(800,showPage);

	function showPage (){
	$('.ingreso').show();
	}

/* query para que aparezca la 2da pagina*/ 
	$('#btnSingUpDos').click(function(){
	  $('.ingreso').hide(); 
	  $('.secondPage').show();
	});

/* query para dropdown 2da pagina*/ 
	$('.search-panel .dropdown-menu').find('a').click(function(e) {
	e.preventDefault();
	var param = $(this).attr("href").replace("#", "");
	var concept = $(this).text();
	$('.search-panel span#search_concept').text(concept);
	$('.input-group #search_param').val(param);

});


/* query deshabilitar boton next*/ 	

	$('#number').keyup(function() {
     var numeroFono = $('#number').val();
     if (numeroFono.length === 10) {
         $('#btnNext').removeClass("disabled");
         $('#btnNext').addClass("waves-effect waves-light btn");
     }
     if (numeroFono.length > 10) {
     $('#btnNext').addClass("disabled");
 }
 });

/* final del jquery*/ 
});


