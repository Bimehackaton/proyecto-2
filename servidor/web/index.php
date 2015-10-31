<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app['debug'] = true;

$app->get('/api/mola', function () use($app) {
    return 'mola ';
});


$app->get('/api/nomola', function () {
   return 'no mola ';
});


$app->get('/api/acciondj', function() {
    $accion = file_get_contents(__DIR__."/dj.txt");
    return '{ "accion" : '.$accion.' }';
});

$app->run();
