// Utlizaremos una función anónima autoejecutable de modo que nuestras variables no sean globales. Más info: http://www.formandome.es/javascript/objetos-variables-funciones-javascript/

(function() {
  /* ---------------------------------- Variables locales ---------------------------------- */
  //var adapter = new WebSqlAdapter();
  //var adapter = new MemoryAdapter();
  //var adapter = new JSONPAdapter();
  var adapter = new LocalStorageAdapter();

  //inicializamos el adaptador, metiendo los registros en la base de datos o lo q tengamos q hacer. Usamos promesas
  adapter.inicializar().done(function() {
    console.log("Inicializado: Adaptador de datos");
    renderHomeView();
  });

  /* --------------------------------- Registro de eventos -------------------------------- */
  
  

  /* ---------------------------------- Funciones locales ---------------------------------- */
  function encontrarPorNombre() {
   adapter.encontrarPorNombre($('#btnBuscar').val()).done(function(futbolistas) {
     $("#lstFutbolistas").html(Handlebars.templates.listaJugadores(futbolistas));
   });
 }

   function renderHomeView() {
   $('body').html(Handlebars.templates.home());
   $('#btnBuscar').on('keyup', encontrarPorNombre);
 }

}());
