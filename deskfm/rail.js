

viewer.prototype.draw_rail = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";

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

      var lchunk = 1
      var lchunks = 1;
       if (this.stats != null) {
          lchunk = Math.floor(this.listdex/this.top_end);
          lchunks = this.stats.lnum / this.top_end;
       }

       $('#local_chunkbar').slider({
	    range: false,
 	    min: 0,
	    value: 0 ,
            max: lchunks , 
	    stop: function( event, ui ) {
		var st = ui.value * daviewer.top_end;
                daviewer.goto_listdex(st);
	    }
       });

       var st = lchunk * this.top_end;
       if (st == 0) {st = 1; } 
       var fn = st + this.top_end -1;
       if (this.stats != null) {
         if (fn >= this.stats.lnum) {
          fn = this.stats.lnum -1;
         }
       }
       var ld = this.listdex + 1;

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
   var lbl = "";
   var tmp = "";
   var moin = "";
   var mout = "";
   if (this.stats != null) {

      var lchunk = Math.floor(this.listdex/this.top_end);
      var lchunks = Math.floor(this.stats.lnum / this.top_end) -1;
      var mchunks = Math.floor(this.stats.cnum / this.top_end);
      var lc = lchunk;
      if (lchunks >= 1) {
	    $('#local_chunkbar').show();
            $('#local_chunkbar').slider("option", "value", lchunk  );
            $('#local_chunkbar').slider("option", "max", lchunks );
            $('#local_chunkbar').slider("option", "min", 0 );

            $('#local_chunkdata').show();
            tmp = lc + " of " + lchunks;
     //       tmp = tmp + " x" + this.top_end;
            $('#local_chunkdata').html(tmp);

      } else {
            $('#local_chunkbar').hide();
      }
 
      if (mchunks > lchunks ) {
      } 
 
      var st = lchunk * this.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + this.top_end -2;
      if (fn >= this.stats.lnum) {
          fn = this.stats.lnum -2;
      }
      var ld = this.listdex + 1;

      $('#local_chipbar').slider("option", "min", st );
      $('#local_chipbar').slider("option", "max", fn );
      $('#local_chipbar').slider("option", "value", ld );
      $('#local_chipdata').html(ld + " of " + this.dalist.length);

   } else {
//	   alert("no stats");
   }

       if (debug == true) {
	       this.draw_debug_rail();
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



viewer.prototype.draw_debug_rail = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

  if (this.stats != null) {

       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "ltype=" + this.stats.listype;
       tmp = tmp + "</div>";

     if ((this.stats.cat != undefined )  && (this.stats.cat != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "cat=" + this.stats.cat + " sub=" + this.stats.subcat;
       tmp = tmp + "</div>";
     }

     if ((this.stats.sterms != undefined )  && (this.stats.sterms != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "sterms=" + this.stats.sterms;
       tmp = tmp + "</div>";
     }


    if (this.stats.month != undefined) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + this.stats.month + " '" + this.stats.year;
       tmp = tmp + "</div>";
     }

      var lchunk = 1
      var lchunks = 1;
       if (this.stats != null) {
          lchunk = Math.floor(this.listdex/this.top_end);
          lchunks = this.stats.lnum / this.top_end;
       }
      var st = lchunk * this.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + this.top_end  -1;
      if (fn >= this.stats.lnum) {
          fn = this.stats.lnum -1;
      }
      var ld = this.listdex + 1;

       tmp = tmp + "<div  class='spotd_off' >";
       tmp = tmp + "lnum=" + this.stats.lnum;
       tmp = tmp + " cnum=" + this.stats.cnum;
       tmp = tmp + " lchunk=" + this.stats.last_chunk;
       tmp = tmp + " fin=" + fn;
       tmp = tmp + "</div>";

  } else {
	  tmp = tmp + "no stats object";
  }

     lbl = "rail_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}

