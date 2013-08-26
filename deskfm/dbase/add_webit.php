<?php
include '../../config/names.php';

class foo { 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $source;
   public $stored = true;
   public $created_at;
   public $change_date;
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $prodid;
   public $price;
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

$pid = 'null';
if (isset($_GET['pid'])) {
  $pid = $_GET['pid']; 
}

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}

$created_at = 'now()';
if (isset($_GET['created_at'])) {
   $created_at = $_GET['created_at'];
  }

$cat = "";
if (isset($_GET['cat'])) {
  $cat = $_GET['cat']; 
}

$subcat = "";
if (isset($_GET['subcat'])) {
  $subcat = $_GET['subcat']; 
}

$picsrc = "null";
if (isset($_GET['picsrc'])) {
  $picsrc = $_GET['picsrc']; 
}

$picurl = "";
if (isset($_GET['picurl'])) {
  $picurl = $_GET['picurl']; 
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

$source = "";
if (isset($_GET['source'])) {
	$source = $_GET['source']; 
}

$prodid = "";
if (isset($_GET['prodid'])) {
	$prodid = $_GET['prodid']; 
}

$price = "";
if (isset($_GET['price'])) {
  $price = $_GET['price']; 
}

if ($pid == 'null') {
   $pid = uniqid();
}

$picaddr = "";

     $con = mysql_connect($Server, $username, $password);
      mysql_select_db($db_name, $con);
      $np = false;

      if ($uname == 'null' )  {

        $uname = uniqid();
        $sql_ins = "insert into dfm_people values ('" . $uname . "','','','','','','','',now())";
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
	  $picurl = $picaddr;
      }

     $sql_ins = "insert into dfm_webits values ('" . $pid . "','" . $source . "','" . $uname . "','" . $cat . "','" . $subcat . "','" . addslashes($story) .  "','" . $created_at . "', now() ,'" . $picurl . "' ,'" . $linkurl . "','" . $embedurl . "','',''  )";

     $ret->insql = $sql_ins;    
     $result = mysql_query($sql_ins);
     $ret->inres = $result;    

       $sql= "  SELECT * FROM dfm_webits where webit_id='" . $pid . "' ";

     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
     $b2 = new foo;

           $b2->pid = $row['webit_id'];
           $b2->source =$row['source'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->cat = $row['cat'];
	   $b2->subcat = $row['subcat'];
	   $b2->created_at = $row['created_at'];
	   $b2->change_date = $row['change_date'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
       

     $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


