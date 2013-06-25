

function manager (pspotid) {
 
   this.spotid = pspotid;
   this.varname = "";
   this.showing = false;
   this.shape = "";

   this.groupid="";

   this.grouper = new suggester("group_sog",new group_provider(), "joe.grouper","joe");

}


manager.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var omo = "";
     var omt = "";
     var s = "";

            tmp = tmp + "<span id='group_sog' >";
            ocl = 'joe.grouper.request_suggestions(\"\");';
            tmp = tmp + "<span onclick='"+ocl+"'  class='spotd_off' >";
            s = this.grouper.provider.get_desc(this.groupid);
            tmp = tmp + s;
            tmp = tmp + "</span>";
            tmp = tmp + "</span>";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
	  daviewer.load_group_list(this.groupid);
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
 
 
    this.show();

}


manager.prototype.set_group = function (tgroupid) {
  if (tgroupid != undefined) {
    this.groupid = tgroupid;
  }
  this.shape = "people";
  this.show();
  daviewer.load_group_list(this.groupid);
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


