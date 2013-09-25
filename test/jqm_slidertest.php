<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html>
<head>
<title>My Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css">

<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
</head>

<body>

<div data-role="fieldcontain">
	<label for="slider9">Input slider:</label>
 	<input type="range" id="slider9" value="0" min="0" max="100"  />
</div>

<script > 
     $('#slider9').slider();
     $('#slider9').bind("change", function () {
        alert("here");
       });
      $('#slider9').slider('refresh');

</script>
</body>
</html>
