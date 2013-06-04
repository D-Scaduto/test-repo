<?php


 class foo { 
 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $source;
   public $dfdate ;
   public $linkurl;
   public $picurl;
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
 

$limit = 50;


$yr = $_GET['yr'];
$mon = $_GET['mon'];

$chunk = 0;
if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}
$rebar->dachunk = $chunk;

$sterms="";
$sterms = $_GET['sterms'];

$week = $_GET['week'];

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


$uname = "null";
if (isset($_GET['uname'])) {
  $uname = $_GET['uname'];
}
$chunk_start = $chunk * $limit;

$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');

$where = "";

 if (!$con)
   {
    echo('Could not connect: ' . mysql_error());
  }

   mysql_select_db('benman', $con);

  $some = false;

  $where =  " where cat != 'junk' ";
  $some = true;

  if ($cat != "null" ) {
     $where =  $where . " and cat ='" . $cat . "'";
  }

    if ($subcat != "null" ) {
         $where = $where . " and subcat ='" . $subcat . "'";
    } 
  
  if ($uname != "null" ) {
     $where =  $where . " and owner_id ='" . $uname . "'";
  }


  if ($mon != "" ) {

      $where = $where . " and " ;
    $where = $where . " Month(twdate) = " . $mon . " ";
  }

  if ($yr != "" ) { 
      $where = $where . " and " ;
    $where = $where . " Year(twdate) = 20" . $yr . " ";
  }

  if ($week == "1") {
      $where = $where . " and " ;
    $where = $where . " Day(twdate) <= 7 ";
  }

  if ($week == "2") {
    $where = $where . " and " ;
    $where = $where . " Day(twdate) > 7 ";
   $where = $where . " and Day(twdate) <= 14 ";
  }

  if ($week == "3") {
    $where = $where . " and " ;
   $where = $where . " Day(twdate) > 14 ";
   $where = $where . " and Day(twdate) <= 21 ";
  }


  if ($week == "4") {
     $where = $where . " and " ;
   $where = $where . " Day(twdate) > 21 ";
  }

  if ($sterms != "" ) {
      $where = $where . " and (" ;
    $where = $where . " story like '%" . $sterms . "%'";
    $where = $where . " or owner_id like '%" . $sterms . "%' )";
  }

  $sql = "";
  $sql= $sql .  "(  SELECT SQL_CALC_FOUND_ROWS *,'twitter' FROM dfm_tweets ". $where . " ) ";
  $sql= $sql . " union ";
  $sql= $sql . " ( SELECT *,'deskfm' FROM dfm_posts ". $where .") ";

  $sql= $sql . " LIMIT " . $chunk_start . " , " . $limit;


 // echo $sql . " \n <br> " ;
  $rebar->dasql1 = $sql;
 
  $result = mysql_query($sql);

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];


   // if no rows returned 

$some=false;

//  if ($num_rows < $limit  ) {
  if (false) {


 if ($cat != "null" ) {
     $where =  " where cat ='" . $cat . "'";
     $some = true;
  }

/*
if ($mon != "" ) {
  if ($some == true) {
    $where = $where . " and " ;
  } else { 
    $where = " where " ;
  }
  $where = $where . " Month(twdate) <= " . $mon . " ";
  $some = true;
}


if ($yr != "" ) { 
  if ($some == true) {
    $where = $where . " and " ;
  } else { 
    $where = " where " ;
  }

  $where = $where . " Year(twdate) <= 20" . $yr . " ";
  $some = true;
}
*/

   $sql = "";
   $sql= $sql . " (  SELECT  SQL_CALC_FOUND_ROWS *,'twitter' FROM dfm_tweets ". $where .") ";
   $sql= $sql . " union ";

   $sql= $sql .  "( SELECT *,'deskfm' FROM dfm_posts ". $where . " ) ";
  
//   $sql= $sql . " order by twdate DESC "  ;
   $sql= $sql . " LIMIT " . $chunk_start . " , " . $limit;
 
   $rebar->dasql2 = $sql;

   $result = mysql_query($sql);  
   $result2 = mysql_query('select found_rows()');
   $row2 = mysql_fetch_row($result2);
   $num_rows = $row2[0];

  }


  $rebar->dalist_len = $num_rows;
 
  $arr = array();

  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $source= $row['twitter'];
    $foodo->source = $source;
    $foodo->listype = 'webits';

    $foodo->pid =    $row['webit_id'];
    $foodo->picurl = $row['picurl'];
 
    $foodo->uname = $row['owner_id'];
    $foodo->story  = $row['story'];

    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];

    $foodo->dfdate = $row['twdate'];
 
    $foodo->linkurl = $row['linkurl'];
    $foodo->embedurl = $row['embedurl'];

    $foodo->urls = array();
//    $foodo->urls[] = $row['linkurl'];
//    if ($source != 'deskfm') {
      $arr[] = $foodo;
//     }
   }
   $rebar->dalist = $arr;

   echo json_encode($rebar); 

?>

 
