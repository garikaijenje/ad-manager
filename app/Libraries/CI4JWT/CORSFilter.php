<?php

namespace App\Libraries\CI4JWT;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use Config\Services;

class CORSFilter implements FilterInterface
{

  public function before(RequestInterface $request, $arguments = null)
  {

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, PATCH");
    header("Access-Control-Allow-Headers: Authorization, X-API-KEY, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");

    if ($_SERVER['REQUEST_METHOD'] === "OPTIONS") {

      $response = Services::response();
      $response->setBody(null);
      $response->setStatusCode(ResponseInterface::HTTP_NO_CONTENT);

      return $response;
    }
  }

  //--------------------------------------------------------------------

  public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
  {
    // Do something here
  }
}
