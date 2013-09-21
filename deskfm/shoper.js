

function shoper (pspotid) { 

  this.spotid = pspotid + "_spot";
  this.varname = 'store';
  this.shape = "all";//one
  this.product_type = '';
  this.pricemax=1500;
  this.pmaxtext="< $1500";
}


shoper.prototype.show = function() {
    var tmp = "";
    var lbl = "";
    var obj = null;
    var ocl = "";

     if (this.shape == "one") {

  	    lbl = 'product_all_btn';
            ocl = this.varname + '.set_shape(\"all\");';
            tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button'  >";
	    if (this.product_type != "") {
              s = amare.product_set.get_desc(this.product_type);
	    }
	    tmp = tmp + s;
            tmp = tmp + "</button>";

     } else if (this.shape == "all") {

	lbl = 'product_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li><a >shop</a>";

        tmp = tmp +"<ul  style='' >";
        sugs = amare.product_set.get_setlist();
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a ptag='"+sugs[i].product_type+"' vtag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";
     }

     if (is_mini == true) {
       lbl = 'shoper_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' class='menu_btn'  >";
       tmp = tmp + "</span>"; 
     }

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
  
	    if (this.shape == "one") {
		  $('#product_all_btn').button();
	    } 
            
	      $('#product_sog').menu();
	      $('#product_sog').on( "menuselect", function( event, ui ) {
 	         var p,v  = "";
                 p = ui.item.children().attr('ptag');
  	         v = ui.item.children().attr('vtag');
	         if ((p!= undefined) && (v != undefined)) {
	           var exp = v + ".set_product(\""+ p + "\");";
	           eval(exp);
	         }
               } );
	    
	  daviewer.load_products_by_type(this.prodid);
    }

}


shoper.prototype.set_shape = function(tshape) {
      if (tshape != undefined) {
         this.shape = tshape; 
      }
     this.show();
}

shoper.prototype.set_product = function(tprod) {
      if (tprod != undefined) {
         this.product_type = tprod;
      }
     this.shape = "one";
     this.show();
}


shoper.prototype.set_pricemax = function(tpmax,tptxt) {
      if (tpmax != undefined) {
         this.pricemax=tpmax;
      }
      if (tptxt != undefined) {
         this.pmaxtext=tptxt;
      }

}


shoper.prototype.change = function() {

   this.show();
}



shoper.prototype.toggle = function () {
   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


shoper.prototype.hide = function () {
   lbl = this.spotid;
   if (document.getElementById(lbl) != null ) { 
     document.getElementById(lbl).innerHTML=""; 
   }
   this.showing = false;
}


shoper.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + "shopper";
     tmp = tmp + " sh="+ this.shape;
     tmp = tmp + " md="+ this.mode;
     tmp = tmp + " pd="+ this.prodid;
     lbl = this.spotid + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


