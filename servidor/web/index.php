<?php

require_once __DIR__.'/../vendor/autoload.php';

date_default_timezone_set("Europe/Madrid");

$app = new Silex\Application();

$app['debug'] = true;

$fmola = __DIR__."/mola.txt";
$fnomola = __DIR__."/nomola.txt";
$fcuernos = __DIR__."/cuernos.txt";
$faccion = __DIR__."/dj.txt";
$findex = __DIR__."/index.html";

$app->get('/api/mola', function () use($fmola) {
    $mola = file_get_contents($fmola);
    $mola++;
    file_put_contents($fmola, $mola);
    return 'mola '.$mola;
});


$app->get('/api/nomola', function () use($fnomola) {
    $nomola = file_get_contents($fnomola);
    $nomola++;
    file_put_contents($fnomola, $nomola);
    return 'NO mola '.$nomola;
});

$app->get('/api/cuernos', function () use($fcuernos) {
    $cuernos = file_get_contents($fcuernos);
    $cuernos++;
    file_put_contents($fcuernos, $cuernos);
    return 'Cuernos '.$cuernos;
});

$app->get('/api/getmola', function () use($fmola) {
    $mola = file_get_contents($fmola);
    return $mola;
});

$app->get('/api/getnomola', function () use($fnomola) {
    $nomola = file_get_contents($fnomola);
    return $nomola;
});

$app->get('/api/getcuernos', function () use($fcuernos) {
    $cuernos = file_get_contents($fcuernos);
    return $cuernos;
});

$app->get('/api/getdj', function() use($fmola, $fnomola, $fcuernos, $faccion) {
    $mola = file_get_contents($fmola);
    $nomola = file_get_contents($fnomola);
    $cuernos = file_get_contents($fcuernos);
    $accion = file_get_contents($faccion);

    return '{ "mola": '.$mola.', "nomola": '.$nomola.', "cuernos": '.$cuernos.', "accion": '.$accion.' }';
});

$app->get('/', function () use ($app, $findex) {
    return $app->sendFile($findex);
});

$app->get('/api/acciondj', function() use($faccion) {
    $accion = file_get_contents($faccion);
    return '{ "accion" : '.$accion.' }';
});

/*$app->get('/{fichero}', function($fichero) use($app, $findex) {
    return $app->sendFile(__DIR__."/".$fichero); 
});*/

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

//$app = require __DIR__.'/../src/app.php';
$app->run();

