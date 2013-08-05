


viewer.prototype.draw_rail = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";

       tmp = tmp + "<div id='rail_btns' class='' style='' >";
       tmp = tmp + "</div>";
/*
       tmp = tmp + "<div>";
       tmp = tmp + "<span id='central_chunkbar' class='' style='width:75px;display:inline-block;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='central_chunkdata' style='padding:10px;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "</div>";
*/
       tmp = tmp + "<div>";
       tmp = tmp + "<span id='local_chunkbar' class='' style='width:75px;display:inline-block;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='local_chunkdata' style='padding:10px;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "</div>";

       tmp = tmp + "<div>";
       tmp = tmp + "<span id='local_chipbar' class='' style='width:75px;display:inline-block;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='local_chipdata' style='padding:10px;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "</div>";

       tmp = tmp + "<div id='rail_debug' class='' style='' >";
       tmp = tmp + "</div>";

    
   lbl = "rail_spot";
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
	pobj.innerHTML = tmp;
       this.draw_railbtns();
       this.railon = true;
       this.rail_showing = true;
/*
       $('#central_chunkbar').slider({
	    range: false,
 	    min: 0,
	    max: 100,
            value: 0,
	    slide: function( event, ui ) {
	      $( "#central_chunkdata" ).html( ui.value );
	    }
       });
*/
      var lchunk = 1
      var lchunks = 1;
      if (this.stas != null) {
        lchunk = Math.floor(this.listdex/this.top_end);
        lchunks = this.stats.lnum / this.top_end;
      }
      var lc = lchunk +1;
      var st = lchunk * this.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + this.top_end -1;
      var ld = this.listdex + 1;

       if (this.stats != null) {
          lchunk = Math.floor(this.listdex/this.top_end);
          lchunks = this.stats.lnum / this.top_end;
       }

       $('#local_chunkbar').slider({
	    range: false,
 	    min: 0,
	    value: 0 ,
            max: lchunks , 
	    slide: function( event, ui ) {
		var st = ui.value * daviewer.top_end;
	        daviewer.load_list(st);
	    }
       });

       $('#local_chipbar').slider({
	    range: false,
 	    min: st,
	    max: fn,
            value : ld,
	    stop: function( event, ui ) {
	        daviewer.goto_listdex(ui.value);
	    }
	});

       this.draw_raildata();
   }
}



viewer.prototype.draw_raildata = function() {

   if (this.stats != null) {

      var lchunk = Math.floor(this.listdex/this.top_end);
      var lchunks = this.stats.lnum / this.top_end;
      var lc = lchunk +1;
      var st = lchunk * this.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + this.top_end ;
      var ld = this.listdex + 1;

   //   $('#central_chunkbar').slider("option", "value", this.stats.lnum );
   //   $('#central_chunkbar').slider("option", "max", this.stats.cnum );
  //    $('#central_chunkdata').html(this.stats.lnum  + " of " + this.stats.cnum);

      $('#local_chunkdata').html("set " +lc + " of " + lchunks );
      $('#local_chunkbar').slider("option", "value", lchunk  );
      $('#local_chunkbar').slider("option", "max", lchunks );
      $('#local_chunkbar').slider("option", "min", 0 );
      
      $('#local_chipbar').slider("option", "min", st );
      $('#local_chipbar').slider("option", "max", fn );
      $('#local_chipbar').slider("option", "value", ld );
      $('#local_chipdata').html(ld + " of " + daviewer.dalist.length);

   } else {
//	   alert("no stats");
   }

       if (debug == true) {
	       this.draw_debug_rail();
       }
}


viewer.prototype.draw_railbtns = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var tsrc = "";
   var ocl = "";


       lbl = this.screen + "_prev_chunk";
       ocl = "";
       tmp = tmp + "<button  id='"+lbl+"' onmouseover='daviewer.nitro_start(\"back\");' onmouseout='daviewer.nitro_stop();' class='' style='width:30px;' >";
       tmp = tmp + "<img src='deskfm/images/icons/fast_start.png' width='20px' >";
       tmp = tmp + "</button>";

       lbl = this.screen + "_prev_chip";
       ocl = this.varname + ".prev();";
       tmp = tmp + "<button  id='"+lbl+"' onclick='"+ocl+"' class='' style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/prev.png' width='20px' >";
       tmp = tmp + "</button>";

       lbl = this.screen + "_next_chip";
       ocl = this.varname + ".next();";
       tmp = tmp + "<button  id='"+lbl+"' onclick='"+ocl+"'  class='' style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/play.png' width='20px' >";
       tmp = tmp + "</button>";

       lbl = this.screen + "_next_chunk";
       ocl = "";
       tmp = tmp + "<button id='"+lbl+"' onmouseover='daviewer.nitro_start(\"fwd\");' onmouseout='daviewer.nitro_stop();' class='' style='width:30px;' >";
       tmp = tmp + "<img src='deskfm/images/icons/fast_end.png' width='20px' >";
       tmp = tmp + "</button>";

       /*
       lbl = this.screen + "_zoom_btn";
       ocl = "daviewer.toggle_zoom();";
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style='width:30px;' >";
       tmp = tmp + "<img src='deskfm/images/icons/pop-out.jpg' width='20px' >";
       tmp = tmp + "</button>";
	*/
/*
    lbl = this.screen + "_shuffle";
    ocl = this.varname + ".load_random_rungs();";
    tmp = tmp + "<button  id='"+lbl+"'   onclick='"+ocl+"' data_role='button' >";
    tmp = tmp + "<img src='deskfm/images/icons/cog.png' height='30px' >";
    tmp = tmp + "</button>";
*/


     lbl = "rail_btns";

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       pobj.innerHTML = tmp;
       this.btns_showing = true;
/*
       $('#nitro_btn').button();
       lbl = this.screen + "_prev_chunk";
       $("#"+lbl).button();
       lbl = this.screen + "_prev_chip";
//   $("#"+lbl).button( { icons: {primary: 'ui-icon-circle-triangle-w', secondary: null} } );
       $("#"+lbl).button();
       lbl = this.screen + "_next_chip";
    //   $("#"+lbl).button( { icons: {primary: 'ui-icon-custom', secondary: null} } );
       $("#"+lbl).button();
       lbl = this.screen + "_next_chunk";
       $("#"+lbl).button();
*/
     }
}


viewer.prototype.prev_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_fac =  1;
   var tot = 0;
   if (this.stats != null) {
    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    } 

       this.prev(chunk_size);
   }

}


viewer.prototype.next_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_size =  1;
   var tot = 0;
 
   if (this.stats != null) {
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
}


viewer.prototype.toggle_rail = function() {
	if (this.railon == true) {
	     this.hide_rail();
	} else {
	     this.draw_rail();
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
    this.rail_showing = false;
    this.railon = false;
}


viewer.prototype.draw_debug_rail = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

  if (this.stats != null) {

/*
       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "cur_chunk=" + cur_chunk;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "chunk_size=" + chunk_size;
       tmp = tmp + "</span>";
*/
       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "lnum=" + this.stats.lnum;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "cnum=" + this.stats.cnum;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "listdex=" + this.listdex;
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "listlen=" + this.dalist.length;
       tmp = tmp + "</span>";

  } else {
	  tmp = tmp + "no stats object";
  }

     lbl = "rail_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}

