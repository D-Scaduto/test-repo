

function searcher (pmenuid) { 
   this.menuid = pmenuid;
   this.spotid = pmenuid + "_spot";
   this.varname = "wanda";
   this.showing = false;
   this.shape = "full";  //full,shrunk
   this.menued = false;

   this.sterms = "";
   this.full_check = false;
   this.cat = "";
   this.subcat = "";
   this.prodid = "";

}


searcher.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var ims = "";
   var sz = '10';


   lbl = "search_btn";
   ocl = "wanda.change_shape();";
   tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' class='spotd_off' style='' >";
   tmp = tmp + "search";
   tmp = tmp + "</span>";

   if (this.shape == "full") {
     lbl = this.spotid + "_dasbox";
     ocl = this.varname+ ".check_local();";
     tmp = tmp + "<span style='padding:2px' >";
     tmp = tmp + "<input id='"+lbl+"' size=20  onkeyup='"+ocl+"' >";
     tmp = tmp + "</span>";
   }

   /*
   lbl = "search_icbtn";
   ocl= this.varname + ".check_central();";
   tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style='' >";
   tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='20px' onclick='"+ocl+"' >";
   tmp = tmp + "</span>";
   */
  
   ocl = "wanda.change_shape();";
   lbl = 'search_change_btn';
   tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style='float:right;'  onclick='"+ocl+"' > ";
   tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
   tmp = tmp + "</span>";

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
    
   } 


          lbl =  "search_btn";
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


searcher.prototype.change_shape = function() {
   if (this.shape == "full") {
      this.shape = "shrunk";
   } else {
      this.shape = "full";
   }
   this.show();
}

searcher.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
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
   daviewer.load_search_list(st);
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

   lbl = "search_btn";
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


