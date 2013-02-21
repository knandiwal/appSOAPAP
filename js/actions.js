// JavaScript Document
function pgAlert(msj,tit){ navigator.notification.alert(msj, null, tit, 'Aceptar'); }

$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		
		$( '.btnAccesar' ).bind( "click", function(event, ui) {
			pgAlert('eureka', 'mensaje');
		});

		
		$('.alerta').tap(function(){ //Obtener Aceleración actual
			pgAlert('eureka', 'mensaje');
		});
				
		
		function accError(err){ //Error
			pgAlert('Error: '+err.code, 'Error');
		}
	}, false);
});