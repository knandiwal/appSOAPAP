// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		
		$( ".btnAccesar" ).bind( "click", function(event, ui) {
			pgAlert('eureka', 'mensaje');
		});

		
		
				
		
		function accError(err){ //Error
			pgAlert('Error: '+err.code, 'Error');
		}
	}, false);
});