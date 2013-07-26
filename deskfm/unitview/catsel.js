

 poster.prototype.draw_catsel = function() {
    var tmp="";
    var tspot = this.rung;
    var lbl = "";
    var pobj=null;

  
     if (this.cat == "") {
	ocl = this.varname + ".set_shape(\"getsort\");";
        tmp = tmp + "<button  onclick='"+ocl+"' >";  
	tmp = tmp + "<img src='deskfm/images/icons/sort.png' height='20px' >";
	tmp = tmp + "</button>";

	lbl = this.rungster + '_sort_spot';
        pobj = document.getElementById(lbl);
        if ( pobj != null) {
          pobj.innerHTML = tmp;
        }

     } else {
       lbl = this.spotid+"_"+tspot+"_catsog";
       ocl = this.varname + ".get_catsel();";
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
     var tspot = this.rung;
     var lbl = "";
     var lb1 = "";
     var lb2 = "";
     var sugs = [];

     tmp = "";
     lb1 = this.rungster + "_catsog";
     
     tmp = tmp +"<ul id='"+lb1+"' class='ui-menu' style=''  >";
   
     tmp = tmp +"<li><a  >"+this.cat+" - " + this.subcat+" </a>";
     tmp = tmp +"<ul class=''  style='width:100px;' >";

     tmp = tmp +"<li><a >who</a>";
     tmp = tmp +"<ul style='width:350px;' >";
     sugs = amare.subcat_set.get_setlist("who");
     for (var i=0;i<sugs.length;i++) {
        tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='who' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
     }
     tmp = tmp +"</ul>";
     tmp = tmp +"</li>";

     tmp = tmp +"<li><a >what</a>";
     tmp = tmp +"<ul style='width:350px;' >";
      sugs = amare.subcat_set.get_setlist("what");
     for (var i=0;i<sugs.length;i++) {
        tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='what' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
     }
     tmp = tmp +"</ul>";
     tmp = tmp +"</li>"; 

     tmp = tmp +"<li><a >why</a>";
     tmp = tmp +"<ul style='width:350px;'   >";
       sugs = amare.subcat_set.get_setlist("why");
     for (var i=0;i<sugs.length;i++) {
        tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='why' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
     }
     tmp = tmp +"</ul>";
     tmp = tmp +"</li>";

     tmp = tmp +"<li><a >how</a>";
     tmp = tmp +"<ul  style='width:350px;'  >";
      sugs = amare.subcat_set.get_setlist("how");
     for (var i=0;i<sugs.length;i++) {
        tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='how' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
     }
     tmp = tmp +"</ul>";
     tmp = tmp +"</li>";

     tmp = tmp +"<li><a stag='' ctag='junk' ptag='"+this.varname+"' >del</a>";
     tmp = tmp +"</li>";

     tmp = tmp +"</ul>";   
     tmp = tmp +"</li>";
     tmp = tmp +"</ul>";

     var pobj=null;
     var lbl = "";
     lbl = this.rungster + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
     }
    
    $('#'+lb1).menu();
    $('#'+lb1).on( "menuselect", function( event, ui ) {
	    var c,s,p = "";
	    c = ui.item.children().attr('ctag');
            s = ui.item.children().attr('stag');
  	    p = ui.item.children().attr('ptag');
	    if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	      var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	      eval(exp);
	    }
    } );
 //   $('#'+lb1).menu( "option", "icons", { submenu: "ui-icon-circle-triangle-e" } );
}


poster.prototype.set_cat = function(pcat) {
      if (pcat != undefined) {
           this.cat = pcat;
           this.subcat = "";
           this.changed = true;
	   this.cat_changed = true;
           this.draw_catsel();
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


