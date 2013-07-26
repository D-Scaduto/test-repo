

function model () {

    this.shape = "";  // wingout 

}	
 

model.prototype.draw_main = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<div id='outer_menu' class='top_menu' style=''  >";

     tmp = tmp + "<div id='tl_menu' class='' style='float:left;'  >";

     tmp = tmp + "<div class='inner_menu' style='width:450px;background-color:silver;' >";

     lbl = 'menu_toggle';
     ocl = 'diego.toggle();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' data-role='button' style=''  >";
     tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
     tmp = tmp + "</button>";

     tmp = tmp + "<span id='logo_spot' class='' style='display:inline-block;width:175px;'  >";
     tmp = tmp + "</span>";
     

     tmp = tmp + "<span style='float:right;' >";

//     lbl = 'zoom_btn';
//     ocl = 'daviewer.toggle_zoom();'
//     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style=''  data-role='button'  >";
//     tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
//     tmp = tmp + "</button>"; 

     lbl = 'share_btn';
     ocl = 'nicky.toggle();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' data-role='button'  >";
     tmp = tmp + "share";
     tmp = tmp + "</button>";
    
     lbl = 'scroll_btn';
     ocl = 'elle.toggle_shape();'
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' style='' data-role='button' >";
     tmp = tmp + "<img src='deskfm/images/icons/control_panel.png' height='20px' >";
     tmp = tmp + "</button>";

     tmp = tmp + "</span>"; 
    
     tmp = tmp + "</div>";

     tmp = tmp + "<div style='clear:both;' ></div>";

     tmp = tmp + "<div id='share_spot' class='inner_menu' style='background-color:silver;'  >";
     tmp = tmp + "</div>";

     tmp = tmp + "<div style='clear:both;' ></div>";

     tmp = tmp + "<div id='menu_spot' class='inner_menu' style='width:450px;background-color:silver;'  >";
     tmp = tmp + "</div>";

     if (this.shape == "" ) {
	 tmp = tmp + "<div id='rail_spot' class='inner_menu' style='width:450px;' >";
         tmp = tmp + "</div>";
     }


     tmp = tmp + "</div>";

   if (this.shape == "wingout" ) {
      tmp = tmp + "<div id='tr_menu' class='' style='float:right;'  >";
      tmp = tmp + "<div id='rail_spot' class='inner_menu' style='width:360px;' >";
      tmp = tmp + "</div>";
      tmp = tmp + "</div>";
   }

      tmp = tmp + "<div style='clear:both;' ></div>";

       tmp = tmp + "<div id='zoom_rung_0' class='zbox' style=''  >";
       tmp = tmp + " </div>"; 
   

       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
          $('#share_btn').button();
	  $('#menu_toggle').button();
	  $('#scroll_btn').button();
	  $('#zoom_btn').button();
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


model.prototype.toggle_shape = function () {

	if (is_mobile == true) {
		daviewer.toggle_rail();
	} else {
  	  if (this.shape == "") {
		this.shape = "wingout";
	  } else {
		this.shape = "";
	  }
          this.draw_main();
	}
        
}

