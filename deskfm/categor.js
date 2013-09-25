

function categor (pmenuid) { 

   this.menuid = pmenuid;
   this.spotid = pmenuid + "_spot";
   this.varname ='cater';
   this.showing = false;
   this.shape = "all";
   this.cat ="all";
   this.subcat ="";
}


categor.prototype.show = function() {

    var tmp = "";
    var lbl = "";
    var obj = null;
    var ocl = "";
    var s = "";
    var sugs = [];

    if (is_mini == true ) {
        ocl = 'diego.toggle_shape(\"browse\");'
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='background-color:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/browse.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
     }

    if (this.subcat != "" ) {

	lbl = 'subcat_btn';
        s  = amare.subcat_set.get_desc(this.cat,this.subcat); 
        ocl = "cater.subcat=\"\";cater.show();";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp +  this.cat + " " + s;
        tmp=tmp+"</button>";

   } else {

	tmp += '<a href="#who_sog" data-rel="popup" data-role="button" data-inline="true" data-transition="slideup"  data-theme="e"  style="vertical-align:middle;"  > who ?</a>';
 	tmp += '<div data-role="popup" id="who_sog" data-theme="d">';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
           ocl = this.varname + ".set_cats(\"who\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

	tmp += '<a href="#what_sog" data-rel="popup" data-role="button" data-inline="true" data-transition="slideup"  data-theme="e"   style="vertical-align:middle;"  > what ?</a>';
 	tmp += '<div data-role="popup" id="what_sog" data-theme="d">';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_cats(\"what\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

	tmp += '<a href="#why_sog" data-rel="popup" data-role="button" data-inline="true" data-transition="slideup"  data-theme="e"  style="vertical-align:middle;"   > why ?</a>';
 	tmp += '<div data-role="popup" id="why_sog" data-theme="d">';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
           ocl = this.varname + ".set_cats(\"why\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

	tmp += '<a href="#how_sog" data-rel="popup" data-role="button" data-inline="true" data-transition="slideup"  data-theme="e"   style="vertical-align:middle;"  > how ?</a>';
 	tmp += '<div data-role="popup" id="how_sog" data-theme="d">';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_cats(\"how\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

   }

    lbl = this.spotid;
    $('#'+lbl).html(tmp);
    $('#'+lbl).trigger("create");    

     this.showing = true;
     this.redraw_view();
}



categor.prototype.redraw_view = function(pchunk) {

	var start = 0;
        var p = 0;

        var lstat = null;
        lstat = amare.get_catstat(this.cat,this.subcat);

        if (lstat != null) {
        
	  daviewer.stats = lstat;
          if (lstat.cnum > lstat.lnum) {
             if (lstat.cat != "all") {
                 daviewer.more();
             }
          }          

            if (pchunk != undefined) {
      	          daviewer.stats.last_chunk = pchunk;
		  if (pchunk > 1) {
		    p = pchunk - 1;
		  }
		 start = p * da_limit;
	    }

	  if (this.cat == "all") {

	    daviewer.load_sorted_list(start);

	  } else {

            daviewer.load_category_list(this.cat,this.subcat,start);
	    
	  }

       }
}


categor.prototype.set_shape = function(pshape) {

      if (pshape != undefined) {
           if ((pshape == "all") && (this.shape == "all")) {
             diego.set_shape("");
           } else {
             this.shape=pshape;
             this.show();
           }
      }
}



categor.prototype.set_cats = function(tcat,tsubcat) {

      if (tcat != undefined) {
           if (this.cat != tcat) {
              this.cat=tcat;
	      this.subcat = "";
           }
      }

      if (tsubcat != undefined) { 
        if (this.subcat != tsubcat) {
          this.subcat=tsubcat;
        }
      }

     // get more if more need be gotten 
      this.show();
      this.redraw_view(); 
   
}


categor.prototype.change = function () {
   this.toggle();
}


categor.prototype.toggle = function () {

   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


categor.prototype.hide = function () {

   lbl = this.spotid;
   if (document.getElementById(lbl) != null ) { 
     document.getElementById(lbl).innerHTML=""; 
   }
   this.showing = false;
}


categor.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + "categor";
     tmp = tmp + " sh="+ this.shape;
     tmp = tmp + " cat="+ this.cat;
     tmp = tmp + " sub="+ this.subcat;
     lbl = "cat_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


categor.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_shape(\"browse\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/browse.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'browse_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

categor.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'browse_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



