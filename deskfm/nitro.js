

viewer.prototype.nitro_start = function(pway) {

	if (pway != undefined) {
	    this.metro_dir = pway;
	}


    if (is_mobile == true) {
       this.metro_spd = 500;
    } else {
       this.metro_spd =250;
    }
    this.flip_card();    

   var lbl = "";
   var pobj = null;
   var src = "";
   var tmp = "";
   var moin="";
   var mout = "";

       tmp = tmp + "<img src='deskfm/images/icons/stop.png'  class='menu_btn' >";

      lbl = 'nitro_btn';
 
   pobj = document.getElementById(lbl);
   if (pobj != null) {
     pobj.innerHTML = tmp;
   } 


}


viewer.prototype.nitro_stop = function() {

   this.metro_spd = 0;
   this.flip_card();

   var lbl = "";
   var pobj = null;
   var src = "";
   var moin = "";
   var mout = "";
   var tmp="";

       tmp = tmp + "<img id='"+lbl+"' src='deskfm/images/icons/play.png'  class='menu_btn' >";

        lbl = 'nitro_btn';
 
   pobj = document.getElementById(lbl);
   if (pobj != null) {
     pobj.innerHTML = tmp;
   } 


}


viewer.prototype.toggle_nitro = function() {

    if (this.metro_spd == 0 ) {
      this.nitro_start();
    } else {
      this.nitro_stop();
    }
}


viewer.prototype.flip_card = function() {
 
   if (this.metro_spd != 0) {

	   if (this.metro_dir == "fwd") {
             this.next(1);
	   } 
	   if (this.metro_dir == "back") {
             this.prev(1);
	   }
  
         var cl = this.varname + ".flip_card();";
         this.metro_tmr = setTimeout(cl,this.metro_spd);

    }

}


