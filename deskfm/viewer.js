 

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

   this.metro_spd=0;
   this.metro_dir="fwd";
   
   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

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

    if (this.zoom == true) {
	 ct = ct + 1;
    }

      while (ct < st) {
        if (this.darungs[ct] != undefined) {
          lbl = this.screen+"_rung_"+ct;
          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='vertical-align:top;' >"; 
	  tmpstr=tmpstr+"</div>";
        }
       ct = ct + 1;
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

    if (this.is_mini == false ) {
	      this.draw_rail();
	      this.draw_raildata();
    }


    if (debug == true) {
       this.draw_debug();
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
   
   this.draw_view();
}



viewer.prototype.set_zoom = function(pspot) {
   this.zoom = true;
   this.to_top(pspot);
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

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}




