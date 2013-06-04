

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

     tmpstr = tmpstr + "<input id='"+lbl+"' size=20  onkeyup='"+ocl+"' >";

     ocl= this.varname + ".check_central();";
     tmpstr = tmpstr + "<img src='deskfm/images/icons/refresh.png' height='20px' onclick='"+ocl+"' >";

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmpstr;
      this.showing = true;
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

   if (pname == "debug") {
     this.draw_debug();
   }
}


searcher.prototype.change = function() {

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


