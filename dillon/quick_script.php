<?php
include "../config/names.php";
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');
//didnt want to hard code the config stuff

$con = mysql_connect ("$Server","$username","$password");
$where ="";
if(!$con){
	echo('Could not connect; ' . mysql_error());
}
mysql_select_db($db_name,$con);


if(!(isset($_GET['TableName']))){
	$Table = "dfm_posts";  //defaults to `dfm_posts`
}else {
	$Table = $_GET['TableName'];
}
/*
//simple querry set as a string
$query = "update `";
$query .= $Table;
$query .= "` set picurl = substring(picurl from (instr(picurl, '.com' )+4) for char_length(picurl)) where substring(picurl from instr(picurl,'http://www.deskfm.com') for char_length('http://www.deskfm.com')) = 'http://www.deskfm.com'";

mysql_query($query);

*/

//used for testing
$query2 ="select subcat,count(*) from `";
$query2 .= $Table;
$query2 .= "` group by subcat;";

//echo $query2; 
$retquery = mysql_query($query2);
echo $retquery;
$retstring="";
while($row = mysql_fetch_array($retquery)){
	echo $row['subcat'];
	echo "hello";
/*
	$retstring .= $row['subcat'] . " - " . $row['count(*)'];
	$retstring .= "\n";
*/
}
echo $retstring;
echo "FINISH\n";
?>
