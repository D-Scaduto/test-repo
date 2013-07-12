

function model () {
    this.control_shape="wide";

}	
 

model.prototype.draw_main = function () {

     var tmp = "";
     var lbl = "";

      tmp = tmp + "<div style='float:right;' >";
      tmp = tmp + "<span id='share_spot' style='display:inline-block;;background-color:white;border-color:silver;border-style:solid;border-size:5px;'  >";
      tmp = tmp + "</span>";

      tmp = tmp + "<span id='search_spot' class='search_menu' style='display:inline-block;'  >";
      tmp = tmp + "</span>";
      tmp = tmp + "</div>";

      tmp = tmp + "<span id='logo' style='float:left;background-color:white;padding:3px;border-color:silver;border-style:solid;border-size:5px;width:200px;'  >";
      tmp = tmp + "</span>"; 

;

      tmp = tmp + "<div style='clear:right;' ></div>";

      tmp = tmp + "<div id='rail_spot' class='top_rail' style='' >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div style='clear:left;' ></div>";
 
      tmp = tmp + "<div id='menu_spot' class='top_menu' style='width:300px;'  >";
      tmp = tmp + "</div>";

       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

	  daviewer.btns_showing = false;
	  daviewer.draw_rail();

	  diego.show();
	  wanda.show();
	  sal.show();
	  nicky.show();
       }
}


