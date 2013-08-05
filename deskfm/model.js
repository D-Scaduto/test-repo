

function model () {

    this.shape = "";  // wingout 

}	
 

model.prototype.draw_main = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<div id='outer_menu' class='top_menu' style=''  >";

     tmp = tmp + "<div class='top_left' style='' >";

     lbl = 'menu_btn';
     ocl = 'diego.toggle();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' width='20px' >";
     tmp = tmp + "</button>";  

     tmp = tmp + "<span id='logo_spot' class='' style=''  >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span class='' style='float:right;' >";

     lbl = 'search_btn';
     ocl = 'wanda.toggle();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;' >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png' width='20px' >";
     tmp = tmp + "</button>"; 

     lbl = 'share_btn';
     ocl = 'nicky.toggle();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png' width='20px' >";
     tmp = tmp + "</button>";

//     if (buddah == true) {
       lbl = 'shop_btn';
       ocl = 'store.toggle();'
       tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' width='20px' >";
       tmp = tmp + "</button>"; 
       tmp = tmp + "</span>";
//     }
     tmp = tmp + "</div>";


     tmp = tmp + "<div id='rail_spot' class='rail_menu' style='' >";
     tmp = tmp + "</div>"; 

     tmp = tmp + "<div  style='clear:left;' ></div>";

     tmp = tmp + "<div id='search_spot' class='' style=''  >";
     tmp = tmp + "</div>";
 
     tmp = tmp + "<div id='share_spot' class='' style=''  >";
     tmp = tmp + "</div>";

    
     tmp = tmp + "<div id='menu_spot' class='inner_menu' style=''  >";
     tmp = tmp + "</div>";

     tmp = tmp + "<div id='shop_spot' class='' style=''  >";
     tmp = tmp + "</div>";

     tmp = tmp + "</div>";  // end outer_menu
   
     tmp = tmp + "<div  style='clear:both;' ></div>"; 

     tmp = tmp + "<div id='zoom_rung_0' class='zbox' style=''  >";
     tmp = tmp + " </div>"; 
   

       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
   //       $('#share_btn').button();
//	  $('#search_btn').button();
	  daviewer.draw_rail();
  	  sal.show();
	  diego.show();
       }
}



model.prototype.set_shape = function (pshape) {

	if (pshape != undefined) {
	    this.shape = pshape;
	}
        this.draw_main();

}


