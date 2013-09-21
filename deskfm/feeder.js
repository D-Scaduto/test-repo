

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

     lbl = "feed_reset_btn";
      ocl= "diego.set_shape(\"\")";
      tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style='vertical-align:top;' >";
      tmp = tmp + "feeds";
      tmp = tmp + "</button>";

      tmp = tmp + "<input type='text' name='s' id='feed_string' size='10' value='standing desk' style='vertical-align:top;'  >";

      tmp = tmp + "<span id='' onclick='louie.check_feed();'  >";
      tmp = tmp + "<img src='deskfm/images/icons/twitter.png' class='menu_btn'  >";
      tmp = tmp + "</span>";

      tmp = tmp + "<span id='feed_btns'  >";
      tmp = tmp + "</span>";
 
      if (is_mini == true) {
        lbl = 'feed_unset_btn';
        ocl =  'diego.set_shape(\"\");'
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
        tmp = tmp + "<img src='deskfm/images/icons/cloud.png' class='menu_btn'  >";
        tmp = tmp + "</span>"; 
      }
 
  
   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#feed_reset_btn').button();
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


feeder.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



