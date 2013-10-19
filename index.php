<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >
<head>

<title>deskfm.com</title>

<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' >

<script  type="text/javascript" >
  var debug = false;
  var netson = false;
  var is_ie = false;
  var jqm_off = false;

  var buddah = false;
  var pname = "";

  var is_mobile = false;
  var main_shape = "";
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
   main_shape = "mini";
</script>

<?php  } else {  ?>

   <link rel=StyleSheet href='css/jquery.mobile-1.3.2.css' type="text/css" media="screen,print" />
   <script src="lib/jquery.mobile-1.3.2.min.js" ></script>

<?php  }  ?>


<?php   if (isset($_GET['debug'])) {   ?>
<script  type="text/javascript" >
   debug = true;
</script>
<?php  } ?>

<link rel=StyleSheet href='css/base.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/mini.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/reg.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/wide.css' type="text/css" media="screen,print" />

<script  type="text/javascript" >

  var daviewer = null;
  var da_limit=1000;

  var cater = null;  //categor
  var store = null;  //shoper
  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var joe = null;    //supplier
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var louie = null;  //feeder 
  var jesie = null;  //namer
  var dale = null;   //rail 
  var robby = null;  //grouper

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
<script src=deskfm/manager.js type="text/javascript" ></script>

<script src=deskfm/twitter/tws_feeder.js type="text/javascript" ></script>

<script src=deskfm/header.js type="text/javascript" ></script>
<script src=deskfm/footer.js type="text/javascript" ></script>
<script src=deskfm/sizer.js type="text/javascript" ></script>

<script src=deskfm/audio.js type="text/javascript" ></script>
<script src=deskfm/wheretor.js type="text/javascript" ></script>
<script src=deskfm/calendor.js type="text/javascript" ></script>

<script src=deskfm/preloader.js type="text/javascript" > </script>

</head>

<body style='background-color:black;' >

<div id="fb-root"></div> 

<div id='page_spot' data-role='page' class='ui-page my-page' style='' >
 
    <div id='head_spot' style='' class=''  data-position='fixed'  data-role='header' data-theme='b'  >

      <div id='menu_spot' style='' class='' >
      </div>
      <div style='clear:right;' ></div>
      <div id='top_view' class='' style='float:right' data-role='popup'   >
      </div>
      <div id='' class='' style='clear:right;' ></div>
    </div>

    <div id='main_spot'  class=''  style=''   >
    </div>

    <div id='foot_spot' style='min-width:350px;text-align:center;' class=''  data-role='footer' data-theme='b'  >
    </div>
 
</div>

<script type='text/javascript' >

  do_preload();

        sal = new logoman("logo");
        ray = new footer("foot");
	dale = new rail("rail");
	jesie = new namer("name");
        store = new shoper("shop");
        cater = new categor("browse");
	wanda = new searcher("search");
	nicky = new sharer("share");
	mac = new sorter("sort");
	louie = new feeder("feed");
        amare = new stater();

        daviewer = new viewer("main_spot","daviewer");

        if (is_mobile == true) {
           da_limit = 100;
           daviewer.top_end = 25;
        } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
       }

     amare.get_stats();
//    amare.get_suppliers();
//    amare.get_products();
    amare.get_webits();

	diego = new header();

    if (jqm_off == false) {
      $.mobile.popup.prototype.options.history = false;

      $(window).resize(function(val) {
          set_header();
          set_viewer();
      });

      $( document ).on( "pageinit", "#page_spot", function( event ) {
          set_header();
          set_viewer();
      });
    } else {
       diego.show();
       diego.set_topshape();
    }


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


