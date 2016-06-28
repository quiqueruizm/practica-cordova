var JugadorView = function(adapter, futbolista) {
  this.inicializar = function() {
    this.el = $('<div/>');
    this.el.on('click', '.add-location-btn', this.addLocation);
  };
  this.render = function() {
    this.el.html(Handlebars.templates.jugador(futbolista));
    return this.el;
  };

  this.addLocation = function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function(position) {
        alert(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
        alert('Error obteniendo localización');
      });
    return false;
  };

  this.inicializar();
}
