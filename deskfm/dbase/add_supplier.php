<?php
include '../../config/names.php';

class foo { 
   public $pid; 
   public $uname;
   public $story;
   public $picurl;
   public $linkurl;
   public $embedurl;
}


class bar { 
   public $pobj;
   public $npsql;
   public $npres; 
   public $cpsrc;
   public $cpdest;
   public $cpres;
   public $insql;
   public $inres; 
   public $cognomen;
}


$ret = new bar;

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}


$picurl = 'null';
if (isset($_GET['picode'])) {
  $picurl = $_GET['picode']; 
}

$linkurl = "";
if (isset($_GET['linkcode'])) {
   $linkurl = $_GET['linkcode'];
}	

$story = "";
if (isset($_GET['storycode'])) {
   $story = $_GET['storycode']; 
}

$embedurl = "";
if (isset($_GET['embedcode'])) {
  $embedurl = $_GET['embedcode']; 
}

$pid = uniqid();

     $con = mysql_connect($Server, $username, $password);
      mysql_select_db($db_name, $con);
      $np = false;

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

     $sql_ins = "insert into dfm_suppliers values ('" . $pid . "','" . $uname . "','"  . $story .  "','" . $picurl . "' ,'" . $linkurl . "','" . $embedurl . "'  )";

     $ret->insql = $sql_ins;    
     $result = mysql_query($sql_ins);
     $ret->inres = $result;    

     $sql= " SELECT * FROM dfm_suppliers where supplier_id='" . $uname . "' ";

     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
           $b2 = new foo;
           $b2->pid = $row['supplier_id'];
           $b2->uname = $row['name'];
           $b2->story  =  $row['story'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
           $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


