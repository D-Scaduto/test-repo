

function farmer (pspotid) { 

   this.spotid=pspotid;

}


farmer.prototype.check_feed = function() {

   var lbl = "";
   var tmp = "";
   var s="";
   lbl = 'feed_string';
   if (document.getElementById(lbl)!= null) {
      s = document.getElementById(lbl).value;
      tws_get(s); 
   }

}

 
farmer.prototype.show = function() {

   var lbl = "";
   var tmp = "";
   var ds = "";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "twitter";
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "<input id='feed_string' size='10' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='spotd_off' onclick='mac.check_feed();' >";
       tmp = tmp + "check";
       tmp = tmp + "</span>";

       tmp = tmp + "<span id='feed_btns'  >";
       tmp = tmp + "</span>";

   lbl =this.spotid; 
   if (document.getElementById(lbl)!= null) {
      document.getElementById(lbl).innerHTML=tmp;
   }
}



farmer.prototype.change = function() {

}


farmer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


farmer.prototype.hide = function() {
     this.showing = false;

       var tmp = "";
       var lbl = "";

   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if (pobj != null) {
     pobj.innerHTML = tmp;
   }

   lbl = this.spotid + "_btn";
   pobj = document.getElementById(lbl);
   if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_off";
       } else {
         pobj.setAttribute("class","spotd_off");
       }
   }

}


