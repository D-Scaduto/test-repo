
function rail (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "dale";
   this.showing = false;
}

   
rail.prototype.show = function() {
   this.draw_rail();
   this.draw_btns();
}


rail.prototype.draw_rail = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";
   var tsrc = "";

        tmp = tmp + "<div id='' class='' style='width:300px;display:inline-block;vertical-align:middle;' >";
	tmp = tmp + "<label for='slider-1'></label>";

       if (jqm_off == true) {
 	  tmp = tmp + "<input type='range' name='slider-1' id='slider-1' value='1' min='1' max='100'  style=''  />";
       } else {
 	  tmp = tmp + "<input type='range'   name='slider-1' id='slider-1' value='1' min='1' max='100'  style='' data-mini='false'  data-theme='c' data-track-theme='e' class=''  />";
       }

      tmp = tmp + "</div>";
  
   lbl = 'rail_spot';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
      pobj.innerHTML = tmp;
       if (jqm_off == true) {
         $('#slider-1').on("change",function(event) {
               var st = "";
                st = parseInt(event.target.value);
                daviewer.goto_listdex(st);
          });

       } else {
           $('#'+lbl).trigger("create");

            $('#slider-1').bind("slidestop",function(event) {
                var st = "";
                st = parseInt(event.target.value);
                daviewer.goto_listdex(st);
            });
       }
       this.showing = true;
    }
}


rail.prototype.draw_btns = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";
   var tsrc = "";

	 lbl = 'prev_chunk'; 
        ocl = "daviewer.prev_chunk();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/fast-back.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

	 lbl = 'prev_btn'; 
        ocl = "daviewer.prev();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/prev.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

	 lbl = 'next_btn'; 
        ocl = "daviewer.next();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/play.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";
 
	 lbl = 'next_chunk'; 
        ocl = "daviewer.next_chunk();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/fast-fwd.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";


        tmp = tmp + "<div  id='slider-1-detail' class='' style='display:inline-block;'  >";
        tmp = tmp + "</div>";
 
     if (debug == true) {
       tmp = tmp + "<div id='rail_debug' class='' style='' >";
       tmp = tmp + "</div>";
      }
  
   lbl = 'rail_btns';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
      pobj.innerHTML = tmp;
   }
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

      if (mchunks > lchunks ) {
      } 
 
      var st = 1;
      var fn = daviewer.stats.lnum -2;
      var ld = parseInt(daviewer.listdex) + 1;
      var cn = daviewer.stats.cnum;
      $('#slider-1').attr("min", st );
      $('#slider-1').attr("max", fn );
      $('#slider-1').val(ld);
      $('#slider-1').slider('refresh');
      tmp = daviewer.dalist.length + " of " + cn;
      $('#slider-1-detail').html(tmp);

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
     sal.show();

}


rail.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl="";
       ocl =  'diego.toggle_shape(\"rail\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/dot_swirl.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'rail_btn'; 

       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

rail.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'rail_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}




