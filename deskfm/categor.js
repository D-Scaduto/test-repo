

function categor (pspotid) { 

   this.spotid=pspotid;
   this.varname='cater';
   this.shape = "";

   this.cat="";
   this.subcat="";
   this.sterms = "";
   this.searchon = false;

   this.subcater = new suggester("cat_sog",new subcat_provider(), "cater.subcater","cater");

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

    if (this.cat == "") {

        lbl = 'duh_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "daviewer.next();";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
        tmpstr=tmpstr+"</span>";

        lbl = 'who_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        tmpstr = tmpstr + "<span id='' onclick='cater.set_cats(\"who\");'  class='spotd_off' >";
        tmpstr=tmpstr+"who ?";
        tmpstr=tmpstr+"</span>";
/*
        lbl = 'what_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = 'cater.set_cat(\"what\");';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"what ? ";
        tmpstr=tmpstr+"</span>";
        tmpstr=tmpstr+"</span>";
*/
        lbl = 'why_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = 'cater.set_cats(\"why\");';
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"why ?";
        tmpstr=tmpstr+"</span>";

        lbl = 'how_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = 'cater.set_cats(\"how\");';
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"how ?";
        tmpstr=tmpstr+"</span>";

        lbl = 'cat_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  >";
        tmpstr=tmpstr+"</span>";

   } else { 

        lbl = 'undo_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.cat=\"\";cater.subcat=\"\";cater.show();";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
        tmpstr=tmpstr+"</span>";

        lbl = 'cat_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' onclick='cater.subcater.request_suggestions(\""+this.cat+"\");' >";
        tmpstr=tmpstr+this.subcater.provider.get_desc(this.cat,this.subcat);
        tmpstr=tmpstr+"</span>";
    }


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

   lbl = this.spotid;
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

    this.show();

    if (this.cat != "") {
      this.subcater.request_suggestions(this.cat);
    } 

    daviewer.set_catscreen(this.cat,this.subcat);
   
}

categor.prototype.change = function () {

}


categor.prototype.toggle = function () {

   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


categor.prototype.hide = function () {

   lbl = this.spotid;
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
