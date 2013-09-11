

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

   lbl = "search_reset_btn";
   ocl= "diego.set_shape(\"\")";
   tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  class='' style='' >";
   tmp = tmp + "search";
   tmp = tmp + "</button>";

     lbl = this.spotid + "_dasbox";
     ocl = this.varname+ ".check_local();";
//     ocl= ocl + this.varname + ".check_central();";
     tmp = tmp + "<input id='"+lbl+"' size=20  onkeyup='"+ocl+"' value='' >";

/*   
   lbl = "search_central_btn";
   ocl= this.varname + ".check_central();";
   tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style='' >";
   tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='20px' onclick='"+ocl+"' >";
   tmp = tmp + "</button>";
*/

    lbl = "search_unset_btn";
    ocl= "diego.set_shape(\"\")";
    tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  class='' style='float:right;' >";
    tmp = tmp + "<img src='deskfm/images/icons/search.png' width='20px' >";
    tmp = tmp + "</button>";

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#search_reset_btn').button();
   } 
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


