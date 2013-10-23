<?php
//     goog_to_db.php
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');
?>

<?php
// takes search results and moves URLs to database

include "../config/names.php";
$con = mysql_connect("$Server", "$username", "$password");

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
  mysql_select_db($db_name, $con);
  
  $tableName = 'dfm_webits';
  
  /*
  for($i =0;$i<100;$i++){
    $query = '';
    
  
  }
  */
  $FileName = 'search_results.txt';
  $handle = fopen($FileName, 'r');
  if ($handle === false) {
    echo "FILE NOT OPENED PROPERLY";
  }else {
    $json = fread($handle,filesize($FileName));
    //echo $json;
    $content = json_decode($json);
    //echo "right before print. ";
    //print_r ($content['items'],true);
    //print "<pre>" . print_r($content, true) . "</pre>";
   
    for($i=1;$i<=100;$i++){
      //echo "enter for loop. ";
      
      //echo $content->$i->link;
      $picURL = $content->$i->link;      
      $story = $content->$i->title;
      $linkURL = $content->$i->image->contextLink;
      $ownerID = $content->$i->displayLink;

      $query = 'insert into `' . $tableName .'` ';
      $query .= '(source,picurl, story, linkurl,owner_id, created_at, change_date, webit_id) ';
      $query .= "values ('google','$picURL' , '$story' , '$linkURL', '$ownerID' , NOW(), NOW(), UUID() )";
      
      echo $query;
      mysql_query($query);
      
      echo "<div>" . $i . "</div>";
      
    }
  
  
    fclose($handle);
  }
  echo "finished";

?>
