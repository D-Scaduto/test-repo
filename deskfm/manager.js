

function manager (pspotid) {
 
   this.spotid = pspotid;
   this.varname = "";
   this.showing = false;
   this.shape = "";

   this.preset="";
   this.cat="";
   this.subcat="";
   this.groupid="";
   this.prodid="";

   this.dacater = new suggester("cat_sog",new cat_provider(), "joe.dacater","joe");
   this.subcater = new suggester("subcat_sog",new subcat_provider(), "joe.subcater","joe");
   this.grouper = new suggester("group_sog",new group_provider(), "joe.grouper","joe");
   this.producter = new suggester("prod_sog",new product_provider(), "joe.producter","joe");

}


manager.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var omo = "";
     var omt = "";
     var s = "";

     tmp = tmp + "<span id='mgr_topbar' onclick=''  class='spotd_off' >";

     if (this.shape == "")  {
       lbl = "mgr_webits_btn";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       ocl = "joe.set_shape(\"webits\");";
       cls = "spotd_off";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "webits";
       tmp = tmp + "</span>";

       lbl = "mgr_people_btn";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       ocl = "joe.set_shape(\"people\");";
       cls = "spotd_off";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "people";
       tmp = tmp + "</span>";

       lbl = "mgr_products_btn";
       omo = "markyd(\""+lbl+"\");";
       omt = "unmarkyd(\""+lbl+"\");";
       ocl = "joe.set_shape(\"products\");";
       cls = "spotd_off";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
       tmp = tmp + "products";
       tmp = tmp + "</span>";
     } else {

       tmp = tmp + "<span id='' onclick='joe.set_shape(\"\");'  class='spotd_on' >";
       tmp = tmp + this.shape;
       tmp = tmp + "</span>";
     }

     tmp = tmp + "</span>";


          if (this.shape == "webits") {

            tmp = tmp + "<span id='cat_sog' >";
            ocl = 'joe.dacater.request_suggestions(\"\");';
            tmp = tmp + "<span onclick='"+ocl+"'  class='spotd_off' >";
            tmp = tmp + this.cat;
            tmp = tmp + "</span>";
            tmp = tmp + "</span>";

            tmp = tmp + "<span id='subcat_sog' >";
            ocl = 'joe.subcater.request_suggestions(\"'+this.cat+'\");';
            tmp = tmp + "<span onclick='"+ocl+"'  class='spotd_off' >";
            s = this.subcater.provider.get_desc(this.cat,this.subcat);
            tmp = tmp + s;
            tmp = tmp + "</span>";
            tmp = tmp + "</span>";
          }

          if (this.shape == "people") {
            tmp = tmp + "<span id='group_sog' >";
            ocl = 'joe.grouper.request_suggestions(\"\");';
            tmp = tmp + "<span onclick='"+ocl+"'  class='spotd_off' >";
            s = this.grouper.provider.get_desc(this.groupid);
            tmp = tmp + s;
            tmp = tmp + "</span>";
            tmp = tmp + "</span>";
          }

          if (this.shape == "products") {
            tmp = tmp + "<span id='prod_sog' >";
            ocl = 'joe.producter.request_suggestions(\"\");';
            tmp = tmp + "<span onclick='"+ocl+"' class='spotd_off'  >";
            s = this.producter.provider.get_desc(this.prodid);
            tmp = tmp + s;
            tmp = tmp + "</span>";
            tmp = tmp + "</span>";
          }

          tmp = tmp + "</span>";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
     }
}

 
manager.prototype.redraw_view = function() {

   if (wanda.sterms != "") {
         daviewer.get_lsearch_list(wanda.sterms);
   } else {
     if ((this.cat == "") && (this.subcat == "")) {
       daviewer.load_random_list();
     } else {
       daviewer.set_catscreen(this.cat,this.subcat);
     }
   }
}

manager.prototype.change = function() {

  if (this.shape != "") {
     this.shape ="";
  }
  this.show();
}

manager.prototype.set_shape = function(pstr) {
    if (pstr != undefined ) {
      if (pstr != this.shape) {
        this.shape = pstr;
      }
    }
 
     joe.dacater.hide_suggestions();
     joe.subcater.hide_suggestions();
     joe.grouper.hide_suggestions();
     joe.producter.hide_suggestions();

    this.show();

    if (this.shape == "webits") {
      joe.dacater.request_suggestions("");
    }

    if (this.shape == "people") {
      joe.grouper.request_suggestions("");
    }

    if (this.shape == "products") {
      joe.producter.request_suggestions("");
    }
}


manager.prototype.set_group = function (tgroupid) {
  if (tgroupid != undefined) {
    this.groupid = tgroupid;
  }
  this.shape = "people";
  this.show();
  daviewer.load_peeplist(this.groupid);
}


manager.prototype.set_product = function (tproduct) {
  if (tproduct != undefined) {
    this.prodid = tproduct;
  }
  this.shape = "products";
  this.show();
  daviewer.set_prodscreen(this.prodid);
}


manager.prototype.set_cat = function (tcat) {
  if (tcat != undefined) {
    this.cat = tcat;
  }
  this.subcat = "";
  this.shape = "webits";
  this.show();
  this.subcater.request_suggestions(this.cat);
}



manager.prototype.set_subcat = function (tcat,tsubcat) {
  if (tcat != undefined) {
    this.cat = tcat;
  }
  if (tsubcat != undefined) {
    this.subcat = tsubcat;
  }
  this.shape = "webits";
  this.show();
  daviewer.set_catscreen(this.cat,this.subcat);
}



manager.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}

manager.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

}


