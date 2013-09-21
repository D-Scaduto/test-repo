

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
     var omo = "";
     var omt = "";
     var s = "";

 //    tmp = tmp + "<div style='width:250px;' >";

     if (this.shape == "one") {

  	    lbl = 'group_all_btn';
            ocl = this.varname + '.set_shape(\"all\");';
            tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button'  >";
	    if (this.groupid != "") {
              s = amare.group_set.get_desc(this.groupid);
	    }
	    tmp = tmp + s;
            tmp = tmp + "</button>";

     } else if (this.shape == "all") {

	lbl = 'group_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li><a >people</a>";

        tmp = tmp +"<ul  style='' >";
        sugs = amare.group_set.get_setlist();
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a gtag='"+sugs[i].groupid+"' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";
     }

     if (is_mini == true) {
       lbl = 'grouper_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' class='menu_btn' >";
       tmp = tmp + "</span>"; 
     }

//     tmp = tmp + "</div>"; 
 
     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
  
	    if (this.shape == "one") {
		  $('#group_all_btn').button();
	    } 
            
	      $('#group_sog').menu();
	      $('#group_sog').on( "menuselect", function( event, ui ) {
 	         var g,p  = "";
                 g = ui.item.children().attr('gtag');
  	         p = ui.item.children().attr('ptag');
	         if ((g!= undefined) && (p != undefined)) {
	           var exp = p + ".set_group(\""+ g + "\");";
	           eval(exp);
	         }
               } );
	    
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

 
grouper.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}



