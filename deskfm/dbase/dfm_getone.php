
<?php
<<<<<<< HEAD

=======
include 'names.php';
>>>>>>> 2a502c387d7da59a00415b9e9120362d4fc756f4
 class foo { 
 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $source;
   public $dfdate ;
   public $linkurl;
 
}


$uname = $_GET['uname'];
$listype = $_GET['listype'];
$pid = $_GET['pid'];


<<<<<<< HEAD
$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
=======
$con = mysql_connect($Server, $username, $password);
>>>>>>> 2a502c387d7da59a00415b9e9120362d4fc756f4

 if (!$con)
   {
    echo('Could not connect: ' . mysql_error());
  }

   mysql_select_db('benman', $con);

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
    $bar->linkurl = $row['dfm_linkurl'];;

  } 

  echo json_encode($bar); 

?>

 
