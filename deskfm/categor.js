

function categor (pspotid) { 

   this.spotid=pspotid;
   this.varname='cater';
   this.shape = "";

   this.cat="";
   this.subcat="";
   this.sterms = "";
   this.searchon = false;

   this.subcater = new suggester("que_sog",new subcat_provider(), "cater.subcater","cater");

}


categor.prototype.show = function() {

    var tmpstr = "";
    var tstr1 = "";
    var lbl = "";
    var obj = null;
    var tcl = "";
    var ocl = "";
    var omo = "";
    var omt = "";
    var cls = "";
    var ims = "";

        lbl = 'search_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.toggle_searchon();";
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "search";
        tmpstr=tmpstr+"</span>";

        lbl = 'sog_prefix';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.cat=\"\";cater.subcat=\"\";cater.show();";
        ocl = ocl + "daviewer.load_random_list();";
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
        tmpstr=tmpstr+"</span>";

        lbl = 'search_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"'   >";

    if (this.cat =="") {

        lbl = 'who_btn';
        tmpstr=tmpstr+"<span id='"+lbl+"'  >";
        lbl = 'who_ibtn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl="cater.hide_sogs();cater.subcater.request_suggestions(\"who\");";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"who ? ";
        tmpstr=tmpstr+"</span>";
        tmpstr=tmpstr+"</span>";
/*
        lbl = 'what_btn';
        tmpstr=tmpstr+"<span id='"+lbl+"'  >";
        lbl = 'what_ibtn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl="cater.hide_sogs();cater.subcater.request_suggestions(\"what\");";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"what ? ";
        tmpstr=tmpstr+"</span>";
        tmpstr=tmpstr+"</span>";
*/
        lbl = 'why_btn';
        tmpstr=tmpstr+"<span id='"+lbl+"'  >";
        lbl = 'why_ibtn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl="cater.hide_sogs();cater.subcater.request_suggestions(\"why\");";
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"why ? ";
        tmpstr=tmpstr+"</span>";
        tmpstr=tmpstr+"</span>";

        lbl = 'how_btn';
        tmpstr=tmpstr+"<span id='"+lbl+"'  >";
        lbl = 'how_ibtn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl="cater.hide_sogs();cater.subcater.request_suggestions(\"how\");";
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"how ? ";
        tmpstr=tmpstr+"</span>";
        tmpstr=tmpstr+"</span>";

        lbl = 'que_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"'   >";
        tmpstr=tmpstr+"</span>";

   } else { 

        lbl = 'que_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' onclick='cater.subcater.request_suggestions(\""+this.cat+"\");' >";
        tmpstr=tmpstr+this.subcater.provider.get_desc(this.cat,this.subcat);
        tmpstr=tmpstr+"</span>";
    }

        lbl = 'sog_suffix';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"</span>";

        tmpstr=tmpstr+"</span>";

/*
        lbl = 'check_more_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.get_more();";
        tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"'  class='spotd_off' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/refresh.png' height='20px' >";
        tmpstr=tmpstr+"</span>";
*/
     if (pname == "debug") {
        lbl = 'cat_debug';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  >";
        tmpstr=tmpstr+"</span>";
     }

   lbl = this.spotid + "_top";
   obj = document.getElementById(lbl)
   if (obj != null) {
     obj.innerHTML=tmpstr;
     this.showing = true;
   }

  if (pname == "debug") {
     this.draw_debug();
  }
    sal.draw_vman();
}

categor.prototype.hide_sogs = function() {
   var tmp="";
   var onode=null;
   var cls="";
   onode=  document.getElementById('who_btn');
   if (onode != null) {
       onode.innerHTML =  "";
   }
   onode=  document.getElementById('what_btn');
   if (onode != null) {
       onode.innerHTML =  "";
   } 

   onode=  document.getElementById('why_btn');
   if (onode != null) {
       onode.innerHTML =  "";
   } 
   onode=  document.getElementById('how_btn');
   if (onode != null) {
       onode.innerHTML =  "";
   }

   onode=  document.getElementById('sog_suffix');
   if (onode != null) {
       onode.innerHTML =  tmp;
   } 

}

categor.prototype.redraw_view = function() {

   if (wanda.sterms != "") {
         daviewer.get_lsearch_list(wanda.sterms);
   } else {
     if ((this.cat == "") && (this.subcat == "")) {
       daviewer.load_random_list();
     } else {
       daviewer.set_catscreen(this.cat,this.subcat);
     }
   }
}

categor.prototype.get_more = function() {
   amare.get_cat_list(this.cat,this.subcat);
}


categor.prototype.turn_searchon = function() {
    this.searchon = true;
    this.show();
    wanda.show();
}


categor.prototype.turn_searchoff = function() {
    this.searchon = false;
    this.show();
    wanda.hide();
}

categor.prototype.toggle_searchon = function () {

   if (this.searchon == true ) {
       this.turn_searchoff();
   } else {
       this.turn_searchon();
   }
}



categor.prototype.set_cats = function(tcat,tsubcat) {
      if (tcat != undefined) {
           if (this.cat != tcat) {
              this.cat=tcat;
           }
      }
      if (tsubcat != undefined) { 
        if (this.subcat != tsubcat) {
          this.subcat=tsubcat;
        }
      }
    this.hide_sogs(tcat);
    daviewer.set_catscreen(this.cat,this.subcat);
}

categor.prototype.toggle = function () {

   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


categor.prototype.hide = function () {

   lbl = this.spotid + "_top";
   if (document.getElementById(lbl) != null ) { 
     document.getElementById(lbl).innerHTML=""; 
   }
   this.showing = false;
}


categor.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + "categor";
     tmp = tmp + " sh="+ this.shape;
     tmp = tmp + " cat="+ this.cat;
     tmp = tmp + " sub="+ this.subcat;
     lbl = "cat_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}
