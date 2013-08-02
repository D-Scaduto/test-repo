<?php
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >
<head>
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<link rel=StyleSheet href=style.css type="text/css" media="screen,print" />
<link rel=StyleSheet href=deskfm/dastyle.css type="text/css" media="screen,print" />
<!--link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" /-->
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />


<title>deskfm.com</title>

<script  type="text/javascript" >
  var is_ie = false;
  var is_mobile = false;

  var daviewer = null;

  var cater = null;  //categor
  var store = null;  //shoper
  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var joe = null;    //manager
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var mac  = null;   //farmer
  var elle = null;   //model
  var krono = null;  //calendor 

  var da_limit=1000;
  var init_run = true;
  var got_stats = false;
  var buddah = false;
  var pname = "";
  var debug = false;
  var nonets = false;

</script>

<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<!--script src="http://code.jquery.com/jquery-1.8.3.min.js"></script-->
<!--script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js"></script-->
<script src="../lib/jquery-insight.js" type="text/javascript"></script>

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

<script src=deskfm/model.js type="text/javascript" ></script>
<script src=deskfm/stater.js type="text/javascript" ></script>

<script src=deskfm/suggester.js type="text/javascript" ></script>
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
  if (isset($_GET['nonets'])) {
    echo "nonets = true;";
  } 
  echo "</script>";

  if (!isset($_GET['nonets'])) {
    echo "<script src='http://connect.facebook.net/en_US/all.js#appId=191528434226668&xfbml=1'></script>";
    echo "<script src='deskfm/fbooker.js' type='text/javascript' ></script>";
    echo "<script src='http://platform.twitter.com/widgets.js' type='text/javascript'></script>";
//    echo "<script src='http://widgets.twimg.com/j/2/widget.js' type='text/javascript'></script>";
  }

?>


<script type="text/javascript" >

  
 
</script>

<div id='top_line' style='background-color:whiite;padding:1px;' >
</div>

<div data-role="page">

<div id='main_spot' data-role="cbheader" style='background-color:white;padding:10px;' >
</div>

<div style='clear:left;' ></div>

<div id='debug_spot' class='' style='padding:2px;' >
</div>

<div id='main_view'  data-role="cbcontent" class='' style='padding:10px;' >
</div>

</div>

<script type='text/javascript' >

  if (nonets == false) {
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
//   init_months();

   buddah=true;

   krono = new calendor("krono");
   amare = new stater();
   elle = new model();
   daviewer = new viewer("main_view","daviewer");
  

   
   jesie = new namer("name_spot");
 

   if (is_mobile == true) {
           da_limit = 250;
	   daviewer.top_end = 25;
	  
    } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
	   elle.shape = "wingout";
    }

   if (debug == true) {
	   daviewer.top_end = 10;
   }
	   sal = new logoman("logo_spot");
           store = new shoper("shop");
	   mac = new sorter("sort");
	   cater = new categor("browse");
	   wanda = new searcher("search");
	   nicky = new sharer("share_spot");
           joe = new manager("contact");

	   diego = new header("menu_spot");
	   diego.shape = "full";
	   diego.add_mainspot("browse","cater");
           diego.add_mainspot("contact","joe");
	   diego.add_mainspot("sort","mac");
	   diego.add_mainspot("shop","store");
	   diego.add_mainspot("search","wanda");
	   diego.main_shape = "browse";
	 

    elle.draw_main();
	   
    amare.get_stats();

    amare.get_products();
    amare.get_providers();
    amare.get_webits();
    amare.get_people();
    amare.get_unsorted();


    $(window).resize(function() {

      var width = $(this).width();
      var height = $(this).height();

        if (width < 801) {
          if (is_mobile != true) {
		  is_mobile = true;
	  }
	  if (elle.shape != "") {
 	    elle.shape = "";
	    elle.draw_main();
	  }
        } else {
  	   if ((is_mobile == true) && (is_ie == false)) {
		   is_mobile = false;
		   
	   }
           if (elle.shape != "wingout") {
 	    elle.shape = "wingout";
	    elle.draw_main();
	  }
	}
    });


   $(window).scroll(function() {
        if ($('#top_line').inSight(100) == true) {
	    if ($('#outer_menu').hasClass('top_menu') == false) {
		$('#outer_menu').addClass('top_menu');
		$('#outer_menu').removeClass('flying_menu');
	    }
	} else {
	    if ($('#outer_menu').hasClass('flying_menu') == false) {
		$('#outer_menu').addClass('flying_menu');
		$('#outer_menu').removeClass('top_menu');
	    }
	}
    });
 


</script>






</body>
</html>


