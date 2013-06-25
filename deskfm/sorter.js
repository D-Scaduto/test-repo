

function sorter (pspotid) { 

   this.spotid = pspotid;
   this.showing = false;
   this.varname = "mac";
   this.sterms = "standing desk";
   this.shape = "sort"; // feed
   this.cal = new calendor('sort_calendor',"mac.cal");

}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   

 
       tmp = tmp + "<div>";

       lbl = 'sort_unbtn';
       ocl = this.varname + ".set_shape(\"sort\");";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='/deskfm/images/icons/grey_round.png' height='20px' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "<input id='feed_string' size='15' value='"+this.sterms+"' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' onclick='mac.check_feed();' >";
       tmp = tmp + "twitter";
       tmp = tmp + "</span>";

       tmp = tmp + "</div>";

       tmp = tmp + "<div id='feed_btns'  >";
       tmp = tmp + "</div>";


   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      if (this.shape == "sort") {
	  this.redraw_view();
	  this.cal.show();
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



