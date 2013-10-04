

function supplier (pspotid) {
 
   this.spotid = pspotid + "_spot";
   this.varname = "joe";
   this.showing = false;
   this.shape = "all";  //all,one 
   this.supplier_id = "";
}


supplier.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var cls = 'spotd_off';

      tmp = tmp + "<div data-role='controlgroup' data-type='horizontal' >";

      lbl = 'new_supply_btn';
       ocl = this.varname + '.new_one();';
        tmp = tmp + "<button  data-role='button' data-inline='true' data-mini='true' onclick='"+ocl+"' style='background-color:white;'  >";
//       tmp = tmp + "<img src='deskfm/images/icons/plus_round.png' class='menu_btn' >";
         tmp += "add";
       tmp = tmp + "</button>"; 

	tmp += "<label for='select-supply' class='select'></label>";
 	tmp += "<select name='select-supply' data-mini='true' data-inline='true' id='select-supply'>";
 	tmp += "  <option value='product' >product</option>";
  	tmp += "  <option value='supplier' >supplier</option>";
 	tmp += "</select>";

 	tmp += "</div>";

      if (main_shape != "wide") {
 
	tmp += "<label for='select-supplier' class='select'></label>";
 	tmp += "<select name='select-supplier' data-mini='true' data-inline='true' id='select-supplier'>";
        var sugs = amare.supplierlist;
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_supplier("+sugs[i].pid + ");";
          tmp += "  <option value='"+sugs[i].pid+"' >"+sugs[i].uname+"</option>";
        }
 	tmp += "</select>";

     } else {

 //       tmp = tmp + "<div id='' data-role='collapsible' style='width:200px;' >";
        tmp = tmp + "<h3> suppliers </h3>"; 
        tmp = tmp + "<ul id='' data-role='listview' style='width:200px;' >"; 
        for (var i=0;i<amare.supplierlist.length;i++) {
           var osup = amare.supplierlist[i];
           var cnt = amare.count_products_by_supplier(osup.uname);
           ocl = this.varname + ".set_supplier(\""+osup.pid+"\");";
           tmp = tmp + "<li><a href='#'  onclick='"+ocl+"' >"+osup.uname+"<span class='ui-li-count'>"+cnt+"</span></a></li>";
        }
        tmp = tmp + "</ul>"; 
  //      tmp = tmp + "</div>"; 
     }

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
	  $('#'+lbl).trigger("create");
          this.showing = true;
          this.set_supplier();
    }
}


supplier.prototype.set_supplier = function(psuppid) {

   if (psuppid != undefined) {
     this.supplier_id = psuppid;
   }
    if (this.supplier_id != "") {
       daviewer.load_products_by_supplier(this.supplier_id);
    } else {
      daviewer.load_products_by_type();
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

 
supplier.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_topshape(\"manage\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'manage_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

supplier.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'manage_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



