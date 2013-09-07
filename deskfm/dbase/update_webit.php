<?php
include '../../config/names.php';

 class foo { 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $source;
   public $listype;
   public $stored = true;
   public $created_at;
   public $change_date;
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

$cat = "null"; 
if (isset($_GET['cat'])) {
 $cat = $_GET['cat'];
}

$subcat = "null";
if (isset($_GET['subcat'])) {
  $subcat = $_GET['subcat'];
}

$linkurl = "null";
if (isset($_GET['linkcode'])) {
  $linkurl = $_GET['linkcode'];
}

$embedurl = "null";
if (isset($_GET['embedcode'])) {
  $embedurl = $_GET['embedcode'];
}
$story = "null";
if (isset($_GET['storycode'])) {
  $story = $_GET['storycode'];
}

$groupid = "null";
if (isset($_GET['groupid'])) {
  $groupid = $_GET['groupid'];
}

$picurl = "null";
if (isset($_GET['picode'])) {
  $picurl = $_GET['picode'];
}


$pid = $_GET['pid'];
$uname = $_GET['uname'];

$con = mysql_connect($Server, $username, $password);

 mysql_select_db($db_name, $con);

 $sql_upd="";
 $some = false;
 $result = "";

     if ($story != "null") {
       $sql_upd = $sql_upd . " story = '" . $story . "'"; 
       $some = true;
     }

     if ($cat != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " cat = '" . $cat . "'" ;
       $sql_upd = $sql_upd . " , subcat = '" . $subcat . "'" ;
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
 
     if ($embedurl != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " embedurl = '" . $embedurl . "'"; 
       $some = true;
     }
     
     if($some==true){
       $sql_upd = $sql_upd . " , ";
     }
     $change_date = "now()";	
     $sql_upd = $sql_upd . "change_date = " . $change_date;


    if ($some == true) {
      $sql_upd = "update dfm_webits set " . $sql_upd;
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";
    }

    //      echo $sql_upd  . " \n <br> " ;
    
    $result = mysql_query($sql_upd);
    //  echo $result . " \n <br> ";

   $ret->sql = $sql_upd;    
   $ret->resql = $result;    

       $sql= "  SELECT * FROM dfm_webits where webit_id='" . $pid . "' ";

 
  //  echo $sql  . "  \n <br>  ";
     $result2 = mysql_query($sql);
     $row = mysql_fetch_array($result2); 

       $b2 = new foo;
 
           $b2->listype = "webits";
           $b2->pid = $row['webit_id'];
           $b2->source = $row['source'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->cat = $row['cat'];
           $b2->subcat = $row['subcat'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
	   $b2->embedurl = $row['embedurl'];
	   $b2->created_at = $row['created_at'];
	   $b2->change_date = $row['change_date'];

     if ($groupid != "null") {
        $sql_upd = "update dfm_people set group_id ='" . $groupid ."' where person_id = '" . $uname . "'"; 
        $result = mysql_query($sql_upd);
        $b2->groupid = $groupid;
     //  echo $result . " \n <br> ";
     }

        $ret->pobj = $b2;

     echo json_encode($ret); 

     mysql_close($con);

?>

 
