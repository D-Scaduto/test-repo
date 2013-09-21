

function header () {

    this.varname = "diego";
    this.shapes = []; //browse,search,share,shop,sort,feed,manage,group,name 
    this.shape = ""; 
    this.shape_was = "";
}	
 

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

        lbl = 'zoom_btn';
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");'; 
        tmp = tmp + "<span id='"+lbl+"' onclick='daviewer.toggle_zoom();'  onmouseover='"+moin+"' onmouseout='"+mout+"' style=''  >";
        tmp = tmp + "<img src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</span>";

        lbl = 'nitro_btn';
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");'; 
        moin = "";
        mout = "";
        tmp = tmp + "<span id='"+lbl+"' onclick='daviewer.toggle_nitro();'  onmouseover='"+moin+"' onmouseout='"+mout+"' style=''  >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/play.png'  class='menu_btn' >";
        tmp = tmp + "</span>";
     

        lbl = 'rail_btn';
        moin = 'marky(\"'+lbl+'\");';
        mout = 'unmarky(\"'+lbl+'\");'; 
        if (is_mini == true) {
          ocl = this.varname + '.toggle_shape(\"rail\");'
        } else {
           ocl = 'dale.toggle();'
        }
        tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' style=''  >";
        tmp = tmp + "<img src='deskfm/images/icons/slider-1.png'  class='menu_btn'  >";
        tmp = tmp + "</span>";


	tmp = tmp + "<span id='logo_spot' class='' style='display:inline-block;vertical-align:top;'  >";
     tmp = tmp + "</span>";


     tmp = tmp + " <div id='search_spot' class='' style='display:inline-block;vertical-align:top;'  >";
     tmp = tmp + "</div>";

     tmp = tmp + " <div id='browse_spot' class='' style='display:inline-block;vertical-align:top;'  >";
     tmp = tmp + "</div>";

      tmp = tmp + "<div id='shop_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='share_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";
 
      tmp = tmp + "<div id='name_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='rail_spot' class='' style='display:inline-block;vertical-align:top;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='header_debug_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_mainspot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

             if (this.shape == "") {
               sal.show();
             } else {
               sal.hide();
            }

             if (is_mini == true) {
                if (this.shape =="") {
                  this.draw_mainbtns();
                } else {
                  this.hide_mainbtns();
               }
             } else {
               this.draw_mainbtns();
             }

             if (debug == true) {
               this.draw_debug();
             } 
  
             for (var i=0;i<this.shapes.length;i++) {
                var s = this.shapes[i].split(':');
                if (s[0] == this.shape) { 
                   var es = s[1] + '.show()'; 
                   eval(es);
                }
             }

      }
}

header.prototype.toggle_shape = function (pshape) {
   if (pshape != undefined) {
        if (this.shape == pshape) {
           this.set_shape(this.shape_was);
        } else {
            this.set_shape(pshape);
        }
   }
}


header.prototype.set_shape = function (pshape) {

   if (pshape != undefined) {
        this.shape_was = this.shape;
        this.shape = pshape;
   }

   if (this.shape == "") {
     sal.show();
   } else {
     sal.hide();
   }

   if (is_mini == true) {
     if (this.shape =="") {
          this.draw_mainbtns();
     } else {
         this.hide_mainbtns();
     }
   }
 
      var s , es = "";
      for (var i=0;i<this.shapes.length;i++) {
         s = this.shapes[i].split(':');
         es = s[1] + '.hide();';
         if (s[0] == this.shape) { 
            es = s[1] + '.show()'; 
         }
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
      }
}



header.prototype.draw_mainbtns = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var mout = "";
     var moin = "";

       lbl = 'name_btn';
       ocl = this.varname + '.toggle_shape(\"name\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       if (this.shape == 'name') {
         cls='spotd_on';
       }
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' class='menu_btn' >";
       tmp = tmp + "</span>"; 

   if (buddah == true) {

       lbl = 'sort_btn';
       ocl = this.varname + '.set_shape(\"sort\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       if (this.shape == 'sort') {
         cls='spotd_on';
       }
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
       tmp = tmp + "</span>"; 

       lbl = 'feed_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.set_shape(\"feed\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
       tmp = tmp + "</span>"; 

       lbl = 'manage_btn';
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.set_shape(\"manage\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
       tmp = tmp + "</span>"; 

       lbl = 'group_btn';
          moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.set_shape(\"group\");'
       tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
       tmp = tmp + "</span>"; 

   } else {

     lbl = 'browse_btn';
         moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
    ocl = this.varname + '.set_shape(\"browse\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
     tmp = tmp + "</span>";  

       lbl = 'shop_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.set_shape(\"shop\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png'  class='menu_btn' >";
       tmp = tmp + "</span>"; 

   } 

     lbl = 'search_btn';
     moin = 'marky(\"'+lbl+'\");';
     mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.toggle_shape(\"search\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;' >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png'  class='menu_btn' >";
     tmp = tmp + "</span>"; 

   if (buddah == false) {
     lbl = 'share_btn';
     moin = 'marky(\"'+lbl+'\");';
     mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.toggle_shape(\"share\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png'  class='menu_btn'  >";
     tmp = tmp + "</span>";
   }

       var pobj = document.getElementById('menu_btnspot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

 //       $('#share_btn').button();
//	  $('#search_btn').button();
          if (this.shape == "" ) {
            if (is_mini == false) {
  	      sal.show();
            }
          }
       }
}


header.prototype.hide_mainbtns = function () {

     var tmp = "";
     var lbl = "";
      var pobj = document.getElementById('menu_btnspot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


header.prototype.set_shapes = function (pshapes) {

   if (pshapes != undefined) {
        this.shapes = pshapes;
   }
   this.show();
}



header.prototype.draw_debug = function () {
 
    var lbl = "";
     var tmp = "";
    var pobj="";

        lbl = 'header_debug_spot';
      tmp = tmp + "mini=" + is_mini;
       pobj = document.getElementById(lbl);
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


header.prototype.redraw_view = function (psetype,pchunk) {

alert("here");

    if (psetype == "webits") { 
        if (cater.showing == true) {
           cater.redraw_view(pchunk);
	}
    }
/*
    if (psetype == "people") { 
       if (joe.showing == true) {
         joe.redraw_view(pchunk);
       }
    } 
*/
      if (psetype == "unsaved") { 
        if (louie.showing == true) { 
          louie.redraw_view("unsaved",pchunk);
        } 
      }

      if (psetype == "unsorted") { 
         if (mac.showing == true) { 
          mac.redraw_view("unsorted",pchunk);
         }  
      }

    if (wanda.sterms != "") {
        wanda.check_local();
    }

}


