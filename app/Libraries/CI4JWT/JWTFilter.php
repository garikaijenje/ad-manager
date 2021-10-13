<?php

namespace App\Libraries\CI4JWT;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;
use Exception;

use App\Libraries\CI4JWT\CI4JWT;

class JWTFilter implements FilterInterface
{
  use ResponseTrait;

  public function before(RequestInterface $request, $arguments = null)
  {

    $token_status = 'invalid';

    try {
      
      $jwt = new CI4JWT();
      if($jwt->tokenBlacklisted($jwt->encodedToken())){
        $token_status = 'blacklisted';
        throw new \Exception('Token has been blacklisted');
      }
      $jwt->decodeToken();
      return $request;

    } catch (Exception $e) {

      $response_code = ResponseInterface::HTTP_UNAUTHORIZED;

      if($e->getMessage() == "Expired token") $token_status = 'expired';

      return Services::response()
        ->setJSON(
          [
            'status' => 'FAIL',
            'code' => $response_code,
            'token' => $token_status,
            'message' => $e->getMessage()
          ]
        )
        ->setStatusCode($response_code);
    }
  }

  public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
  {
  }
}
