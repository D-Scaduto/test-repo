


viewer.prototype.draw_rail = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";
   var cls = "";
   var moin="";
   var mout="";
   var tsrc = "";

       tmp = tmp + "<span id='rail_btns' class='' style='' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span id='rail_data' class='' style='' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<div>";
       tmp = tmp + "<span id='chunk_bar' class='' style='' >";
       tmp = tmp + "</span>";

       lbl = "rail_zoom_btn";
       ocl = "daviewer.toggle_zoom();";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' class='spotd_off' style='' >";
       tmp = tmp + "zoom";
       tmp = tmp + "</span>";
       tmp = tmp + "</div>";
 
      tmp = tmp + "<div id='debug_rail' style='' >";
      tmp = tmp + "</div>";

   lbl = "rail_spot";
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
       pobj.innerHTML = tmp;
       if (this.btns_showing == false) {
           this.draw_railbtns();
       }
   }

}


viewer.prototype.draw_railbtns = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var cls = "";
   var moin="";
   var mout="";
   var tsrc = "";

   var tot = 0;
   var chunks = 0;
   var cur_chunk = 1;
   var fac = 1;

   if (this.stats != null) {
       tot = this.stats.cnum;
       if (tot > 10) {
         chunk_size = Math.round(tot / 10);
       }

          lbl = 'nitro_btn';
          cls = "spotd_off";
          ocl =  "daviewer.toggle_nitro();";
          tsrc = "deskfm/images/icons/fast_fwd.png";
          if (this.metro_spd > 0 ) {
            tsrc = "deskfm/images/icons/stop.png";
          }
          tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='' onclick='"+ocl+"'  onmouseover='' onmouseout=''   >";
          tmp = tmp + "<img  id='nitro_img' src='"+tsrc+"' height='20px' >";
          tmp = tmp + "</span>";

       lbl = this.screen + "_prev_chunk";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".prev_chunk();";
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/fast_start.png' height='20px' >";
       tmp = tmp + "</span>";

       lbl = this.screen + "_prev_chip";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".prev();";
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/prev.png' height='20px' >";
       tmp = tmp + "</span>";

       lbl = this.screen + "_next_chip"
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".next();";
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/play.png' height='20px' >";
       tmp = tmp + "</span>";

       lbl = this.screen + "_next_chunk"
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".next_chunk();";
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"'  style='' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/fast_end.png' height='20px' >";
       tmp = tmp + "</span>";

/*
    lbl = this.screen + "_shuffle";
    cls = "spotd_off";
    ocl = this.varname + ".load_random_rungs();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/cog.png' height='20px' >";
    tmp = tmp + "</span>";
*/


     lbl = "rail_btns";

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       pobj.innerHTML = tmp;
       this.btns_showing = true;
     }

  }
}


viewer.prototype.draw_raildata = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var cls = "";
   var moin="";
   var mout="";
   var tsrc = "";

   var tot = 0;
   var chunks = 0;
   var cur_chunk = 1;
   var fac = 1;

   if (this.stats != null) {
       tot = this.stats.cnum;
       if (tot > 10) {
         chunk_size = Math.round(tot / 10);
       }

      lbl = this.screen + '_indexbtn';
      cls='spotd_off';
      ocl = 'daviewer.toggle_zoom();';   
    
      tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
      var n = this.listdex + 1;
      tmp = tmp + n;
      tmp = tmp + "</span>";

      lbl = this.screen + '_setlen';
      cls='spotd_off';
      ocl = '';   
      tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
      if (this.stats != null) {
        if (debug == true) {	      
          tmp = tmp + " of " + this.stats.lnum ;
	}
        tmp = tmp + " of " + this.stats.cnum ;
      }
      tmp = tmp + "</span>";  


   lbl = "rail_data";
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
       pobj.innerHTML = tmp;
       this.draw_chunkbar();
       if (debug == true) {
	       this.draw_debug_rail();
       }
   }

  }
}

viewer.prototype.draw_chunkbar = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var cls = "";
   var moin="";
   var mout="";
   var tsrc = "";

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_size =  1;
   var tot = 0;
   var g = 0;
   var e = 0;

    tot = this.stats.cnum;
    if (tot < 10) {

		     lbl = this.screen + "_chips";
		     tmp = tmp + "<div id='"+lbl+"' onclick='' style='display:inline-block;padding:2px;border-color:black;border-style:solid;border-width:1px;' >";
		     tmp = tmp + "</div>";

    } else {

      chunk_size = Math.round(tot / 10);
    
      cur_chunk = 0;
      cur_chunk = Math.floor(this.listdex / chunk_size);

      for (var k=0; k<10;k++) {
                tmp = tmp + "<span style='padding:1px;' >"
                g = k * chunk_size;
	        e = g + chunk_size;
		lbl = this.screen + "_chunk_"+ k;
	        ocl = '';
 	        cls = 'spotd_off';
                moin = "markyd(\""+lbl+"\");";
                mout = "unmarkyd(\""+lbl+"\");";           
                if ((this.listdex >= g) && (this.listdex < e)) {

		     lbl = this.screen + "_chips";
		     tmp = tmp + "<div id='"+lbl+"' onclick='' style='display:inline-block;padding:2px;border-color:black;border-style:solid;border-width:1px;' >";
		     tmp = tmp + "</div>";
		} else {
                  if (g <= this.stats.lnum ) {
	             ocl = this.varname + ".goto_listdex("+g+");";
		     tsrc = "deskfm/images/icons/pez-silver.png";
                     tmp = tmp + "<span  id='"+lbl+"' onclick='"+ocl+"' style='' onmouseover='"+moin+"' onmouseout='"+mout+"' class='"+cls+"' >";
                     tmp = tmp + "<img  src='"+tsrc+"' >"; 
                     tmp = tmp + "</span>"
  		  } else {
                   if (g < this.stats.cnum)  {
	             if (this.listype == "webits") {
          	       if ((this.cat == "all") || (this.cat == "")) {
                         ocl =  "amare.get_webits();";
		       } else {
                         ocl =  "amare.get_cat_list(\""+this.cat+"\",\""+this.subcat+"\");";
		       }
		     }
		     if (this.listype == "people") {
          	       if (this.groupid == "") {
                         ocl =  "amare.get_people();";
		       } else {
                         ocl =  "amare.get_group_list(\""+this.groupid+"\");";
		       }
		     }
                     tsrc = "deskfm/images/icons/pez-brown.png";
		   } else {
                     ocl = '';
 		     tsrc = "deskfm/images/icons/pez-white.png";
		   }
                   tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' style='' onmouseover='"+moin+"' onmouseout='"+mout+"' class='"+cls+"' >";
                   tmp = tmp + "<img src='"+tsrc+"' >"; 
                   tmp = tmp + "</span>";
		}
	     }
             tmp = tmp + "</span>"
         }
    
      }
   lbl = 'chunk_bar';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
       pobj.innerHTML = tmp;
       this.draw_chipbar();
   }
}


