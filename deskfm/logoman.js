
function logoman (pspot) {

  this.spotid = pspot;
  this.varname= "sal";
  this.shape = "full";
  this.logo_shape="deskfm";

  this.preset = "sitonly";
  this.preseter = new suggester("logo_sog",new preset_provider(), this.varname +".preseter",this.varname);

  this.show3d = false;
  if (is_mobile == true) {
      this.show3d = false;
  }

  this.zoom = true;
  this.flip =0;
}


logoman.prototype.show = function () {

   var lbl = "";
   var tmp = "";
   var ocl = "";
   var cls = "";

       lbl = "logo_sog";
       tmp = tmp + "<span id='"+lbl+"' style='float:left;padding:4px;' >";
       tmp = tmp + "</span>";

       lbl = "logo_spot";
       tmp = tmp + "<span id='"+lbl+"' style='background-color:white;' >";
       tmp = tmp + "</span>";

       lbl = "logo_btn";
       ocl = "sal.change_shape();";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' style='float:right;' >";
       tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
       tmp = tmp + "</span>";

   
       lbl = "logo_story";
       tmp = tmp + "<span id='"+lbl+"' style='background-color:white;' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<div class='elem' >";

  if (this.shape == "full") {
       tmp = tmp + "<span class='endlabel' >";
       lbl = "logo_3dtgl";
       ocl = "sal.toggle_3dview();";
       cls = "spotd_off";
       moin = "";
       mout = "";
       tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+moin+"' onmouseout='"+mout+"' class='"+cls+"' style='' >";
       tmp = tmp + " 3D ";
       tmp = tmp + "</span>";

       tmp = tmp + "</span>";
   
       tmp = tmp + "<p>";
       tmp = tmp + "<div id='logo_3dview' class='' style='width:300px;' >";
       tmp = tmp + "</div>";
       tmp = tmp + "</p>";
   }
    tmp = tmp + "</div>";

   lbl = this.spotid;
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
	 this.draw_logo(35);

	 if (this.shape == "full") {
	   this.draw_preman();
      	   this.draw_vman();
           this.draw_story();
	   if (this.show3d == true) {
             this.draw_3dview();
	   }
	 }
   }
}

logoman.prototype.set_preset = function (tpreset) {
   this.preset = tpreset;
   this.draw_preman();
   this.draw_story();
	 if (this.show3d == true) {
           this.draw_3dview();
	 }
}


logoman.prototype.change_shape = function () {
     if (this.shape == "full") {
        this.shape = "shrunk";
     } else {
	this.shape = "full";
     }
     this.show();
}

logoman.prototype.toggle_zoom = function () {

     if (this.zoom == true) {
        this.zoom = false;
     } else {
	this.zoom = true;
     }
     this.draw_3dview();
}


logoman.prototype.change_preset = function () {
   this.preset = this.preseter.provider.next_preset(this.preset);
   this.draw_preman();
   this.draw_story();
	 if (this.show3d == true) {
           this.draw_3dview();
	 }
}

logoman.prototype.toggle_3dview = function () {

     if (this.show3d == true) {
          this.hide_3dview();
     } else {
	  this.draw_3dview();
     }
}

logoman.prototype.draw_share = function () {

     var lbl = "";
     var tmp = "";
     var twparams='?count=none';
     twparams = twparams + "&text="+escape(this.story)
     tmp=tmp +"<a href='https://twitter.com.share"+twparams+"' class='twitter-share-button' data-lang='en' > </a>";

     lbl = "logo_share";
     if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
               if (twttr != undefined) {
                 if (twttr.widgets != undefined) {
                   twttr.widgets.load();
                 }
               }
     }

}


logoman.prototype.draw_preman = function () {

     var lbl = "";
     var tmp = "";
              if (this.preseter != null) {
                 ocl = this.varname + ".preseter.request_suggestions();"
                 tmp = tmp + "<span id='' onclick='"+ocl+"'  >";  
                 tmp = tmp + this.preseter.provider.preset_pic(this.preset);
                 tmp = tmp + "</span>";
              }

     lbl = "logo_sog";
     if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
     }

}


logoman.prototype.draw_story = function() {

  var tmp = "";
  var tlink = "";
  var ocl="";
  var pobj=null;
  var lbl = "";

       tmp = "";
       tmp = tmp + " <div class='spotd_off' style='width:250px;margin:0 auto;' > ";
       tmp = tmp +  this.preseter.provider.preset_story(this.preset);

       tmp = tmp + " </div> ";

       lbl = 'logo_story';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }
}


logoman.prototype.draw_3dview = function() {

  var tmp = "";
  var tlink = "";
  var ocl="";
  var pobj=null;
  var lbl = "";
  var wd = '250';	 
  var ht = '200';

  if (this.zoom == true) {
      wd = '500';
      ht = '300';
  }

       tmp = "";
           tlink = this.preseter.provider.preset_embed(this.preset,this.zoom);
           tmp = tmp + " <div style='width:"+wd+"px;margin:0 auto;' > ";
           tmp = tmp + "<iframe src='"+tlink+"' style='width:"+wd+"px;' ";
           tmp = tmp + " scrolling='no'  width='"+wd+"' height='"+ht+"' > ";
           tmp = tmp + " </iframe> ";
           tmp = tmp + " </div> ";

       lbl = 'logo_3dview';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
	 this.show3d = true;
       }
   
}


