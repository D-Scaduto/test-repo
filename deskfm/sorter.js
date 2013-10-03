
function sorter (pspotid) { 

   this.spotid = pspotid + "_spot";
   this.varname = "mac";
   this.shape = "";  
   this.showing = false;

   this.sterms = "standing desk";
   this.da_date = new Date();

   this.months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
 }

sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

     if (main_shape != "wide") { 
       tmp = tmp + "<div class='ui-grid-b' >";

         tmp += "<div  id='' class='ui-block-a' style=''  >";
	tmp += "<label for='select-year' class='select'></label>";
 	tmp += "<select name='select-year' data-mini='true' data-inline='true' id='select-year'>";
 	tmp += "  <option value='2013'>2013</option>";
 	tmp += "  <option value='2012'>2012</option>";
  	tmp += "  <option value='2011'>2011</option>";
 	tmp += "</select>";
         tmp = tmp + "</div>";

         tmp += "<div  id='' class='ui-block-b' style=''  >";
	
        tmp=tmp+"<div data-role='collapsible' data-inline='true' style='width:150px;' >";
     	tmp = tmp +"<h3>monthly</h3>";

     } else {

	tmp += "<label for='select-year' class='select'></label>";
 	tmp += "<select name='select-year' data-mini='true' data-inline='true' id='select-year'>";
 	tmp += "  <option value='2013'>2013</option>";
 	tmp += "  <option value='2012'>2012</option>";
  	tmp += "  <option value='2011'>2011</option>";
 	tmp += "</select>";
   	tmp = tmp +"<h3></h3>";

     }

   	tmp = tmp +"<ul  data-role='listview' id='' style='width:150px;' data-inline='true'  >";
        var sugs = amare.monthstats;
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_month("+sugs[i].month + ");";
          var month = this.months[sugs[i].month];
          var year = sugs[i].year;
          if (year == this.da_date.getFullYear()) {
            tmp = tmp + "<li><a href='#'  onclick='"+ocl+"' >"+month+"</a></li>";
          }
        }
        tmp = tmp + "</ul>";

      if (main_shape != "wide") { 
         tmp=tmp+"</div>";
          tmp=tmp+"</div>";
       }

   lbl = this.spotid;

   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      this.krono = new calendor('cal_spot','mac.krono','mac.check_local()');
      this.krono.show();
      $('#sort_spot').trigger('create');
      this.check_local();
      $('#sort_btn').addClass("ui-btn-active");
   } 

}


sorter.prototype.check_local = function() {

   var dt = new Object;
   dt.month = this.da_date.getMonth();
   dt.year = this.da_date.getFullYear();

   daviewer.load_unsorted_list(dt);
   var lstat = amare.get_monthstat(dt);
   if (lstat != null) {
       if (lstat.cnum > lstat.lnum) {
         daviewer.more();
       }
   }
  
}


sorter.prototype.set_month = function(pmon) {
   if (pmon != undefined) {
     this.da_date.setMonth(pmon);
     this.check_local();
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

   $('sort_btn').removeClass("ui-btn-active");
   
}

  
sorter.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_topshape(\"sort\");'
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



