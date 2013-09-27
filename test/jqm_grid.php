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

    </div>
</div>


<script>


 function do_it () {
   var tmp = "";

   tmp += "<div id='the-grid' class='ui-grid-b' >";
   tmp += "<div class='ui-block-a' >a</div>";
   tmp += "<div class='ui-block-b'  >b</div>";
   tmp += "<div  class='ui-block-c' >c</div>";
   tmp += "<div class='ui-block-a' >d</div>";
   tmp += "<div class='ui-block-b'  >e</div>";
   tmp += "</div>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");

}
</script>

</body>
</html>



