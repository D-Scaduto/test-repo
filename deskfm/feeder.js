
function feeder (pmenuid) { 

   this.spotid = pmenuid + "_spot";
   this.varname = "louie";
   this.shape = ""; 
   this.showing = false;
   this.menued = false;
   this.sterms = "standing desk";
   this.twfeed = new tw_feeder();
}

feeder.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

     tmp = tmp + "<div style='width:300px;display:inline-block;'  >";

      tmp = tmp + "<span style='width:150px;display:inline-block;vertical-align:middle;'  >";
      tmp = tmp + "<input type='text' name='s' data-inline='true' size=10 id='feed_string'  value='standing desk' style=''  >";
      tmp = tmp + "</span>";

        ocl='louie.check_feed();';
      tmp = tmp + "<button  data-role='button' data-inline='true'  onclick='"+ocl+"' style='vertical-align:top;' data-mini='true'  >";
      tmp = tmp + "<img src='deskfm/images/icons/twitter.png' class='' width='20px'  >";
      tmp = tmp + "</button>";

      tmp = tmp + "<div id='feed_btns' style='display:inline-block;vertical-align:middle;'  >";
      tmp = tmp + "</div>";

     tmp = tmp + "</div>";

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#'+lbl).trigger("create");
      if (amare.unsavedlist.length ==  0) {
         this.check_feed();
      } else {
         daviewer.load_unsaved_list(); 
      } 
   } 

}



feeder.prototype.check_feed = function() {

   var lbl = "";
   var tmp = "";
   var s="";
   lbl = 'feed_string';
   if (document.getElementById(lbl)!= null) {
      s = document.getElementById(lbl).value;
      this.twfeed.get_live_tweets(s); 
   }

}


feeder.prototype.save_set = function() {
    // loop through daviewer
    // call add on all of em 

    var len = daviewer.darungs.length;
    for (var i=0; i<len; i++) {
        if (daviewer.darungs[i].postman != undefined) {
	    daviewer.darungs[i].postman.add_webit();
        }
    }
    
}


feeder.prototype.redraw_view = function(psetype) {
	if (psetype == "unsaved") {
		daviewer.load_unsaved_list();
	}
}



feeder.prototype.set_shape = function(pstr) {
	if (pstr != undefined) {
          this.shape = pstr;
	}
	this.show();
}



feeder.prototype.change = function() {
    this.show();
}


feeder.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}



feeder.prototype.hide = function() {

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

 
feeder.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_botshape(\"feed\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'feed_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

feeder.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'feed_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



feeder.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



