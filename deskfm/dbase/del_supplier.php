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


$pid = 'null';
$pid = $_GET['pid'];

$con = mysql_connect($Server, $username, $password);

   mysql_select_db($db_name, $con);

 $sql_upd="";
 $ret = new foo();

  if ($pid != 'null') {

      $sql_upd = "delete from dfm_suppliers  ";
      $sql_upd = $sql_upd . " where supplier_id ='" . $pid . "'";

      $ret->picfile = "../pics/" . $pid . "\.*";
      foreach(glob($ret->picfile) as $filename) {
        unlink($filename);
      }

//   echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    $ret->sql = $sql_upd;
    $ret->dbdres = $result;
    $ret->pid = $pid;
    echo json_encode($ret); 
  }

?>

 
