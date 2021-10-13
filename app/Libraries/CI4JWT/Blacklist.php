<?php

namespace App\Libraries\CI4JWT;


class Blacklist
{
  

  public function add(string $token,array $data)
  {
    
    $cache = \Config\Services::cache();

    // if we have already added this token to the blacklist
    if (!empty($cache->get($token))) {
      return true;
    }

    $cache->save($token,json_encode($data),$this->getMinutesUntilExpired($data));

    return true;
  }
  
  protected function getMinutesUntilExpired(array $data)
  {
    $exp = $data['exp'];
    $iat = $data['iat'];

    // get the latter of the two expiration dates and find
    // the number of minutes until the expiration date,
    // plus 1 minute to avoid overlap
    return round(($iat - $exp) / 60) + 60;
  }
  
  public function has(string $token)
  {
    $cache = \Config\Services::cache();
    if ($cache->get($token) !== null) {
      return true;
    }else return false;
  }
 
  public function delete(string $token)
  {
    $cache = \Config\Services::cache();
    return $cache->delete($token);
  }

}
