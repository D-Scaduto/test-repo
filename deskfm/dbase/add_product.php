<?php
include '../../config/names.php';

class foo { 
   public $listype = "product"; 
   public $pid;
   public $provider;
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $dfdate;
   public $prodid;
   public $price;
}


class bar { 
   public $pobj;
   public $npsql;
   public $npres; 
   public $insql;
   public $inres; 
   public $cognomen;
}


$ret = new bar;

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}


$prodid = "";
if (isset($_GET['prodid'])) {
	$prodid = $_GET['prodid']; 
}

$price = "";
if (isset($_GET['price'])) {
	$price = $_GET['price']; 
}


$picsrc = "";
if (isset($_GET['picode'])) {
  $picsrc = $_GET['picode']; 
}


$pid = uniqid();

$picaddr = "";

     $con = mysql_connect($Server, $username, $password);
      mysql_select_db($db_name, $con);
      $np = false;

      if ($uname == 'null' )  {

        $uname = uniqid();
        $sql_ins = "insert into dfm_products values ('" . $uname . "','','','','','','','',now())";
        $ret->npsql = $sql_ins;    
        $result = mysql_query($sql_ins);
        $ret->npres = $result;    
     }

     if (($picsrc != "null" ) && ($picsrc != ""))  {

	  $prefix = "/pics/tmp/";          
	   $prepos = strpos($picsrc,$prefix);
	   $prepos = $prepos + strlen($prefix);

	  $picslice = substr($picsrc,$prepos);

	   $cognomen = strrchr($picsrc,".");
	   $ret->cognomen = $cognomen;
	  $picfile = $pid;
	  if (strlen($cognomen < 7)) {
	    $picfile = $pid . $cognomen; 
          }
	  $cpsrc = "../../pics/tmp/" . $picslice;
	  $ret->cpsrc = $cpsrc;
	  $cpdest = "../../pics/keepers/" . $picfile;
	  $ret->cpdest = $cpdest;
	  $res = copy ($cpsrc,$cpdest);
	  $ret->cpres = $res;
	  if ($res == true) {
		  $picaddr = "/pics/keepers/" . $picfile;
	  }

     }


     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
         $b2 = new foo;
         if ($source == "product") {

           $b2->uname = $row['person_id'];
           $b2->dfdate = $row['twdate'];
           $b2->picurl = $row['picurl'];
           $b2->groupid = $row['group_id'];
         }
       

     $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


