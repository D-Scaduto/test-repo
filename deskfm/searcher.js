
function searcher (pspotid) { 

   this.spotid = pspotid + "_spot";
   this.varname = "wanda";
   this.showing = false;
   this.shape = "full";  //full,shrunk
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

     tmp += "<form id='searchbox' style='display:inline-block;padding:0px;vertical-align:middle;' >";
 
     lbl = this.spotid + "_dasbox";
     ocl = this.varname+ ".check_central();";
    tmp = tmp + "<input id='"+lbl+"' data-mini='true' size=8  data-clear-btn='true' onkeyup='"+ocl+"' value='' type='search'  />";

     tmp += "</form >";
 
   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#'+lbl).trigger("create");
    //  lbl = this.spotid + "_dasbox";
   //   $('#'+lbl).textinput("refresh");
      $('#searchbox').on('click', '.ui-input-clear', function(e){
         wanda.clear();
      });
   }
   if (buddah == false) { 
     cater.hide();
   }

}


searcher.prototype.clear = function() {

   var tmp = "";
   var pobj = null;

   this.sterms = "";
   daviewer.load_sorted_list();
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
   if (main_shape == "mini") {
     sal.show();
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


searcher.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = "diego.toggle_topshape(\"search\");";
        if ((buddah == true) && (main_shape != "mini")) {
          ocl = "wanda.toggle();";
        }
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/search.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'search_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

searcher.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'search_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



