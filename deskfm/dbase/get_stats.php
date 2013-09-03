<?php
include '../../config/names.php';

class foo {
 	
    public $cat;
    public $subcat;
    public $prodid;
    public $groupid;
    public $month;
    public $year;
    public $desc;
    public $listype;
    public $lnum;
    public $cnum;
    public $max_chunks;
    public $last_chunk = "-1";
}

class bar {
    public $cats = array();
    public $subs = array();
    public $prods = array();
    public $groups = array();
    public $months = array();
    public $total_products;
    public $total_people;
    public $total_unsorted;
    public $total_sorted;
    public $sql = "";
}

//error_reporting(E_ERROR);


$con = mysql_connect($Server, $username, $password);
  if (!$con){
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $baro = new bar();

  $sql = "";
  $sql= " select cat,subcat,count(*) from dfm_webits ";
  $sql = $sql . " where cat != '' and cat != 'junk' ";
  $sql = $sql . " group by cat,subcat ";

  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass();
    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];
    $foodo->cnum = $row['count(*)'];
    $foodo->listype = "webits";
    $baro->subs[] = $foodo;
  }

 


  $sql = "";
  $sql = $sql . " select month(created_at),year(created_at),count(*) from dfm_webits ";
  $sql = $sql . " where cat = '' ";
  $sql = $sql . " group by month(created_at),year(created_at)"; 
  $baro->sql =$sql;
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass;
    $foodo->month = $row[0] -1;
    $foodo->year = $row[1];
    $foodo->cnum = $row[2];
    $foodo->listype = "unsorted";
    $baro->months[] = $foodo;
  }





  $sql = "";
  $sql= " select prodid,count(*) from dfm_products ";
  $sql = $sql . " group by prodid";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass;
    $foodo->prodid = $row['prodid'];
    $foodo->cnum = $row['count(*)'];
    $foodo->listype = "products";
    $baro->prods[] = $foodo;
  }



  $sql = "";
  $sql= " select group_id,count(*) from dfm_people ";
  $sql = $sql . " group by group_id ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass;
    $foodo->groupid = $row['group_id'];
    $foodo->cnum = $row['count(*)'];
    $foodo->listype = "people";
    $baro->groups[] = $foodo;
  }

  $sql = "";
  $sql= " select count(*) from `dfm_products` ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $baro->total_products = $row[0];
  }

  $sql = "";
  $sql= " select count(*) from dfm_people ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $baro->total_people = $row[0];
  }

  $sql = "";
  $sql= " select count(*) from dfm_webits where cat = ''; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $baro->total_unsorted = $row[0];
  }


  $sql = "";
  $sql= " select count(*) from dfm_webits where cat != '' and cat != 'junk'; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $baro->total_sorted = $row[0];
  }

  echo json_encode($baro); 

?>

 
