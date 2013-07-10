

function model () {
    this.control_shape="wide";

}	
 

model.prototype.draw_main = function () {

   var tmp = "";
   var lbl = "";

       if (pname == "debug") {
           lbl = "header_debug";
           tmp = tmp + "<div id='"+lbl+"'  >";
           tmp = tmp + "</div>";
       }

          tmp = tmp + "<span id='share_spot' style='width:375px;float:right;background-color:white;border-color:silver;border-style:solid;border-size:5px;'  >";
          tmp = tmp + "</span>";

          tmp = tmp + "<span id='logo' style='float:left;background-color:white;padding:3px;border-color:silver;border-style:solid;border-size:5px;width:350px;'  >";
          tmp = tmp + "</span>"; 

          if (this.control_shape == "thin") {
  	    tmp = tmp + "<div id='control_spot' class='top_menu' style='width:350px;'  >";
	    tmp = tmp + "</div>";
	  }
	  if (this.control_shape == "wide") {
  	    tmp = tmp + "<div id='control_spot' class='top_menu' style=''  >";
            tmp = tmp + "</div>";
          }

 //      tmp = tmp + "<div style='clear:left;' ></div>";




         

       tmp = tmp + "<div style='clear:right;' ></div>";

	 


       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
	  this.draw_control();
	  sal.show();
	  nicky.show();
       }
}


model.prototype.toggle_controlshape = function () {
	if (this.control_shape == "thin") {
		this.set_controlshape("wide");
	} else {
		this.set_controlshape("thin");
	}
}



model.prototype.set_controlshape = function (pshape) {
	if (pshape != undefined) {
		this.control_shape = pshape;
	}
	this.draw_control();

}


model.prototype.draw_control = function () {

   var tmp = "";
   var lbl = "";

         if (this.control_shape == "thin") {
	    tmp = tmp + "<span  onclick='elle.toggle_controlshape();' class='' style='position:absolute;top:0;right:0;'  >";
            tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
            tmp = tmp + "</span>";
  	    tmp = tmp + "<div id='menu_spot' class='inner_menu' style=''  >";
            tmp = tmp + "</div>";
            tmp = tmp + "<div id='rail_spot' class='inner_menu' style='' >";
            tmp = tmp + "</div>";
	  }
	  if (this.control_shape == "wide") {
            tmp = tmp + "<span  onclick='elle.toggle_controlshape();' class='' style='position:absolute;top:0;right:0;'  >";
            tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
            tmp = tmp + "</span>";
	    tmp = tmp + "<span id='menu_spot' class='inner_menu' style='float:left'  >";
            tmp = tmp + "</span>";
            tmp = tmp + "<span id='rail_spot' class='inner_menu' style='float:right;' >";
            tmp = tmp + "</span>";
	  }

       var pobj = document.getElementById('control_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
	  daviewer.btns_showing = false;
	  daviewer.draw_rail();
	  diego.show();
       }
}
