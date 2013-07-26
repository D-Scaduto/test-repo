

poster.prototype.draw_link = function() {

  var tspot = this.rung; 
  var tmp = "";
  var tlink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";

  if ((this.shape == "getlink") || (this.shape == "")) {
    if (this.btnson == true) {	   
                 ocl = this.varname + ".set_shape(\"getlink\");";
          	 tmp = tmp + "<button  onclick='"+ocl+"' >";  
	         tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
	         tmp = tmp + "</button>";
      }

   if ((this.linkurl != "") && (this.linkurl != undefined)) {

       tmp = tmp + "<a href='"+this.linkurl+"' target='_blank' > "; 
       tmp = tmp + "link" 
       tmp = tmp + " </a> ";
	
   }

     lbl = this.rungster + '_link_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     } 
   }
}



poster.prototype.get_link = function() {

     var tmpstr="";
     var tlink = "";
     var ocl="";
     var ps = "";
     var pobj=null;
     var lbl = "";

	 tmpstr = "";
       if ((this.linkurl != undefined) || (this.linkurl != "")) {      
         tlink = this.linkurl;

       } else {

       }

	 lbl = this.rungster + "_link_addr"; 
         ocl = this.varname + ".update_link();";
         tmpstr = tmpstr + "<textarea id='"+lbl+"' style='width:250px;height:50px;' onkeyup='"+ocl+"'  >";    
         tmpstr = tmpstr + tlink;
         tmpstr = tmpstr + " </textarea> ";

       lbl = this.rungster + '_link_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmpstr;
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




