

poster.prototype.draw_link = function() {

  var tspot = this.rung; 
  var tmp = "";
  var tlink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";
  var cls = "";

   if ((this.linkurl == "") || (this.linkurl == undefined)) {
         if (this.editing == true) {
            ocl = this.varname + ".set_shape(\"getlink\");";
            ps = "deskfm/images/icons/link-black.jpg";
            tmp += "<img src='"+ps+"' onclick='"+ocl+"' width='30px'  class='' >"; 
         } 
   } else {

       if ((this.editing == true) || (buddah == true)) {
 
            ocl = this.varname + ".set_shape(\"getlink\");";
            ps = "deskfm/images/icons/link-black.jpg";
            tmp += "<img src='"+ps+"' onclick='"+ocl+"' width='30px'  class='' >"; 
 
       } else {
          tmp = tmp + "<a href='"+this.linkurl+"' target='_blank' > "; 
//           tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' width='30px' >";
//           tmp = tmp + this.linkurl; 
            tmp = tmp + "link"; 
          tmp = tmp + " </a> ";
       }
   }

     lbl = this.rungster + '_link_btn';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     } 
   
}



poster.prototype.get_link = function() {

     var tmp="";
     var tlink = "";
     var ocl="";
     var ps = "";
     var pobj=null;
     var lbl = "";

       if ((this.linkurl != undefined) && (this.linkurl != "")) {      

          tmp = tmp + "<a href='"+this.linkurl+"' target='_blank' > "; 
           tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' width='30px' >";
//           tmp = tmp + this.linkurl; 
          tmp = tmp + " </a> ";

          lbl = this.rungster + '_link_btn';
          pobj = document.getElementById(lbl);
          if ( pobj != null) {
             pobj.innerHTML = tmp;
          } 
 
         tlink = this.linkurl;

       } else {

         tlink = "";
       }

         tmp = ""; 
	 lbl = this.rungster + "_link_addr"; 
         ocl = this.varname + ".update_link();";
         tmp = tmp + "<input id='"+lbl+"' data-clear-btn='true' name='"+lbl+"' type='text' value='"+tlink+"' style='' onkeyup='"+ocl+"'  >";    

       lbl = this.rungster + '_link_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
 	 var ta = this.rungster + "_link_addr"; 
         $('#'+ta).textinput();
       }
       
}



poster.prototype.update_link = function() {

     var tmp="";
     var pobj=null;
     var lbl = "";
     lbl = this.rungster + '_link_addr';
     pobj = document.getElementById(lbl);
     if (pobj != null ) {
        var tv = pobj.value;
       if ((tv != null) && (tv != undefined)) {
           this.linkurl = tv;
           this.changed = true;
	   this.link_changed = true;
           this.change_btns();
        }
        pobj.focus();
     }
}



poster.prototype.toggle_getlink = function() {

    if (this.shape != "getlink") {
       this.shape = "getlink";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}





function link_shrink (ptext) {
   if ((ptext == undefined ) || (ptext == null)) {
      return;
   } 
   var lbl = "";
   var  tlink = ptext ;
       if (tlink.substr(0,7) == "http://" ) {
         tlink=tlink.substr(7);
       }
       if (tlink.substr(0,3) == "www" ) {
         tlink=tlink.substr(3);
       }
   if (tlink.length > 15) {
       lbl = tlink.slice(0,15) + "...";
   } else {
       lbl = tlink;
   }
   return lbl;
}




