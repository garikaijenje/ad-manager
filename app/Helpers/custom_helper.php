<?php

if (!function_exists('preDump')) {

  function preDump($data)
  {
    echo ' <pre>';
    print_r($data);
    echo '</pre>';
  }
}

if (!function_exists('arrayToObject')) {

  function arrayToObject($array)
  {
    return json_decode(json_encode($array));
  }
}



if (!function_exists('validationErrors')) {

  function validationErrors($errors)
  {
    $result = [];

    foreach ($errors as $key => $value) {
      array_push(
        $result,
        [
          'field' => $key,
          'error' => $value
        ]
      );
    }

    return $result;
  }
}

if (!function_exists('stringtodatetime')) {

  function stringtodatetime($string)
  {
    $date = strtotime($string);
    return date('Y/m/d h:i:s', $date);
  }
}
if (!function_exists('failSafeRedirect')) {

  function failSafeRedirect($url)
  {
    if (filter_var($url, FILTER_VALIDATE_URL) === false) {
      $url = "http://" . $_SERVER['SERVER_NAME'] . $url;
    }

    if (!headers_sent()) {
      header('Location: ' . $url);
      exit;
    } else {
      echo '<script type="text/javascript">';
      echo 'window.location.href="' . $url . '";';
      echo '</script>';
      echo '<noscript>';
      echo '<meta http-equiv="refresh" content="0;url=' . $url . '" />';
      echo '</noscript>';
      exit;
    }
  }
}
