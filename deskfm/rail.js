
viewer.prototype.draw_rail = function() {
    var pobj=null;
    var lbl = "";
    var tmp = "";
    var omo = "";
    var omt = "";


    tmp = tmp + "<div style='display:inline-block;border-color:black;border-style:solid;border-width:2px;' >";

    lbl = this.screen + "_chunks";
    tmp = tmp + "<div id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</div>";

    lbl = this.screen + "_chips";
    tmp = tmp + "<div id='"+lbl+"' onclick='' style='' >";
    tmp = tmp + "</div>";

    tmp = tmp + "</div>";

/*
    lbl = this.screen + "_shuffle";
    cls = "spotd_off";
    ocl = this.varname + ".load_random_rungs();";
    tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  style='vertical-align:top;' onclick='"+ocl+"' onmouseover='' onmouseout='' >";
    tmp = tmp + "<img src='deskfm/images/icons/cog.png' height='20px' >";
    tmp = tmp + "</span>";
*/

   lbl = "top_rail";
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;

       	this.draw_chunkbar();
	this.draw_chipbar();
    }
}



viewer.prototype.draw_chunkbar = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";
   var st=0;
   var fn=0;
   var pv = null;
   var cls = "";
   var moin="";
   var mout="";

   var ts = null;
   var tot = 0;

   if (this.stats != null) {
	   tot = this.stats.cnum;
   }

    var chunks = tot / this.top_end;
    if (chunks > 1) {


       var fac =  1;
       if (chunks > 10 ) {
         fac = Math.round( chunks / 10);
       }

       lbl = this.screen + "_prev_chunk";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".prev();";
       tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"'  style='display:inline-block;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/fast_start.png' height='20px' >";
       tmp = tmp + "</div>";

       for (var k=1; k<10;k++) {

             var g = k*fac*this.top_end;
             var tsrc = "deskfm/images/icons/pez-white.png";
             lbl = this.screen + "_chunk_"+ k;

             if (g < tot) {
               tsrc = "deskfm/images/icons/pez-silver.png";
//               ocl = this.varname + ".goto_rung("+g+");";
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

    lbl = this.screen + "_next_chunk"
    omo = "markyd(\""+lbl+"\");";
    omt = "unmarkyd(\""+lbl+"\");";
    cls = "spotd_off";
    ocl = this.varname + ".next();";
    tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"'  style='display:inline-block;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
    tmp = tmp + "<img src='deskfm/images/icons/fast_end.png' height='20px' >";
    tmp = tmp + "</div>";



    }


   lbl = this.screen + '_chunks';
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

       lbl = this.screen + "_prev_chip";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       cls = "spotd_off";
       ocl = this.varname + ".prev();";
       tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"'  style='display:inline-block;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/prev.png' height='20px' >";
       tmp = tmp + "</div>";

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

   lbl = this.screen + "_next_chip"
    omo = "markyd(\""+lbl+"\");";
    omt = "unmarkyd(\""+lbl+"\");";
    cls = "spotd_off";
    ocl = this.varname + ".next();";
    tmp = tmp + "<div  id='"+lbl+"' class='"+cls+"'  style='display:inline-block;' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
    tmp = tmp + "<img src='deskfm/images/icons/play.png' height='20px' >";
    tmp = tmp + "</div>";


     lbl = this.screen + '_indexbtn';
      cls='spotd_off';
      ocl = 'daviewer.toggle_zoom();';   
    
      tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
      var n = this.listdex + 1;
      tmp = tmp + n;
      tmp = tmp + "</span>";



     if (this.listype == "webits") {
         ocl = "amare.get_cat_list(\""+this.cat+"\",\""+this.subcat+"\");";

     } else if (this.listype == "people") {
      lbl = this.screen + '_indexbtn';
      cls='spotd_off';
      ocl = 'daviewer.toggle_zoom();';   
    
      tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
      var n = this.listdex + 1;
      tmp = tmp + n;
      tmp = tmp + "</span>";
      ocl = "amare.get_group_list(\""+this.groupid+"\");";

     } else if (this.listype == "products") {
         ocl = "amare.get_prod_list(\""+this.prodid+"\");";
     }

     lbl = this.screen + '_chunkbtn';

     tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' style=''  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
     tmp = tmp + " of ";

     if (this.listype == "people") {
       ts = amare.get_groupstat(this.groupid);
     }
     
     if (this.listype == "webits") {
	if (this.cat == "") {
            tmp = tmp + amare.total_sorted;
        } else {
           ts = amare.get_catstat(this.cat,this.subcat);
           if (ts != null) {
             tmp = tmp + ts.cnum;
           }
	}
     }
     
     if (this.listype == "unsorted") {
        tmp = tmp + amare.total_unsorted;
     }

     if (this.listype == "products") {
        ts = amare.get_prodstat(this.prodid);
        if (ts != null) {
         tmp = tmp + ts.cnum;
       }
     }
     
    
     tmp = tmp + "</span>";


   lbl = this.screen + '_chips';
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

