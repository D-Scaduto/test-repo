
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
     var ocl = "";
     var sugs = [];
     var pobj = null;
     tmp = "";

        lbl = this.rungster + "_who_sog";
	tmp += "<a href='#"+lbl+"' data-rel='popup' data-role='' data-theme='e' data-inline='true' style='' class='screen_talk'  >who,</a>";
 	tmp +=  "<div data-role='popup' id='"+lbl+"'>";
 	tmp +=   '<ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
           ocl = this.varname + ".set_cats(\"who\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '  </ul>';
 	tmp +=  '</div>';

       lbl = this.rungster + "_what_sog";
       tmp += '<a href="#'+lbl+'" data-rel="popup" data-role="" data-inline="true"  data-theme="e" data-transition="slideup" style="" class="screen_talk"  >what,</a>';
 	tmp += '<div data-role="popup" id="'+lbl+'" data-theme="d"  style="display:inline-block;"  >';
 	tmp +=  ' <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
            ocl = this.varname + ".set_cats(\"what\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

        lbl = this.rungster + "_why_sog";
      tmp += '<a href="#'+lbl+'" data-rel="popup" data-role="" data-inline="true" data-transition="slideup"  data-theme="e"  style="" class="screen_talk"  >why,</a>';
 	tmp += '<div data-role="popup" id="'+lbl+'" data-theme="d" style="display:inline-block;" >';
 	tmp += '  <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
            ocl = this.varname + ".set_cats(\"why\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=  '  </ul>';
 	tmp +=  '</div>';

        lbl = this.rungster + "_how_sog";
     tmp += '<a href="#'+lbl+'" data-rel="popup" data-role="" data-inline="true" data-transition="slideup"  data-theme="e"   style=""  class="screen_talk"  >how,</a>';
 	tmp += '<div data-role="popup" id="'+lbl+'" data-theme="d"  style="display:inline-block;" >';
 	tmp += ' <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
            ocl = this.varname + ".set_cats(\"how\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp += ' </ul>';
 	tmp +=  '</div>';

        lbl = this.rungster + "_junk_sog";
         ocl = "";
        ocl = this.varname + ".set_cats(\"junk\",\"\");";
        tmp += "<a href='#"+lbl+"'  class='screen_talk' onclick='"+ocl+"' > junk </a>";
 

     lbl = this.rungster + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
        $('#'+lbl).trigger("create");    
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

    
      var lbl = this.rungster + "_" + this.cat +"_sog"; 
      $('#'+lbl).popup();    
      $('#'+lbl).popup("close");    
 
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


