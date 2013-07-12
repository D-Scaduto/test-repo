

function shoper (pspotid) { 

  this.spotid=pspotid;
  this.varname='store';
  this.menued = false;
  this.prodid = '';
  this.producter = new suggester("product_sog",new product_provider(), "store.producter","store");

  this.pricemax=1500;
  this.pmaxtext="< $1500";
  this.pricer = new suggester("price_sog",new price_provider(), "store.pricer","store");

}


shoper.prototype.show = function() {
    var tmpstr = "";
    var tstr1 = "";
    var lbl = "";
    var obj = null;
    var tcl = "";
    var ocl = "";
    var omo = "";
    var cls = "";
    var ims = "";
    var ts = "";
    var so = "";

         ts = "products";
         if (this.prodid !="") {
             ts = this.producter.provider.get_desc(this.prodid);
         }
         lbl = 'product_sog';
         cls = 'spotd_off';
         tmpstr = tmpstr + "<span  id='"+lbl+"'  class='"+cls+"' style='width:200px;'   >";
         tmpstr=tmpstr+ "<span class='spotd_off' onclick='store.producter.request_suggestions(\"\");' style=''  >";
         tmpstr=tmpstr+ ts;
         tmpstr=tmpstr+"</span>";

/*
         lbl = 'price_sog';
         cls = 'spotd_off';
         tmpstr = tmpstr + "<div  id='"+lbl+"'  class='"+cls+"' onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
         tmpstr=tmpstr+ "<div class='spotd_off' onclick='store.pricer.request_suggestions();' >";
         tmpstr=tmpstr+this.pmaxtext;
         tmpstr=tmpstr+"</div>";
         tmpstr=tmpstr+"</div>";
*/

/*
       lbl = 'mobile_buy';
       tmpstr=tmpstr+"<div id='"+lbl+"' style=''  >";
       tmpstr=tmpstr+"</div>";
*/

    lbl = this.spotid;
    obj = document.getElementById(lbl)
    if (obj != null) {
      obj.innerHTML=tmpstr;
      this.showing = true;
    }


    if (pname == "debug") {
       this.draw_debug();
    }
}


shoper.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}

shoper.prototype.set_product = function(tprod) {
      if (tprod != undefined) {
         this.prodid=tprod;
      }
//      if (this.pricemax != -1) {
        daviewer.load_product_list(this.prodid); 
//      }

      if (this.producter.layer.style.visibility == "hidden") {
          lbl = "product_sog";
          tmp = "<span onclick='store.producter.request_suggestions(\"\");' class='spotd_off' >";
          var so = this.producter.provider.get_desc(this.prodid);
          tmp = tmp + so;
          tmp = tmp + "</span>";
          obj = document.getElementById(lbl);
          if (obj != null) {
            obj.innerHTML=tmp;
          }
      }

}


shoper.prototype.set_pricemax = function(tpmax,tptxt) {
      if (tpmax != undefined) {
         this.pricemax=tpmax;
      }
      if (tptxt != undefined) {
         this.pmaxtext=tptxt;
      }

//      this.daviewer.set_productscreen(this.prodid); 
      if (this.pricer.layer.style.visibility == "hidden") {
          lbl = "price_sog";
          tmp = "<div onclick='store.pricer.request_suggestions();' class='spotd_off' >";
          tmp = tmp + this.pmaxtext;
          tmp = tmp + "</div>";
          obj = document.getElementById(lbl);
          if (obj != null) {
            obj.innerHTML=tmp;
          }
      }

}


shoper.prototype.change = function() {
     var bret=false;
     if (this.prodid == "") {
         this.producter.request_suggestions("");
     } else {

        if (this.producter != null) {
         bret = this.producter.next_suggestion();
         this.producter.hide_suggestions();
        }
     }
     return bret;
}


shoper.prototype.hide_suggs = function() {
   if (this.producter != null) {
        this.producter.hide_suggestions();
   }
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


