
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

         tmp = tmp + "<div class='ui-grid-a' >";

         tmp += "<div  id='left_spot' class='ui-block-a' style=''  >";
         tmp = tmp + "</div>";

         tmp = tmp + "<div id='right_spot' class='ui-block-b' style='' >";
         tmp = tmp + "</div>";
 
       tmp = tmp + "</div>";

       tmp = tmp + "<div id='navbar_spot' data-role='navbar' data-iconpos='top'   >";
       tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
            pobj.innerHTML = tmp;
            this.draw_left();
            this.draw_right();

            this.draw_mainbar();
 
            if (buddah == true) {
                this.draw_navbar();
           }

            $('#menu_spot').trigger("create");
            this.set_shape();
           if (debug == true) {
               this.draw_debug();
           } 
        
      }
}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";


      tmp = tmp + "<div id='' class='' style='display:inline-block;float:right;'  >";

      lbl = 'share_btn';
       ocl = 'diego.toggle_shape(\"share\");'
        tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     if (main_shape != "mini") {
         tmp = tmp + "<div id='share_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";
     } 
 
     if (main_shape != "mini") {
         tmp = tmp + "<div id='search_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";
     } 
 
      lbl = 'search_btn';
       ocl = 'diego.toggle_shape(\"search\");'
        tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";


     if (main_shape == "mini") {
        lbl = 'browse_btn';
        ocl = 'cater.toggle();'
        tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
    }

        tmp = tmp + "</div>";

    lbl = 'right_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}

 
header.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";

        lbl = 'vman_btn'; 
         ocl = 'daviewer.toggle_nitro();';
         tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='vman_btn' src='deskfm/images/daoman/cbman-stand-r.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

         ocl = 'dale.toggle();';
         tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

        tmp = tmp + "<div id='rail_spot' class='' style='display:inline-block;'  >";
         tmp = tmp + "</div>";
    
    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}



header.prototype.draw_navbar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

      tmp = tmp + "<ul>";

       lbl = 'sort_btn';
       ocl = this.varname + '.set_shape(\"sort\");'
       tmp = tmp + "<li><a href='#' onclick='"+ocl+"' >"; 
       tmp = tmp + "<img src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
       tmp = tmp + "</a></li>"; 
 
        lbl = 'feed_btn';
       ocl = this.varname + '.set_shape(\"feed\");'
         tmp = tmp + "<li><a href='#' onclick='"+ocl+"' >"; 
        tmp = tmp + "<img src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
        tmp = tmp + "</a></li>"; 
 
       lbl = 'manage_btn';
       ocl = this.varname + '.set_shape(\"manage\");'
         tmp = tmp + "<li><a href='#' onclick='"+ocl+"' >"; 
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
        tmp = tmp + "</a></li>"; 
 
       lbl = 'group_btn';
       ocl = this.varname + '.set_shape(\"group\");'
         tmp = tmp + "<li><a href='#' onclick='"+ocl+"' >"; 
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
       tmp = tmp + "</a></li>"; 
 
     tmp = tmp + "</ul>";
 
    lbl = 'navbar_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");
}
 

header.prototype.draw_mainbar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";


     if (main_shape == "mini") {
         tmp = tmp + "<div id='share_spot' class='' style='clear:right;'  >";
         tmp = tmp + "</div>";

         tmp = tmp + "<div id='search_spot' class='' style=''  >";
         tmp = tmp + "</div>";
     } 


      tmp = tmp + "<div  id='browse_spot' class='' style=''  >";
      tmp = tmp + "</div>";

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

      tmp = tmp + "<div id='header_debug_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

     lbl = 'mainbar_spot';
     $('#'+lbl).html(tmp); 

}
 


header.prototype.set_shapes = function (pshapes) {
   if (pshapes != undefined) {
        this.shapes = pshapes;
   }
   this.show(); 
}

header.prototype.set_shape = function (pshape) {
   if (pshape != undefined) {
        this.shape_was = this.shape;
        this.shape = pshape;
   }
 
    if (main_shape == "mini") {
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

      sal.show();

    $('.mybtns').trigger("create"); 
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
      tmp = tmp + "mshape=" + main_shape;
       pobj = document.getElementById(lbl);
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


header.prototype.draw_radio = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

      tmp += "    <fieldset data-role='controlgroup' data-type='horizontal'  data-role='fieldcontain' style='display:inline-block;' >";
      tmp += "    <legend></legend>";

      lbl = 'search_btn';
       ocl = 'diego.toggle_shape(\"search\");'

       tmp += "     <input type='radio' name='radio-choice-1' id='radio-choice-1' value='choice-1'  onclick='"+ocl+"' />";
        tmp = tmp + "<label for='radio-choice-1' class='mybtns' >";
        tmp = tmp + "<img src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</label>";
 
      lbl = 'browse_btn';
       ocl = 'diego.toggle_shape(\"browse\");'
       tmp += "     <input type='radio' name='radio-choice-1' id='radio-choice-2' value='choice-2'  onclick='"+ocl+"'  />";
      tmp += "     <label for='radio-choice-2'  class='mybtns'  >";
        tmp = tmp + "<img src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</label>";
 
      lbl = 'share_btn';
       ocl = 'diego.toggle_shape(\"share\");'
      tmp += "<input type='radio' name='radio-choice-1' id='radio-choice-4' value='choice-4'  onclick='"+ocl+"'  />";
       tmp += "    <label for='radio-choice-4'  class='mybtns'  >";
        tmp = tmp + "<img src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</label>";
 
      tmp += "   </fieldset>";

    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


