(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"topcoat-navigation-bar\">\n  <div class=\"topcoat-navigation-bar__item center full\">\n      <h1 class=\"topcoat-navigation-bar__title\">Futbolistas</h1>\n  </div>\n</div>\n<div class=\"search-bar\">\n<input type=\"search\" value=\"\" placeholder=\"buscar\" class=\"topcoat-search-input\" id=\"btnBuscar\">\n</div>\n<div class=\"topcoat-list scroller\">\n  <ul class=\"topcoat-list__container list\" id=\"lstFutbolistas\">\n</ul>\n</div>";
},"useData":true});
templates['jugador'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"topcoat-navigation-bar\">\n      <div class=\"topcoat-navigation-bar__item left quarter\">\n          <a class=\"topcoat-icon-button--quiet back-button\" href=\"#\">\n              <span class=\"topcoat-icon topcoat-icon--back\"></span>\n          </a>\n      </div>\n      <div class=\"topcoat-navigation-bar__item center half\">\n          <h1 class=\"topcoat-navigation-bar__title\">Futbolistas</h1>\n      </div>\n  </div>\n  <div class='detalles scroller'>\n      <img src=\"assets/img/"
    + alias4(((helper = (helper = helpers.imagen || (depth0 != null ? depth0.imagen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data}) : helper)))
    + "\" class=\"imagen-futbolista\"/>\n      <h1> </h1>\n      <p><strong>Equipo:</strong>"
    + alias4(((helper = (helper = helpers.equipo || (depth0 != null ? depth0.equipo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipo","hash":{},"data":data}) : helper)))
    + "  </p>\n      <p><strong>Posición: </strong>"
    + alias4(((helper = (helper = helpers.posicion || (depth0 != null ? depth0.posicion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posicion","hash":{},"data":data}) : helper)))
    + "</p>\n      <p><strong>Dorsal:</strong> "
    + alias4(((helper = (helper = helpers.dorsal || (depth0 != null ? depth0.dorsal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dorsal","hash":{},"data":data}) : helper)))
    + "</p>\n      <p><em></em></p>\n      <div class=\"topcoat-list__container clearfix\">\n          <ul class=\"topcoat-list list actions\">\n              <li class=\"topcoat-list__item\"><a href=\"tel:+34606606606\"><p>Llamar al móvil</p><p>+34606606606</p><div class=\"action-icon icon-call\"/></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"tel:+34606606606\"><p>Llamar al fijo</p><p>+34976414141</p><div class=\"action-icon icon-call\"/></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"sms:+34606606606\"><p>Enviar SMS</p><p>+34606606606</p><div class=\"action-icon icon-sms\"/></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"mailto:micorreo@gmail.com\"><p>Enviar correo electrónico</p><p>micorreo@gmail.com</p><div class=\"action-icon icon-mail\"/></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"#\" class=\"add-location-btn\"><p>Añadir posición</p></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"#\" class=\"add-contact-btn\"><p>Añadir a contactos</p></a></li>\n              <li class=\"topcoat-list__item\"><a href=\"#\" class=\"change-pic-btn\"><p>Hacer una foto nueva</p></a></li>\n          </ul>\n      </div>\n  </div>";
},"useData":true});
templates['listaJugadores'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li class=\"topcoat-list__item\">\n      <a href=\"#futbolistas/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\"assets/img/"
    + alias4(((helper = (helper = helpers.imagen || (depth0 != null ? depth0.imagen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data}) : helper)))
    + "\">\n            <p>"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.apellido || (depth0 != null ? depth0.apellido : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido","hash":{},"data":data}) : helper)))
    + "</p>\n            <p>"
    + alias4(((helper = (helper = helpers.equipo || (depth0 != null ? depth0.equipo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equipo","hash":{},"data":data}) : helper)))
    + "</p>\n            <span class=\"chevron\"></span>\n        </a>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":".","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();