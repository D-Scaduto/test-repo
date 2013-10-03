
function header () {

    this.varname = "diego";
    this.top_shapes = ['browse:cater','search:wanda','share:nicky'];  //
    this.bot_shapes = ['sort:mac','group:robby','manage:joe','feed:louie'];  //sort,feed,manage,group  
    this.top_shape = "";
    this.bot_shape = "";
    this.top_showing = false;
}	

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

         tmp = tmp + "<div id='top_bar' class='ui-grid-a' >";
        tmp = tmp + "</div>";

     if (buddah == true) {
       tmp = tmp + "<div id='navbar_spot' data-role='navbar' data-iconpos='top'   >";
       tmp = tmp + "</div>";
     }

      var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;

            this.draw_topbar();

            if (buddah == true) {
                this.draw_navbar();
                this.draw_sidebar();
                this.set_botshape();
            }

           $('#menu_spot').trigger("create");

            if (debug == true) {
               this.draw_debug();
            } 
      }
}

header.prototype.draw_topbar = function () {

     var tmp = ""; 
         tmp = tmp + "<div  id='left_spot' class='ui-block-a' style=''  >";
         tmp = tmp + "</div>";
         tmp = tmp + "<div id='right_spot' class='ui-block-b' style='' >";
         tmp = tmp + "</div>";

      $('#top_bar').html(tmp);
      $('#top_bar').trigger("create");
        this.top_showing = true;
            this.draw_left();
            this.draw_right();          
            this.set_topshape();
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

      tmp = tmp + "<div  id='browse_spot' class='menu_sub' style='margin-top:15px;;'  >";
      tmp = tmp + "</div>";

     tmp = tmp + "<div id='' class='' style='display:inline;margin-right:15px;'  >";

        lbl = 'browse_btn';
       ocl = 'diego.toggle_topshape(\"browse\");'
        tmp = tmp + "<span id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

      lbl = 'search_btn';
       ocl = 'diego.toggle_topshape(\"search\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     lbl = 'share_btn';
       ocl = 'diego.toggle_topshape(\"share\");'
        tmp = tmp + "<span   id='"+lbl+"' class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        tmp = tmp + "</div>";

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
        ocl =  'diego.set_topshape(\"\");'
        tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline-block;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
        tmp = tmp + "<img id='vman_btn' src='deskfm/images/daoman/cbman-stand-r.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";
      }

       if (main_shape != "mini") {
         tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
         tmp = tmp + "</div>";
       }
       
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
       ocl = this.varname + '.set_botshape(\"sort\");'
       tmp = tmp + "<li><a href='#'  id='"+lbl+"' onclick='"+ocl+"' >"; 
       tmp = tmp + "<img src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
       tmp = tmp + "</a></li>"; 
 
        lbl = 'feed_btn';
       ocl = this.varname + '.set_botshape(\"feed\");'
         tmp = tmp + "<li><a href='#'  id='"+lbl+"' onclick='"+ocl+"' >"; 
        tmp = tmp + "<img src='deskfm/images/icons/cloud.png'  class='menu_btn'  >";
        tmp = tmp + "</a></li>"; 
 
       lbl = 'manage_btn';
       ocl = this.varname + '.set_botshape(\"manage\");'
         tmp = tmp + "<li><a href='#'  id='"+lbl+"' onclick='"+ocl+"' >"; 
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png'  class='menu_btn'  >";
        tmp = tmp + "</a></li>"; 
 
       lbl = 'group_btn';
       ocl = this.varname + '.set_botshape(\"group\");'
         tmp = tmp + "<li><a href='#'  id='"+lbl+"' onclick='"+ocl+"' >"; 
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

     tmp = tmp + "<div id='header_debug_spot' class='menu_sub' style=''  >";
      tmp = tmp + "</div>";

     lbl = 'mainbar_spot';
     $('#'+lbl).html(tmp); 
}

 
header.prototype.draw_sidebar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

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

    } else {

      if (main_shape != "mini") {
          sal.show();
      } else {
          sal.hide();
      }

      var s , es = "";
      for (var i=0;i<this.top_shapes.length;i++) {
         s = this.top_shapes[i].split(':');
         es = s[1] + '.hide();';
//         if (main_shape != "wide") {
           es = es + s[1] + '.hide_btn();';
//         }
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

 
header.prototype.set_botshape = function (pshape) {
   if (pshape != undefined) {
        this.bot_shape = pshape;
   }

     var s , es = "";
      for (var i=0;i<this.bot_shapes.length;i++) {
         s = this.bot_shapes[i].split(':');
         es = s[1] + '.hide();';
         if (s[0] == this.bot_shape) {
            es = s[1] + '.show()';
        }
        es = " if (" + s[1] + " != null) { "+es+"}";
        eval(es);
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


