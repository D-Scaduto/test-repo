<?php
require_once('../lib/codebird.php');
 
$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();

$reply = $cb->oauth2_token();
$bearer_token = $reply->access_token;

 class bar {
	 public $listlen = 0;
	 public $newest_date = "";
	 public $newest_twid = "";
	 public $oldest_date = "";
	 public $oldest_twid = "";
	 public $dalist = "";
 }

 $rebar = new bar;
 $retarr = array();

 $q = "q=standing desk";
 if (isset($_GET['q'])) {
   $q = $_GET['q'];
   $q = "q=" . $q;
 }
 
 $count = 100;
 if (isset($_GET['count'])) {
	$count = $_GET['count'];
 	$q = $q . "&count=" . $count;
 }

 $maxid = "";
 if (isset($_GET['max_id'])) {
	$maxid = $_GET['max_id'];
 	$q = $q . "&max_id=" . $maxid;
 }


 $reply = $cb->search_tweets($q,true);

    echo json_encode($reply);

?> 

