
viewer.prototype.draw_rail = function() {
    var pobj=null;
    var lbl = "";
    var tmp = "";
    var omo = "";
    var omt = "";

/*
    lbl = this.screen + "_set0";
    cls = "spotd_off";
    ocl = this.varname + ".goto_rung(4);";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/fast_start.png' height='25px' >";
    tmp = tmp + "</span>";
*/

    lbl = this.screen + "_prev";
    omo = "markyd(\""+lbl+"\");";
    omt = "unmarkyd(\""+lbl+"\");";
    cls = "spotd_off";
    ocl = this.varname + ".prev();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
    tmp = tmp + "<img src='deskfm/images/icons/prev.png' height='20px' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_track";
    tmp = tmp + "<span id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_next"
    omo = "markyd(\""+lbl+"\");";
    omt = "unmarkyd(\""+lbl+"\");";
    cls = "spotd_off";
    ocl = this.varname + ".next();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
    tmp = tmp + "<img src='deskfm/images/icons/play.png' height='20px' >";
    tmp = tmp + "</span>";

/*
    lbl = this.screen + "_shuffle";
    cls = "spotd_off";
    ocl = this.varname + ".load_random_rungs();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/cog.png' height='20px' >";
    tmp = tmp + "</span>";
*/

    lbl = this.screen + "_index";
    tmp = tmp + "<span id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</span>";

    lbl = this.screen + "_listmax";
    tmp = tmp + "<span id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</span>";

    lbl = "top_rail";
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
        this.draw_chipbar();
        if (buddah == true) {
          this.draw_index();
          this.draw_listmax();
        }
    }
}


viewer.prototype.draw_index = function() {

     var pobj=null;
     var lbl = "";
     var tmp = "";
     var cls= "";
     var ocl = "";

      lbl = this.screen + '_indexbtn';
      cls='spotd_off';
      ocl = 'daviewer.toggle_zoom();';   
    
      tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
      var n = this.listdex + 1;
      tmp = tmp + n;
      tmp = tmp + "</span>";

      tmp = tmp + "<span  class='spotd_off' >";
      tmp = tmp + " of ";
      tmp = tmp + "</span>";

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
     var ts = null;

     var ocl = '';
      lbl = this.screen + '_chipbtn';
        tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
     tmp = tmp + this.dalist.length;
        tmp = tmp + "</span>";

     lbl = this.screen + '_chunkbtn';
     if (this.listype == "webits") {
       ocl = "amare.get_cat_list(\""+this.cat+"\",\""+this.subcat+"\");";
     } else if (this.listype == "people") {
         ocl = "amare.get_group_list(\""+this.groupid+"\");";
      } else if (this.listype == "webits") {
         ocl = "amare.get_prod_list(\""+this.prodid+"\");";
      }
     tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
     if (this.listype == "people") {
       ts = amare.get_groupstat(this.groupid);
     }
     if (this.listype == "webits") {
        ts = amare.get_catstat(this.cat,this.subcat);
     }
     if (ts != null) {
       tmp = tmp + " of " + ts.cnum;
     }
     tmp = tmp + "</span>";

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

/*
   if (buddah == true) {
       lbl = 'nitro_btn';
       cls = "spotd_off";
       ocl =  "daviewer.toggle_nitro();";
       tsrc = "deskfm/images/icons/fast_fwd.png";
       if (this.metro_spd > 0 ) {
         tsrc = "deskfm/images/icons/stop.png";
         ocl = "daviewer.nitro_stop();";
       }
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"'  onmouseover='' onmouseout=''   >";
       lbl = 'nitro_img';
       tmp = tmp + "<img  id='"+lbl+"' src='"+tsrc+"' height='20px' >";
       tmp = tmp + "</span>";
    }
*/

