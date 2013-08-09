

function sorter (pspotid) { 

   this.spotid = pspotid;
   this.showing = false;
   this.varname = "mac";

   this.shape = ""; // twitterhose,database 

   this.menued = false;
   this.sterms = "standing desk";

   this.calon = true;

   this.twfeed = new tw_feeder();

}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

       if (this.shape == "twitterhose") {
         tmp = tmp + "<div>";
	 tmp = tmp + "<button id='sort_shape_btn' onclick='mac.set_shape(\"\");' data-role='button'  >";
 	 tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
         tmp = tmp + "</button>";
	
	 tmp = tmp + "<button id='' onclick='mac.check_feed();'  >";
 	 tmp = tmp + "get";
         tmp = tmp + "</button>";

	 tmp = tmp + "<span class='spotd_off'  >";
         tmp = tmp + "twitter-hose";
         tmp = tmp + "</sapn>";

         tmp = tmp + "<input type='text' name='s' id='feed_string' value='standing desk' >";
         tmp = tmp + "</div>";

         tmp = tmp + "<div id='feed_btns'  >";
         tmp = tmp + "</div>";
	

       } else if (this.shape == "database") {

	 tmp = tmp + "<button id='sort_shape_btn' onclick='mac.set_shape(\"\");' data-role='button'  >";
 	 tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='10px' >";
         tmp = tmp + "</button>";

	 tmp = tmp + "<button id='' onclick='mac.check_local();'  >";
 	 tmp = tmp + "get";
         tmp = tmp + "</button>";

	 tmp = tmp + "<span class='spotd_off'  >";
         tmp = tmp + "database";
         tmp = tmp + "</sapn>";

     	 tmp = tmp + "<span id='cal_spot' >";
         tmp = tmp + "</span>";
	

       } else  {

	 tmp = tmp + "<button id='sort_firehose_btn' onclick='mac.set_shape(\"twitterhose\");' data-role='button'  >";
         tmp = tmp + "twitter-hose";
         tmp = tmp + "</button>";

	 tmp = tmp + "<button id='sort_database_btn' onclick='mac.set_shape(\"database\");' data-role='button'  >";
         tmp = tmp + "database";
         tmp = tmp + "</button>";
	
       } 

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      if (this.shape == "database") {
 	krono.show('cal_spot');
      }
      this.showing = true;
      
   } 

}

sorter.prototype.redraw_view = function(psetype) {

	if (psetype == "unsorted") {
   	  	daviewer.load_unsorted_list();
	} 
	if (psetype == "unsaved") {
		daviewer.load_unsaved_list();
	}

}

sorter.prototype.check_feed = function() {

   var lbl = "";
   var tmp = "";
   var s="";
   lbl = 'feed_string';
   if (document.getElementById(lbl)!= null) {
      s = document.getElementById(lbl).value;
      this.twfeed.get_live_tweets(s); 
   }

}


sorter.prototype.save_set = function() {
    // loop through daviewer
    // call add on all of em 

    var len = daviewer.darungs.length;
    for (var i=0; i<len; i++) {
	    daviewer.darungs[i].postman.add_webit();
    }
    
}


sorter.prototype.check_local = function() {

   var dt = krono.get_datetime();
   daviewer.load_unsorted_list(dt);

}



sorter.prototype.set_shape = function(pstr) {
	if (pstr != undefined) {
          this.shape = pstr;
	}
	this.show();
}


sorter.prototype.toggle_calon = function() {
	if (this.calon == true) {
		this.calon = false;
	} else {
          this.calon = true;
	}
	this.show();
}

sorter.prototype.toggle_shape = function() {
	if (this.shape != "firehose") {
		this.shape = "firehose";
	} else {
          this.shape = "database";
	}
	this.show();
}

 

sorter.prototype.change = function() {
    this.show();
}


sorter.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}



sorter.prototype.hide = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = "";
   var cls="";

   lbl = this.spotid;

   pobj = document.getElementById(lbl);
   if (pobj != null) {
       pobj.innerHTML=tmpstr; 
       this.showing = false;
   }

   
}


sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