viewer.prototype.draw_chipbar = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var cls = "";
   var moin="";
   var mout="";
   var tsrc = "";

   var chunks = 0;
   var cur_chunk = 0;
   var chip_fac = 1;
   var chunk_size = 1;

   var tot = 0;
   var g = 0;
   var st = 0;

    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    } 

    if (debug == true) {
             tmp = tmp + "<span >";
	     tmp = tmp + st;
             tmp = tmp + "</span>";
    }

       for (var k=0; k<10;k++) {

	     g =  st + Math.round(k * chip_fac);

             tsrc = "deskfm/images/icons/pez-white.png";
             lbl = this.screen + "_minichip_"+ k;
             moin = "markyd(\""+lbl+"\");";
             mout = "unmarkyd(\""+lbl+"\");";  
	     cls = "spotd_off";

                  if (g <= this.stats.lnum ) {

                     if ((this.listdex >= g ) && (this.listdex < g+chip_fac)) {
                       tsrc = "deskfm/images/icons/pez-black.png";
 		       ocl="";
                       moin = "";
                       mout="";
                     } else {
	               ocl = this.varname + ".goto_listdex("+g+");";
		       tsrc = "deskfm/images/icons/pez-silver.png";
                     }

  		  } else {

                   if (g < this.stats.cnum)  {


	             if (this.listype == "webits") {
          	       if ((this.cat == "all") || (this.cat == "")) {
                         ocl =  "amare.get_webits();";
		       } else {
                         ocl =  "amare.get_cat_list(\""+this.cat+"\",\""+this.subcat+"\");";
		       }
		     }
       
		     if (this.listype == "people") {
          	       if (this.groupid == "") {
                         ocl =  "amare.get_people();";
		       } else {
                         ocl =  "amare.get_group_list(\""+this.groupid+"\");";
		       }
		     }

                     tsrc = "deskfm/images/icons/pez-brown.png";

		   } else {

                     ocl = '';
 		     tsrc = "deskfm/images/icons/pez-white.png";

		   }
		 }

             tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+moin+"' onmouseout='"+mout+"' >";
             tmp = tmp + "<img  src='"+tsrc+"' >"; 
             tmp = tmp + "</span>";
       }

       if (debug == true) {
             tmp = tmp + "<span >";
	     tmp = tmp + g;
             tmp = tmp + "</span>";
        }

   lbl = this.screen + '_chips';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
       pobj.innerHTML = tmp;
   }
}


viewer.prototype.prev_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_fac =  1;
   var tot = 0;

    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    } 

       this.prev(chunk_size);

}


viewer.prototype.next_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_size =  1;
   var tot = 0;

    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    }

    var nt = this.listdex + chunk_size;
    if (nt > this.stats.cnum) {
	    nt = this.stats.cnum;
    }

    if (nt > this.stats.lnum) {
	             if (this.listype == "webits") {
          	       if ((this.cat == "all") || (this.cat == "")) {
                         amare.get_webits();
		       } else {
                         amare.get_cat_list(this.cat,this.subcat);
		       }
		     }
       
		     if (this.listype == "people") {
          	       if (this.groupid == "") {
                         amare.get_people();
		       } else {
                         amare.get_group_list(this.groupid);
		       }
		     }
    } else {
	    this.next(chunk_size);
    }
}

viewer.prototype.draw_debug_rail = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     var tot = 0;
     var chunks=0;
     var cur_chunk = 1;
     var chunk_size = 1;
     var chip_fac = 0;
     var st = 0;
     

  if (this.stats != null) {
    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = 1;
      cur_chunk = Math.floor(this.listdex / chunk_size);
    }
    chip_fac = Math.round(chunk_size / 10);
  }


       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "cur_chunk=" + cur_chunk;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "chunk_size=" + chunk_size;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "chipfac=" + chip_fac;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "listlen=" + this.dalist.length;
       tmp = tmp + "</span>";

     lbl = "debug_rail";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


viewer.prototype.hide_rail = function() {

    var pobj=null;
    var lbl = "";
    var tmp = "";



    lbl = "rail_spot";
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }
}


