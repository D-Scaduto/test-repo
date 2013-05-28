

function searcher (pspotid,pboss) { 

   this.spotid = pspotid;
   this.boss = pboss;
   this.varname = "wanda";
   this.showing = false;
   this.shape = "off";
   this.sterms = "";
   this.full_check = false;
   this.cat = "";
   this.subcat = "";
   this.prodid = ""; 
}


searcher.prototype.show = function() {

   var tmpstr = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var ims = "";
   var sz = '10';

      lbl = this.spotid + "_dasbox";
      ocl = this.varname+ ".check_local();";

         tmpstr = tmpstr + "<input id='"+lbl+"' size=22  onkeyup='"+ocl+"' >";

         tmpstr = tmpstr + "<span id='search_btns' >";
         tmpstr = tmpstr + "</span>";


   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmpstr;
      this.draw_btns();
      this.showing = true;
   } 

     cls = 'spotd_on';
     lbl = 'search_toggle_btn';

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       if (is_ie) {
         pobj.className = cls;
       } else {
         pobj.setAttribute("class",cls);
       }
     }


   sal.draw_vman();

   if (pname == "debug") {
     this.draw_debug();
   }
}

searcher.prototype.draw_btns = function() {

   var tmpstr = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

      lbl = 'search_central_btn';
      ocl= this.varname + ".check_central();";
      tmpstr = tmpstr + "<span  class='spotd_off' onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  style='vertical-align:top;' >";
      tmpstr = tmpstr + "<img src='deskfm/images/icons/refresh.png' height='20px' >";
      tmpstr = tmpstr + "</span>";

   lbl = this.spotid;
   lbl = "search_btns";
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmpstr;
   } 
}


searcher.prototype.toggle_shape = function() {

  if (this.shape == "on") {
    this.shape = "off";
  } else {
     this.shape = "on";
  }
  this.show();
}


searcher.prototype.check_local = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = this.spotid + "_dasbox";
   var st = "";

   if (document.getElementById(lbl) != null) {
       st =  document.getElementById(lbl).value; 
   }

   this.sterms = st;
   daviewer.get_lsearch_list(st);
}


searcher.prototype.check_central = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = this.spotid + "_dasbox";
   var st = "";
   var s= "";

   if (document.getElementById(lbl) != null) {
       st =  document.getElementById(lbl).value; 
   }
   if (st != "") { 
       this.sterms = st;
       daviewer.sterms = st;
       amare.get_csearch_list(st);
   }
}


searcher.prototype.hide = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = "";
   var cls="";

   lbl = this.spotid;
//   lbl = "share_spot_rung_0";

   pobj = document.getElementById(lbl);
   if (pobj != null) {
       pobj.innerHTML=tmpstr; 
       this.showing = false;
       var se = this.boss + ".show();";
       eval(se);
   }

     cls = 'spotd_off';
     lbl = 'search_toggle_btn';

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       if (is_ie) {
         pobj.className = cls;
       } else {
         pobj.setAttribute("class",cls);
       }
     }

}



searcher.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


searcher.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + "searcher";
     tmp = tmp + " sh="+ this.shape;
     tmp = tmp + " st="+ this.sterms;
     lbl = this.spotid + '_debug';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


