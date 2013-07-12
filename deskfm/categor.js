

function categor (pmenuid) { 

   this.menuid = pmenuid;
   this.spotid = pmenuid + "_spot";
   this.varname='cater';
   this.shape = "";
   this.menued = false;

   this.cat="all";
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

    if (this.cat == "all") {

        lbl = 'duh_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.redraw_view();";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
        tmpstr=tmpstr+"</span>";

        lbl = 'who_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        tmpstr = tmpstr + "<span id='' onclick='cater.set_cats(\"who\",\"\");'  class='spotd_off' >";
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
        ocl = 'cater.set_cats(\"why\",\"\");';
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"why ?";
        tmpstr=tmpstr+"</span>";

        lbl = 'how_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = 'cater.set_cats(\"how\",\"\");';
        tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off' onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr=tmpstr+"how ?";
        tmpstr=tmpstr+"</span>";

        lbl = 'cat_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' style=''  >";
        tmpstr=tmpstr+"</span>";

   } else { 

        lbl = 'undo_btn';
        omo = 'markyd(\"'+lbl+'\");';
        omt = 'unmarkyd(\"'+lbl+'\");';
        ocl = "cater.cat=\"all\";cater.subcat=\"\";cater.show();";
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' onmouseover='"+omo+"' onmouseout='"+omt+"'  >";
        tmpstr = tmpstr + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
        tmpstr=tmpstr+"</span>";

        lbl = 'cat_sog';
        tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' style='' onclick='cater.subcater.request_suggestions(\""+this.cat+"\");' >";
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
     if (init_run == false) {
	 this.redraw_view();
     }

   }

  if (pname == "debug") {
     this.draw_debug();
  }
}

categor.prototype.set_menued = function(ptog) {
	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}


categor.prototype.reset_sog = function() {

   this.subcater = new suggester("cat_sog",new subcat_provider(), "cater.subcater","cater");

   this.show();
}


categor.prototype.redraw_view = function(pchunk) {

	var start = 0;
        var p = 0;

	this.stats = amare.get_catstat(this.cat,this.subcat);

            if (pchunk != undefined) {
      	          this.stats.last_chunk = pchunk;
		  if (pchunk > 1) {
		    p = pchunk - 1;
		  }
		 start = p   * da_limit;
	    }


	if (this.cat == "all") {

	    daviewer.load_list(start);

	} else {

            daviewer.load_category_list(this.cat,this.subcat,start);
	    
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

     this.show(); 

     if ((this.cat != "") && (this.subcat == ""))  {
        this.subcater.request_suggestions(this.cat);
     }
   
   
}

categor.prototype.change = function () {
   this.show();
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
