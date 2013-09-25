

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

       tmp = tmp + "<div style='display:inline-block;' >";
 
      lbl = 'name_btn';
        tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
       ocl = this.varname + '.toggle_shape(\"name\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' class='menu_btn' >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 
 
      tmp = tmp + "<div id='name_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

   if (buddah == true) {

       lbl = 'sort_btn';
         tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
       ocl = this.varname + '.set_shape(\"sort\");'
       tmp = tmp + "<button   data-role='button' data-inline='true' id='"+lbl+"' onclick='"+ocl+"'  style='background:white;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 
 
      lbl = 'feed_btn';
          tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
      ocl = this.varname + '.set_shape(\"feed\");'
       tmp = tmp + "<button   data-role='button' data-inline='true'  onclick='"+ocl+"'  style='background:white;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 
 
       lbl = 'manage_btn';
           tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
     ocl = this.varname + '.set_shape(\"manage\");'
       tmp = tmp + "<button   data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 
 
       lbl = 'group_btn';
         tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
       ocl = this.varname + '.set_shape(\"group\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' id='"+lbl+"' onclick='"+ocl+"'  style='background:white;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 

  } else { 
 
      lbl = 'share_btn';
         tmp = tmp + "<span id='"+lbl+"' class='mybtns' >";
     ocl = this.varname + '.toggle_shape(\"share\");'
     tmp = tmp + "<button  data-role='button' data-inline='true'  onclick='"+ocl+"'  style='background:white;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png'  class='menu_btn'  >";
     tmp = tmp + "</button>";
         tmp = tmp + "</span>"; 
 
      tmp = tmp + "<div id='share_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      lbl = 'search_btn';
         tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
     ocl = this.varname + '.toggle_shape(\"search\");'
     tmp = tmp + "<button  data-role='button' data-inline='true'  span id='"+lbl+"'  onclick='"+ocl+"'  style='background:white;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png'  class='menu_btn' >";
     tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 

      tmp = tmp + "<div id='search_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      lbl = 'browse_btn';
         tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
       ocl = "diego.toggle_shape(\"browse\");";
        tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"' style='background:white;vertical-align:top;' >";
       tmp = tmp + "<img src='deskfm/images/icons/browse.png' class='menu_btn' >";
       tmp = tmp + "</button>"; 
        tmp = tmp + "</span>"; 

      tmp = tmp + "<div id='browse_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

    }

     tmp = tmp + "</div>";

     tmp = tmp + "<div  style='display:inline-block;' >";

       tmp = tmp + "<span id='logo_spot' class='menu_sub' style=''  >";
       tmp = tmp + "</span>";

      tmp = tmp + "<div id='shop_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "</div>";

      tmp = tmp + "<div class='rail_box' style='' >";

      tmp = tmp + "<div id='rail_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

       lbl = 'rail_btn';
          tmp = tmp + "<span id='"+lbl+"'  class='mybtns' >";
        ocl = 'diego.toggle_shape(\"rail\");'
         tmp = tmp + "<button   data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
      tmp = tmp + "</span>";

      tmp = tmp + "</div>";

      tmp = tmp + "<div id='header_debug_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
            pobj.innerHTML = tmp;
           $('#menu_spot').trigger("create"); 
     
            if (debug == true) {
               this.draw_debug();
             } 

            this.set_shape();
      }
}



header.prototype.set_shape = function (pshape) {
   if (pshape != undefined) {
        this.shape_was = this.shape;
        this.shape = pshape;
   }

    if ((this.shape == "") || ((this.shape == "rail") && (is_mini == true))) {
       sal.show();
    } else {
       sal.hide();
    }

    if (is_mini) {
      if (this.shape == "") {
        for (var i=0;i<this.shapes.length;i++) {
         s = this.shapes[i].split(':');
         es = s[1] + '.show_btn()';
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
        }
     } else {
        for (var i=0;i<this.shapes.length;i++) {
         s = this.shapes[i].split(':');
         es = s[1] + '.hide_btn()';
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
        }
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

   $('.mybtns').trigger("create"); 

}


header.prototype.set_shapes = function (pshapes) {

   if (pshapes != undefined) {
        this.shapes = pshapes;
   }
   this.show();
}


header.prototype.toggle_shape = function (pshape) {
   if (pshape != undefined) {
        if (this.shape == pshape) {
           this.set_shape("");
        } else {
            this.set_shape(pshape);
        }
   }
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


