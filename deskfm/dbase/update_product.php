<?php
include 'names.php';
 class foo { 
   public $pid; 
   public $uname;
   public $story;
   public $source;
   public $linkurl;
   public $prodid;
   public $price;
   public $listype;
}


class bar { 
   public $pobj; 
   public $sql;
   public $resql; 
   public $cpsrc;
   public $cpdest;
   public $resultcp;
   public $cognomen;
}

$ret = new bar;

$dfdate = $_GET['dfdate'];
$listype = "webit";
$source = $_GET['source'];

$price = "null";
if (isset($_GET['price'])) {
  $price = $_GET['price'];
}

$prodid = "null";
if (isset($_GET['prodid'])) {
  $prodid = $_GET['prodid'];
}

$linkurl = "null";
if (isset($_GET['linkcode'])) {
  $prodid = $_GET['linkcode'];
}

$story = "null";
if (isset($_GET['storycode'])) {
  $story = $_GET['storycode'];
}

$picurl = "null";
if (isset($_GET['picode'])) {
  $picurl = $_GET['picode'];
}

$pid = $_GET['pid'];
$uname = $_GET['uname'];

 $con = mysql_connect($Server, $username, $password);

 mysql_select_db($db_name ,$con);

 $sql_upd="";
 $some = false;

     if ($story != "null") {
       $sql_upd = $sql_upd . " story = '" . $story . "'"; 
       $some = true;
     }

     if ($price != "null") { 
       if ($some == true) {
         $sql_upd = $sql_upd + " , ";
       }
       $sql_upd = $sql_upd . " price = '" . $price . "'" ;
       $some = true;
     }

     if ($prodid != "null") { 
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " prodid = '" . $prodid . "'" ;
       $some = true;
     }

     if ($picurl != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " picurl = '" . $picurl . "'"; 
       $some = true;
     }

     if ($linkurl != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " linkurl = '" . $linkurl . "'"; 
       $some = true;
     }

  if ($some == true) {

      $sql_upd = "update dfm_products set " . $sql_upd;
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";
//      echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    //  echo $result . " \n <br> ";
  }

   $ret->sql = $sql_upd;    
   $ret->resql = $result;    

       $sql= "  SELECT * FROM dfm_products where prodid_id='" . $prodid . "' ";

  // echo $sql  . "  \n <br>  ";
     $result2 = mysql_query($sql);
     $row = mysql_fetch_array($result2); 

       $b2 = new foo;
 
           $b2->listype = "webits";
           $b2->pid = $row['webit_id'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->source = $source;
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->prodid = $row['prodid'];
           $b2->price = $row['price'];

       $ret->pobj = $b2;
 

    if ($source == "deskfm") {
      if (($picsrc != "null" ) && ($picsrc != ""))  {
          $prefix = "http://www.deskfm.com/pics/tmp/";
          $picslice = substr($picsrc,strlen($prefix));
          $cognopos = strrpos($picsrc,"."); 
          $cognomen = substr($picsrc,$cognopos);
          $ret->cognomen = $cognomen;
          $picfile = $pid . $cognomen; 
          $cpsrc = "../../pics/tmp/" . $picslice;
          $ret->cpsrc = $cpsrc;
          $cpdest = "../../pics/keepers/" . $picfile;
          $ret->cpdest = $cpdest;
          $res = copy ($cpsrc,$cpdest);
          $ret->resultcp = $res;
          $picaddr = "http://www.deskfm.com/pics/keepers/" . $picfile;
      }
    }


     echo json_encode($ret); 

     mysql_close($con);

?>

 
