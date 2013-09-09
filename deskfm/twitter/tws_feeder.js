

function tw_feeder () { 

   this.varname = "moe.twfeed";
   this.sterms = "standing desk";

   this.newest_date = "";
   this.newest_twid = "";
   this.oldest_date = "";
   this.oldest_twid = "";

}


tw_feeder.prototype.draw_btns = function() {

   var tmp = "";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var dt = null;
      
     tmp = tmp + "<span>";

     if (this.newest_date != "") {
         tmp = tmp + "<span class='spotd_off' >";
	 dt = new Date(this.newest_date);
         tmp = tmp + dt.toDateString();
  	 tmp = tmp + " ";
         tmp = tmp + dt.getHours();
  	 tmp = tmp + ":";
         tmp = tmp + dt.getMinutes();
         tmp = tmp + "</span>";
         tmp = tmp + "<button id='twitter_feed_btn' onclick='moe.twfeed.next_set();'  >";
         tmp = tmp + "newer";
         tmp = tmp + "</button>";
         tmp = tmp + "<br>"
     }

 
     if (this.newest_twid != "") {
         tmp = tmp + "<span class='spotd_off' >";
	 dt = new Date(this.oldest_date);
         tmp = tmp + dt.toDateString();
  	 tmp = tmp + " ";
         tmp = tmp + dt.getHours();
  	 tmp = tmp + ":";
         tmp = tmp + dt.getMinutes();
         tmp = tmp + "</span>";
         tmp = tmp + "<button id='twitter_feed_btn' onclick='moe.twfeed.prev_set();'  >";
         tmp = tmp + "older";
         tmp = tmp + "</button>";
      }	 
      tmp = tmp + "</span>";

     if (this.oldest_twid != "") {
       ocl =  "moe.save_set();";
       tmp = tmp + "<button id='twfeed_saveset_btn' onclick='"+ocl+"'  >";
       tmp = tmp + " save set ";
       tmp = tmp + "</button>";
     }

   lbl = "feed_btns";
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
   } 

}


tw_feeder.prototype.get_live_tweets  = function (qry_str) {
     var qe = "";
     if (qry_str != undefined) {
	this.sterms = qry_str;
     } 
  
     qe = "?q=" + escape(this.sterms);


     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

     var url='';
     url = 'deskfm/twitter/tws_search.php' + qe;

//     alert(url);
 
     $.getJSON(url,function(json) {

        moe.twfeed.newest_twid = json.newest_twid;
	moe.twfeed.newest_date = json.newest_date;
        moe.twfeed.oldest_twid = json.oldest_twid;
	moe.twfeed.oldest_date = json.oldest_date;

	moe.twfeed.draw_btns();

        amare.add_unsaved(json);

     });   
}





tw_feeder.prototype.next_set  = function () {

   var qe = "";
     if (this.sterms != "" ) {
 	qe = "?q=" + escape(this.sterms);
     } 

     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

    if (this.newest_twid != "" ) {
 	qe = qe + "&since_id=" + this.newest_twid;
     } 

     var url='';
     url = 'deskfm/twitter/tws_search.php' + qe;

//     alert(url);
 
     $.getJSON(url,function(json) {

        moe.twfeed.newest_twid = json.newest_twid;
	moe.twfeed.newest_date = json.newest_date;
        moe.twfeed.oldest_twid = json.oldest_twid;
	moe.twfeed.oldest_date = json.oldest_date;

	moe.twfeed.draw_btns();

        amare.add_unsaved(json);

     });    
}


tw_feeder.prototype.prev_set  = function () {
  
  var qe = "";
     if (this.sterms != "" ) {
 	qe = "?q=" + escape(this.sterms);
     } 

     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

    if (this.oldest_twid != "" ) {
 	qe =  qe + "&max_id=" + this.oldest_twid;
     } 

     var url='';
     url = 'deskfm/twitter/tws_search.php' + qe;

//     alert(url);
 
     $.getJSON(url,function(json) {

        moe.twfeed.newest_twid = json.newest_twid;
	moe.twfeed.newest_date = json.newest_date;
        moe.twfeed.oldest_twid = json.oldest_twid;
	moe.twfeed.oldest_date = json.oldest_date;

	moe.twfeed.draw_btns();

        amare.add_unsaved(json);

     });  

}



