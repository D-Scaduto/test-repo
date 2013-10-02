<?php
include '../../config/names.php';

 class foo { 
   public $pid;
   public $uname;
   public $story;
   public $picurl;
   public $linkurl;
   public $listype;
   public $stored = true;
  }

  class bar {
   public $dasql;
   public $dalist_len;
   public $dalist;
  }

  $rebar = new bar;
 
  $con = mysql_connect($Server, $username, $password);

  $where = "";

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $sql = "";
  $sql= $sql . "  SELECT * FROM dfm_suppliers ";

 // echo $sql . " \n <br> " ;
  $rebar->dasql = $sql;
 
  $result = mysql_query($sql);

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];

  $rebar->dalist_len = $num_rows;

  $arr = array();
  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $foodo->listype = "suppliers";
    $foodo->pid = $row['supplier_id'];
    $foodo->uname = $row['name'];
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

 
