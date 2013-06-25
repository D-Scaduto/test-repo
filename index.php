<?php
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >
<head>
<link rel=StyleSheet href=style.css type="text/css" media="screen,print" />
<link rel=StyleSheet href=deskfm/dastyle.css type="text/css" media="screen,print" />
<link rel=StyleSheet href=deskfm/twitter/tws_style.css type="text/css" media="screen,print" />
<title>deskfm.com</title>

<script  type="text/javascript" >
  var is_ie = false;
  var is_mobile = false;
</script>

<script src="../lib/jquery-code.js" type="text/javascript"></script>

<script src=deskfm/wordies.js type="text/javascript" ></script>
<script src=deskfm/marker.js type="text/javascript" ></script>
<script src=deskfm/logoman.js type="text/javascript" ></script>

<script src=deskfm/webit.js type="text/javascript" ></script>
<script src=deskfm/unitview/poster.js type="text/javascript" ></script>
<script src=deskfm/unitview/rung.js type="text/javascript" ></script>
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

<script src=deskfm/header.js type="text/javascript" ></script>

<script src=deskfm/audio.js type="text/javascript" ></script>
<script src=deskfm/wheretor.js type="text/javascript" ></script>
<script src=deskfm/calendor.js type="text/javascript" ></script>

<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>

<!--
<script src=deskfm/twitter/news.js type="text/javascript" ></script>
<script src='http://widgets.twimg.com/j/2/widget.js' type="text/javascript"  ></script>
-->

<script src=deskfm/preloader.js type="text/javascript" > </script>
</head>

<body style='background-color:white;' >

<div id="fb-root"></div> 
<script src='http://connect.facebook.net/en_US/all.js#appId=191528434226668&xfbml=1'></script>
<script src=deskfm/fbooker.js type="text/javascript" >
//if (is_ie == false) {
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

//}
</script>

<?php 
  include 'deskfm/browsers.php';
  if (is_mobile()) {
    echo "<script  type='text/javascript' >";
    echo " is_mobile = true; " ;
    echo "</script>";
  } else {

//    echo "<script src='http://apis.google.com/js/plus.js' ></script>";
//    echo "<script src='http://apis.google.com/js/plusone.js' ></script>";
//    echo "<script src='http://apis.google.com/js/client:plus.js' ></script>";
  }

  if (strpos($_SERVER['HTTP_USER_AGENT'],'MSIE') == true) {
    echo "<script  type='text/javascript' >";
    echo " is_ie = true; " ;
    echo "</script>";
  } else {
  }

  $phgname = "null";
  if (isset($_GET['pname'])) {
   $phgname = $_GET['pname'];
  }
  echo "<script  type='text/javascript' >";
  if ($phgname != "null") {
    echo "pname ='" . $phgname . "';";
  }
  if (isset($_GET['mobile'])) {
    echo "is_mobile = true;";
  }

  echo "</script>";
?>

<div id='main_spot' style='background-color:white;padding:10px;' >
</div>

<div style='clear:left;' ></div> 

<div id='main_view' class='mainlane' >
</div>


<script type='text/javascript' >

   do_preload();
//   init_months();

 

           sal = new logoman("logo");
            nicky = new sharer("share_spot");
	   
           jesie = new namer("name_spot");
           cater = new categor("menu_bar");
           store = new shoper("menu_bar");

           wanda = new searcher("menu_bar");
           amare = new stater();

      diego = new header("menu");
      diego.add_mainspot("browse","cater");
      diego.add_mainspot("search","wanda");
      diego.main_shape = "browse";

   
      daviewer = new viewer("main_view","daviewer");

       if (is_mobile == true) {
           da_limit = 250;
           daviewer.top_end = 25;

       } else {
           da_limit = 1000;
           daviewer.top_end = 100;
       }

    draw_main();
    sal.show();
    diego.show();
    nicky.show();
    jesie.show();


    amare.get_stats();
    amare.get_providers();
    amare.get_products();
    amare.get_webits();

    $(window).resize(function() {
      var width = $(this).width();
      var height = $(this).height();
      if (width < 801) {
         if (is_mobile != true) {
	      is_mobile = true;
	      sal.hide_3dview();
	      daviewer.draw_view();
         }
       } else {
         if ((is_mobile == true) && (is_ie == false)) {
		 is_mobile = false;
		 sal.draw_3dview();
		 daviewer.draw_view();
         }
       }
    });



/*
  var audiochannels = new Array();
  if (is_ie == false) { 
    for (a=0;a<max_channel;a++) {
      audiochannels[a] = new Array();
      audiochannels[a]['channel'] = new Audio();
      audiochannels[a]['finished'] = -1;
     }
  }
*/

</script>

</body>
</html>


