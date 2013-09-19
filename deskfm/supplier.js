

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
     var cls = 'spotd_off';

     tmp = tmp + "<div style='width:250px;' >";

     lbl = 'suppliers_btn';
     ocl = '';
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button'  >";
     tmp = tmp + "suppliers";
     tmp = tmp + "</button>";

      lbl = 'suppliers_new_btn';
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.new_one();';
       tmp = tmp + "<span id='"+lbl+"'  class='spotd_off'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/plus_round.png' width='20px' >";
       tmp = tmp + "</span>"; 

     if (is_mini == true) {
       lbl = 'supplier_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png' width='20px' >";
       tmp = tmp + "</span>"; 
     }

     tmp = tmp + "</div>"; 
 
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
 
     daviewer.new_one("suppliers");
 
}

supplier.prototype.add_product = function(prung) {
    var g = null;
    var t=0;
     if (daviewer.darungs[prung].postman != null) { 
       g = new webit();
       g.supplier_id = daviewer.darungs[prung].postman.pid;
       t = amare.productlist.push(g);
       daviewer.darungs[prung].postman.mini_viewer.add_one(t-1,"suppliers");
       daviewer.darungs[prung].postman.redraw_rung();
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


