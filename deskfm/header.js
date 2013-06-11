


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


       lbl = "search_btn";
       ocl = this.varname + ".set_mainshape(\"\");";
       ocl = ocl + "wanda.toggle();";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' class='spotd_off' style='background-color:white;' >";
       tmp = tmp + "search";
       tmp = tmp + "</span>";

       lbl = "menu_btns";
       tmp = tmp + "<span id='"+lbl+"' class='' style='background-color:white;' >";
       tmp = tmp + "</span>";

       lbl = "share_btn";
       ocl = this.varname + ".set_mainshape(\"\");";
       ocl = ocl + "nicky.toggle();";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' class='spotd_off' style='background-color:white;' >";
       tmp = tmp + "share";
       tmp = tmp + "</span>";

       tmp = tmp + "<br>"; 

       lbl = "menu_bar";
       tmp = tmp + "<span id='"+lbl+"' class='' style='background-color:white;width:350px;' >";
       tmp = tmp + "</span>";
 

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          this.draw_mainmenu();
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
          tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
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
    if (this.main_shape != "" ) {
	    nicky.hide();
	    wanda.hide();
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


