

function header (pspotid) {
 
   this.spotid = pspotid;
   this.varname = "";
   this.showing = false;
   this.shape = "";
}


header.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";


     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          
     }
     this.showing = true;

}

 
header.prototype.set_shape = function(pstr) {
  if (pstr != undefined ) {
    if (pstr != this.shape) {
       this.shape = pstr;
    }
  }
  this.show();
}


header.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
      this.set_shape("buy");
   }
}

header.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

}


