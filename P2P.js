function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;

  return {
    titulo: function()           { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)     { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()           { return JSON.stringify(_contenido);},
    listar: function()           {
                                          var cadena = '' ;
                                          for (var i = _contenido.length - 1; i >= 0; i--) {
                                              cadena =  _contenido[i]  ;
                                          };
                                            return _contenido.length ;

                                  }
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

console.log(amigos.listar());

/*function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);*/

/*

Dado el siguiente programa JavaScript que implementa la agenda de telefonos:

function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;

  return {
    titulo: function()                    { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)         { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()              { return JSON.stringify(_contenido);}
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

Añadir un método listar() al cierre agenda(..) {...} que liste por consola cada par "nombre, tf" en una línea, de forma que al listar la agenda amigos generase:

"Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"

incluir ademas una última instrucción en el programa que liste la agenda amigos por consola utilizando el nuevo método listar.

Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.

El evaluador debe descargar dicho fichero y ejecutarlo para comprobar que funciona correctamente.

1. Entrega tu tarea >  2. Valora a tus compañeros >  3. Valoraciones recibidas
El plazo de entrega finaliza en 15-06-2015 22:59:00


*/