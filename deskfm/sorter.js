

function sorter (pspotid) { 

   this.spotid = pspotid;
   this.showing = false;
   this.varname = "mac";

   this.shape = ""; // live

   this.menued = false;
   this.sterms = "standing desk";

   this.cal = new calendor('cal_spot',"mac.cal");
   this.calon = true;

}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

       if (this.shape == "live") {
	 tmp = tmp + "<button id='live_feed_btn' onclick='mac.toggle_shape();' data-role='button'  >";
         tmp = tmp + "live";
         tmp = tmp + "</button>";

        
         tmp = tmp + "<input type='text' name='s' id='feed_string' value='standing desk' >";
      

         tmp = tmp + "<button id='twitter_feed_btn' onclick='mac.check_feed();' data-role='button'  >";
         tmp = tmp + "check twitter";
         tmp = tmp + "</button>";

         tmp = tmp + "<span id='feed_btns'  >";
         tmp = tmp + "</span>";

 	

       } else {

	 tmp = tmp + "<button id='live_feed_btn' onclick='mac.toggle_shape();' data-role='button'  >";
         tmp = tmp + "live";
         tmp = tmp + "</button>";

	 tmp = tmp + "<span id='cal_spot' >";
         tmp = tmp + "</span>";

	
       }

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;

      $('#live_feed_btn').button();

      if (this.shape == "live") {
        $('#twitter_feed_btn').button();
      } else {
 	this.cal.show();
	daviewer.load_unsorted_list();
      }

      this.showing = true;
      
   } 

}

sorter.prototype.redraw_view = function() {
	daviewer.load_unsorted_list();

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
	if (this.shape != "live") {
		this.shape = "live";
	} else {
          this.shape = "";
	}
	this.show();
}

sorter.prototype.check_feed = function() {

   var lbl = "";
   var tmp = "";
   var s="";
   lbl = 'feed_string';
   if (document.getElementById(lbl)!= null) {
      s = document.getElementById(lbl).value;
      tws_get(s); 
   }

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



