<?php
include '../../config/names.php';

class pfoo { 
   public $uname;
   public $group_id;
   public $picurl;
   public $emailaddr;
   public $facebookid;
   public $twitterid;
   public $googleid;
}

 class foo { 
 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $prodid;
   public $price;
   public $source;
   public $stored = true;
   public $dfdate;
   public $created_at = "";
   public $change_date = "";
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $listype; 
  }


  class bar {
   public $dasql1;
   public $dasql2;
   public $dalist_len;
   public $dachunk;
   public $dalist;
   public $peoplelist;
   public $peoplelist_len;
 }


 $rebar = new bar;
 

$limit = 1000;

$chunk = 0;
if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}

$pchunk = 0;
if (isset($_GET['pchunk'])) {
  $whunk = $_GET['pchunk'];
}

$rebar->dachunk = $chunk;
$rebar->pchunk = $pchunk;

if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}

$chunk_start = $chunk * $limit;
$pchunk_start = $pchunk * $limit;

$con = mysql_connect($Server, $username, $password);

  $where = "";

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

   $where =  " where cat = '' and subcat = ''  ";

  $sql = "";
  $sql= $sql . "  SELECT SQL_CALC_FOUND_ROWS * FROM dfm_tweets ". $where ;

  $sql = $sql .  " order by created_at DESC ";
   $sql= $sql . " LIMIT " . $chunk_start . " , " . $limit; 
 // echo $sql . " \n <br> " ;
  $rebar->dasql1 = $sql;
 
  $result = mysql_query($sql);

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];
  $rebar->dalist_len = $num_rows;

  $arr = array();
  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $foodo->source = "twitter";
    $foodo->listype = "unsorted";

    $foodo->pid =    $row['webit_id'];
    $foodo->picurl = $row['picurl'];
 
    $foodo->uname = $row['owner_id'];
    $foodo->story  = $row['story'];

    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];

    $foodo->dfdate = $row['twdate'];
 
    $foodo->linkurl = $row['linkurl'];

    $foodo->urls = array();
    $foodo->embedurl = $row['embedurl'];

     $arr[] = $foodo;
   }
   $rebar->dalist = $arr;

   $sql= " select * from dfm_people ";

   $sql = $sql . " where group_id = ''";
  $sql= $sql . " LIMIT " . $pchunk_start . " , " . $limit;

  $rebar->dasql2 = $sql;
  $result = mysql_query($sql);
  $arr = array();

  while($row = mysql_fetch_array($result)) {
    $poodo = new pfoo;
    $poodo->uname = $row['person_id'];
    $poodo->groupid = $row['group_id'];
    $poodo->picurl = $row['picurl'];
    $poodo->emailaddr = $row['emailaddr'];
    $poodo->facebookid = $row['facebookid'];
    $poodo->twitter = $row['twitterid'];
    $poodo->googleid = $row['googleid'];
    $poodo->source = "person";
    $poodo->listype = "people";
    $arr[] = $poodo;
  }

  $rebar->peoplelist = $arr;


   echo json_encode($rebar); 

?>

 
