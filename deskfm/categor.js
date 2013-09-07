

function categor (pmenuid) { 

   this.menuid = pmenuid;
   this.spotid = pmenuid + "_spot";
   this.varname ='cater';
   this.showing = false;
   this.shape = "";
   this.menued = false;

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

      if (this.cat == "all") { 

        lbl = 'who_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='width:100px;display:inline-block;' >";
  	tmp = tmp +"<li><a >who</a>";
        tmp = tmp +"<ul  style='width:350px;' >";
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='who' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul>";
	tmp = tmp + "</li></ul>";

        lbl = 'what_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='width:100px;display:inline-block;' >";
  	tmp = tmp +"<li><a >what</a>";
        tmp = tmp +"<ul  style='width:350px;' >";
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='what' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp + "</ul>";
	tmp = tmp + "</li></ul>";

        lbl = 'why_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='width:100px;display:inline-block;' >";
  	tmp = tmp +"<li><a >why</a>";
        tmp = tmp +"<ul  style='width:350px;' >";
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='why' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";

        lbl = 'how_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='width:100px;display:inline-block;' >";
  	tmp = tmp +"<li><a >how</a>";
        tmp = tmp +"<ul  id='"+lbl+"' style='width:350px;' >";
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='how' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";
   
    } else {

        lbl = 'cat_undo_btn';
        ocl = "cater.set_cats(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
        tmp=tmp+"</button>";
      
	lbl = this.cat + '_sog';
        tmp = tmp +"<ul  id='"+lbl+"' class='ui-menu' style='width:100px;display:inline-block;' >";
  	tmp = tmp +"<li><a >"+ this.cat + "</a>";
        tmp = tmp +"<ul  id='"+lbl+"' style='width:350px;' >";
        sugs = amare.subcat_set.get_setlist(this.cat);
        for (var i=0;i<sugs.length;i++) {
          tmp = tmp +"<li><a stag='"+sugs[i].subcat+"' ctag='"+this.cat+"' ptag='"+this.varname+"' >"+sugs[i].text+"</a></li>";
        }
        tmp = tmp +"</ul></li></ul>";

	lbl = 'subcat_btn';
        s  = amare.subcat_set.get_desc(this.cat,this.subcat); 
        ocl = "cater.set_cats(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + s;
        tmp=tmp+"</button>";

    }
       

   lbl = this.spotid;
   obj = document.getElementById(lbl)
   if (obj != null) {
     obj.innerHTML=tmp;
     if (this.cat == "all") {

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

     } else {

	    $('#cat_undo_btn').button();
   	    $('#subcat_btn').button();

	    $('#'+this.cat+'_sog').menu();
	    $('#'+this.cat+'_sog').on( "menuselect", function( event, ui ) {
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
      
     this.showing = true;
     if (init_run == false) {
	 this.redraw_view();
     }

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
              daviewer.more();
          }          

            if (pchunk != undefined) {
      	          daviewer.stats.last_chunk = pchunk;
		  if (pchunk > 1) {
		    p = pchunk - 1;
		  }
		 start = p * da_limit;
	    }

	  if (this.cat == "all") {

	    daviewer.load_list(start);

	  } else {

            daviewer.load_category_list(this.cat,this.subcat,start);
	    
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


categor.prototype.set_menued = function(ptog) {
	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}


