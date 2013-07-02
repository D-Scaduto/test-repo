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
   public $picurl = "";
   public $linkurl = "";
   public $embedurl = "";
   public $listype = "";

  }

 class bar {
   public $dalist;
 }
 $rebar = new bar;
 $arr = array();

 $q = "";
 if (isset($_GET['q'])) {
  $q = $_GET['q'];
 }
 $qs = "q=" . $q;

    $reply = $cb->search_tweets($qs,true);
 
    for ($i =0; $i < sizeof($reply->statuses); $i++ ) {

      $d = $reply->statuses[$i];

      if ($d != null) {

      $foodo = new foo;
 
      $foodo->source = "twitter";
      $foodo->listype = "unsorted";

      $foodo->pid =    $d->id_str;


        $foodo->picurl = $d->user->profile_image_url;

        $foodo->uname = $d->user->screen_name;

      $foodo->story  =  $d->text;

      $foodo->dfdate = $d->created_at;
 
      $foodo->linkurl = "";
      $foodo->embedurl = "";

      $foodo->urls = array();

      $arr[] = $foodo;

      }
    }

    $rebar->dalist = $arr;
 
    echo json_encode($rebar);


?> 

