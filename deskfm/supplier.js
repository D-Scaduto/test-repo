

function supplier (pspotid) {
 
   this.spotid = pspotid + "_spot";
   this.varname = "joe";
   this.showing = false;

   this.shape = "all";  //all,one 

}


supplier.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     lbl = 'suppliers_btn';
     ocl = this.varname + '.new_one();';
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button'  >";
     tmp = tmp + "suppliers";
     tmp = tmp + "</button>";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;

	  $('#suppliers_btn').button();

          this.showing = true;
	  daviewer.load_supplier_list();
     }
}


supplier.prototype.new_one = function() {
     var g = null;
     var t = -1;
 
     if (daviewer.darungs[0].postman.stored == true) { 
       g = new webit();
       t = amare.supplierlist.push(g);
       daviewer.add_one(t-1,"suppliers");
       daviewer.darungs[0].postman.editing = true;
       daviewer.darungs[0].postman.redraw_rung();
     }
}



supplier.prototype.set_shape = function(pstr) {
    if (pstr != undefined ) {
      if (pstr != this.shape) {
        this.shape = pstr;
      }
    }
    this.show();
}


supplier.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


supplier.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;
}


