// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		});//cierre del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//cierre del vibrar
		$('#https://www.youtube.com/watch?v=y7d9VLRO3vc').tap(function(){
			navigator.notification.Link(1);
		});//cierre del descargar
		$('#http://www.dias-festivos-mexico.com.mx/dias-feriados/batalla-puebla/').tap(function(){
			navigator.Download.Descargar(1);
		});//cierre del escuchar
		
	},false);//cierre del deviceready
		
	
      





});//cierre document

