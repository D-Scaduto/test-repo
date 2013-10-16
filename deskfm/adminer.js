
function adminer (pshapes) {
    this.top_shapes = ['search:wanda','share:nicky'];
    this.top_shape = "";

    this.bot_shapes = [];
    if (pshapes !=undefined) {
        this.bot_shapes = pshapes;
    }
    this.bot_shape = "";

    this.varname = "diego";
}	

adminer.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

          tmp = tmp + "<span  id='left_spot' class='' style=''  >";
         tmp = tmp + "</span>";
 
        tmp = tmp + "<span id='right_spot' class='' style='' >";
         tmp = tmp + "</span>";

       var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;
            this.draw_left();
            this.draw_right();          

             this.draw_sidebar();
  
            if (main_shape == "wide") {
              if (this.top_shape == "") {
                  $('#adside_bar').css('width','100%');
                  $('#admain_spot').css('width','100%');
               } else {
                  $('#adside_bar').css('width','20%');
                  $('#admain_spot').css('width','80%');
               } 
            }

            $('#menu_spot').trigger("create");

            if (debug == true) {
               this.draw_debug();
            } 
      }
}


adminer.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";


       tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
        tmp = tmp + "</div>";
 
    
    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


adminer.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

        tmp = tmp + "<div id='' class='' style='display:inline;vertical-align:top;'  >";


       if (main_shape != "mini") {
         if (buddah == false)  {
           tmp = tmp + "<div id='browse_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";
          }
      }

        tmp = tmp + "<div id='shop_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";

            tmp = tmp + "<div id='search_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";
 
        lbl = 'search_btn';
       ocl = 'diego.toggle_topshape(\"search\");'
        if ((buddah == true) && (main_shape != "mini")) {
          ocl = "wanda.toggle();";
        }
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

       lbl = 'browse_btn';
        ocl = 'diego.toggle_botshape(\"browse\");';
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";


    if (buddah == true) {

        lbl = 'sort_btn';
       ocl = 'diego.toggle_botshape(\"sort\");'
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        lbl = 'feed_btn';
       ocl = 'diego.toggle_botshape(\"feed\");'
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";


      lbl = 'manage_btn';
       ocl = 'diego.toggle_botshape(\"manage\");'
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     lbl = 'group_btn';
       ocl = 'diego.toggle_botshape(\"group\");'
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
     }
   
    tmp = tmp + "</div>";

    lbl = 'right_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");
}

  
adminer.prototype.draw_sidebar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

      tmp = tmp + "<div id='browse_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='' style=''  >";
      tmp = tmp + "</div>";
       tmp = tmp + "<div  id='' class='' style='clear:right;'  ></div>";

     lbl = 'adside_bar';
     $('#'+lbl).html(tmp); 

}
  

adminer.prototype.hide_sidebar = function () {

     var lbl = "";
     var tmp = "";

     lbl = 'side_bar';
     $('#'+lbl).html(tmp); 

}
  
 
adminer.prototype.toggle_topshape = function (pshape) {
   if (pshape != undefined) {
       if ( this.top_shape != pshape ) {
          this.top_shape = pshape;
       } else {
           this.top_shape = "";
       }
   }
   this.set_topshape();
}
   

adminer.prototype.set_topshape = function (pshape) {
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

     if (main_shape == "wide") {
        $('#adside_bar').css('width','0%');
        $('#admain_spot').css('width','100%');
      }

    } else {
 
      if (main_shape == "wide") {
        $('#adside_bar').css('width','20%');
        $('#admain_spot').css('width','80%');
      } else {
        $('#adside_bar').css('width','100%');
        $('#admain_spot').css('width','100%');
      }
 
      if (main_shape == "mini") {
          sal.hide();
       } else {
          sal.show();
      }
      var s , es = "";
      for (var i=0;i<this.top_shapes.length;i++) {
         s = this.top_shapes[i].split(':');
         es = s[1] + '.hide();';
        if (s[0] == this.top_shape) {
            es = s[1] + '.show();';
        }
        es = " if (" + s[1] + " != null) { "+es+"}";
       eval(es);
     }
    }

    set_viewer();

    $('.mybtns').trigger("create"); 
}


adminer.prototype.toggle_botshape = function (pshape) {
   if (pshape != undefined) {
       if ( this.bot_shape != pshape ) {
          this.bot_shape = pshape;
       } else {
           this.bot_shape = "";
       }
   }
   this.set_botshape();
}
 

adminer.prototype.set_botshape = function (pshape) {
     if (pshape != undefined) {
        this.bot_shape = pshape;
     }
     if (this.bot_shape == "") {

      for (var i=0;i<this.bot_shapes.length;i++) {
         s = this.bot_shapes[i].split(':');
         es = s[1] + '.hide();';
         es = es + s[1] + '.show_btn();';
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
      }

     if (main_shape == "wide") {
        $('#adside_bar').css('width','0%');
        $('#admain_spot').css('width','100%');
      }

    } else {
 
      if (main_shape == "wide") {
        $('#adside_bar').css('width','20%');
        $('#admain_spot').css('width','80%');
      } else {
        $('#adside_bar').css('width','100%');
        $('#admain_spot').css('width','100%');
      }
 
      var s , es = "";
      for (var i=0;i<this.bot_shapes.length;i++) {
         s = this.bot_shapes[i].split(':');
         es = s[1] + '.hide();';
        if (s[0] == this.bot_shape) {
            es = s[1] + '.show();';
        }
        es = " if (" + s[1] + " != null) { "+es+"}";
        eval(es);
     }
    }

    set_viewer();

    $('.mybtns').trigger("create"); 
}



adminer.prototype.draw_debug = function () {
 
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


