var express = require('./node_modules/express/lib/express');
// var express =  require('express') ;

var path = require('path') ;
var app = express() ;

app.get('/preguntas', function(req, res){
  res.send('<!DOCTYPE html>'
			+'<html lang="en">'
			+'<head>'
				+'<meta charset="UTF-8">'
				+'<title>Cuestionario</title>'
			+'</head>'
			+'<body>'
				+'<h2>Cuestionario de Preguntas </h2>'
				+'¿Quién descubrió América? <br>'
				+'<form action="/respuesta"  name="frm1">'
					+'<input type="hidden" value="1" name="pregunta">'
					+'<input type="text" name="respuesta">'
					+'<button type="submit" >Enviar</button>'
				+'</form>'
				+'<hr>'
				+'¿Capital de Portugal?.<br>'
				+'<form action="/respuesta" name="frm2">'
					+'<input type="hidden" value="2" name="pregunta">'
					+'<input type="text" name="respuesta">'
					+'<button type="submit" >Enviar</button>'
				+'</form>'
				+'<hr>'
			+'</body>'
			+'</html>'
		);
});


app.get('/respuesta', function(req, res){

	var pregunta = req.query.pregunta  ;
	var respuesta = req.query.respuesta  ;
	var rpta_ok = ''  ;
	var mensaje = ''  ;
	console.log(pregunta + ' --- ' +respuesta) ;

	if (pregunta === '1' )
	{
		var rpta_ok = "cristobal colon" ;

		if (rpta_ok === respuesta ) {
			mensaje = "Correcta" ;
		}else{
			mensaje = "Incorrecta" ;
		};

	}	;

	if (pregunta === '2' )
	{
		var rpta_ok = "lisboa" ;

		if (rpta_ok === respuesta ) {
			mensaje = "Correcta" ;
		}else{
			mensaje = "Incorrecta" ;
		};

	}	;

  res.send( respuesta + '<h4> Respuesta '+mensaje+'</h4>'
  			+'<a href="/preguntas"> Regresar </a>'
  	);
});


app.listen(8000);