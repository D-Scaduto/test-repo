<?php

 class foo { 
   public $uname;
   public $source;
   public $picurl;
   public $groupid;
   public $facebookid;
   public $twitterid;
   public $googleid;
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

$source = $_GET['source'];


$picurl = "null";
if (isset($_GET['picode'])) {
  $picurl = $_GET['picode'];
}

$groupid = "null";
if (isset($_GET['groupid'])) {
  $groupid = $_GET['groupid'];
}

$uname = $_GET['uname'];


 $con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');

 mysql_select_db('benman',$con);

 $sql_upd="";
 $some = false;

     if ($picurl != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " picurl = '" . $picurl . "'"; 
       $some = true;
     }

     if ($groupid != "null") {
       if ($some == true) {
         $sql_upd = $sql_upd . " , ";
       }
       $sql_upd = $sql_upd . " group_id = '" . $groupid . "'"; 
       $some = true;
     }
  
  if ($some == true) {

      $sql_upd = "update dfm_people set " . $sql_upd;
      $sql_upd = $sql_upd . " where person_id ='" . $uname . "'";

  //    echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    //  echo $result . " \n <br> ";
  }

   $ret->sql = $sql_upd;    
   $ret->resql = $result;    

       $sql= "  SELECT * FROM dfm_people where person_id='" . $uname . "' ";
   
//     echo $sql  . "  \n <br>  ";
     $result2 = mysql_query($sql);
     $row = mysql_fetch_array($result2); 

       $b2 = new foo;
 
       $b2->listype = "people";
       $b2->uname = $row['person_id'];
       $b2->source = 'person';
       $b2->picurl = $row['picurl'];
       $b2->groupid = $row['groupid'];
       $b2->emailaddr = $row['emailaddr'];
       $b2->facebookid = $row['facebookid'];
       $b2->googleid = $row['googleid'];

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

 
