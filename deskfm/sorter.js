
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

    if (is_mini == true ) {
        ocl = 'diego.set_shape(\"\");'
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
     }

   tmp = tmp + "<span id='cal_spot' class='' style='vertical-align:middle;display:inline-block;' >";
   tmp = tmp + "</span>";	

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      this.krono = new calendor('cal_spot','mac.krono','mac.check_local()');
      this.krono.show();
      $('#sort_spot').trigger('create');
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

  
sorter.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_shape(\"sort\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'sort_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

sorter.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'sort_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



