<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >
<head>

<title>deskfm.com</title>

<script  type="text/javascript" >
  var debug = false;
  var netson = false;
  var jqm_off = false;
  var is_ie = false;

  var buddah = false;
  var pname = "";

  var is_mobile = false;
  var main_shape = "full";
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
<script src=deskfm/footer.js type="text/javascript" ></script>

<script src=deskfm/audio.js type="text/javascript" ></script>
<script src=deskfm/wheretor.js type="text/javascript" ></script>
<script src=deskfm/calendor.js type="text/javascript" ></script>

<script src=deskfm/twitter/tws_feeder.js type="text/javascript" ></script>
<script src=deskfm/preloader.js type="text/javascript" > </script>
 
</head>

<body style='background-color:black;' >

<div id="fb-root"></div>

<div  id='page_spot'  data-role='page' class='ui-page'  >

<div id='menu_spot' style='' class=''  data-role='header' data-theme='b'  >
</div>

  <div  data-role='content'  class='ui-grid-a' style=''  >

    <div id='side_bar' class='ui-block-a' style=''  >
    </div>
 
    <div id='main_spot'  class='ui-block-b' style=''   >
    </div>

  </div>

<div id='foot_spot' data-position='fixed'  data-role='footer' data-theme='b'  >
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
   daviewer = new viewer("main_spot","daviewer");
   
   if (is_mobile == true) {
           da_limit = 100;
	   daviewer.top_end = 25;
   } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
   }

           jesie = new namer("name");
	   sal = new logoman("logo");
           ray = new footer("foot");
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
         if ($(window).width() < 500) {
            if (main_shape != "mini") {
              main_shape = "mini";
              daviewer.gridcols=1;
              diego.show();
              $('#foot_spot').css('position','static');
              $('#foot_spot').trigger("create");
           }
          } else {
             if ($('#foot_spot').css('position') != 'fixed') {
                $('#foot_spot').css('position','fixed');
                $('#foot_spot').trigger("create");
             }
            if ($(window).width() > 1000) {
              if (main_shape != "wide") {
                 main_shape = "wide";
                 diego.show();
              }
              if (daviewer.gridcols != 4) {
                 daviewer.gridcols=4;
                 daviewer.draw_view();
              }
            } else {
               if ($(window).width() > 800) {
                  if (main_shape != "wide") {
                    main_shape = "wide";
                    diego.show();
                  } 
                  if (daviewer.gridcols != 3) {
                    daviewer.gridcols=3;
                    daviewer.draw_view();
                  }
              } else {
                if (main_shape != "reg") {
                   main_shape = "reg";
                   daviewer.gridcols=2;
                   daviewer.draw_view();
                   diego.show();
                }
              }
           }
        }
    });


   $( document ).on( "pageinit", "#page_spot", function( event ) {
      diego.set_botshape("sort");
      ray.show();
      $(window).resize();
   });



</script>

</body>

</html>


