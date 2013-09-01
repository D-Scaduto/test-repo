
  

viewer.prototype.nitro_start = function(pway) {

	if (pway != undefined) {
	    this.metro_dir = pway;
	}

   var lbl = "";
   var pobj = null;
   var tmp = "";

    if (is_mobile == true) {
       this.metro_spd = 1000;
    } else {
       this.metro_spd =1000;
    }
    this.flip_card();    


}



viewer.prototype.nitro_stop = function() {

   this.metro_spd = 0;
   this.flip_card();
   

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


