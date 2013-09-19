

function sorter (pspotid) { 

   this.spotid = pspotid + "_spot";
   this.varname = "mac";
   this.shape = "";  
   this.showing = false;
   this.sterms = "standing desk";
   this.da_date = new Date();
   this.krono = null;
}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

     tmp = tmp + "<div style='width:250px;' >";

   lbl = "sort_reset_btn";
   ocl= "";
   tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style='' >";
   tmp = tmp + "sort";
   tmp = tmp + "</button>";

   tmp = tmp + "<span id='cal_spot' class='' >";
   tmp = tmp + "</span>";	

     if (is_mini == true) {
       lbl = 'sortper_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
       tmp = tmp + "</span>"; 
     }

    tmp = tmp + "</div>"; 

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      this.krono = new calendor('cal_spot','mac.krono','mac.check_local()');
      this.krono.show();
      $('#sort_reset_btn').button();
      this.check_local();
   } 

}



sorter.prototype.check_local = function() {

   var dt = new Object;
   dt.month="";
   if (this.krono.showing == true) {
         dt = this.krono.get_da_month();
   }
   daviewer.load_unsorted_list(dt);
   var lstat = amare.get_monthstat(dt);
   if (lstat != null) {
       if (lstat.cnum > lstat.lnum) {
         daviewer.more();
       }
   }
  
}


sorter.prototype.save_set = function() {
    // loop through daviewer
    // call add on all of em 

    var len = daviewer.darungs.length;
    for (var i=0; i<len; i++) {
        if (daviewer.darungs[i].postman != undefined) {
	    daviewer.darungs[i].postman.add_webit();
        }
    }
    
}


sorter.prototype.redraw_view = function(psetype) {

	if (psetype == "unsorted") {
   	  	daviewer.load_unsorted_list();
	} 

}

sorter.prototype.set_shape = function(pstr) {
	if (pstr != undefined) {
          this.shape = pstr;
	}
	this.show();
}



sorter.prototype.change = function() {
    this.show();
}



sorter.prototype.hide = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = "";
   var cls="";

   lbl = this.spotid;

   pobj = document.getElementById(lbl);
   if (pobj != null) {
       pobj.innerHTML=tmpstr; 
       this.showing = false;
   }

   
}


sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



