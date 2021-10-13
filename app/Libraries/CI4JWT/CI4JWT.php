<?php

namespace App\Libraries\CI4JWT;

use Firebase\JWT\JWT;

use App\Libraries\CI4JWT\Blacklist;

class CI4JWT
{

  public function getJWTFromRequest($authenticationHeader): string
  {
    if (is_null($authenticationHeader)) { // JWT is absent
      throw new \Exception('Missing or invalid JWT in request');
    }
    //JWT is sent from client in the format Bearer XXXXXXXXX
    return explode(' ', $authenticationHeader)[1];
  }

  public function generateToken(int $exp, array $data = null) // exp is minutes
  {
    $now = time();
    $payload = [
      "iss" => "The_claim",
      "aud" => "The_Aud",
      'iat' => $now, // issued at
      "nbf" => $now, // not before in seconds
      'exp' => $now + ($exp * 60), // expire time in seconds
    ];
    $payload['data'] = $data;
    return JWT::encode($payload, getenv('JWT_SECRET_KEY'));
  }

  public function encodedToken()
  {
    $request = \Config\Services::request();
    $authenticationHeader = $request->getServer('HTTP_AUTHORIZATION');
    if (empty($authenticationHeader)) {
      $authenticationHeader = $request->getServer('REDIRECT_HTTP_AUTHORIZATION');
    }
    return $this->getJWTFromRequest($authenticationHeader);
  }

  public function decodeToken()
  {
    $encodedToken = $this->encodedToken();
    $key = getenv('JWT_SECRET_KEY');
    return JWT::decode($encodedToken, $key, ['HS256']);
  }

  public function blacklistToken(string $token,array $data){
    $blacklist = new Blacklist();
    return $blacklist->add($token,$data);
  }
  
  public function tokenBlacklisted(string $token){
    $blacklist = new Blacklist();
    return $blacklist->has($token);
  }

  public function refreshToken($userExp,$refreshExp){
    // generate a new refresh token and blacklist the old one
    $currentEncodedRefreshToken = $this->encodedToken();
    $currentDecodedRefreshToken = $this->decodeToken();
    $this->blacklistToken($currentEncodedRefreshToken, (array)$currentDecodedRefreshToken);
    return [
      'user_token' => $this->generateToken($userExp, (array) $currentDecodedRefreshToken->data),
      'refresh_token' => $this->generateToken($refreshExp, (array) $currentDecodedRefreshToken->data)
    ];
  }

  
}
