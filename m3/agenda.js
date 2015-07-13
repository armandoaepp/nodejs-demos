var agenda = require('./m.agenda');

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

amigos.meter("Armando", 996393414) ;

var trabajo = agenda ("Trabajo",
             { "@armandoaepp": 996393414,
               "Jose Damian": 157845123,
               "Oscar Capuñay": 178512355
             });

console.log("Telefono de Jose "+ amigos.tf("José"));
console.log("Telefono de Pepe "+ amigos.tf("Pepe"));
console.log("Telefono de Jesús "+ amigos.tf("Jesús"));
console.log();
console.log('Trabajo: '+ trabajo.toJSON());
