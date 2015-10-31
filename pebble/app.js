/**
 * PebbleDJ
*/

var UI = require('ui');
var ajax = require ('ajax');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');

var accionPalmasCard = new UI.Card({
    title: 'Ahora...',
    banner: 'images/aplaudir.png'
});
accionPalmasCard.hide();

var accionSaltarCard = new UI.Card({
    title: 'Ahora...',
    banner: 'images/salto.png'
});
accionSaltarCard.hide();

var accionAgacharCard = new UI.Card({
    title: 'Ahora...',
    banner: 'images/brazosarriba.png'
});
accionAgacharCard.hide();

var accionIzdaCard = new UI.Card({
    title: 'Ahora...',
    banner: 'images/izda.png'
});
accionIzdaCard.hide();

var accionDchaCard = new UI.Card({
    title: 'Ahora...',
    banner: 'images/derecha.png'
    
});
accionAgacharCard.hide();


var jsonFunc= function(json) {
  console.log('ejecucion: ' + json.accion);
 
  if (json.accion==1) {
    console.log('Saltar');
    accionSaltarCard.show();
    accionAgacharCard.hide();
    accionIzdaCard.hide();
    accionDchaCard.hide();
    accionPalmasCard.hide();
    Vibe.vibrate('long');
  }
  if (json.accion==2) {

    console.log('Agachar');
    accionSaltarCard.hide();
    accionAgacharCard.show();
    accionIzdaCard.hide();
    accionDchaCard.hide();
    accionPalmasCard.hide();
    Vibe.vibrate('short');
  }
  if (json.accion==3) {
    console.log('Izda');
    accionSaltarCard.hide();
    accionAgacharCard.hide();
    accionIzdaCard.show();
    accionDchaCard.hide();
    accionPalmasCard.hide();
    Vibe.vibrate('double');
  }
  if (json.accion==4) {
    console.log('Dcha');
    accionSaltarCard.hide();
    accionAgacharCard.hide();
    accionIzdaCard.hide();
    accionDchaCard.show();
    accionPalmasCard.hide();
    Vibe.vibrate('double');
    Vibe.vibrate('long');
  }  
  if (json.accion==5) {
    console.log('Palmas');
    accionSaltarCard.hide();
    accionAgacharCard.hide();
    accionIzdaCard.hide();
    accionDchaCard.hide();
    accionPalmasCard.show();
    Vibe.vibrate('double');
    Vibe.vibrate('short');
  }  
  if (json.accion==6) {
    console.log('Nada');
    accionSaltarCard.hide();
    accionAgacharCard.hide();
    accionIzdaCard.hide();
    accionDchaCard.hide();
    accionPalmasCard.hide();
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


var molaFunc = function () {
  var URL = 'http://10.10.2.11:8080/api/mola';
  console.log('antes mola');
  ajax({url: URL, type: 'json'},function(){} ,function(){} );
  console.log('despues mola');
  
};

var noMolaFunc = function () {
  var URL = 'http://10.10.2.11:8080/api/nomola';
  console.log('antes nomola');
  ajax({url: URL, type: 'json'},function(){} ,function(){} );
  console.log('despues nomola');
  
};

var cuernosFunc = function () {
  var URL = 'http://10.10.2.11:8080/api/cuernos';
  console.log('antes cuernos');
  ajax({url: URL, type: 'json'},function(){} ,function(){} );
  console.log('despues cuernos');
  
};

// Create the Window
var window = new UI.Window();

var felizImg = new UI.Image({
  position: new Vector2(90, 0),
  size: new Vector2(45, 43),
  image: 'images/feliz.png'
});

var tristeImg = new UI.Image({
  position: new Vector2(90, 105),
  size: new Vector2(45, 43),
  image: 'images/triste.png'
});

var cuernosImg = new UI.Image({
  position: new Vector2(90, 50),
  size: new Vector2(37, 43),
  image: 'images/cuernos.png'
});

var bimeImg = new UI.Image({
  position: new Vector2(10, 50),
  size: new Vector2(70, 34),
  image: 'images/bime.png'
});

window.add(felizImg);
window.add(tristeImg);
window.add(bimeImg);
window.add(cuernosImg);

window.on('click', 'up', molaFunc);
window.on('click', 'down', noMolaFunc);
window.on('click', 'select', cuernosFunc);

// Show the Window
window.show();

setInterval (llamarAjax, 2000);

