<?php
include '../../config/names.php';

class foo { 
   public $listype = "product"; 
   public $pid;
   public $supplier_id;
   public $product_type;
   public $story;
   public $picurl;
   public $linkurl;
   public $embedurl;
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


$product_type = "";
if (isset($_GET['product_type'])) {
	$product_type = $_GET['product_type']; 
}

$price = "";
if (isset($_GET['price'])) {
	$price = $_GET['price']; 
}


$picurl = "";
if (isset($_GET['picode'])) {
  $picsrc = $_GET['picode']; 
}


$pid = uniqid();


      $con = mysql_connect($Server, $username, $password);
      mysql_select_db($db_name, $con);
      $np = false;

      if ($uname == 'null' )  {
        $uname = uniqid();
 
        $sql_ins = "insert into dfm_suppliers values ('" . $uname . "','','','','','')";
        $ret->npsql = $sql_ins;    
        $result = mysql_query($sql_ins);
        $ret->npres = $result;    

     }
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

        $sql_ins = "insert into dfm_products values ('" . $pid . "','" . $uname . "','" . $product_type . "','" . $story . "','" . $picurl . "','" . $linkurl . "','" . $embedurl . "')";
        $ret->npsql = $sql_ins;    
        $result = mysql_query($sql_ins);
        $ret->npres = $result;    

       $sql= "  SELECT * FROM dfm_products where product_id='" . $pid . "' ";

     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
         $b2 = new foo;
           $b2->pid = $row['product_id'];
           $b2->uname = $row['supplier_id'];
           $b2->product_type = $row['product_type'];
           $b2->story  =  $row['story'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
 
     $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


