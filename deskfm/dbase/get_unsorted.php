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
   public $listype;
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
$rebar->listype = "unsorted";

$rebar->month = $month -1;
$rebar->year = $year;

$limit = 1000;
if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}

$chunk_start = $chunk * $limit;

  $mysqli = new mysqli($Server, $username, $password, $db_name);

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* change character set to utf8 */
if (!$mysqli->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
}

  $where = "";

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
  $result = $mysqli->query($sql); 

  $num_rows = $result->num_rows;
  $rebar->dalist_len = $num_rows;

  $arr = array();
  while($row = $result->fetch_assoc()) {

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

 
