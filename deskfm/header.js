
function header (pshapes) {
    this.top_shapes = ['search:wanda', 'share:nicky' ];
    this.top_shape = "share";

    this.bot_shapes = ['browse:cater', 'slide:dale' ];
    this.bot_shape = "browse";

    this.varname = "diego";
}	

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

          tmp = tmp + "<span  id='tleft_spot' class='' style=''  >";
         tmp = tmp + "</span>";
 
        tmp = tmp + "<span id='tright_spot' class='' style='float:right;' >";
         tmp = tmp + "</span>";

              tmp = tmp + "<div style='clear:both;' ></div>";

          tmp = tmp + "<span  id='bleft_spot' class='' style=''  >";
         tmp = tmp + "</span>";
 
        tmp = tmp + "<span id='bright_spot' class='' style='float:right;' >";
         tmp = tmp + "</span>";


       var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;

            this.draw_left();
            this.draw_right();          
            this.set_topshape();

            this.set_botshape();
  
            $('#menu_spot').trigger("create");

            sal.show();

            if (debug == true) {
               this.draw_debug();
            } 
      }
}


header.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";

     tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
        tmp = tmp + "</div>";

    lbl = 'tleft_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

     tmp = "";

        ocl = 'daviewer.next();'
	tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-l' data-iconpos='notext'>Delete</a>";

        lbl = 'browse_btn';
        ocl = 'diego.set_botshape(\"browse\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

     tmp = tmp + "<div id='browse_spot' class='' style='display:inline;'  >";
     tmp = tmp + "</div>";
 
    lbl = 'bleft_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");


}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

        tmp = tmp + "<div id='search_spot' class='' style='display:inline;'  >";
        tmp = tmp + "</div>";
 
        tmp = tmp + "<div id='share_spot' class='' style='display:inline-block;vertical-align:middle;'  >";
        tmp = tmp + "</div>";

            lbl = 'search_btn';
       ocl = 'diego.set_topshape(\"search\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        lbl = 'share_btn';
       ocl = 'diego.set_topshape(\"share\");'
      //  ocl = "nicky.toggle();";
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

    lbl = 'tright_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

    tmp = "";
/*      
         tmp = tmp + "<div id='shop_spot' class='' style='display:inline;'  >";
         tmp = tmp + "</div>";
*/ 
           tmp = tmp + "<div id='rail_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";

        lbl = 'slide_btn';
        ocl = 'diego.set_botshape(\"slide\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
       
        ocl = 'daviewer.prev();'
	tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true' data-icon='arrow-r' data-iconpos='notext'>Delete</a>";

    lbl = 'bright_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


header.prototype.toggle_topshape = function (pshape) {
   if (pshape != undefined) {
       if ( this.top_shape != pshape ) {
          this.top_shape = pshape;
          this.set_topshape();
       } else {
           if (this.top_shape == "browse") {
               cater.change();
           } else {
             this.top_shape = "";
             this.set_topshape();
           }
       }
   }
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
    } else {
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


header.prototype.set_botshape = function (pshape) {

     if (main_shape != "mini") { 
         cater.show();
         cater.hide_btn();
         dale.show();
         dale.hide_btn();

     } else {
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
      } else {
        var s , es = "";
        for (var i=0;i<this.bot_shapes.length;i++) {
          s = this.bot_shapes[i].split(':');
          es = s[1] + '.hide();';
          es = es + s[1] + '.show_btn();';
          if (s[0] == this.bot_shape) {
            es = s[1] + '.show();';
            es = es + s[1] + '.hide_btn();';
          }
          es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
        }
      }
    }
    set_viewer();
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


