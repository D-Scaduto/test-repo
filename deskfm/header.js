


function menu_item (pbtn,pvar) {
  this.btn = "";
  this.varname = "";
  if (pbtn != undefined) {
    this.btn = pbtn;
  }
  if (pvar != undefined) {
    this.varname = pvar;
  }
}


function header (pspotid) {
 
   this.spotid = pspotid;
   this.varname = "diego";
   this.showing = false;
   this.shape = "full";

   this.mainmenu = [];
   this.main_shape = "";
   this.was_shape = "";

}

header.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var omo = "";
     var omt = "";
     var cls = "";

     if (this.mainmenu.length <2) {
	     this.shape = "";
     }


     if (this.shape == "full") {
       lbl = "menu_btns";
       tmp = tmp + "<div id='"+lbl+"' class='' style='' >";
       tmp = tmp + "</div>";
     }

       lbl = "menu_bar";
       tmp = tmp + "<div id='"+lbl+"' class='' style='position:relative;background-color:silver;' >";
       tmp = tmp + "</div>";


       lbl = "menu_debug";
       tmp = tmp + "<div id='"+lbl+"' class='' style='' >";
       tmp = tmp + "</div>";
    
     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          this.draw_mainmenu();
	  if (debug == true) {
		  this.draw_debug();
	  }
     }

}



header.prototype.redraw_view = function (psetype,pchunk) {

    if (psetype == "webits") { 
        if (this.main_shape == "browse") {
           cater.redraw_view(pchunk);
	}
    }

    if (psetype == "people") { 
       if (this.main_shape == "contact") {
         joe.redraw_view(pchunk);
       }
    } 

    if (this.main_shape == "sort") { 
      if (psetype == "unsaved") { 
        mac.redraw_view("unsaved",pchunk);
      }
      if (psetype == "unsorted") { 
        mac.redraw_view("unsorted",pchunk);
      }
    }

    if (wanda.sterms != "") {
        wanda.check_local();
    }

}



header.prototype.draw_mainmenu = function() {
     var tmp = "";
     var lbl = "";
     var ocl = "";
     var omo = "";
     var omt = "";
     var cls = "";
     var i =0;
     var s = "";

     if (this.shape == "full") {
      tmp = tmp + "<div id='mainmenu_top' >";
       for (i=0;i<this.mainmenu.length;i++) {
	       if (this.mainmenu[i] != undefined)  {
                 lbl = this.mainmenu[i].btn + "_btn";
                 ocl = this.varname + ".toggle_mainitem("+i+");";
                 tmp = tmp + "<input type='radio' name='mainmenu_top' id='"+lbl+"' onclick='"+ocl+"' style='' ";
		 if (this.mainmenu[i].btn == this.main_shape) {
                   tmp = tmp + " checked='checked' ";
		 }
		 tmp = tmp + " >";
                 tmp = tmp + "<label for='"+lbl+"' style='' >"+this.mainmenu[i].btn+"</label>";
	       }
       }
       tmp = tmp + "</div>";

       lbl = "menu_btns";
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
          pobj.innerHTML = tmp;	 
	  $("#mainmenu_top").buttonset();
       }
     }

     for (i=0;i<this.mainmenu.length;i++) {
		s = this.mainmenu[i].varname + ".set_menued(true);";
		eval(s) 
	  }

     if (this.main_shape != "") {
            this.show_mainitem(this.main_shape);
     }
       
}


header.prototype.change_mainitem = function(wdex) {
     var s = "";
     s = this.mainmenu[wdex].varname + ".change();";
     eval(s) 
}


header.prototype.toggle_mainitem = function(wdex) {
	
     var s = "";
     if (wdex != undefined) {
	     if (this.mainmenu[wdex] != undefined) {
		     if (this.main_shape != this.mainmenu[wdex].btn ) {
		       if (this.was_shape != "") {
	  		   this.hide_mainitem(this.was_shape);
		       }
		       this.was_shape = this.main_shape;
 		       this.main_shape = this.mainmenu[wdex].btn;
                       this.show_mainitem(this.main_shape);
	             }
	     }
     }
 
}

header.prototype.show_mainitem = function(pbtn) {
    var fspot = -1;
    var s = "";
     for (i=0;i<this.mainmenu.length;i++) {
       if (this.mainmenu[i].btn == pbtn ) {
         fspot = i;
       }
     }
// alert("p=" + pbtn + " f=" + fspot);
   if (fspot != -1) {
	   if (this.main_shape == this.mainmenu[fspot].btn) {
	     s = this.mainmenu[fspot].varname +".change();";
	   } else {
	     s = this.mainmenu[fspot].varname +".show();";
           }
           eval(s);
   }
   if (debug == true) {
		  this.draw_debug();
  } 
}

 
header.prototype.hide_mainitem = function(pbtn) {
    var fspot = -1;
    var s = "";
     for (i=0;i<this.mainmenu.length;i++) {
       if (this.mainmenu[i].btn == pbtn ) {
         fspot = i;
       }
     }
   if (fspot != -1) {
     s = this.mainmenu[fspot].varname +".hide();";
     eval(s);
   }
}


header.prototype.add_mainspot = function(pbtn,pvar) {

    var fspot = -1;
     for (i=0;i<this.mainmenu.length;i++) {
       if (this.mainmenu[i].btn == pbtn ) {
         fspot = i;
       }
     }
   if (fspot != -1) {
      this.mainmenu[fspot].varname = pvar;
   } else {
      var m = new menu_item(pbtn,pvar)
      this.mainmenu.push(m);
   }

}


header.prototype.del_mainspot = function(pbtn) {
    var fspot = -1;
     for (i=0;i<this.mainmenu.length;i++) {
       if (this.mainmenu[i].btn == pbtn ) {
         fspot = i;
       }
     }
    if (fspot != -1) {
      this.mainmenu.splice(fspot,1);
    }
}



header.prototype.toggle_shape = function() {

   if (this.shape == "full") {
     this.shape = "shrunk";
   } else {
     this.shape = "full";
   }
   this.show();

}


header.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}

header.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }

     this.showing = false;
}


header.prototype.draw_debug = function() {
     var tmp = "";
     var lbl = "";

     tmp = tmp + " main=" + this.main_shape;
     tmp = tmp + " was=" + this.was_shape;

     lbl = "menu_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }

     this.showing = false;
}

