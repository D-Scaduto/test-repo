<?php
include '../../config/names.php';

class foo { 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $source;
   public $dfdate;
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $result;
   public $waspid;
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

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}

$cat = $_GET['cat']; 
$subcat = $_GET['subcat']; 

$picsrc = "";
if (isset($_GET['picode'])) {
  $picsrc = $_GET['picode']; 
}

$linkurl = $_GET['linkcode']; 
$story = $_GET['storycode']; 
$embedurl = $_GET['embedcode']; 

$source = $_GET['source']; 
$prodid = $_GET['prodid']; 
$price = $_GET['price']; 

$pid = uniqid();

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
          $ret->cpres = $res;
          $picaddr = "http://www.deskfm.com/pics/keepers/" . $picfile;
      }

     $sql_ins = "insert into dfm_posts values ('" . $pid . "','" . $uname . "','" . $cat . "','" . $subcat . "','" . $story .  "' , now() ,'" . $picaddr . "' ,'" . $linkurl . "','" . $embedurl . "','',''  )";

     $ret->insql = $sql_ins;    
     $result = mysql_query($sql_ins);
     $ret->inres = $result;    

     if ($source == 'deskfm') {
       $sql= "  SELECT * FROM dfm_posts where webit_id='" . $pid . "' ";
     }

     if ($source=="twitter") {
       $sql= "  SELECT * FROM dfm_tweets where webit_id='" . $pid . "' ";
     }

     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
         $b2 = new foo;
         if ($source == "deskfm") {
           $b2->pid = $row['webit_id'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->source = 'deskfm';
           $b2->cat = $row['cat'];
           $b2->subcat = $row['subcat'];
           $b2->dfdate = $row['twdate'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
         }
        if ($source == 'twitter') {
           $b2->pid =    $row['webit_id'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
           $b2->source = 'twitter';
           $b2->cat = $row['cat'];
           $b2->subcat = $row['subcat'];
           $b2->dfdate = $row['twdate'];
           $b2->picurl = $row['picurl'];;
           $b2->linkurl = $row['linkurl'];;
           $b2->embedurl = $row['embedurl'];;
        }

     $b2->waspid = $wpid;
     $ret->pobj = $b2;
     echo json_encode($ret); 
     mysql_close($con);
?>


