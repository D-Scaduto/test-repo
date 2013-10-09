
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
   if (jqm_off == true) {
       this.show_nojqm();
   } else {
      if ((buddah == true) && (main_shape == "wide")) {
         this.show_collapsers();
      } else {
        this.show_popups();
      }
   }
   wanda.hide();   
}

categor.prototype.show_popups = function() {

    var tmp = "";
    var lbl = "";
    var obj = null;
    var ocl = "";
    var s = "";
    var sugs = [];

  tmp = tmp + "<div  class='' style='display:inline-block;height:40px;vertical-align:top;'  >";
/* 
  if (main_shape == "mini") {
      lbl = 'change_cat_btn'; 
        ocl =  'cater.change();'
        tmp = tmp + "<span  class='mybtns' style=''  >";
         tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img id='"+lbl+"' src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
         tmp = tmp + "</span>";
  }
*/
    if (this.subcat != "" ) {
	lbl = 'subcat_btn';
        s  = amare.subcat_set.get_desc(this.cat,this.subcat); 
        ocl = "cater.set_cats(\""+this.cat+"\",\"\");";
        tmp=tmp+"<span id='"+lbl+"' onclick='"+ocl+"' class='screen_talk' style=''   >";
	tmp = tmp + s;
        tmp=tmp+"</span>";

   } else { 

   if ((this.cat != "who" ) || (this.subcat == "")) {

	tmp += "<a href='#who_sog' data-rel='popup' data-role='' data-theme='e' data-inline='true' style='' class='screen_talk'  > who ? </a>";
 	tmp +=  "<div data-role='popup' id='who_sog'>";
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"who\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

    }


   if ((this.cat != "what" )  || (this.subcat == "")) {

        tmp += '<a href="#what_sog" data-rel="popup" data-role="" data-inline="true"  data-theme="e" data-transition="slideup" style="" class="screen_talk"  > what ? </a>';
 	tmp += '<div data-role="popup" id="what_sog" data-theme="d"  style="display:inline-block;"  >';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
          ocl = "cater.set_cats(\"what\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

    }


   if ((this.cat != "why" )  || (this.subcat == "")) {

        tmp += '<a href="#why_sog" data-rel="popup" data-role="" data-inline="true" data-transition="slideup"  data-theme="e"  style="" class="screen_talk"  > why ? </a>';
 	tmp += '<div data-role="popup" id="why_sog" data-theme="d" style="display:inline-block;" >';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"why\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

     }

     if ((this.cat != "how" )  || (this.subcat == "")) {

        tmp += '<a href="#how_sog" data-rel="popup" data-role="" data-inline="true" data-transition="slideup"  data-theme="e"   style=""  class="screen_talk"  > how ?</a>';
 	tmp += '<div data-role="popup" id="how_sog" data-theme="d"  style="display:inline-block;" >';
 	tmp +=   '     <ul data-role="listview" data-inset="true" style="min-width:210px;" data-theme="d">';
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
          ocl = "cater.set_cats(\"how\",\""+sugs[i].subcat+"\");";
          tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   '   </ul>';
 	tmp +=  '</div>';

     }

  }
 	tmp +=  '</div>';


    lbl = this.spotid;
    $('#'+lbl).html(tmp);
    $('#'+lbl).trigger("create");    
    this.showing = true;

}


categor.prototype.show_collapsers = function() {

    var tmp = "";
    var lbl = "";
    var obj = null;
    var ocl = "";
    var s = "";
    var sugs = [];

 	tmp +=  "<div data-role='collapsible-set' id='' style='' >";
 
 	tmp +=  "<div data-role='collapsible' id='' style='' >";
  	tmp +=  "<h3>who ?</h3>";
        sugs = amare.subcat_set.get_setlist("who");
  	tmp +=   ' <ul data-role="listview" style="" data-theme="d">';
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"who\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   ' </ul>';
 	tmp +=  '</div>';

 	tmp +=  "<div data-role='collapsible' id=''>";
  	tmp +=  "<h3>what ?</h3>";
        sugs = amare.subcat_set.get_setlist("what");
  	tmp +=   ' <ul data-role="listview" style="" data-theme="d">';
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"what\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   ' </ul>';
 	tmp +=  '</div>';

 	tmp +=  "<div data-role='collapsible' id=''>";
  	tmp +=  "<h3>why ?</h3>";
        sugs = amare.subcat_set.get_setlist("why");
  	tmp +=   ' <ul data-role="listview"  style="" data-theme="d">';
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"why\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   ' </ul>';
 	tmp +=  '</div>';

 	tmp +=  "<div data-role='collapsible' id='' style=''  >";
  	tmp +=  "<h3 >how ?</h3>";
        sugs = amare.subcat_set.get_setlist("how");
  	tmp +=   ' <ul data-role="listview"  style="" data-theme="d">';
        for (var i=0;i<sugs.length;i++) {
           ocl = "cater.set_cats(\"how\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<li onclick='"+ocl+"'  ><a href='#'>"+sugs[i].text+"</a></li>";
        }
   	tmp +=   ' </ul>';
 	tmp +=  '</div>';

    tmp +=  '</div>';

    lbl = this.spotid;
    $('#'+lbl).html(tmp);
    $('#'+lbl).trigger("create");    

    this.showing = true;
    this.redraw_view();
}



