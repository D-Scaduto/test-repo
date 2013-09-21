

function rail (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "dale";
   this.showing = false;
}

 
rail.prototype.show = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";

       tmp = tmp + "<div class='rail_box' style='' >";

       tmp = tmp + "<span id='local_chunkbar' class='' style='width:75px;display:inline-block;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='local_chunkdata' style='padding:10px;' >";
       tmp = tmp + "</span>";     

       tmp = tmp + "<br>";
       tmp = tmp + "<span id='local_chipbar' class='' style='width:75px;display:inline-block;' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='local_chipdata' style='padding:10px;' >";
       tmp = tmp + "</span>";

       tmp = tmp + "</div>";

      if (debug == true) {
       tmp = tmp + "<div id='rail_debug' class='' style='' >";
       tmp = tmp + "</div>";
      }
    
   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
	pobj.innerHTML = tmp;
        this.showing = true;
        this.set_rails();
    }
}

 
rail.prototype.set_rails = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";

   if (daviewer == null) {
      return;
   }

       var lchunk = 1
       var lchunks = 1;
       if (this.stats != null) {
          lchunk = Math.floor(daviewer.listdex/this.top_end);
          lchunks = daviewer.stats.lnum / this.top_end;
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

       var st = lchunk * daviewer.top_end;
       if (st == 0) {st = 1; } 
       var fn = st + daviewer.top_end -1;
       if (daviewer.stats != null) {
         if (fn >= daviewer.stats.lnum) {
          fn = daviewer.stats.lnum -1;
         }
       }
       var ld = daviewer.listdex + 1;

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





rail.prototype.draw_raildata = function() {
   var lbl = "";
   var tmp = "";
   var moin = "";
   var mout = "";
   if (daviewer.stats != null) {

      var lchunk = Math.floor(daviewer.listdex/daviewer.top_end);
      var lchunks = Math.floor(daviewer.stats.lnum / daviewer.top_end) -1;
      var mchunks = Math.floor(daviewer.stats.cnum / daviewer.top_end);
      var lc = lchunk;
      if (lchunks >= 1) {
	    $('#local_chunkbar').show();
            $('#local_chunkbar').slider("option", "value", lchunk  );
            $('#local_chunkbar').slider("option", "max", lchunks );
            $('#local_chunkbar').slider("option", "min", 0 );

            $('#local_chunkdata').show();
            tmp = lc + " of " + lchunks;
     //       tmp = tmp + " x" + daviewer.top_end;
            $('#local_chunkdata').html(tmp);

      } else {
            $('#local_chunkbar').hide();
      }
 
      if (mchunks > lchunks ) {
      } 
 
      var st = lchunk * daviewer.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + daviewer.top_end -2;
      if (fn >= daviewer.stats.lnum) {
          fn = daviewer.stats.lnum -2;
      }
      var ld = daviewer.listdex + 1;

      $('#local_chipbar').slider("option", "min", st );
      $('#local_chipbar').slider("option", "max", fn );
      $('#local_chipbar').slider("option", "value", ld );
      $('#local_chipdata').html(ld + " of " + daviewer.dalist.length);

   } else {
//	   alert("no stats");
   }

       if (debug == true) {
	       this.draw_debug();
       }
}


rail.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

  if (daviewer.stats != null) {

       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "ltype=" + daviewer.stats.listype;
       tmp = tmp + "</div>";

     if ((daviewer.stats.cat != undefined )  && (daviewer.stats.cat != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "cat=" + daviewer.stats.cat + " sub=" + daviewer.stats.subcat;
       tmp = tmp + "</div>";
     }

     if ((daviewer.stats.sterms != undefined )  && (daviewer.stats.sterms != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "sterms=" + daviewer.stats.sterms;
       tmp = tmp + "</div>";
     }


    if (daviewer.stats.month != undefined) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + daveiwer.stats.month + " '" + daviewer.stats.year;
       tmp = tmp + "</div>";
     }

      var lchunk = 1
      var lchunks = 1;
       if (daviewer.stats != null) {
          lchunk = Math.floor(daviewer.listdex/daviewer.top_end);
          lchunks = daviewer.stats.lnum / daviewer.top_end;
       }
      var st = lchunk * daviewer.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + daviewer.top_end  -1;
      if (fn >= daviewer.stats.lnum) {
          fn = daviewer.stats.lnum -1;
      }
      var ld = daviewer.listdex + 1;

       tmp = tmp + "<div  class='spotd_off' >";
       tmp = tmp + "lnum=" + daviewer.stats.lnum;
       tmp = tmp + " cnum=" + daviewer.stats.cnum;
       tmp = tmp + " lchunk=" + daviewer.stats.last_chunk;
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


rail.prototype.toggle = function () {

   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}



 
rail.prototype.hide = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
         this.showing = false;
     }
}

