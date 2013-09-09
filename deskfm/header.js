

function header () {

    this.shape = "";  // menu, search, share, shop, sort  
    this.shapes = ['menu','search','share','sort','shop','feed'];
}	
 

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<div class='top_left' style='' >";

     lbl = 'browse_btn';
     ocl = 'diego.set_shape(\"browse\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/browse.png' width='20px' >";
     tmp = tmp + "</button>";  

     tmp = tmp + "<span id='logo_spot' class='' style=''  >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span class='' style='float:right;' >";

     lbl = 'search_btn';
     ocl = 'diego.set_shape(\"search\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;' >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png' width='20px' >";
     tmp = tmp + "</button>"; 

     lbl = 'share_btn';
     ocl = 'diego.set_shape(\"share\");'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png' width='20px' >";
     tmp = tmp + "</button>";

   if (buddah == true) {
       lbl = 'sort_btn';
       ocl = 'diego.set_shape(\"sort\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
       tmp = tmp + "</button>"; 

       lbl = 'feed_btn';
       ocl = 'diego.set_shape(\"feed\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png' width='20px' >";
       tmp = tmp + "</button>"; 
 }
/*
       lbl = 'shop_btn';
       ocl = 'diego.set_shape(\"shop\");'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' width='20px' >";
       tmp = tmp + "</button>"; 
       tmp = tmp + "</span>";
*/     
 
       tmp = tmp + "</span>";
      tmp = tmp + "</div>";

     tmp = tmp + "<div  style='clear:left;' ></div>";

     tmp = tmp + "<div id='search_spot' class='' style=''  >";
     tmp = tmp + "</div>";
 
     tmp = tmp + "<div id='browse_spot' class='inner_menu' style=''  >";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='shop_spot' class='' style=''  >";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='sort_spot' class='' style=''  >";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='feed_spot' class='' style=''  >";
     tmp = tmp + "</div>";

       var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

 //       $('#share_btn').button();
//	  $('#search_btn').button();

  	  sal.show();

	  if (this.shape == "browse") {
	    	cater.show();
	  } else if (this.shape == "search") {
		wanda.show();
	  } else if (this.shape == "share") {
		nicky.show();
	  } else if (this.shape == "shop") {
		store.show();
	  } else if (this.shape == "sort") {
		mac.show();
	  } else if (this.shape == "feed") {
		moe.show();
	  }
       }
}



header.prototype.set_shape = function (pshape) {

	if (pshape != undefined) {

            if (this.shape != pshape) {
	       this.shape = pshape;
  	       // hide all non shapes
	       // show shape
               this.show();
            } else {
               if (this.shape == "browse") {
                   cater.set_cats("all");
               }
            }
	}
}


header.prototype.redraw_view = function (psetype,pchunk) {

    if (psetype == "webits") { 
        if (this.shape == "browse") {
           cater.redraw_view(pchunk);
	}
    }

    if (psetype == "people") { 
       if (this.shape == "contact") {
         joe.redraw_view(pchunk);
       }
    } 

      if (psetype == "unsaved") { 
        if (this.shape == "feed") { 
          moe.redraw_view("unsaved",pchunk);
        } 
      }

      if (psetype == "unsorted") { 
         if (this.shape == "sort") { 
          mac.redraw_view("unsorted",pchunk);
         }  
      }

    if (wanda.sterms != "") {
        wanda.check_local();
    }

}




