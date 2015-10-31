/**
 * PebbleDJ
*/

var UI = require('ui');

var ajax = require ('ajax');


// accionDJ
var esperandoAccionCard = new UI.Card({
  title: "Espera",
  body: "Esperando acción"
});
esperandoAccionCard.show();

var accionPalmasCard = new UI.Card({
    title: 'Ahora...',
    body: 'Dar palmas'
});
accionPalmasCard.hide();

var accionSaltarCard = new UI.Card({
    title: 'Ahora...',
    body: 'Saltar'
});
accionSaltarCard.hide();




var jsonFunc= function(json) {
//  console.log('ejecucion: ' + json.data[0]);
 // if (json.data[0]<50) {
  if (json.accion==1) {
    console.log('Palmas');
    esperandoAccionCard.hide();
    accionSaltarCard.hide();
    accionPalmasCard.show();
  }
  if (json.accion==2) {
//  if (json.data[0]>50 && json.data[0]<100) {
    console.log('Saltar');
    esperandoAccionCard.hide();
    accionPalmasCard.hide();
    accionSaltarCard.show();
  }
  if (json.accion==3) {
//  if (json.data[0]>100) {
    console.log('Esperar');
    esperandoAccionCard.show();
    accionPalmasCard.hide();
    accionSaltarCard.hide();
  }

};


var jsonErrFunc = function(error) {
    console.log('Ajax failed: ' + error);
};

var llamarAjax = function() {
//  var URL = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8';
  var URL = 'http://10.10.2.11:8080/api/acciondj';
  ajax({url: URL, type: 'json'}, jsonFunc, jsonErrFunc);
};


setInterval (llamarAjax, 10000);


