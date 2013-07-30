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
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $listype;
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

$dfdate = "null"; 
if (isset($_GET['dfdate'])) {
 $dfdate = $_GET['dfdate'];
}

$listype = 'webits';
$source = $_GET['source'];

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
    if ($source == "deskfm") {
      $sql_upd = "update dfm_posts set " . $sql_upd;
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";
    }
    if ($source == "twitter") {
      $sql_upd = "update dfm_tweets set " . $sql_upd;
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";
    }

    //      echo $sql_upd  . " \n <br> " ;
    
    $result = mysql_query($sql_upd);
    //  echo $result . " \n <br> ";
  }

   $ret->sql = $sql_upd;    
   $ret->resql = $result;    

     if ($source == 'deskfm') {
       $sql= "  SELECT * FROM dfm_posts where webit_id='" . $pid . "' ";
     }

     if ($source=="twitter") {
       $sql= "  SELECT * FROM dfm_tweets where webit_id='" . $pid . "' ";
     }
 
  //  echo $sql  . "  \n <br>  ";
     $result2 = mysql_query($sql);
     $row = mysql_fetch_array($result2); 

       $b2 = new foo;
 
           $b2->listype = "webits";
           $b2->pid = $row['webit_id'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->source = $source;
           $b2->cat = $row['cat'];
           $b2->subcat = $row['subcat'];
           $b2->dfdate = $row['twdate'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
	   $b2->change_date = $row['change_date'];

     if ($groupid != "null") {
        $sql_upd = "update dfm_people set group_id ='" . $groupid ."' where person_id = '" . $uname . "'"; 
        $result = mysql_query($sql_upd);
        $b2->groupid = $groupid;
     //  echo $result . " \n <br> ";
     }

        $ret->pobj = $b2;

      if (($picurl != "null" ) && ($picurl != ""))  {
          $prefix = "http://" . $Server . "/pics/tmp/";
          $picslice = substr($picurl,strlen($prefix));
          $cognopos = strrpos($picurl,"."); 
          $cognomen = substr($picurl,$cognopos);
          $ret->cognomen = $cognomen;
          $picfile = $pid . $cognomen; 
          $cpsrc = "../../pics/tmp/" . $picslice;
          $ret->cpsrc = $cpsrc;
          $cpdest = "../../pics/keepers/" . $picfile;
          $ret->cpdest = $cpdest;
          $res = copy ($cpsrc,$cpdest);
          $ret->resultcp = $res;
          $picaddr = $Server . "/pics/keepers/" . $picfile;
      }


     echo json_encode($ret); 

     mysql_close($con);

?>

 
