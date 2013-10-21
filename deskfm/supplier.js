

function supplier (pspotid) {
 
   this.spotid = pspotid + "_spot";
   this.varname = "joe";
   this.showing = false;

   this.shape = "by_supplier";  //by_product 
   this.supplier_id = "";
}


supplier.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var cls = 'spotd_off';

     tmp = tmp + "<fieldset data-role='controlgroup'  data-type='horizontal' style='display:inline;min-width:160px;'  >";
      tmp += "<legend></legend>";
      lbl = 'by_supplier_btn';
       ocl = this.varname + '.set_shape(\"by_supplier\");';
        tmp = tmp + "<input  name='manage_setby' id='"+lbl+"' data-mini='true' type='radio'  onclick='"+ocl+"' style='' value='by_supplier' />";
       tmp += "<label for='"+lbl+"' >suppliers</label>";
 
      lbl = 'by_prodtype_btn';
       ocl = this.varname + '.set_shape(\"by_product\");';
        tmp = tmp + "<input  name='manage_setby' id='"+lbl+"' type='radio' data-mini='true'  onclick='"+ocl+"' style=''  />";
        tmp += "<label for='"+lbl+"' >products</label>";

         tmp = tmp + "</fieldset>"; 


      if (main_shape == "wide") {
 
        tmp = tmp + "<ul id='' data-role='listview' style='width:150px' data-inset='true' data-inline='true' >"; 

          if (this.shape == "by_supplier") {
            for (var i=0;i<amare.supplierlist.length;i++) {
              var osup = amare.supplierlist[i];
              var cnt = amare.count_products_by_supplier(osup.uname);
              ocl = this.varname + ".set_supplier(\""+osup.pid+"\");";
              tmp = tmp + "<li data-icon='false' ><a href='#'  onclick='"+ocl+"' >"+osup.uname+"<span class='ui-li-count'>"+cnt+"</span></a></li>";
            }
         }

          if (this.shape == "by_product") {
            var sugs = amare.product_set.get_setlist();
            for (var i=0;i<sugs.length;i++) {
              var osup = sugs[i];
              cnt=0;
              ocl = this.varname + ".set_product_type(\""+osup.product_type+"\");";
              tmp = tmp + "<li data-icon='false' ><a href='#'  onclick='"+ocl+"' >"+osup.text+"<span class='ui-li-count'>"+cnt+"</span></a></li>";
            }
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
        if (this.shape == "by_product") {
         $("#by_prodtype_btn").attr("checked",true).checkboxradio("refresh");
        }
         if (this.shape == "by_supplier") {
         $("#by_supplier_btn").attr("checked",true).checkboxradio("refresh");
       }
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

       ocl = 'diego.toggle_botshape(\"manage\");'
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



