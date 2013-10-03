
function header (pshapes) {
    this.top_shapes = [];
    if (pshapes !=undefined) {
        this.top_shapes = pshapes;
    }
    this.varname = "diego";
    this.top_shape = "";
}	

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

         tmp = tmp + "<div id='top_bar' class='ui-grid-a' >";
          tmp = tmp + "<div  id='left_spot' class='ui-block-a' style=''  >";
         tmp = tmp + "</div>";
         tmp = tmp + "<div id='right_spot' class='ui-block-b' style='' >";
         tmp = tmp + "</div>";
       tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;

            this.draw_left();
            this.draw_right();          

            if ((main_shape == "wide") && (buddah == true)) {
                this.draw_sidebar();
               if (this.top_shape == "") {
                  $('#side_bar').css('width','0%');
                  $('#main_spot').css('width','100%');
               } else {
                  $('#side_bar').css('width','25%');
                  $('#main_spot').css('width','75%');
               } 
            } else {
                this.hide_sidebar();
                $('#side_bar').css('width','0%');
                $('#main_spot').css('width','100%');
            }

            if ((this.top_shape == "") || (main_shape != "mini")) {
              sal.show();
            } else {
              sal.hide();
            }

            $('#menu_spot').trigger("create");

            if (debug == true) {
               this.draw_debug();
            } 
      }
}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

     if (main_shape == "mini") {
        tmp = tmp + "<div id='logo_spot' class='menu_sub' style='float:left;'  >";
        tmp = tmp + "</div>";
      }

         tmp = tmp + "<div id='share_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";

         tmp = tmp + "<div id='search_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";

         tmp = tmp + "<div id='shop_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";

     if (buddah == false) {
         tmp = tmp + "<div  id='browse_spot' class='menu_sub' style='margin-top:15px;;'  >";
         tmp = tmp + "</div>";
     }

      if (main_shape != "wide") {

       if (buddah == true) {

         tmp = tmp + "<div  id='browse_spot' class='menu_sub' style='margin-top:15px;;'  >";
         tmp = tmp + "</div>";
 
        tmp = tmp + "<div id='sort_spot' class='menu_sub' style=''  >";
        tmp = tmp + "</div>";

        tmp = tmp + "<div id='feed_spot' class='menu_sub' style=''  >";
        tmp = tmp + "</div>";
  
        tmp = tmp + "<div id='group_spot' class='menu_sub' style=''  >";
        tmp = tmp + "</div>";

        tmp = tmp + "<div id='manage_spot' class='menu_sub' style=''  >";
        tmp = tmp + "</div>";
     }
      
   }

        tmp = tmp + "<div id='' class='' style='display:inline;margin-right:15px;'  >";

      if (buddah == false) {
        lbl = 'browse_btn';
        ocl = 'diego.toggle_topshape(\"browse\");';
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
      }

      lbl = 'search_btn';
       ocl = 'diego.toggle_topshape(\"search\");'
         if (buddah == true) {
           ocl = "wanda.toggle();";
        }
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        lbl = 'share_btn';
        ocl = 'diego.toggle_topshape(\"share\");'
        if (buddah == true) {
           ocl = "nicky.toggle();";
        }
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        tmp = tmp + "</div>";


    if (buddah == true) {
      tmp = tmp + "<div id='' class='' style='display:inline;margin-right:15px;'  >";

        lbl = 'browse_btn';
        ocl = 'diego.toggle_topshape(\"browse\");';
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";


        lbl = 'sort_btn';
       ocl = 'diego.toggle_topshape(\"sort\");'
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

      lbl = 'feeds_btn';
       ocl = 'diego.toggle_topshape(\"feeds\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     lbl = 'manage_btn';
       ocl = 'diego.toggle_topshape(\"manage\");'
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     lbl = 'group_btn';
       ocl = 'diego.toggle_topshape(\"group\");'
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        tmp = tmp + "</div>";
 
   }

    lbl = 'right_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}

 
header.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";

 	 lbl = 'prev_btn'; 
        ocl = "daviewer.prev();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/prev.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

	 lbl = 'next_btn'; 
        ocl = "daviewer.next();";
         tmp = tmp + "<span  class='mybtns' style='display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='' src='deskfm/images/icons/play.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";

      if (main_shape == "wide") {
        lbl = 'vman_btn'; 
        ocl =  'daviewer.randomize_rungs();'
        tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='vman_btn' src='deskfm/images/daoman/cbman-stand-r.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";
      }

       if (main_shape != "mini") {
         tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
         tmp = tmp + "</div>";
       } else {
         if (this.top_shape != "") {
           lbl = 'vman2_btn'; 
           ocl =  'diego.set_topshape(\"\");';
           tmp = tmp + "<span  id='vman2_btn' class='mybtns' style='vertical-align:middle;display:inline-block;'  >";
           tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
           tmp = tmp + "<img id='vman_btn' src='deskfm/images/daoman/cbman-stand-r.png'  class='menu_btn'  >";
           tmp = tmp + "</button>";
           tmp = tmp + "</span>";
         }
       }
       
    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


  
header.prototype.draw_sidebar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

       tmp = tmp + "<div id='browse_spot' class='' style=''  >";
      tmp = tmp + "</div>";

     tmp = tmp + "<div id='sort_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style=''  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='' style=''  >";
      tmp = tmp + "</div>";

     lbl = 'side_bar';
     $('#'+lbl).html(tmp); 

}
  

header.prototype.hide_sidebar = function () {

     var lbl = "";
     var tmp = "";

     lbl = 'side_bar';
     $('#'+lbl).html(tmp); 

}
  
 
header.prototype.toggle_topshape = function (pshape) {
   if (pshape != undefined) {
       if ( this.top_shape != pshape ) {
          this.top_shape = pshape;
       } else {
           this.top_shape = "";
       }
   }
   this.set_topshape();
}
  
header.prototype.set_topshape = function (pshape) {
   if (pshape != undefined) {
        this.top_shape = pshape;
   }
    if (this.top_shape == "") {

      for (var i=0;i<this.top_shapes.length;i++) {
         s = this.top_shapes[i].split(':');
         es = s[1] + '.hide();';
         es = es + s[1] + '.show_btn();';
        es = " if (" + s[1] + " != null) { "+es+"}";
       eval(es);
      }
      sal.show();
      if ((main_shape == "wide") && (buddah == true)) {
        $('#side_bar').css('width','0%');
        $('#main_spot').css('width','100%');
      }

    } else {

      if ((main_shape == "wide") && (buddah == true)) {
        $('#side_bar').css('width','25%');
        $('#main_spot').css('width','75%');
      } else {
         $('#main_spot').css('width','100%');
      }

      if (main_shape != "mini") {
          sal.show();
      } else {
          sal.hide();
      }

      var s , es = "";
      for (var i=0;i<this.top_shapes.length;i++) {
         s = this.top_shapes[i].split(':');
         es = s[1] + '.hide();';
         if ((main_shape != "wide")&&(buddah == true)) {
           es = es + s[1] + '.hide_btn();';
         }
         if (s[0] == this.top_shape) {
            es = s[1] + '.show();';
            es = es + s[1] + '.show_btn();';
        }
        es = " if (" + s[1] + " != null) { "+es+"}";
        eval(es);
     }
    }

    $('.mybtns').trigger("create"); 
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


