
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
   var sty ="";
   if (jqm_off == true) {
     sty='background-color:white;'
   }
     ocl = "diego.set_shape(\"\");";

   if (this.logo_shape == "deskfm") {
            cls = 'logo_short';

            lbl = this.spotid + '_logo_spot1';
	    ocl = ocl + this.varname + ".set_logoshape(\"freedom\");";
             tmp=tmp+"<span onclick='"+ocl+"' class='"+cls+"' style='"+sty+"' >";
            tmp = tmp + "DeskFM";
            tmp=tmp+"</span>";
   } 
   if (this.logo_shape == "freedom") { 
            cls = 'logo_long';
            lbl = this.spotid + '_logo_spot1';
	    ocl = ocl + this.varname + ".set_logoshape(\"deskfm\");";
             tmp=tmp+"<span onclick='"+ocl+"' class='"+cls+"' style='"+sty+"' >";
            tmp = tmp + "FreedoM";
            tmp=tmp+"</span>";
   } 

   lbl = this.spotid;
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp;
         sal.draw_vman();
  }
}



logoman.prototype.draw_vman = function () {

   var lbl = "";
   var ocl="";   
   var tmp = "";
   var tmpsrc = "";
   var vm = "";

   var dt = new Date();
   this.flip = this.flip + 1;
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
             this.flip = 0;
          }  else  {
            vm="stand";
            this.flip = 0;
          } 
     tmpsrc = "deskfm/images/daoman/cbman-"+vm+".png";

      $('#vman_btn').attr('src',tmpsrc);
     $('#vman_btn').trigger("create");

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
	this.show();
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



