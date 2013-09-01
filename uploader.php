<?php 


$target_path = "tmpics/";
$target_name= basename( $_FILES['it']['name']);

$target_path = $target_path . $target_name;

//  echo "before-" . $_FILES['it']['error'] . "-before";


// maybe check file mime type first 

if (move_uploaded_file($_FILES['it']['tmp_name'],$target_path)) {

  echo "<span id='tmp_extra' >" . $target_path . "</span>";

} else {

  echo "error ";
  echo  $target_path ;

//  echo  basename($_FILES['it']['name']);
  echo $_FILES['it']['error'];

//  echo error_get_last();
// print_r(error_get_last());

}

  
?>
