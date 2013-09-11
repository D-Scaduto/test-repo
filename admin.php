<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >

<head>
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<link rel=StyleSheet href=deskfm/dastyle.css type="text/css" media="screen,print" />
<link rel=StyleSheet href='lib/jquery-ui-1.10.3.custom.css' type="text/css" media="screen,print" />

<title>deskfm.com</title>

<script  type="text/javascript" >
  var is_ie = false;
  var is_mobile = false;
  var debug = false;
  var netson = false;

  var buddah = false;
  var pname = "";

  var daviewer = null;
  var da_limit=1000;

  var cater = null;  //categor
  var store = null;  //shoper
  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var joe = null;    //manager
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var mac = null;    //farmer
  var moe = null;    //feeder 
  var jesie = null;  //namer 

  var init_run = true;
  var got_stats = false;

</script>

<script src="lib/jquery-1.9.1.js" type="text/javascript"></script>
<script src="lib/jquery-ui-1.10.3.custom.js" type="text/javascript"></script>
<script src="lib/jquery-insight.js" type="text/javascript"></script>

<script src=deskfm/wordies.js type="text/javascript" ></script>
<script src=deskfm/marker.js type="text/javascript" ></script>
<script src=deskfm/logoman.js type="text/javascript" ></script>

<script src=deskfm/webit.js type="text/javascript" ></script>
<script src=deskfm/unitview/poster.js type="text/javascript" ></script>
<script src=deskfm/unitview/rung.js type="text/javascript" ></script>
<script src=deskfm/unitview/dater.js type="text/javascript" ></script>
<script src=deskfm/unitview/childview.js type="text/javascript" ></script>
<script src=deskfm/unitview/catsel.js type="text/javascript" ></script>
<script src=deskfm/unitview/storyor.js type="text/javascript" ></script>
<script src=deskfm/unitview/pictor.js type="text/javascript" ></script>
<script src=deskfm/unitview/linkster.js type="text/javascript" ></script>
<script src=deskfm/unitview/embeder.js type="text/javascript" ></script>
<script src=deskfm/unitview/pricer.js type="text/javascript" ></script>
<script src=deskfm/unitview/namer.js type="text/javascript" ></script>
<script src=deskfm/unitview/grouper.js type="text/javascript" ></script>
<script src=deskfm/unitview/person.js type="text/javascript" ></script>
<script src=deskfm/unitview/debug.js type="text/javascript" ></script>
<script src=deskfm/viewer.js type="text/javascript" ></script>
<script src=deskfm/controller.js type="text/javascript" ></script>
<script src=deskfm/loader.js type="text/javascript" ></script>
<script src=deskfm/rail.js type="text/javascript" ></script>
<script src=deskfm/nitro.js type="text/javascript" ></script>

<script src=deskfm/stater.js type="text/javascript" ></script>

<script src=deskfm/qandas/search_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/cat_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/subcat_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/price_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/product_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/servicer_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/preset_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/group_provider.js type="text/javascript" ></script>

<script src=deskfm/namer.js type="text/javascript" ></script>

<script src=deskfm/shoper.js type="text/javascript" ></script>
<script src=deskfm/categor.js type="text/javascript" ></script>
<script src=deskfm/sharer.js type="text/javascript" ></script>
<script src=deskfm/searcher.js type="text/javascript" ></script>
<script src=deskfm/sorter.js type="text/javascript" ></script>
<script src=deskfm/feeder.js type="text/javascript" ></script>
<script src=deskfm/manager.js type="text/javascript" ></script>

<script src=deskfm/header.js type="text/javascript" ></script>

<script src=deskfm/audio.js type="text/javascript" ></script>
<script src=deskfm/wheretor.js type="text/javascript" ></script>
<script src=deskfm/calendor.js type="text/javascript" ></script>

<script src=deskfm/twitter/tws_feeder.js type="text/javascript" ></script>

<script src=deskfm/preloader.js type="text/javascript" > </script>
 
</head>


<body style='background-color:white;' >

<div id="fb-root"></div>

<?php 

  include 'deskfm/browsers.php';
  echo "<script  type=\"text/javascript\" > ";
  if (is_mobile()) {   
    echo " is_mobile = true; " ;
  }

  if (strpos($_SERVER['HTTP_USER_AGENT'],'MSIE') == true) {
    echo " is_ie = true; " ;
    echo " is_mobile = true; ";
  } else {

  }

  $phgname = "null";
  if (isset($_GET['pname'])) {
   $phgname = $_GET['pname'];
  }
  if ($phgname != "null") {
    echo "pname ='" . $phgname . "';";
  }
  if (isset($_GET['mobile'])) {
    echo "is_mobile = true;";
  }
  if (isset($_GET['debug'])) {
    echo "debug = true;";
  }
  if (isset($_GET['netson'])) {
    echo "netson = true;";
  } 
  echo "</script>";

  if (netson == true) {
    echo "<script src='http://connect.facebook.net/en_US/all.js#appId=191528434226668&xfbml=1'></script>";
    echo "<script src='deskfm/fbooker.js' type='text/javascript' ></script>";
    echo "<script src='http://platform.twitter.com/widgets.js' type='text/javascript'></script>";
    echo "<script src='http://widgets.twimg.com/j/2/widget.js' type='text/javascript'></script>";
  }

?>

<div id='top_line' style='' >
</div>

<div id='outer_spot' style='' class='outer_menu' >

<span id='menu_spot' class='menu' style='' >
</span>

<span id='rail_spot' class='rail' style='' >
</span>

</div>

<div id=''  style='clear:both;' >
</div>

<div id='main_view'  style='' >
</div>


<script type='text/javascript' >

  if (netson == true) {
   FB.init({
      appId  : '191528434226668',
      status : true, // check login status
      cookie : true, // enable cookies to allow the server to access the session
      xfbml  : true,  // parse XFBML
      oauth  : true
   });
      // Load the SDK asynchronously
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }

   do_preload();

   buddah=true;

   amare = new stater();
   daviewer = new viewer("main_view","daviewer");
   
   jesie = new namer("name_spot");

   if (is_mobile == true) {
           da_limit = 250;
	   daviewer.top_end = 25;
	  
   } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
   }

	   sal = new logoman("logo_spot");
   	   store = new shoper("shop_spot");
	   mac = new sorter("sort");
	   moe = new feeder("feed");
	   cater = new categor("browse");
	   wanda = new searcher("search");
	   nicky = new sharer("share_spot");
   //        joe = new manager("contact");

	   diego = new header();
           diego.show();
	   
    amare.get_stats();

//    amare.get_products();
//    amare.get_providers();
    amare.get_webits();
//    amare.get_people();

    var dt = new Object();
    dt.month = "";
    dt.year="";
    amare.get_unsorted(dt,true);

    $(window).scroll(function() {
        if ($('#top_line').inSight(100) == true) {
	    if ($('#outer_spot').hasClass('regular_top') == false) {
		$('#outer_spot').addClass('regular_top');
		$('#outer_spot').removeClass('flying_top');
	    }
	} else {
          if (is_mobile == false) {
	    if ($('#outer_spot').hasClass('flying_top') == false) {
		$('#outer_spot').addClass('flying_top');
		$('#outer_spot').removeClass('regular_top');
	    }
	  }
	}
    });


</script>

</body>

</html>


