
function viewer (pscreen,pvarname) {

   this.screen = pscreen;
   this.varname = pvarname;

   this.cat="";       
   this.subcat="";    
   this.sterms = "";
   this.prodids = [];
   this.price = -1;
   this.groupid = "";
   this.stats = null;

   this.listdex = 0;
   this.dalist=[];
   this.darungs= [];

   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

   this.top_end=10;
   this.gridcols=0;

   this.zoom = false;
   this.metro_spd=0;
   this.metro_dir="fwd";
 
}


viewer.prototype.draw_view = function() {
//alert("here");
    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var cls='';
    var moin = "";
    var mout = "";
    var ct = 0; 
    var st = this.top_end;
    var vdex = "";
    var ltype = "";
    var mdex = "";

    if (debug == true) {
      lbl = this.screen+"_debug";
      cls='spotd_off'
      tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style=''  >"; 
      tmpstr=tmpstr+"</div>";
    }

      cls = 'box';
      if (this.is_mini == true) {
        cls='mbox';
      }
      if (this.zoom == true) {
         cls = 'zbox';
         st = 1;
      }


   if (jqm_off == false) {
     if (this.gridcols ==1) { 
       tmpstr=tmpstr+"<ul id='lv' data-role='listview' data-inset='true' >";
     } else if (this.gridcols == 2) {
        tmpstr=tmpstr+"<div  id='gv'  class='ui-grid-a'  >";
     } else if (this.gridcols == 3) {
        tmpstr=tmpstr+"<div  id='gv'  class='ui-grid-b'  >";
     }
     cls = '';
   }

      while (ct < st) {
        if (this.darungs[ct] != undefined) {

         lbl = this.screen+"_rung_"+ct;
         if (jqm_off == true) {
              tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"'  >"; 
              tmpstr=tmpstr+"</div>";
         } else {
            if (this.gridcols == 1) {
              tmpstr=tmpstr+"<li id='"+lbl+"' style='min-width:350px;' >"; 
              tmpstr=tmpstr+"</li>";
            } else {
              cls  = this.next_gridblock(cls);
              tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+" my-box'  >"; 
              tmpstr=tmpstr+"</div>";
            }
         }
        }
       ct = ct + 1;
      }


    if (this.gridcols == 1) {
       tmpstr=tmpstr+"</ul>";
    } else {
       tmpstr=tmpstr+"</div>";
    }
     lbl = this.screen;
 
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;

        ct = 0;
         while (ct <= st) {
           if (this.darungs[ct] != undefined) {
             vdex = this.darungs[ct].vdex;

             if (this.dalist[vdex] != null) {
               mdex = this.dalist[vdex].mdex;
	       ltype = this.dalist[vdex].ltype;

               if (this.darungs[ct].postman == undefined ) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster(this.screen,ct,this.varname,s,this.is_mini);
               }
               if (this.darungs[ct].postman != undefined) {
	         this.darungs[ct].postman.set_ppid(mdex,ltype);
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
               }
	     }
           }
           ct = ct + 1;
	 }
      if (this.gridcols >1) {
          $('#gv').trigger("create");
      } else {
       if (jqm_off == false) {
          $('#lv').listview();
         //      $('#lv').listview("refresh");
          }
      }
   }

    if (this.is_mini == false ) {
	    dale.draw_raildata();
            sal.draw_vman();
    }


    if (debug == true) {
       this.draw_debug();
    }

}


viewer.prototype.set_gridcols = function (pnum) {
   this.gridcols = parseInt(pnum);
   this.draw_view();

}


viewer.prototype.next_gridblock = function (pstr) {
   var ret = "ui-block-a";

   if (this.gridcols == 2) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     }

   } else if (this.gridcols == 3) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     } else if (pstr == "ui-block-b") {
        ret = "ui-block-c";
     }
   }

   return ret;
}


viewer.prototype.toggle_zoom = function () {

   if (this.zoom == true ) {
       this.unset_zoom();
   } else {
       this.set_zoom();
   }
}


viewer.prototype.unset_zoom = function() {
   this.zoom = false;
   this.draw_view();
}



viewer.prototype.set_zoom = function() {
   this.zoom = true;
   this.draw_view();
}



viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}



viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " listlen="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;
     tmp = tmp + " cat="+ this.cat;
     tmp = tmp + " subcat="+ this.subcat;
     tmp = tmp + " sterms="+ this.sterms;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}




