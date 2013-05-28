<?php


 class foo { 
 
   public $pid; 
   public $uname;
   public $cat;
   public $subcat;
   public $story;
   public $prodid;
   public $price;
   public $source;
   public $dfdate ;
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

$limit = 50;

if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}
<<<<<<< HEAD
$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
=======
$con = mysql_connect($Server, $username, $password);
>>>>>>> 2a502c387d7da59a00415b9e9120362d4fc756f4
$where = "";
 if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }

   mysql_select_db('benman', $con);

   $some = false;
   $sql = "";
   $sql= $sql . " ( SELECT  SQL_CALC_FOUND_ROWS *,'twitter' FROM dfm_tweets where cat != 'deleted' ) ";
   $sql= $sql . " union ";
   $sql= $sql .  "( SELECT *,'deskfm' FROM dfm_posts  ) order by rand() ";
  
   $sql= $sql . " LIMIT " . 0 . " , " . $limit;
 
   $rebar->dasql2 = $sql;

   $result = mysql_query($sql);  
   $result2 = mysql_query('select found_rows()');
   $row2 = mysql_fetch_row($result2);
   $num_rows = $row2[0];


  $rebar->dalist_len = $num_rows;
 
  $arr = array();

  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
 
    $source= $row['twitter'];
    $foodo->listype = 'webits';
    $foodo->source = $source;
    $foodo->pid =  $row['webit_id'];
    $foodo->picurl = $row['picurl'];
    $foodo->uname = $row['owner_id'];
    $foodo->story  = $row['story'];
    $foodo->cat = $row['cat'];
    $foodo->subcat = $row['subcat'];
    $foodo->dfdate = $row['twdate'];
    $foodo->linkurl = $row['linkurl'];
    $foodo->urls = array();
//    $foodo->urls[] = $row['linkurl'];
    $arr[] = $foodo;

   }
   $rebar->dalist = $arr;
   echo json_encode($rebar); 
?>

 
