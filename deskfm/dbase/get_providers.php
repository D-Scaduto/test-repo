<?php

include 'names.php';
 class foo { 
 
   public $uname;
   public $story;
   public $picurl;
   public $linkurl;
   public $listype;

  }


  class bar {
   public $dasql1;
   public $dasql2;
   public $dalist_len;
   public $dalist;
 }


 $rebar = new bar;
 

  $con = mysql_connect($Server, $username, $passsword);

  $where = "";

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $sql = "";
  $sql= $sql . "  SELECT * FROM dfm_providers ";

 // echo $sql . " \n <br> " ;
  $rebar->dasql1 = $sql;
 
  $result = mysql_query($sql);

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];

  $rebar->dalist_len = $num_rows;

  $arr = array();
  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $foodo->source = "deskfm";
    $foodo->listype = "providers";

    $foodo->uname =    $row['provider_id'];
    $foodo->picurl = $row['picurl'];
    $foodo->story  = $row['story'];
    $foodo->linkurl = $row['linkurl'];
    $foodo->urls = array();
//    $foodo->urls[] = $row['linkurl'];
//    if ($source != 'deskfm') {
      $arr[] = $foodo;
//     }
   }
   $rebar->dalist = $arr;

   echo json_encode($rebar); 

?>

 
