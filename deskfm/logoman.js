
function logoman (pspot) {

  this.spotid = pspot;
  this.flip =0;
  this.logo_shape="standing";
}


logoman.prototype.change_vman = function () {

   this.flip = this.flip + 1;
   if (this.flip > 9 ) { 
        this.flip = 0;
    } 
   this.draw_vman();
}

logoman.prototype.draw_vman = function (papnd) {

   var lbl = "";
   lbl = this.spotid;

   if (papnd != undefined) {
      lbl = lbl + papnd;
   }
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
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
   }
}


logoman.prototype.waiting = function () {

   var lbl = "";
   lbl = this.spotid;

   var tmpstr = "";
   var tmpsrc = "";
   var dt = new Date();

   tmpsrc = "deskfm/images/random/loading-go.gif";
   tmpstr="<img src='"+tmpsrc+"' height='40px' onClick='' >";

   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
   }
}


logoman.prototype.draw_logo = function (plbl,psz) {

  var sz = "35";
  if (psz != undefined) {
    sz= psz;
  }
  var tmpstr = "";
  var lbl = "";
   var tmpsrc = "";
   var vm = "";
   var dt = new Date();


            lbl = plbl + '_logo_lspot';
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"standing");
            tmpstr=tmpstr+"</span>";

            lbl = plbl + '_logo_rspot';
            tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' style='background-color:white;'  >";
            tmpstr = tmpstr + table_word(lbl,"desks");
            tmpstr=tmpstr+"</span>";


   lbl = "logo_spot";
   if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmpstr;
   }

}



