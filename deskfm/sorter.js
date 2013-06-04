

function sorter (pspotid) { 

   this.spotid = pspotid;
   this.showing = false;
}


sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   
   lbl = 'unsorted_btn';
   ocl = "daviewer.load_unsorted_list();";
   ocl = ocl + "daviewer.draw_screen();";
   omo = "markyd(\""+lbl+"\");";
   omt = "unmarkyd(\""+lbl+"\");";
   cls = "spotd_off";
   tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  class='"+cls+"' onmouseover='"+omo+"' onmouseout='"+omt+"' >";
   tmp = tmp + "unsorted";
   tmp = tmp + "</span>";

   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
   } 

   lbl = this.spotid + "_btn";
   pobj = document.getElementById(lbl);
   if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_on";
       } else {
         pobj.setAttribute("class","spotd_on");
       }
   }

}


sorter.prototype.change = function() {

}


sorter.prototype.hide = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = "";
   var cls="";

   lbl = this.spotid;

   pobj = document.getElementById(lbl);
   if (pobj != null) {
       pobj.innerHTML=tmpstr; 
       this.showing = false;
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


sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



