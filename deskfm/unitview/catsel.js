
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
     var sugs = [];
     var pobj = null;
     tmp = "";

     tmp = tmp + "<div id='"+this.rungster+"_catabs' >";
 
     tmp = tmp + "<ul>";
     tmp = tmp + "<li><a href='#"+this.rungster + "_who_tab'>who</a></li>";
     tmp = tmp + "<li><a href='#"+this.rungster + "_what_tab'>what</a></li>";
     tmp = tmp + "<li><a href='#"+this.rungster + "_why_tab'>why</a></li>";
     tmp = tmp + "<li><a href='#"+this.rungster + "_how_tab'>how</a></li>";
     tmp = tmp + "</ul>";

     tmp = tmp + "<div id='"+this.rungster + "_who_tab' >";
      tmp = tmp + "<ul id='"+this.rungster + "_who_sel' class='items'  >";
         sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li class='list' >"+sugs[i].text+"</li>";
        }
       tmp=tmp + "</ul>";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='"+this.rungster + "_what_tab' >";
      tmp = tmp + "<ul id='"+this.rungster + "_what_sel' class='items'  >";
         sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li class='list' >"+sugs[i].text+"</li>";
        }
       tmp=tmp + "</ul>";
     tmp = tmp + "</div>";


     tmp = tmp + "<div id='"+this.rungster + "_why_tab' >";
      tmp = tmp + "<ul id='"+this.rungster + "_why_sel' class='items'  >";
         sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li class='list' >"+sugs[i].text+"</li>";
        }
       tmp=tmp + "</ul>";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='"+this.rungster + "_how_tab' >";
      tmp = tmp + "<ul id='"+this.rungster + "_how_sel' class='items'  >";
         sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li class='list' >"+sugs[i].text+"</li>";
        }
       tmp=tmp + "</ul>";
     tmp = tmp + "</div>";

    tmp = tmp + "</div>";

     lbl = this.rungster + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
        var s = "";
  	    $('#' + this.rungster + '_catabs').tabs({ active:false , collapsible:true } );

            $('#' + this.rungster + '_who_sel').selectable({
                selected: function (event, ui) {
                        var selected = $("li[class$='ui-selected']").length;
                        $("#info").html("you selected " + selected + " items!");
                }
            });

            $('#' + this.rungster + '_what_sel').selectable({
                selected: function (event, ui) {
                        var selected = $("li[class$='ui-selected']").length;
                        $("#info").html("you selected " + selected + " items!");
                }
            });

            $('#' + this.rungster + '_why_sel').selectable({
                selected: function (event, ui) {
                        var selected = $("li[class$='ui-selected']").length;
                        $("#info").html("you selected " + selected + " items!");
                }
            });

            $('#' + this.rungster + '_how_sel').selectable({
                selected: function (event, ui) {
                        var selected = $("li[class$='ui-selected']").length;
                        $("#info").html("you selected " + selected + " items!");
                }
            });


/*
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
*/

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


