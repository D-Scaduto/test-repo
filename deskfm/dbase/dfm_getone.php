<?php
include '../../config/names.php';

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


$uname = $_GET['uname'];
$listype = $_GET['listype'];
$pid = $_GET['pid'];


$con = mysql_connect($Server, $username, $password);

 if (!$con)
   {
    echo('Could not connect: ' . mysql_error());
  }

   mysql_select_db($db_name, $con);

  $sql="";
 
  if ($listype == 'webits') {
  
  if ($source == 'deskfm') {
      $sql= $sql .  "  SELECT * FROM dfm_posts where owner_id='" . $uname . "' ";
       $sql= $sql .  "  and webit_id ='" . $pid . "' ";
  }

   if ($source="twitter") {
      $sql= $sql .  "  SELECT * FROM dfm_posts where webit_id='" . $pid . "' ";
   }
  }
//  echo $sql;

 $result = mysql_query($sql);

  $row = mysql_fetch_array($result); 

    $bar = new foo;
   if ($listype == 'webits') {
 
    $bar->pid =    $row['webit_id'];
    $bar->uname = $row['owner_id'];
    $bar->story  =  $row['story'];
    $bar->source = $row['deskfm'];
    $bar->cat = $row['cat'];
    $bar->subcat = $row['subcat'];
    $bar->dfdate = $row['twdate'];
    $bar->picurl = $row['picurl'];;
    $bar->linkurl = $row['linkurl'];;
    $bar->embedurl = $row['embedurl'];;

  } 

  echo json_encode($bar); 

?>

 
