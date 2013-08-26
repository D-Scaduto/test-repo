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
   public $sql;
   public $dalist_len;
   public $dachunk;
   public $cat;
   public $subcat;
   public $month;
   public $year;
   public $dalist;
 }


 $rebar = new bar;
 

$month = "null";
if (isset($_GET['month'])) {
  $month = $_GET['month'];
}

$year = "null";
if (isset($_GET['year'])) {
  $year = $_GET['year'];
}

$chunk = 0;
if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}


$rebar->dachunk = $chunk;
$rebar->month = $chunk;
$rebar->year = $year;

$limit = 1000;
if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}

$chunk_start = $chunk * $limit;

  $con = mysql_connect($Server, $username, $password);

  $where = "";

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }

  mysql_select_db($db_name, $con);

   if ($month != "null") {
       $where = $where . " and month(created_at) = $month ";
   }
   if ($year != "null") {
       $where = $where . " and year(created_at) = $year ";
   }

  $sql = "";
  $sql= $sql . "  SELECT  SQL_CALC_FOUND_ROWS  * FROM dfm_webits ";
  $sql = $sql .  " where cat = '' and subcat = ''  ";
  $sql = $sql . $where ;
  $sql = $sql .  " order by created_at DESC ";
  $sql= $sql . "  LIMIT " . $chunk_start . " , " . $limit;
  
  $rebar->sql = $sql;
  $result = mysql_query($sql); 

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];
  $rebar->dalist_len = $num_rows;

 
  $arr = array();
  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $foodo->listype = "unsorted";

    $foodo->pid =    $row['webit_id'];
    $foodo->source =    $row['source'];
    $foodo->picurl = $row['picurl'];
 
    $foodo->uname = $row['owner_id'];
    $foodo->story  = $row['story'];

    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];

    $foodo->created_at = $row['created_at'];
 
    $foodo->linkurl = $row['linkurl'];

    $foodo->urls = array();
    $foodo->embedurl = $row['embedurl'];

     $arr[] = $foodo;
   }
   $rebar->dalist = $arr;

  

   echo json_encode($rebar); 

?>

 
