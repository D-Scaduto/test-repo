<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!doctype html>
<html>
<head>
<title>jqm popup test</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel=StyleSheet href='../css/jquery.mobile-1.3.2.css' type="text/css" media="screen,print" />

<script src="../lib/jquery-1.9.1.min.js" ></script>
<script src="../lib/jquery.mobile-1.3.2.min.js" ></script>

</head>

<body>


<div data-role="page" id="the-page">
    <div id='mspot' data-role="content">

    <button onclick='do_it();' > go </button>

    <div id='spot' >
    </div>
    
    <a href='#popupBasic' data-rel='popup' data-role='button' >Open Popup</a>

    <div data-role='popup' id='popupBasic'>
    <p>This is a completely basic popup, no options set.<p>
    </div>


    </div>
</div>


<script>


 function do_it () {
   var tmp = "";
 
    tmp += "<a href='#popupBasic' data-rel='popup' data-role='button'  >Open?</a>";

    tmp += "<div data-role='popup' id='popupBasic'>";
    tmp += "<p>This is a completely basic popup, no options set.<p>";
    tmp += " </div>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");

}
</script>

</body>
</html>



