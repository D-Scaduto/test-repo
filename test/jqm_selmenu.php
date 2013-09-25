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

   tmp += "<select data-native-menu='false' id='the-select' >";
   tmp += "<option value='a'>a</option>";
   tmp += "<option value='b'>b</option>";
   tmp += "<option value='b'>b</option>";
   tmp += "</select>";

   $('#spot').html(tmp);
   $('#spot').trigger("create");
    $('#the-select').on('change', function () {
        var $this = $(this),
        val   = $this.val();
       alert('onChange = ' + val);
     });
}
</script>

</body>
</html>



