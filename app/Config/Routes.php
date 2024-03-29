<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
// $routes->set404Override();
$routes->setAutoRoute(true);

$routes->set404Override(function () {
    return view('index');
});

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');

$routes->get('/load-ads/(:num)', 'AdsController::loadAds/$1');
$routes->get('/load-ads/click/(:num)', 'AdsController::handleClick/$1');


$routes->group('api', function ($routes) {

    $routes->group('auth', function ($routes) {
        $routes->post('login', 'UsersController::login');
    });

    $routes->group('slots', function ($routes) {
        $routes->get('', 'SlotsController::getSlots', ['filter' => 'jwt']);
        $routes->get('(:num)', 'SlotsController::getSlot/$1', ['filter' => 'jwt']);
        $routes->post('', 'SlotsController::addSlot', ['filter' => 'jwt']);
        $routes->put('(:num)', 'SlotsController::updateSlot/$1', ['filter' => 'jwt']);
        $routes->delete('(:num)', 'SlotsController::deleteSlot/$1', ['filter' => 'jwt']);
    });

    $routes->group('ads', function ($routes) {
        $routes->get('', 'AdsController::getAds', ['filter' => 'jwt']);
        $routes->get('(:num)', 'AdsController::getAd/$1', ['filter' => 'jwt']);
        $routes->post('', 'AdsController::addAd', ['filter' => 'jwt']);
        $routes->post('(:num)', 'AdsController::updateAd/$1', ['filter' => 'jwt']);
        $routes->delete('(:num)', 'AdsController::deleteAd/$1', ['filter' => 'jwt']);
    });
    
    // $routes->post('logout', 'JwtauthController::logout', ['filter' => 'jwt']);
});




/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
