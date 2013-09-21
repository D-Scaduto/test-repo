

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

    tmp = tmp + "<div style='width:250px;' >";

    if (this.subcat != "" ) {

	lbl = 'subcat_btn';
        s  = amare.subcat_set.get_desc(this.cat,this.subcat); 
        ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp +  this.cat + " " + s;
        tmp=tmp+"</button>";

   } else {

      if (this.shape == "all") { 

        lbl = "browse_who_btn";
        ocl= "cater.set_shape(\"who\")";
        tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  >";
        tmp = tmp + "who";
        tmp = tmp + "</button>";

        lbl = "browse_what_btn";
        ocl= "cater.set_shape(\"what\")";
        tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  >";
        tmp = tmp + "what";
        tmp = tmp + "</button>";

        lbl = "browse_why_btn";
        ocl= "cater.set_shape(\"why\")";
        tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  >";
        tmp = tmp + "why";
        tmp = tmp + "</button>";

        lbl = "browse_how_btn";
        ocl= "cater.set_shape(\"how\")";
        tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  >";
        tmp = tmp + "how";
        tmp = tmp + "</button>";

      } else if (this.shape == "who") { 

        lbl = 'who_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li style=''  ><a >who?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='who' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul></li></ul>";

       } else if (this.shape == "what") { 

        lbl = 'what_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
   	tmp = tmp +"<li style='' ><a >what?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='what' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul></li></ul>";

       } else if (this.shape == "why") { 

        lbl = 'why_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
    	tmp = tmp +"<li style=''  ><a >why?</a><ul  style='' >";
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='why' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";

       } else if (this.shape == "how") { 

        lbl = 'how_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='display:inline-block;' >";
  	tmp = tmp +"<li style=''  ><a >how?</a><ul  id='"+lbl+"' style='' >";
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='how' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";
      }

    }

     if (is_mini == true) {
       lbl = 'browse_unset_btn';
       ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/browse.png' class='menu_btn' >";
       tmp = tmp + "</span>"; 
     }

   tmp = tmp + "</div>"; 
       
   lbl = this.spotid;
   obj = document.getElementById(lbl)
   if (obj != null) {
     obj.innerHTML=tmp;

     if (this.subcat != "") {

   	    $('#subcat_btn').button();

     } else {

       if (this.shape == "all") {
	    $('#browse_who_btn').button();
	    $('#browse_what_btn').button();
	    $('#browse_why_btn').button();
	    $('#browse_how_btn').button();
	
       } else if (this.shape == "who") {

            $('#who_sog').menu();
	    $('#who_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.shape == "what") {

	    $('#what_sog').menu();
	    $('#what_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.shape == "why") {
     
	    $('#why_sog').menu();
	    $('#why_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );

	} else if (this.shape == "how") {

	    $('#how_sog').menu();
	    $('#how_sog').on( "menuselect", function( event, ui ) {
 	       var c,s,p = "";
	       c = ui.item.children().attr('ctag');
               s = ui.item.children().attr('stag');
  	       p = ui.item.children().attr('ptag');
	       if ((c != undefined) && (c!= undefined) && (s != undefined)) {
	         var exp = p + ".set_cats(\""+ c + "\",\"" + s + "\");";
	         eval(exp);
	       }
             } );
         } 
      }
      
     this.showing = true;
     this.redraw_view();
   }
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


