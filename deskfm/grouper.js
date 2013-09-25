

function grouper (pspotid) {
 
   this.spotid = pspotid + "_spot";
   this.varname = "robby";
   this.showing = false;
   this.shape = "all"; //one
   this.groupid="";
}


grouper.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var s = "";

    if (is_mini == true ) {
        ocl = 'diego.toggle_shape(\"group\");'
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
     }


    if (this.groupid != "" ) {

        lbl = 'group_all_btn';
        s = amare.group_set.get_desc(this.groupid);
	ocl = this.varname + '.set_shape(\"\");';
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' data-inline='true' style='vertical-align:middle;'   >";
	tmp = tmp +  this.cat + " " + s;
        tmp=tmp+"</button>";

   } else {

        lbl = 'group_sog';
        tmp=tmp+"<span style='display:inline-block;vertical-align:middle;' >";
	tmp = tmp +"<label for='"+lbl+" class='select'  ></label>";
   	tmp = tmp +"<select name='"+lbl+"' id='"+lbl+"  >";
        sugs = amare.group_set.get_setlist();
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<option value='"+sugs[i].subcat+"' ctag='who' ptag='"+this.varname+"' >"+sugs[i].text+"</option>";
        }
        tmp = tmp + "</select>";
         tmp=tmp+"</span>";

   }

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          $('#'+lbl).trigger("create");    
	  daviewer.load_group_list(this.groupid);
     }
}


grouper.prototype.redraw_view = function(pchunk) {
	var start = 0;
        var p =0;
	this.stats = amare.get_groupstat(this.groupid);

            if (pchunk != undefined) {
      	          this.stats.last_chunk = pchunk;
	          if (pchunk > 1) {
		    p = pchunk - 1;
		  }
		 start = p   * da_limit;
	    }
        daviewer.load_group_list(this.groupid,start);
}


grouper.prototype.change = function() {

	this.toggle();
  
}

grouper.prototype.set_shape = function(pstr) {
    if (pstr != undefined ) {
      if (pstr != this.shape) {
        this.shape = pstr;
      }
    }
 
 
    this.show();

}


grouper.prototype.set_group = function (tgroupid) {
  if (tgroupid != undefined) {
    this.groupid = tgroupid;
  }
  this.shape = "one";
  this.show();
}


grouper.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


grouper.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

}

  
grouper.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";
       ocl = 'diego.toggle_shape(\"group\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'group_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

grouper.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'group_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}




