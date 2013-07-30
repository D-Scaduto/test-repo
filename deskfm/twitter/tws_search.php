<?php
require_once('../../lib/codebird.php');
 
$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();

$reply = $cb->oauth2_token();
$bearer_token = $reply->access_token;

 class foo { 
 
   public $pid = ""; 
   public $uname = "";
   public $cat = "";
   public $subcat = "";
   public $story = "";
   public $prodid = "";
   public $price = "";
   public $source = "";
   public $dfdate = "";
   public $created_at = "";
   public $change_date = "";
   public $picurl = "";
   public $linkurl = "";
   public $embedurl = "";
   public $listype = "";

  }

 class bar {
	
	 public $listlen = 0;
	 public $last_twid = "";
	 public $first_date = "";
	 public $last_date = "";
	 public $dalist = "";
 }

 $rebar = new bar;
 $arr = array();

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
 $len = sizeof($reply->statuses);
 $rebar->listlen = $len; 
 $rebar->last_twid = $reply->statuses[$len-1]->id_str;
 $rebar->first_date = $reply->statuses[0]->created_at;
 $rebar->last_date = $reply->statuses[$len-1]->id_str;

    for ($i =0; $i < sizeof($reply->statuses); $i++ ) {

      $d = $reply->statuses[$i];

      if ($d != null) {

      $foodo = new foo;
 
      $foodo->source = "twitter";
      $foodo->listype = "unsaved";

      $foodo->pid =    $d->id_str;

        $foodo->picurl = $d->user->profile_image_url;

        $foodo->uname = $d->user->screen_name;

      $foodo->story  =  $d->text;

	$foodo->created_at = $d->created_at;
 
      $foodo->linkurl = "";
      $foodo->embedurl = "";

      $foodo->urls = array();

      $arr[] = $foodo;

      }
    }

    $rebar->dalist = $arr;
 
    echo json_encode($rebar);


?> 

