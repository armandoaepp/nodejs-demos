// manejador de eventos
process.on('uncaughtException', function(err){
  console.log('PROGRAMA ABORTADO: ERROR:\n ->'+err);
});

console.log('Este mensaje saldra por console') ;

functionIndefinida();

console.log('Este mensaje N saldra por console') ;