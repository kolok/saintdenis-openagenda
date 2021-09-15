<?php

$ch = curl_init('https://api.openagenda.com/v2/requestAccessToken'); 
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, array(
  'grant_type' => 'authorization_code',
  'code' => 'XXXXXXX'
));

$received_content = curl_exec($ch);


if (curl_getinfo($ch, CURLINFO_HTTP_CODE) == 200) {
  print('success');
  $data = 'test';
  $data = json_decode($received_content, true);
  $accessToken = $data['access_token'];
}
print('finish')

?>