logoman.prototype.hide_3dview = function() {

  var tmp = "";
  var tlink = "";
  var ocl="";
  var pobj=null;
  var lbl = "";

       tmp = "";

       lbl = 'logo_3dview';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
	 this.show3d = false
       }
   
}

logoman.prototype.change_vman = function () {

   this.flip = this.flip + 1;
   if (this.flip > 9 ) { 
        this.flip = 0;
    } 
   this.draw_vman();
}

logoman.prototype.draw_vman = function () {

   var lbl = "";
   
   var tmpstr = "";
   var tmpsrc = "";
   var vm = "";
   var dt = new Date();

//   this.flip = this.flip + 1;

          if (this.flip==0) {
            vm="stand-r";
          } else if (this.flip==1) {
            vm="sit-r";
          } else if (this.flip==2) {
            vm="sit-l";
          } else if (this.flip==3) {
            vm="stand-l";
          } else if (this.flip==4) {
            vm="stand-r";
          } else if (this.flip==5) {
            vm="sit-r";
          }  else if (this.flip==6) {
            vm="sit-l";
          }  else if (this.flip==7) {
            vm="stand-l";
          }  else if (this.flip==8) {
            vm="stand-r";
          }  else if (this.flip==9) {
            vm="sit-r";
          }  else  {
            vm="stand";
            this.flip = 0;
          } 
     tmpsrc = "deskfm/images/daoman/cbman-"+vm+".png";
     var ht = '';
     ht = '40px';
     tmpstr="<img src='"+tmpsrc+"' onClick='' height='"+ht+"' >";

     lbl = "logo_lbtn";
     if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
     }
}


logoman.prototype.waiting = function () {

   var lbl = "";

   var tmpstr = "";
   var tmpsrc = "";
   var dt = new Date();

   tmpsrc = "deskfm/images/random/loading-go.gif";
   tmpstr="<img src='"+tmpsrc+"' height='40px' onClick='' >";

   lbl = this.spotid + "_lbtn";
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
   }
}

logoman.prototype.set_logoshape = function (psz) {
	this.logo_shape = psz;
	this.draw_logo();
}

logoman.prototype.draw_logo = function (psz) {

   var sz = "35";
   if (psz != undefined) {
    sz= psz;
   }
   var tmpstr = "";
   var lbl = "";
   var tmpsrc = "";
   var vm = "";
   var dt = new Date();
   var ocl = "";

   if (this.logo_shape == "deskfm") {
            lbl = this.spotid + '_logo_lspot';
	    ocl = this.varname + ".set_logoshape(\"freedom\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"D");
            tmpstr=tmpstr+"</span>";
           
	    lbl = this.spotid + '_logo_lspot1';
    	    ocl = this.varname + ".change_preset();";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"esk");
            tmpstr=tmpstr+"</span>";

            lbl = this.spotid + '_logo_rspot';
	    ocl = this.varname + ".set_logoshape(\"freedom\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"FM");
            tmpstr=tmpstr+"</span>";

	    lbl = this.spotid + '_logo_rspot22';
            ocl = this.varname + ".set_logoshape(\"freedom\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,".com");
            tmpstr=tmpstr+"</span>";
   } 
   if (this.logo_shape == "freedom") {
            lbl = this.spotid + '_logo_lspot';
	    ocl = this.varname + ".set_logoshape(\"deskfm\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"D");
            tmpstr=tmpstr+"</span>";
            
	    lbl = this.spotid + '_logo_lspot1';
    	    ocl = this.varname + ".change_preset();";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"esk");
            tmpstr=tmpstr+"</span>"; 

	    lbl = this.spotid + '_logo_rspot1';
	    ocl = this.varname + ".set_logoshape(\"deskfm\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"F");
            tmpstr=tmpstr+"</span>";

            lbl = this.spotid + '_logo_rspot2';
    	    ocl = this.varname + ".change_preset();";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"reedo");
            tmpstr=tmpstr+"</span>";

            lbl = this.spotid + '_logo_rspot3';
	    ocl = this.varname + ".set_logoshape(\"deskfm\");";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"M");
            tmpstr=tmpstr+"</span>";
   } 
   if (this.logo_shape == "standing") {
            lbl = this.spotid + '_logo_lspot';
	    ocl = this.varname + ".change_preset();";
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"Standing");
            tmpstr=tmpstr+"</span>";

            lbl = this.spotid + '_logo_rspot';
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='"+ocl+"' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"Desks");
            tmpstr=tmpstr+"</span>";
   } 

   lbl = "logo_spot";
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
   }

}



