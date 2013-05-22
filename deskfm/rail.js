
viewer.prototype.draw_rail = function() {
    var pobj=null;
    var lbl = "";
    var tmp = "";

/*
    lbl = this.screen + "_set0";
    cls = "spotd_off";
    ocl = this.varname + ".goto_rung(4);";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/fast_start.png' height='25px' >";
    tmp = tmp + "</span>";
*/

    lbl = this.screen + "_prev";
    cls = "spotd_off";
    ocl = this.varname + ".prev();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/prev.png' height='20px' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_track";
    tmp = tmp + "<span id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_next";
    cls = "spotd_off";
    ocl = this.varname + ".next();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/play.png' height='20px' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_shuffle";
    cls = "spotd_off";
    ocl = this.varname + ".load_random_rungs();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/cog.png' height='20px' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_index";
    ocl= this.varname+".toggle_trackshape();";
    tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' style='' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_listmax";
    tmp = tmp + "<span id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</span>";

    lbl = "mobile_rail";
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
        this.draw_chipbar();
    //    this.draw_index();
      if (buddah == true) {
        this.draw_listmax();
      }
    }
}


viewer.prototype.draw_index = function() {

     var pobj=null;
     var lbl = "";
     var tmp = "";

     var sets = 0;
     sets = this.listdex/this.top_end;
     if (sets > 1) {
        tmp = tmp + sets + "x ";
     }  

     lbl = this.screen + '_index';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       pobj.innerHTML = tmp;
     }
}


viewer.prototype.draw_listmax = function() {

     var pobj=null;
     var lbl = "";
     var tmp = "";

     tmp = tmp + this.dalist.length;

    if (buddah == true) {
     var ts = null;
     if (this.listype == "people") {
       ts = amare.get_groupstat(this.groupid);
     }
     if (this.listype == "webits") {
        ts = amare.get_catstat(this.cat,this.subcat);
     }
     if (ts != null) {
       tmp = tmp + " of " + ts.cnum;
     }
    }
     lbl = this.screen + '_listmax';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
       pobj.innerHTML = tmp;
     }

}


viewer.prototype.draw_chipbar = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   var st=0;
   var fn=0;
   var pv = null;
   var cls = "";
   var moin="";
   var mout="";

     var len = this.dalist.length;
     var fac =  1;
       if (len > 10 ) {
         fac = Math.round( len / 10);
       }

       for (var k=1; k<10;k++) {

             var g = k*fac;
             var tsrc = "deskfm/images/icons/pez-white.png";
             lbl = this.screen + "_minichip_"+ k;

             if (g < this.dalist.length) {
               tsrc = "deskfm/images/icons/pez-silver.png";
               ocl = this.varname + ".goto_rung("+g+");";
               moin = "imarkyp(\""+lbl+"\");";
               mout = "unimarkyp(\""+lbl+"\");";
               if ((this.listdex >= g)&&(this.listdex < g+fac)){
                 tsrc = "deskfm/images/icons/pez-black.png";
                 moin = "";
                 mout="";
               }
             }

             tmp = tmp + "<span onclick='"+ocl+"' onmouseover='"+moin+"' onmouseout='"+mout+"' >";
              tmp = tmp + "<img  id='"+lbl+"' src='"+tsrc+"' >"; 
            tmp = tmp + "</span>";
       }


   lbl = this.screen + '_track';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
       pobj.innerHTML = tmp;
   }
}


viewer.prototype.mark_chipbar = function(mdex) {
     var len = this.dalist.length;
     var fac =  1;
       if (len > 10) {
         fac = Math.round( len / 10);
       }

       for (var k=1; k<10;k++) {

             var g = k*fac;
             var tsrc = "deskfm/images/icons/pez-white.png";
             if (g < this.dalist.length) {
               tsrc = "deskfm/images/icons/pez-silver.png";
               if ((this.listdex >= g)&&(this.listdex < g+fac)){
                 tsrc = "deskfm/images/icons/pez-black.png";
               }
             }

             lbl = this.screen + "_minichip_"+ k;

            pobj = document.getElementById(lbl);
            if ( pobj != null) {
                 pobj.src = tsrc;
            }
      }

}


viewer.prototype.toggle_trackshape = function() { 
   if (this.track_show == true) {
       this.track_show = false;
   } else {
     this.track_show = true;
   }
   this.draw_rail();
}


viewer.prototype.hide_rail = function() {

    var pobj=null;
    var lbl = "";
    var tmp = "";

    lbl = this.screen + "_unrail";
    cls = "smpez_mark";
    ocl = this.varname + ".draw_rail();";
    tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "</div>";


    lbl = this.screen + "_rail";
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }
}


