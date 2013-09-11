

function header () {

    this.shape = "";  // browse, search, share, shop, sort , feed   
    this.shapes = ['browse:cater','search:wanda','share:nicky','sort:mac','shop:store','feed:moe' ];
    this.varname = "diego";
}	
 

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + " <div id='menu_topbtns' class='' style=''  >";
      tmp = tmp + "</div>";

     tmp = tmp + " <div style='clear:right;'  >";
      tmp = tmp + "</div>";

     tmp = tmp + " <div id='search_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + " <div id='browse_spot' class='' style=''  >";
     tmp = tmp + "</div>";

      tmp = tmp + "<div id='shop_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='share_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

          if (this.shape == "") {
              this.draw_topbtns();
          } else {
              this.hide_topbtns();
             for (var i=0;i<this.shapes.length;i++) {
                var s = this.shapes[i].split(':');
                if (s[0] == this.shape) { 
                   var es = s[1] + '.show()'; 
                   eval(es);
                }
             }
         }
      }
}



header.prototype.draw_topbtns = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<span id='logo_spot' class='' style=''  >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span class='' style='float:right;min-width:150px;' >";

     lbl = 'browse_btn';
     ocl = this.varname + '.set_shape(\"browse\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/browse.png' width='20px' >";
     tmp = tmp + "</button>";  

     lbl = 'search_btn';
     ocl = this.varname + '.set_shape(\"search\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;' >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png' width='20px' >";
     tmp = tmp + "</button>"; 

     lbl = 'share_btn';
     ocl = this.varname + '.set_shape(\"share\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png' width='20px' >";
     tmp = tmp + "</button>";

   if (buddah == true) {
       lbl = 'sort_btn';
       ocl = this.varname + '.set_shape(\"sort\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
       tmp = tmp + "</button>"; 

       lbl = 'feed_btn';
       ocl = this.varname + '.set_shape(\"feed\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png' width='20px' >";
       tmp = tmp + "</button>"; 
 }
/*
       lbl = 'shop_btn';
       ocl = this.varname + '.set_shape(\"shop\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' width='20px' >";
       tmp = tmp + "</button>"; 
       tmp = tmp + "</span>";
*/     
 
       tmp = tmp + "</span>";

      var pobj = document.getElementById('menu_topbtns');
       if (pobj != null) {
          pobj.innerHTML = tmp;

 //       $('#share_btn').button();
//	  $('#search_btn').button();

  	  sal.show();
       }
}



header.prototype.hide_topbtns = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

      var pobj = document.getElementById('menu_topbtns');
       if (pobj != null) {
          pobj.innerHTML = "";
       }
}




header.prototype.set_shape = function (pshape) {

   if (pshape != undefined) {

      if (pshape == this.shape) {
        this.shape = "";
      } else {
        this.shape = pshape;
      }

      if (this.shape == "") {
        this.draw_topbtns();
      } else {
        this.hide_topbtns();
      }

      var s , es = "";
      for (var i=0;i<this.shapes.length;i++) {
         s = this.shapes[i].split(':');
         es = s[1] + '.hide();';
         if (s[0] == this.shape) { 
            es = s[1] + '.show()'; 
         }
     //    alert(this.shapes[i] + " " + es);
         eval(es);
      }
   }
}


header.prototype.redraw_view = function (psetype,pchunk) {

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
        if (moe.showing == true) { 
          moe.redraw_view("unsaved",pchunk);
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


