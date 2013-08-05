 

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

   this.top_end=10;

   this.zoom = false;
   this.tail = true;
   this.railon = true;
   this.rail_showing = false;

   this.metro_spd=0;
   this.metro_dir="fwd";
   
   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

   this.color="";
   this.whenaply = false; 
}



viewer.prototype.draw_view = function() {

    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var cls='';
    var ct = 0; 
    var st = this.top_end;
    var vdex = "";
    var ltype = "";
    var mdex = "";

    lbl = this.screen+"_debug";
    cls='spotd_off'
    tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style=''  >"; 
    tmpstr=tmpstr+"</div>";

    cls = 'box';
  
    if (this.is_mini == true) {
      cls='cbox';
    }

    if (this.zoom == true) {
	 ct = ct + 1;
    }

    if (this.tail == true) {
      while (ct < st) {
        if (this.darungs[ct] != undefined) {
          lbl = this.screen+"_rung_"+ct;
          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='vertical-align:top;' >"; 
	  tmpstr=tmpstr+"</div>";
        }
       ct = ct + 1;
      }
    }

     lbl = this.screen;
     if (document.getElementById(lbl)!= null) {

       document.getElementById(lbl).innerHTML=tmpstr;

       ct = 0; 
       if (this.zoom == true) {

          if (this.darungs[ct] != undefined) {

             vdex = this.darungs[ct].vdex;
             if (this.dalist[vdex] != null) {

               mdex = this.dalist[vdex].mdex;
	       ltype = this.dalist[vdex].ltype;
		

	       if (this.darungs[ct].postman == undefined) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster("zoom",ct,this.varname,s,this.is_mini);
	       }
               if (this.darungs[ct].postman != undefined) {
                 this.darungs[ct].postman.set_ppid(mdex,ltype);
                 this.darungs[ct].postman.spotid = 'zoom';
  	         this.darungs[ct].postman.piczoom = true;
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
              }
	     }
	  }
	  ct = ct + 1;
       }

       if (this.tail == true) {
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
       }
    }

    if (this.is_mini == false ) {
       if (this.railon == true) {
	   if (this.rail_showing == false) {
	      this.draw_rail();
	   } else {
		   this.draw_raildata();
	   }
       }
    }


    if (debug == true) {
       this.draw_debug();
    }

}



viewer.prototype.get_dadex = function() {
   return this.dalist[this.listdex];
}






viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " listlen="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


viewer.prototype.change_shape = function() { 

	if (this.zoom == false) {
          if (this.tail == true) {
	      this.unset_tail();
           }
   	   this.set_zoom();
	} else {
	    if (this.tail == false) {
		    this.set_tail();
	    } else {
		  this.unset_zoom();
	    }
	}

}


viewer.prototype.toggle_tail = function() {

   if (this.tail == true) {
     this.unset_tail();
   } else {
     this.set_tail();
   }
}


viewer.prototype.unset_tail = function() {
	var lbl = "";
	var pobj = null;
	var tmp = "";

   this.tail = false;
   lbl = "main_view";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }

   this.set_zoom(); 
}



viewer.prototype.set_tail = function(pspot) {
   this.tail = true;
   this.draw_view();
}


viewer.prototype.toggle_zoom = function() {

   if (this.zoom == true) {
     this.unset_zoom();
   } else {
     this.set_zoom();
   }

}



viewer.prototype.unset_zoom = function() {
	var lbl = "";
	var pobj = null;
	var tmp = "";

   this.zoom = false;
 
   lbl = "zoom_rung_0";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }

   this.darungs[0].postman = undefined;
   
   this.tail = true;
   this.draw_view();
}



viewer.prototype.set_zoom = function(pspot) {
   this.zoom = true;
   this.tail = false;
   this.to_top(pspot);
}



 viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}





 viewer.prototype.draw_place = function(tspot,tdex) {

  var tmpstr = "";
  var lbl = this.screen +"_"+ tspot +"_place_spot";
   tmpstr = tmpstr + " ";

 if ( document.getElementById(lbl) != null ) {
    document.getElementById(lbl).innerHTML= tmpstr;
  }

}



