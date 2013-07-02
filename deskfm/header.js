


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


     if (buddah == true) {

       lbl = "menu_btns";
       tmp = tmp + "<div id='"+lbl+"' class='' style='padding:5px;' >";
       tmp = tmp + "</div>";

       lbl = "menu_bar";
       tmp = tmp + "<div id='"+lbl+"' class='' style='padding:5px;' >";
       tmp = tmp + "</div>";

     } else {

       lbl = "search_spot";
       tmp = tmp + "<div id='"+lbl+"' class='' style='padding:5px;' >";
       tmp = tmp + "</div>";

       lbl = "cat_spot";
       tmp = tmp + "<div id='"+lbl+"' class='' style='padding:5px;' >";
       tmp = tmp + "</div>";

     }

          tmp = tmp + "<div style='width:300px;background-color:white;border:3px solid grey;padding:3px;' >";

          lbl = 'nitro_btn';
          cls = "spotd_off";
          ocl =  "daviewer.toggle_nitro();";
          tsrc = "deskfm/images/icons/fast_fwd.png";
          if (this.metro_spd > 0 ) {
            tsrc = "deskfm/images/icons/stop.png";
            ocl = "daviewer.nitro_stop();";
          }
          tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"'  style='display:inline-block;vertical-align:top;' onclick='"+ocl+"'  onmouseover='' onmouseout=''   >";
          lbl = 'nitro_img';
          tmp = tmp + "<img  id='"+lbl+"' src='"+tsrc+"' height='20px' >";
          tmp = tmp + "</div>";

          tmp = tmp + "<div id='nitro_img' onclick='daviewer.toggle_nitro();' style='display:inline-block;vertical-align:top;' >";

          tmp = tmp + "<img src='deskfm/images/icons/fast_fwd.png' height='20px' >";
          tmp = tmp + "</div>";

          tmp = tmp + "<div id='top_rail' style='display:inline-block;' >";
          tmp = tmp + "</div>";

          tmp = tmp + "</div>"; 

          tmp = tmp + "<div style='clear:left;' ></div>";
          tmp = tmp + "<div style='clear:right;' ></div>";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          this.draw_mainmenu();
     }

}

header.prototype.redraw_view = function (psetype,pchunk) {

    sal.draw_vman();

    if (this.main_shape == "browse" ) {
	    if (psetype == "webits") { 
   	       cater.redraw_view(pchunk);
	    }
    } else if (this.main_shape == "contact") {
	    joe.redraw_view(pchunk);

    } else if (this.main_shape == "sort") {
            if (psetype == "unsorted") {
               mac.redraw_view(pchunk);
	    }
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

      for (i=0;i<this.mainmenu.length;i++) {
          lbl = this.mainmenu[i].btn + "_btn";
          omo = "markyd(\""+lbl+"\");";
          omt = "unmarkyd(\""+lbl+"\");";
          ocl = this.varname + ".set_mainshape(\""+this.mainmenu[i].btn+"\");";
          cls = "spotd_off";
        if (this.mainmenu[i].btn == this.main_shape ) {
          cls = "spotd_on";
          ocl = this.varname + ".change_mainitem("+i+");";
        }
          tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' style='padding:2px;'  >";
          tmp = tmp + this.mainmenu[i].btn;
          tmp = tmp + "</span>";
      }

     lbl = "menu_btns";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          if (this.main_shape != "") {
            this.show_mainitem(this.main_shape);
          }
    }

}


header.prototype.change_mainitem = function(wdex) {
     var s = "";
     s = this.mainmenu[wdex].varname + ".change();";
     eval(s) 
}

header.prototype.toggle_mainitem = function(wdex) {
     var s = "";
     s = this.mainmenu[wdex].varname + ".toggle();";
     eval(s) 
}

header.prototype.show_mainitem = function(pbtn) {
    var fspot = -1;
    var s = "";
     for (i=0;i<this.mainmenu.length;i++) {
       if (this.mainmenu[i].btn == pbtn ) {
         fspot = i;
       }
     }
   if (fspot != -1) {
     s = this.mainmenu[fspot].varname +".show();";
     eval(s);
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
   this.draw_main();
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



header.prototype.set_mainshape = function(pstr) {
  var tshape = "";
  if (pstr != undefined ) {
	 tshape = pstr;
  }
    if (tshape != this.main_shape) {
       this.was_shape = this.main_shape;
       this.main_shape = pstr;
    }
  this.draw_mainmenu();
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

     lbl = "main_" + this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }

     this.showing = false;
}


