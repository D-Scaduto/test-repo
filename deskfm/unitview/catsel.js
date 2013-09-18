
 poster.prototype.draw_catsel = function() {

    var tmp="";
    var lbl = "";
    var pobj=null;

     if (this.cat != "") {

       lbl = this.rungster+"_catsog";
       ocl = this.varname + ".cat=\"\";";
       ocl = ocl + this.varname + ".subcat=\"\";";
       ocl = ocl + this.varname + ".cat_changed=true;";
       ocl = ocl + this.varname + ".get_catsel();";
       tmp = tmp +"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' >";
       tmp = tmp + this.cat + " - ";
       tmp = tmp + this.subcat;
       tmp=tmp + "</span>"; 

	lbl = this.rungster + '_sort_spot';
        pobj = document.getElementById(lbl);
        if ( pobj != null) {
          pobj.innerHTML = tmp;
        }
      
     }
}


 poster.prototype.get_catsel = function() {

     var tmp="";
     var lbl = "";
     var lb1 = "";
     var lb2 = "";
     var sugs = [];
     var pobj = null;
     tmp = "";

      if (this.cat == "") { 

        lbl = this.rungster + "_uncat_btn";
        ocl = this.varname + ".set_cat(\"\")";
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='' style='' >";
        tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
        tmp = tmp + "</span>";

        lbl = this.rungster + "_who_btn";
        ocl = this.varname + ".set_cat(\"who\")";
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'   class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"'  style='' >";
        tmp = tmp + "who";
        tmp = tmp + "</span>";

        lbl = this.rungster + "_what_btn";
        ocl = this.varname + ".set_cat(\"what\")";
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'   class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' style='' >";
        tmp = tmp + "what";
        tmp = tmp + "</span>";

        lbl = this.rungster + "_why_btn";
        ocl = this.varname + ".set_cat(\"why\")";
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"'  style='' >";
        tmp = tmp + "why";
        tmp = tmp + "</span>";

        lbl = this.rungster + "_how_btn";
        ocl = this.varname + ".set_cat(\"how\")";
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"'  style='' >";
        tmp = tmp + "how";
        tmp = tmp + "</span>";

        lbl = this.rungster + "_junk_btn";
        ocl = this.varname + ".set_cat(\"junk\")";
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");';
        cls = 'spotd_off';
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'   class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"'  style='' >";
        tmp = tmp + "junk";
        tmp = tmp + "</span>";

      } else { 

        lbl = this.rungster + "_uncat_btn";
        ocl = this.varname + ".set_cat(\"\")";
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='' style='' >";
        tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
        tmp = tmp + "</span>";

        if (this.cat == "who") { 

        lbl = this.rungster + '_who_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li style=''  ><a >who?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='who' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul></li></ul>";

       } else if (this.cat == "what") { 

        lbl = this.rungster + '_what_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
   	tmp = tmp +"<li style='' ><a >what?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='what' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul></li></ul>";

       } else if (this.cat == "why") { 

        lbl = this.rungster + '_why_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
    	tmp = tmp +"<li style=''  ><a >why?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='why' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";

       } else if (this.cat == "how") { 

        lbl = this.rungster + '_how_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li style=''  ><a >how?</a><ul  id='"+lbl+"' style='' >";
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='how' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";
       }
    } 

     lbl = this.rungster + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
        var s = "";
       if (this.cat == "") {
//      	    $('#' + this.rungster + '_who_btn').button();
//  	    $('#' + this.rungster + '_what_btn').button();
//  	    $('#' + this.rungster + '_why_btn').button();
//  	    $('#' + this.rungster + '_how_btn').button();

       }

       else if (this.cat == "who") {

            $('#' + this.rungster + '_who_sog').menu();
	    $('#' + this.rungster + '_who_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.cat == "what") {

	    $('#' + this.rungster + '_what_sog').menu();
	    $('#' + this.rungster + '_what_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.cat == "why") {
     
	    $('#' + this.rungster + '_why_sog').menu();
	    $('#' + this.rungster + '_why_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.cat == "how") {

	    $('#' + this.rungster + '_how_sog').menu();
	    $('#' + this.rungster + '_how_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );
       } 

    }
 }


poster.prototype.set_cat = function(pcat) {
      if (pcat != undefined) {
           this.cat = pcat;
           this.subcat = "";
           this.changed = true;
	   this.cat_changed = true;
           this.get_catsel();
           this.change_btns();
      }
 
}


poster.prototype.set_subcat = function(psubcat) {

      if (psubcat != undefined) {
          this.subcat = psubcat;
          this.changed = true;
          this.subcat_changed = true;
          this.draw_catsel();
          this.change_btns();
      }

}


poster.prototype.set_cats = function(pcat,psubcat) {
      if (pcat != undefined) {
	  this.cat = pcat;
	  this.changed = true;
          this.cat_changed = true;
      }

      if (psubcat != undefined) {
          this.subcat = psubcat;
          this.changed = true;
          this.subcat_changed = true;
      }
      this.draw_catsel();
      this.change_btns();
}


poster.prototype.toggle_getsort = function() {

    if (this.shape != "getsort") {
       this.shape = "getsort";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.hide_catsel = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}


