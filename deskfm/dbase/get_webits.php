<?php
include '../../config/names.php';

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
   public $dasql1;
   public $dasql2;
   public $dalist_len;
   public $dachunk;
   public $dalist;
 }


 $rebar = new bar;
 

$limit = 1000;

$chunk = 0;
if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}
$rebar->dachunk = $chunk;

if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}

$cat = "null"; 
if (isset($_GET['cat'])) {
 $cat = $_GET['cat'];
}

$subcat = "null";
if (isset($_GET['subcat'])) {
  $subcat = $_GET['subcat'];
}

$chunk_start = $chunk * $limit;

$con = mysql_connect("$Server", "$username", "$password");

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $sql = "";
  $sql = $sql . " select SQL_CALC_FOUND_ROWS * from dfm_webits  ";

  if ($cat == "null") {
    $where = " where cat != '' and subcat != ''  ";
    $where = $where . " and cat != 'deleted' and cat != 'junk' ";
  } else {
    $where = " where cat = '" . $cat . "'";
    if ($subcat != "null") {
      $where = $where . " and subcat ='" . $subcat . "'";
    }
  }
  $sql = $sql . $where;

  
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
 
  
    $foodo->listype = "webits";

    $foodo->pid =    $row['webit_id'];
    $foodo->picurl = $row['picurl'];
    $foodo->source = $row['source'];

    $foodo->uname = $row['owner_id'];
    $foodo->story  = $row['story'];

    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];
    $foodo->created_at = $row['created_at'];
 
    $foodo->linkurl = $row['linkurl'];
    $foodo->embedurl = $row['linkurl'];

    $foodo->urls = array();
    $arr[] = $foodo;
   }
   $rebar->dalist = $arr;

   echo json_encode($rebar); 

?>

 
