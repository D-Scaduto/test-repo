<?php
include '../../config/names.php';

  class foo { 
    public $cat = "";
    public $subcat = "";
    public $prodid = "";
    public $groupid = "";
    public $desc = "";
    public $lnum = 0;
    public $cnum = 0;
    public $max_chunks = 0;
    public $last_chunk = 0;
  }

  class bar {
    public $cats = array();
    public $subs = array();
    public $prods = array();
    public $groups = array();
    public $total_products;
    public $total_people;
    public $total_unsorted;
    public $total_sorted;
    public $sql1 = "";
  }

$con = mysql_connect($Server, $username, $password);
  if (!$con){
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $baro = new bar;

  $sql = "";
  $sql= " select dt.cat,dt.subcat,count(*) from dfm_tweets dt ";
  $sql = $sql . " where dt.cat != '' and dt.cat != 'junk' ";
  $sql = $sql . " group by dt.cat,dt.subcat ";

  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];
    $foodo->cnum = $row['count(*)'];
    $baro->subs[] = $foodo;
  }

  $sql = "";
  $sql= " select month(dt.created_at),year(dt.created_at),count(*) from dfm_tweets dt ";
  $sql = $sql . " where dt.cat = '' ";
  $sql = $sql . " group by month(dt.created_at),year(dt.created_at) ";

  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->month = $row[0];
    $foodo->year = $row[1];
    $foodo->cnum = $row['count(*)'];
    $baro->subs[] = $foodo;
  }

  $sql = "";
  $sql= $sql . " select dp.cat,dp.subcat,count(*) from dfm_posts dp  ";
  $sql = $sql . " where dp.cat != '' and dp.cat != 'junk' "; 
  $sql = $sql . " group by dp.cat,dp.subcat ";

  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];
    $foodo->cnum = $row['count(*)'];

    $bf = false;
    $dex = 0;
    for ($b=0;$b<count($baro->subs);$b++) {
       if (($baro->subs[$b]->cat == $foodo->cat ) && ($baro->subs[$b]->subcat == $foodo->subcat )) {
          $bf = true;
          $dex = $b;
       }
    }

    if ($bf == true) {
        $baro->subs[$dex]->cnum = $baro->subs[$dex]->cnum + $row['count(*)'];
    } else {
        $baro->subs[] = $foodo;
    }
  }

  $sql = "";
  $sql= " select prodid,count(*) from dfm_products ";
  $sql = $sql . " group by prodid";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->prodid = $row['prodid'];
    $foodo->cnum = $row['count(*)'];
    $baro->prods[] = $foodo;
  }

  $sql = "";
  $sql= " select group_id,count(*) from dfm_people ";
  $sql = $sql . " group by group_id ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->groupid = $row['group_id'];
    $foodo->cnum = $row['count(*)'];
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
  $sql= " select count(*) from dfm_tweets where cat = ''; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $baro->total_unsorted = $row[0];
  }

  $sql = "";
  $sql= " select count(*) from dfm_posts where cat = ''; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $baro->total_unsorted = $baro->total_unsorted + $row[0];
  }

  $sql = "";
  $sql= " select count(*) from dfm_tweets where cat != '' and cat != 'junk'; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $baro->total_sorted = $row[0];
  }

  $sql = "";
  $sql= " select count(*) from dfm_posts where cat != '' and cat != 'junk'; ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $baro->total_sorted = $baro->total_sorted + $row[0];
  }
  echo json_encode($baro); 

?>

 
