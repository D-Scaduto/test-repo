

function tw_feeder () { 

   this.varname = "mac.twfeed";

   this.sterms = "standing desk";
   this.last_twid = "";
   this.first_date = "";
   this.last_date = "";

}


tw_feeder.prototype.draw_btns = function() {

   var tmp = "";
   var pobj = null;
   var lbl = "";
   var ocl="";

     if (this.first_date != "") {
	 ocl = this.varname + ".prev_set();";
	 tmp = tmp + "<button id='twfeed_next_btn' onclick='"+ocl+"' data-role='button'  >";
         tmp = tmp + " < "
         tmp = tmp + "</button>";
     }

     tmp = tmp + "<button id='twitter_feed_btn' onclick='mac.check_feed();' data-role='button'  >";
     tmp = tmp + " ";
     tmp = tmp + "</button>";

     if (this.last_twid != "") {
	 ocl = this.varname + ".next_set();";
	 tmp = tmp + "<button id='twfeed_prev_btn' onclick='"+ocl+"' data-role='button'  >";
         tmp = tmp + " > ";
         tmp = tmp + "</button>";
      }	 

   lbl = "feed_btns";
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      $('#twfeed_next_btn').button();
      $('#twfeed_prev_btn').button();
   } 

}


tw_feeder.prototype.next_set  = function () {
   this.get_live_tweets (this.sterms,this.last_twid);
}


tw_feeder.prototype.prev_set  = function () {

}


tw_feeder.prototype.get_live_tweets  = function (qry_str,ltwid) {
     var qe = "";

     if (qry_str != undefined) {
	this.sterms = qry_str;
     } 
	     
  
     qe = "?q=" + escape(this.sterms);

     if (ltwid != undefined) {
       qe = qe + "&max_id=" + ltwid;
     }

     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

     var url='';
     url = 'deskfm/twitter/tws_search.php' + qe;

   //  alert(url);
 
     $.getJSON(url,function(json) {

        mac.twfeed.last_twid = json.last_twid;
	mac.twfeed.first_date = json.first_date;
	mac.twfeed.last_date = json.last_date;

	mac.twfeed.draw_btns();

        amare.add_unsaved(json);

     });   
}



tw_feeder.prototype.get_db_tweets = function(pyear,pmon,pweek)
 {
   var url='deskfm/twitter/dfm_dbget.php';
   url = url + "?yr="+ pyear;
   url = url + "&mon="+ pmon;
   url = url + "&lim="+ tws_limit;


   if (pweek != undefined) {
    url = url + "&week="+ pweek;
   }
   url = url + "&chip="+ cur_chip;


    $.getJSON(url,function(json) {
    main_array = json;
    dfm_buildblocks();
    for (var k=0; (k <main_array.length) ; k++) {

       if (main_array[k] != null) {
           main_array[k].state = "stored";
           main_array[k].hide = false;
       }
          
    }
    tws_showall();

   });   // end get json 
 }


 
tw_feeder.prototype.tws_store = function (i)
  {

     var url='deskfm/twitter/tws_store.php?';

     url = url + "twid="+main_array[i].id_str;

     url = url + "&twuser="+encodeURIComponent(main_array[i].from_user);
     url = url + "&twpicurl="+encodeURIComponent(main_array[i].profile_image_url);
     url = url + "&twtext="+encodeURIComponent(main_array[i].text);

     var td1 = main_array[i].created_at; 
     var td2 = td1.slice(td1.indexOf(',')+1, td1.indexOf('+'));

     var pcs = td2.split(' ');
    var bigd = new Date(td2); 

    var df = bigd.getFullYear() + "-" + (bigd.getMonth()+1) + "-" + bigd.getDate();
    df = df + " " + bigd.getHours() + ":" + bigd.getMinutes() + ":" + bigd.getSeconds();

     url = url + "&twdate="+encodeURIComponent(df); 
     alert(url);

    $.get(url, function(data) {
         var lbl =  "#tws_"+i;
 
         $(lbl).addClass('tws_stored') ;
            // alert(data);
            main_array[i].state = "stored";
            tws_btns(i);
            tws_show(i);

      } );
 }


tw_feeder.prototype.tws_unstore = function (i)
  {

     var url='deskfm/twitter/tws_unstore.php?';
     url = url + "twid="+main_array[i].id_str;

    $.get(url, function(data) {
         var lbl =  "#tws_"+i;
         $(lbl).addClass('tws_none') ;
            // alert(data);
            main_array[i].state = "none";
            tws_btns(i);
            tws_show(i);
      } );
 }




 
tw_feeder.prototype.tws_ignore = function (i)
  {
     var url='deskfm/twitter/tws_ignore.php?';
     url = url + "twid="+main_array[i].id_str;
     url = url + "&twuser="+encodeURI(main_array[i].from_user);

      $.get(url, function(data) {
    //    alert(data);
         main_array[i].state = "ignored"; 
         tws_hide(i);

        var lbl = "#tws_"+i;
         $(lbl).addClass('tws_ignored') ;

       } );
 }





tw_feeder.prototype.tws_check_state = function ()
  {

     for (var k=0; (k <main_array.length) ; k++) {

           if (main_array[k] != null) {
               main_array[k].state = "none";
               main_array[k].hide = false;

            }
          }

     var url='deskfm/twitter/tws_getids.php';
      $.get(url, function(data) {  

         var stored_twids = [];
         stored_twids = data.split("|"); 

          for (var i=0; (i <stored_twids.length) ; i++) {
                tws_setstate(stored_twids[i],"stored");
          }

         var url2='deskfm/twitter/tws_getignids.php';

          $.get(url2, function(data2) {  
            var ignored_twids = [];
            ignored_twids = data2.split("|");

            for (var j=0; (j <ignored_twids.length) ; j++) {
                tws_setstate(ignored_twids[j],"ignored");
           }

            tws_showall();
         } );

     } );
 }


  
