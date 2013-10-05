<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!doctype html>
<html>
<head>
<title>jqm listview test</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>

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
   tmp += "<li  ><a href='#' >";
   tmp += "<h2 class=''  >jimmy</h2>";
   tmp += "<p class='ui-li-desc'  >jimmy</p>";
   tmp += "<p class='ui-li-aside'  >jones</p>";
   tmp += "</a></li>";
 
   tmp += "<li  >b</li>";
   tmp += "<li  >c</li>";
   tmp += "</ul>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");
   $('#the-listview').listview("refresh");
}

</script>

</body>
</html>



