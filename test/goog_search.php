<?php
/*
  takes a search term $SearchItem
  collects an array of 100 image items
  writes the array to a file called $FileName
*/

$FileName = 'search_results.txt';
$SearchItem = 'standing desks';

header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >

<?php
/*
 * Copyright 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
require_once '../lib/google-api-php-client/src/Google_Client.php';
require_once '../lib/google-api-php-client/src/contrib/Google_CustomsearchService.php';
session_start();

$client = new Google_Client();
$client->setApplicationName('Google CustomSearch PHP Starter Application');
// Docs: http://code.google.com/apis/customsearch/v1/using_rest.html
// Visit https://code.google.com/apis/console?api=customsearch to generate
// your developer key (simple api key).
 $client->setDeveloperKey('AIzaSyCjXAewxHxllLQEd_Da4jUbo7XGbax62k4');
$search = new Google_CustomsearchService($client);

$totResult = array();
for ($i=1;$i<100;$i+=10){
  // Example executing a search with your custom search id.
  
  $result = $search->cse->listCse($SearchItem, array(
	  'cx' => '006053170280681811530:cu2m8chxs6u', // The custom search engine ID to scope this search query.
	  'start' => $i , 
	  'num' => '10' , 
	  'searchType' => 'image' ,
   ));
   
  for ($j=0;$j<10;$j++){
    $totResult[$j+$i] = $result['items'][$j];
  }
  
}

// encodes results to ensure easier manipulation
file_put_contents( $FileName, json_encode($totResult));

//used for testing
//print "<pre>" . print_r($totResult, true) . "</pre>";


/*
 * Example executing a search with the URL of a linked custom search engine.
 * $result = $search->cse->listCse('burrito', array(
 * 'cref' => 'http://www.google.com/cse/samples/vegetarian.xml',
 * ));
 * print "<pre>" . print_r($result, true) . "</pre>";
*/
?>