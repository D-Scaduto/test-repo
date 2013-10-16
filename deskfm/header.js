
function header (pshapes) {
    this.top_shapes = ['search:wanda','browse:cater'];
    this.top_shape = "";

    this.varname = "diego";
}	

header.prototype.show = function () {

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
  
            $('#menu_spot').trigger("create");

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
 
/*
        lbl = 'browse_btn'; 
        ocl = "diego.toggle_topshape(\"browse\");";
       tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img id='browse_btn' src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";
*/
 
           tmp = tmp + "<div id='browse_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";


    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

        tmp = tmp + "<div id='' class='' style='display:inline;vertical-align:top;'  >";

        tmp = tmp + "<div id='shop_spot' class='menu_sub' style=''  >";
         tmp = tmp + "</div>";

            tmp = tmp + "<div id='search_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";
 
        lbl = 'search_btn';
       ocl = 'diego.toggle_topshape(\"search\");'
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/search.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";

        lbl = 'share_btn';
        tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline;margin-right:8px;'  >";
        tmp = tmp + "<a href='#top_view' data-role='button' data-rel='popup' data-inline='true' onclick='nicky.show();' > ";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</a>";
        tmp = tmp + "</span>";

    tmp = tmp + "</div>";

    lbl = 'right_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");
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


