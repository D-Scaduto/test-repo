
function header (pshapes) {
    this.varname = "diego";
}	

header.prototype.show = function () {
     var tmp = "";
     var lbl = "";
     var ocl = "";
/*
     tmp +="  <ul id='menu-left' data-role='menu'>";
     tmp +="  <li>";
     tmp +="  <span data-role='button' data-icon='arrow-d' data-iconpos='left'></span>";
     tmp +="  <ul data-role='listview' data-inset='true'>";
     tmp +="  <li data-icon='false'><a href='#A1'>A1</a></li>";
     tmp +="  <li data-icon='false'><a href='#A2'>Option A2 is really long</a></li>";
     tmp +="  <li data-icon='false'><a href='#logoutDialog' data-rel='dialog'>Logout</a></li>";
     tmp +="  </ul>";
     tmp +=" </li>";
     tmp +=" </ul>";

     tmp +="  <ul id='menu-right' data-role='menu'>";
     tmp +="  <li>";
     tmp +=" <span data-role='button' data-icon='arrow-d' data-iconpos='right'>Actions</span>";
     tmp +=" <ul data-role='listview' data-inset='true'>";
     tmp +=" <li data-icon='false'><a href='#a1'>Option B1</a></li>";
     tmp +=" <li data-icon='false'><a href='#a1'>Option B2</a></li>";
     tmp +=" </ul>";
     tmp +=" </li>";
     tmp +=" </ul>";
       
     tmp +=" <h1>";
     tmp +=" <a href='#' data-role='button' data-icon='arrow-l' data-iconpos='notext' data-inline='true'></a>";
     tmp +=" <p id='txtSpan'>Page One</p>";
     tmp +=" <a href='#' data-role='button' data-icon='arrow-r' data-iconpos='notext' data-inline='true'></a>";
     tmp +=" </h1>";

     tmp +=" <h2>second line of text</h2>";
    
       var pobj = document.getElementById('head_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;
*/

//alert("here");
//            $('#head_spot').trigger("create");
	   $('body').bind('hideOpenMenus', function(){
               $("ul:jqmData(role='menu')").find('li > ul').hide();
           }); 
           var menuHandler = function(e) {
           $('body').trigger('hideOpenMenus');
             $(this).find('li > ul').show();
             e.stopPropagation();
           };
          $("ul:jqmData(role='menu') li > ul li").click(function(e) {
               $('body').trigger('hideOpenMenus');
             e.stopPropagation();
           });
           $('body').delegate("ul:jqmData(role='menu')",'click',menuHandler);
           $('body').click(function(e){
                 $('body').trigger('hideOpenMenus');
           });

  //    }
}


header.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";

     tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
        tmp = tmp + "</div>";

    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

    //    tmp = tmp + "<div id='' class='' style='display:inline;vertical-align:top;'  >";

        tmp = tmp + "<div id='shop_spot' class='' style='display:inline;'  >";
         tmp = tmp + "</div>";
  
           tmp = tmp + "<div id='browse_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";

            tmp = tmp + "<div id='search_spot' class='' style='display:inline;'  >";
            tmp = tmp + "</div>";
 
        tmp = tmp + "<div id='share_spot' class='' style='display:inline-block;vertical-align:middle;padding-top:5px;'  >";
        tmp = tmp + "</div>";
 
        lbl = 'browse_btn'; 
        ocl = "diego.toggle_topshape(\"browse\");";
       tmp = tmp + "<span  class='mybtns' style='vertical-align:middle;display:inline;'  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img id='browse_btn' src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
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
      //  ocl = "nicky.toggle();";
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='deskfm/images/icons/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";


  //  tmp = tmp + "</div>";

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
   return;
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


