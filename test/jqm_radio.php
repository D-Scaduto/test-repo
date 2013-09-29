<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!doctype html>
<html>
<head>
<title>jqm grid test</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel=StyleSheet href='../css/jquery.mobile-1.3.2.css' type="text/css" media="screen,print" />
<link rel="stylesheet" href="../css/mini.css">
<link rel="stylesheet" href="../css/reg.css">
<link rel="stylesheet" href="../css/wide.css">

<script src="../lib/jquery-1.9.1.min.js" ></script>
<script src="../lib/jquery.mobile-1.3.2.min.js" ></script>

</head>

<body>

<div data-role="page" id="the-page">
    <div id='mspot' data-role="content">

    <button onclick='do_it();' > go </button>

    <div id='spot' >
    </div>


  <div data-role="fieldcontain">
    <fieldset data-role="controlgroup" data-type='horizontal' >
    	<legend>Choose a pet:</legend>
         	<input type="radio" name="radio-choice-1" id="radio-choice-1" value="choice-1" checked="checked" />
         	<label for="radio-choice-1">Cat</label>

         	<input type="radio" name="radio-choice-1" id="radio-choice-2" value="choice-2"  />
         	<label for="radio-choice-2">Dog</label>

         	<input type="radio" name="radio-choice-1" id="radio-choice-3" value="choice-3"  />
         	<label for="radio-choice-3">Hamster</label>

         	<input type="radio" name="radio-choice-1" id="radio-choice-4" value="choice-4"  />
         	<label for="radio-choice-4">Lizard</label>
    </fieldset>
    </div>

</div>


<script>


 function do_it () {
   var tmp = "";

   tmp += " <div data-role='fieldcontain'>";
    tmp += "    <fieldset data-role='controlgroup' data-type='horizontal' >";
    tmp += "    <legend></legend>";
    tmp += "     <input type='radio' name='radio-choice-1' id='radio-choice-1' value='choice-1' checked='checked' />";
    tmp += "     <label for='radio-choice-1'>Cat</label>";

    tmp += "     <input type='radio' name='radio-choice-1' id='radio-choice-2' value='choice-2'  />";
    tmp += "     <label for='radio-choice-2'>Dog</label>";

     tmp += "<input type='radio' name='radio-choice-1' id='radio-choice-4' value='choice-4'  />";
    tmp += "    <label for='radio-choice-4'>Lizard</label>";
     tmp += "   </fieldset>";
    tmp += "    </div>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");

}
</script>

</body>
</html>



