

function sorter (pspotid) { 

   this.spotid = pspotid;
   this.showing = false;
   this.varname = "mac";

   this.shape = "sort"; // feed

   this.menued = false;
   this.sterms = "standing desk";

   this.cal = new calendor('cal_spot',"mac.cal");

}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   
       tmp = tmp + "<span id='cal_spot' >";
       tmp = tmp + "</span>";


       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "<input id='feed_string' size='15' value='"+this.sterms+"' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' onclick='mac.check_feed();' >";
       tmp = tmp + "twitter";
       tmp = tmp + "</span>";

       tmp = tmp + "<div id='feed_btns'  >";
       tmp = tmp + "</div>";


   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      this.cal.show();
      if (this.shape == "sort") {
	  this.redraw_view();
      }	  
   } 

   lbl = this.spotid + "_btn";
   pobj = document.getElementById(lbl);
   if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_on";
       } else {
         pobj.setAttribute("class","spotd_on");
       }
   }

}


sorter.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
	this.show();
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


sorter.prototype.toggle_feed = function() {
	if (this.shape != "feed") {
		this.shape = "feed";
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

   lbl = this.spotid + "_btn";
   pobj = document.getElementById(lbl);
   if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_off";
       } else {
         pobj.setAttribute("class","spotd_off");
       }
   }
}


sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



