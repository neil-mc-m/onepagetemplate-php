<?php
use Silex\Application;
use Silex\Provider\TwigServiceProvider;
require_once __DIR__.'/../vendor/autoload.php';

$app = new Application();
$app->register(new TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../templates',
));
$app['debug'] = true;
return $app;