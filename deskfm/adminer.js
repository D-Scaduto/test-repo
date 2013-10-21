
function adminer () {

   this.bot_shapes = ['search:wanda','sort:mac','feed:louie','group:robby','manage:joe','browse:cater']; 
   this.bot_shape = "";

   this.varname = "diego";
}	

adminer.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

         tmp = tmp + "<span  id='left_spot' class='' style=''  >";
         tmp = tmp + "</span>";
 
         tmp = tmp + "<span id='right_spot' class='' style='float:right;' >";
         tmp = tmp + "</span>";

         tmp = tmp + "<div id='' class='' style='clear:both;' ></div>";
 
         tmp = tmp + "<div id='bot_spot' class='' style='' >";
         tmp = tmp + "</div>";


      var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;
            this.draw_left();
            this.draw_right();          
            this.draw_bot();          

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

            sal.show();
            this.set_botshape();

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


        lbl = 'search_btn';
        ocl = 'diego.toggle_botshape(\"search\");';
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
 
     lbl = 'share_btn';
       ocl = 'adoni.toggle();'
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

adminer.prototype.draw_bot = function () {

    var lbl = "";
    var tmp = "";
 
    ocl = 'daviewer.prev();'
    tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-d' data-iconpos='notext'>prev</a>";

    tmp = tmp + "<div id='rail_spot' class='' style='display:inline;text-align:center;'  >";
    tmp = tmp + "</div>";
 
    ocl = 'daviewer.next();'
    tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-u' data-iconpos='notext'  style='float:right;'  >next</a>";
 
    lbl = 'bot_spot';
    $('#'+lbl).html(tmp); 

    dale.show();

}
 
adminer.prototype.draw_sidebar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

      tmp = tmp + "<div id='search_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";
 
      tmp = tmp + "<div id='browse_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='' style='display:inline;'  >";
      tmp = tmp + "</div>";

   //   tmp = tmp + "<div  id='' class='' style='clear:both;'  ></div>";
   //   tmp = tmp + "<br>";

     lbl = 'adside_bar';
     $('#'+lbl).html(tmp); 

}
  

adminer.prototype.hide_sidebar = function () {

     var lbl = "";
     var tmp = "";

     lbl = 'aside_bar';
     $('#'+lbl).html(tmp); 

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


