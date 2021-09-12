<?php
  $jsonurl = "http://data.alexa.com/data?cli=10&url=code2night.com";
 header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $jsonurl);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true );
  $result = curl_exec($ch);
  if( !$result ) {
   die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));

  }
  curl_close($ch);
  echo $result;
?>