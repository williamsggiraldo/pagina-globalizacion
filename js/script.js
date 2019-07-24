function initMap() {

  var coord = {lat:4.127756,lng: -72.308402};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5.8,
    center: coord
  });
   var labels = '';
   var infoWin = new google.maps.InfoWindow();
   var texto = '<h1> Pajarito :v </h1>'+'<p> Descripcion del lugar+(colocar sonido) </p>'+
               '<a href="https://www.google.com">Hipervinculo</a>'
   var informacion = new google.maps.InfoWindow({
      content: texto
   });

  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      title: 'ave',
      label: labels[i % labels.length]
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
    infoWin.setContent(location.info);
    infoWin.open(map, marker);
})
return marker;
  });
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath:'https://i.ibb.co/b2ptH4b/pajar.png',textColor:"white"});
}




var locations = [

    {lat: 4.5972001, lng: -74.066813, info: "<h1> Pajarito1 :v </h1><p> Descripcion del lugar+(colocar sonido) </p><a href='https://www.google.com'>Hipervinculo</a>"},
  {lat: 4.5794549, lng: -74.1596994,info: "<h6>Identificador: 2</h6>"},
  {lat: 4.6280373, lng: -74.0676802,info: "marker 3"},
  {lat: 4.5970903, lng: -74.0656539,info: "marker 4"},
  {lat: 4.6284921, lng: -74.1596352,info: "marker 5"},
  {lat: 4.612871,  lng: -74.1260285,info: "marker 6"},
  {lat:-4.193635,lng: -69.941416,info:"<h3>Identificador: 1</h3><h3>Tinamú oliváceo(Tinamus major)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Reserva Biológica El Zafire Leticia Amazonas</I></p>"},
  {lat:0.911935,lng: -72.765137,info:"<h3>Identificador: 2</h3><h3>Tinamú moteado(Tinamus guttatus)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Chiribiquete Solano Caquetá</I></p>"},
  {lat:4.590888,lng: -73.757480,info:"<h3>Identificador: 3</h3><h3>Tinamú cabecirrojo(Nothocercus julius)</h3><p><I> Créditos:Sergio Córdoba Córdoba (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Chingaza San Fransisco La Calera Cundinamarca</I></p>"},
  {lat:-4.193535,lng: -69.941416,info:"<h3>Identificador: 4</h3><h3>Tinamú sombrío(Crypturellus cinereus)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Reserva Biológica El Zafire Leticia Amazonas</I></p>"},
  {lat:1.878939,lng: -76.267113,info:"<h3>Identificador: 5</h3><h3>Tinamú chico(Crypturellus soui)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>San Agustín, Huila</I></p>"},
  {lat:3.885035,lng: -73.754255,info:"<h3>Identificador: 6</h3><h3>Tinamú ondeado(Crypturellus undulatus)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Meta Guamal Hacienda Mozambique</I></p>"},
  {lat:0.911835,lng: -72.765237,info:"<h3>Identificador: 7</h3><h3>Tinamú abigarrado(Crypturellus variegatus)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Chiribiquete Solano Caquetá</I></p>"},
  {lat:6.243642,lng: -77.401344,info:"<h3>Identificador: 8</h3><h3>Chajá añuma(Anhima cornuta)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Chocó, Bahía Solano, PNN Ensenada de Utría, al norte de Bahía Solano</I></p>"},
  {lat:3.885035,lng: -73.754255,info:"<h3>Identificador: 9</h3><h3>Suirirí piquirrojo(Dendrocygna autumnalis)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Meta, Guamal, Hacienda Mozambique</I></p>"},
  {lat:4.217625,lng: -68.886537,info:"<h3>Identificador: 10</h3><h3>Pato criollo(Cairina moschata)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Resguardo Unificado Selva de Matavén, Cumaribo, Vichada</I></p>"},
  {lat:4.748317,lng: -73.843653,info:"<h3>Identificador: 11</h3><h3>Cerceta andina(Anas andium)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Cundinamarca, Guasca, PNN Chingaza, Piedras Gordas E del municipio La Calera</I></p>"},
  {lat:6.243542,lng: -77.401344,info:"<h3>Identificador: 12</h3><h3>Chachalaca cabecigrís(Ortalis cinereiceps)</h3><p><I> Créditos:Gary Stiles (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Chocó, Bahía Solano, PNN Ensenada de Utría, al norte de Bahía Solano</I></p>"},
  {lat:9.641035,lng: -74.949586,info:"<h3>Identificador: 13</h3><h3>Chachalaca alirroja(Ortalis garrula)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Córdoba, Bolívar</I></p>"},
  {lat:10.574416,lng: -73.272164,info:"<h3>Identificador: 14</h3><h3>Chachalaca culirroja(Ortalis ruficauda)</h3><p><I> Créditos:Sergio Córdoba Córdoba (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Ecoparque Los Besotes, Valledupar, Cesar</I></p>"},
  {lat:6.019378,lng: -73.119032,info:"<h3>Identificador: 15</h3><h3>Pava camata(Penelope argyrotis)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Alto Guanentá-Reserva Cachalú, Encino, Santander</I></p>"},
  {lat:5.672669,lng: -73.461683,info:"<h3>Identificador: 16</h3><h3>Pava andina(Penelope montagnii)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>SFF Iguaque, Chiquiza, Boyacá</I></p>"},
  {lat:4.691655,lng: -75.620487,info:"<h3>Identificador: 17</h3><h3>Pava del Cauca(Penelope perspicax)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>Reserva Bremen, Buenavista, Quindío</I></p>"},
  {lat:5.250708,lng: -67.855404,info:"<h3>Identificador: 18</h3><h3>Pava amazónica(Penelope jacquacu)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Tuparro, Cumaribo, Vichada</I></p>"},
  {lat:0.911835,lng: -72.765137,info:"<h3>Identificador: 19</h3><h3>Pava goliazul(Pipile cumanensis)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Chiribiquete, Solano, Caquetá</I></p>"},
  {lat:1.630905,lng: -75.991692,info:"<h3>Identificador: 20</h3><h3>Pava aburria(Aburria aburri)</h3><p><I> Créditos:Mauricio Álvarez Rebolledo (Colección de Sonidos Ambientales - Instituto Humboldt)</I></p><p><I>PNN Cueva de los Guácharos, Acevedo, Huila</I></p>"}
]
