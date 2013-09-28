<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >
<head>

<title>deskfm.com</title>

<script  type="text/javascript" >
  var is_ie = false;
  var is_mobile = false;
  var debug = false;
  var netson = false;
  var is_mini = false;
  var jqm_off = false;
  var buddah = false;
  var pname = "";
</script>

<?php
  require_once 'lib/Mobile_Detect.php';
  $detect = new Mobile_Detect;
  $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
  if ($detect->isMobile() == true) {   
?>
  <script  type="text/javascript" >
     is_mobile = true;
  </script>
<?php   } ?>

<?php   if (isset($_GET['mobile'])) {   ?>
<script  type="text/javascript" >
   is_mobile = true;
</script>
<?php  } ?>

<script src="lib/jquery-1.9.1.min.js" ></script>

<?php   if (isset($_GET['jqmoff'])) {   ?>
<script  type="text/javascript" >
   jqm_off = true;
</script>

<?php  } else {  ?>

   <link rel=StyleSheet href='css/jquery.mobile-1.3.2.css' type="text/css" media="screen,print" />
   <script src="lib/jquery.mobile-1.3.2.min.js" ></script>

<?php  }  ?>


<?php   if (isset($_GET['netson'])) {   ?>
<script  type="text/javascript" >
   netson = true;
</script>
    <script src='http://connect.facebook.net/en_US/all.js#appId=191528434226668&xfbml=1'></script>
    <script src='deskfm/fbooker.js' type='text/javascript' ></script>
    <script src='http://platform.twitter.com/widgets.js' type='text/javascript'></script>
    <script src='http://widgets.twimg.com/j/2/widget.js' type='text/javascript'></script>
    <script src='http://apis.google.com/js/plus.js' ></script>
    <script src='http://apis.google.com/js/plusone.js' ></script>
    <script src='http://apis.google.com/js/client:plus.js' ></script>
<?php } ?>

<?php   if (isset($_GET['debug'])) {   ?>
<script  type="text/javascript" >
   debug = true;
</script>
<?php  } ?>


<link rel=StyleSheet href='css/base.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/mini.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/reg.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/wide.css' type="text/css" media="screen,print" />

<script type="text/javascript" >

  var daviewer = null;
  var da_limit=1000;

  var cater = null;  //categor
  var store = null;  //shoper
  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var joe = null;    //supplier
  var robby = null;  //grouper
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var mac = null;    //farmer
  var louie = null;  //feeder 
  var jesie = null;  //namer 

  var init_run = true;
  var got_stats = false;

</script>

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
<script src=deskfm/qandas/preset_provider.js type="text/javascript" ></script>
<script src=deskfm/qandas/group_provider.js type="text/javascript" ></script>

<script src=deskfm/namer.js type="text/javascript" ></script>

<script src=deskfm/shoper.js type="text/javascript" ></script>
<script src=deskfm/categor.js type="text/javascript" ></script>
<script src=deskfm/sharer.js type="text/javascript" ></script>
<script src=deskfm/searcher.js type="text/javascript" ></script>
<script src=deskfm/sorter.js type="text/javascript" ></script>
<script src=deskfm/feeder.js type="text/javascript" ></script>
<script src=deskfm/supplier.js type="text/javascript" ></script>
<script src=deskfm/grouper.js type="text/javascript" ></script>

<script src=deskfm/header.js type="text/javascript" ></script>

<script src=deskfm/audio.js type="text/javascript" ></script>
<script src=deskfm/wheretor.js type="text/javascript" ></script>
<script src=deskfm/calendor.js type="text/javascript" ></script>

<script src=deskfm/twitter/tws_feeder.js type="text/javascript" ></script>
<script src=deskfm/preloader.js type="text/javascript" > </script>
 
</head>

<body style='background-color:black;' >

<div id="fb-root"></div>

<div data-role='page' class='ui-page'  >

<div id='menu_spot' style='' class='menu_box'  data-role='header' data-theme='b'  >
</div>

  <div  data-role='content'   >

    <div id='mainbar_spot' class='' style=''  >
    </div>
 
    <div id='main_view'  class='main'   >
    </div>

  </div>

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
   
   if (is_mobile == true) {
           da_limit = 100;
	   daviewer.top_end = 25;
	  
   } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
   }

           jesie = new namer("name");
	   sal = new logoman("logo");
 	   dale = new rail("rail");
   	   store = new shoper("shop");
	   mac = new sorter("sort");
	   louie = new feeder("feed");
	   cater = new categor("browse");
	   wanda = new searcher("search");
	   nicky = new sharer("share");
           joe = new supplier("manage");
           robby = new grouper("group");

	   diego = new header();
        var tshapes = ['search:wanda','share:nicky','browse:cater'];
           diego.set_shapes(tshapes);
	   
    amare.get_stats();

    amare.get_products();
    amare.get_suppliers();
    amare.get_webits();
    amare.get_people();

    var dt = new Object();
    dt.month = "";
    dt.year="";
    amare.get_unsorted(dt,true);


   $(window).resize(function(val) {
         if ($(window).width() < 600) {
/*
            if (is_mini != true) {
              is_mini = true;
              diego.show();
            }
*/
           if (daviewer.gridcols != 1) {
               daviewer.set_gridcols(1);
           }
         } else {
            if ($(window).width() > 900) {
               if (daviewer.gridcols != 4) {
                 daviewer.set_gridcols(4);
               }
            } else {
               if (daviewer.gridcols != 3) {
                 daviewer.set_gridcols(3);
               }
            }
/*
            if (is_mini != false) {
              is_mini = false;
              diego.show();
            }
*/
         }

    });
   $(window).resize();

</script>

</body>

</html>


