
  

viewer.prototype.nitro_start = function() {

  var lbl = "";
  var pobj = null;
   var tmp = "";

    if (is_mobile == true) {
       this.metro_spd = 500;
    } else {
       this.metro_spd =100;
    }
    this.flip_card();    

      lbl = 'nitro_img';
      tsrc = "deskfm/images/icons/stop.png";
      pobj = document.getElementById(lbl)
      if (pobj != null) {
        pobj.src = tsrc;
      }

}



viewer.prototype.nitro_stop = function() {

   this.metro_spd = 0;
   this.flip_card();
   var tmp = "";
   var   lbl = 'nitro_img';
   var    tsrc = "deskfm/images/icons/fast_fwd.png";
   var    pobj = document.getElementById(lbl)
      if (pobj != null) {
        pobj.src = tsrc;
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

         this.next(25);

         var cl = this.varname + ".flip_card();";
         this.metro_tmr = setTimeout(cl,this.metro_spd);

    }

}


