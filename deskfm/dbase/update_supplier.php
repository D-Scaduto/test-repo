<?php
include '../../config/names.php';

 class foo { 
   public $pid; 
   public $uname;
   public $story;
   public $picurl;
   public $linkurl;
   public $emebedurl;
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

$listype = "suppliers";


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

$uname = "null";
if (isset($_GET['uname'])) {
  $uname = $_GET['uname'];
}


$pid = $_GET['pid'];

$con = mysql_connect($Server, $username, $password);

   mysql_select_db($db_name, $con);

 $sql_upd="";
 $some = false;

     if ($uname != "null") {
       $sql_upd = $sql_upd . " name = '" . $uname . "'"; 
       $some = true;
     }


     if ($story != "null") {
       $sql_upd = $sql_upd . " story = '" . $story . "'"; 
       $some = true;
     }

     if ($picurl != "null") {

      $prefix = "tmpics/";
      $prepos = strpos($picurl,$prefix);
      if (substr($picurl,0,7) == $prefix) {
 
	  $prepos = $prepos + strlen($prefix);
	  $picslice = substr($picurl,$prepos);

	  $cognomen = strrchr($picurl,".");
	  $ret->cognomen = $cognomen;
	  $picfile = $pid;
	  if (strlen($cognomen < 7)) {
	    $picfile = $pid . $cognomen; 
          }
	  $cpsrc = "../../tmpics/" . $picslice;
	  $ret->cpsrc = $cpsrc;
	  $cpdest = "../../pics/" . $picfile;
	  $ret->cpdest = $cpdest;
	  $res = copy ($cpsrc,$cpdest);
	  $ret->cpres = $res;
	  if ($res == true) {
		  $picurl = "/pics/" . $picfile;
	  }
      }

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

      $sql_upd = "update dfm_suppliers set " . $sql_upd;
      $sql_upd = $sql_upd . " where supplier_id ='" . $pid . "'";
//      echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    //  echo $result . " \n <br> ";
  }

   $ret->sql = $sql_upd;    
   $ret->resql = $result;    

       $sql= "  SELECT * FROM dfm_suppliers where supplier_id='" . $pid . "' ";

  // echo $sql  . "  \n <br>  ";
     $result2 = mysql_query($sql);
     $row = mysql_fetch_array($result2); 

       $b2 = new foo;
 
           $b2->listype = "suppliers";
           $b2->pid = $row['supplier_id'];
           $b2->uname = $row['name'];
           $b2->story  =  $row['story'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];

       $ret->pobj = $b2;
 
    echo json_encode($ret); 

     mysql_close($con);

?>

 
