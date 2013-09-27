<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!doctype html>
<html>
<head>
<title>jqm listview test</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css">
<link rel="stylesheet" href="../css/mini.css">
<link rel="stylesheet" href="../css/reg.css">
<link rel="stylesheet" href="../css/wide.css">


<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

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

   tmp += "<ul data-role='listview' id='the-listview' >";
   tmp += "<li class='box' >a</li>";
   tmp += "<li class='box'  >b</li>";
   tmp += "<li  class='box' >c</li>";
   tmp += "</ul>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");

}
</script>

</body>
</html>



