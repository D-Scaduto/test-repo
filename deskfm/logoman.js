
function logoman (pspot) {

  this.spotid = pspot + "_spot";
  this.varname= "sal";
  this.shape = "shrunk";    //shrunk,full
  this.logo_shape="deskfm";
  this.flip =0;
}


logoman.prototype.show = function () {

   var lbl = "";
   var tmp = "";
   var ocl = "";
   var cls = "";
 
   lbl = "logo_title";
   tmp = tmp + "<span id='"+lbl+"' style='vertical-align:top;' >";
   tmp = tmp + "</span>";

   lbl = this.spotid;
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
	 this.draw_logo(35);
   }
}



logoman.prototype.draw_vman = function () {

   var lbl = "";
   
   var tmp = "";
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
     ht = '30px';
     tmp="<img src='"+tmpsrc+"' onClick='' class='menu_btn' >";

        tmp = "<img src='deskfm/images/icons/dot_swirl.png'  class='menu_btn'  >";
 
     lbl = "zoom_btn";
     if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
     }
}


logoman.prototype.change_vman = function () {

   this.flip = this.flip + 1;
   if (this.flip > 9 ) { 
        this.flip = 0;
    } 

    var cl = this.varname + ".draw_vman();";
    var tmr = setTimeout(cl,250);

}


logoman.prototype.waiting = function () {
   var lbl = "";
   var tmpstr = "";
   var tmpsrc = "";

   tmpsrc = "deskfm/images/random/loading-go.gif";

   tmpstr="<img src='"+tmpsrc+"' class='menu_btn' >";

   lbl =  "zoom_btn";
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
   var ocl = "";

   if (this.logo_shape == "deskfm") {
            lbl = this.spotid + '_logo_spot1';
	    ocl = this.varname + ".set_logoshape(\"freedom\");";
            tmpstr=tmpstr+"<button id='"+lbl+"' onclick='"+ocl+"' data-role='button' style='vertical-align:top;'  >";
            tmpstr = tmpstr + "DeskFM";
            tmpstr=tmpstr+"</button>";
   } 
   if (this.logo_shape == "freedom") {
            lbl = this.spotid + '_logo_spot1';
	    ocl = this.varname + ".set_logoshape(\"deskfm\");";
            tmpstr=tmpstr+"<button id='"+lbl+"' onclick='"+ocl+"' data-role='button' style='vertical-align:top;'  >";
            tmpstr = tmpstr + "Desk FreedoM";
            tmpstr=tmpstr+"</button>";
   } 

   lbl = "logo_title";
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
	 $('#'+this.spotid + '_logo_spot1').button();
   }

}



logoman.prototype.hide = function () {

   var lbl = "";
   var tmp = "";
 
   lbl = this.spotid;
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         this.showing = false;
   }
}