categor.prototype.show_nojqm = function() {

    var tmp = "";
    var lbl = "";
    var obj = null;
    var ocl = "";
    var s = "";
    var sugs = [];

    if (this.subcat != "" ) {

	lbl = 'subcat_btn';
        s  = amare.subcat_set.get_desc(this.cat,this.subcat); 
        ocl = "cater.subcat=\"\";cater.show();";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp +  this.cat + " " + s;
        tmp=tmp+"</button>";

   } else {


       if (this.shape == "all") {

        ocl = "cater.subcat=\"\";cater.set_shape(\"who\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "who?";
        tmp=tmp+"</button>";

        ocl = "cater.subcat=\"\";cater.set_shape(\"what\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "what?";
        tmp=tmp+"</button>";

        ocl = "cater.subcat=\"\";cater.set_shape(\"why\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "why?";
        tmp=tmp+"</button>";

        ocl = "cater.subcat=\"\";cater.set_shape(\"how\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "how?";
        tmp=tmp+"</button>";

       } else if (this.shape == "who") {

        ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "who?";
        tmp=tmp+"</button>";
      
        lbl = "who_sog";
 	tmp += "<label for='"+lbl+"' class='select' ></label>";
 	tmp += "<select name='"+lbl+"' id='"+lbl+"' >";
        sugs = amare.subcat_set.get_setlist("who");
        for (var i=0;i<sugs.length;i++) {
        //   ocl = this.varname + ".set_cats(\"who\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<option value='"+sugs[i].subcat+"' >"+sugs[i].text+"</option>";
        }
   	tmp +=   '</select>';
     
      } else if (this.shape == "what") {

        ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "what?";
        tmp=tmp+"</button>";
      
        lbl = "what_sog";
 	tmp += "<label for='"+lbl+"' class='select' ></label>";
 	tmp += "<select name='"+lbl+"' id='"+lbl+"' >";
        sugs = amare.subcat_set.get_setlist("what");
        for (var i=0;i<sugs.length;i++) {
        //   ocl = this.varname + ".set_cats(\"what\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<option value='"+sugs[i].subcat+"' >"+sugs[i].text+"</option>";
        }
   	tmp +=   '</select>';
     
      } else if (this.shape == "why") {

        ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "why?";
        tmp=tmp+"</button>";
      
        lbl = "why_sog";
 	tmp += "<label for='"+lbl+"' class='select' ></label>";
 	tmp += "<select name='"+lbl+"' id='"+lbl+"' >";
        sugs = amare.subcat_set.get_setlist("why");
        for (var i=0;i<sugs.length;i++) {
        //   ocl = this.varname + ".set_cats(\"why\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<option value='"+sugs[i].subcat+"' >"+sugs[i].text+"</option>";
        }
   	tmp +=   '</select>';
 
     } else if (this.shape == "how") {

        ocl = "cater.subcat=\"\";cater.set_shape(\"all\");";
        tmp=tmp+"<button id='"+lbl+"' onclick='"+ocl+"'  data-role='button' style='vertical-align:top;'   >";
	tmp = tmp + "how?";
        tmp=tmp+"</button>";
      
        lbl = "how_sog";
 	tmp += "<label for='"+lbl+"' class='select' ></label>";
 	tmp += "<select name='"+lbl+"' id='"+lbl+"' >";
        sugs = amare.subcat_set.get_setlist("how");
        for (var i=0;i<sugs.length;i++) {
        //   ocl = this.varname + ".set_cats(\"how\",\""+sugs[i].subcat+"\");";
           tmp = tmp +"<option value='"+sugs[i].subcat+"' >"+sugs[i].text+"</option>";
        }
   	tmp +=   '</select>';
 
     }
   }

    lbl = this.spotid;
    $('#'+lbl).html(tmp);
     if (this.shape == "who") {
       $('#who_sog').on("change",function(event) {
         var $this = $(this);
         var scat = $this.val();
         cater.set_cats("who",scat);
       });
     }
     if (this.shape == "what") {
       $('#what_sog').on("change",function(event) {
         var $this = $(this);
         var scat = $this.val();
         cater.set_cats("what",scat);
       });
     }
 
     if (this.shape == "why") {
       $('#why_sog').on("change",function(event) {
         var $this = $(this);
         var scat = $this.val();
         cater.set_cats("why",scat);
       });
     }
 
     if (this.shape == "how") {
       $('#how_sog').on("change",function(event) {
         var $this = $(this);
         var scat = $this.val();
         cater.set_cats("how",scat);
       });
     }
 
     this.showing = true;
     this.redraw_view();
}




categor.prototype.redraw_view = function(pchunk) {

//alert("here");

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
          this.subcat=tsubcat;
      }

       if (jqm_off == false) {
            var s = this.cat + "_sog"; 
            $('#'+s).popup();    
            $('#'+s).popup("close");    
        //  $('#'+s).popup("refresh"); 
       } 
       this.show();
       this.redraw_view(); 
}


categor.prototype.change = function () {
    daviewer.randomize_rungs();

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

      ocl = 'diego.toggle_botshape(\"browse\");';
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



