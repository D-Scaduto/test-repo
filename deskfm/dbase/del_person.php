<?php
include '../../config/names.php';

 class foo { 
 
   public $pid; 
   public $uname; 
   public $dbdres;
   public $picfile;
   public $picdres;
   public $sql;
  }


$source = $_GET['source'];
$uname = $_GET['uname'];
$listype = $_GET['source'];

$pid = 'null';
$pid = $_GET['pid'];


$con = mysql_connect($Server, $username, $password);

   mysql_select_db($db_name, $con);

 $sql_upd="";
 $ret = new foo();

  if ($pid != 'null') {

   if ($listype == "webit") {

    if ($source == "deskfm") {
 
      $sql_upd = "delete from dfm_posts  ";
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";

      $ret->picfile = "../../pics/keepers/" . $pid . "\.*";
      foreach(glob($ret->picfile) as $filename) {
        unlink($filename);
      }
    }

    if ($source == "twitter") {
      $sql_upd = "delete from dfm_tweets ";
      $sql_upd = $sql_upd . " where webit_id ='" . $pid . "'";
    }
   }

//   echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    $ret->sql = $sql_upd;
    $ret->dbdres = $result;
    $ret->pid = $pid;
    echo json_encode($ret); 
  }

?>

 
