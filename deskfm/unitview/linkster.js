

poster.prototype.draw_link = function() {

  var tspot = this.rung; 
  var tmp = "";
  var tlink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";

   if ((this.linkurl != "") && (this.linkurl != undefined)) { 
       tmp = tmp + "<a href='"+this.linkurl+"' target='_blank' > "; 
       tmp = tmp + "link" 
       tmp = tmp + " </a> ";

       lbl = this.rungster + '_link_btn';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }

   } else {
	/*
        if (this.parvar == "nicky") {
                 ocl = this.varname + ".set_shape(\"getlink\");";
		 lbl = this.rungster + "_getlinkbtn";
		 cls = "spotd_off";
                 tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' class='spotd_off' >";  
                 tmp = tmp + "share a link"
                 tmp = tmp + "</span>";

                 lbl = this.rungster + '_link_spot';
                 pobj = document.getElementById(lbl);
                 if ( pobj != null) {
                   pobj.innerHTML = tmp;
                 }
	}
	*/
   }
     
}



poster.prototype.get_link = function() {
     var tspot = this.rung; 
     var tmpstr="";
     var tlink = "";
     var ocl="";
     var ps = "";
     var pobj=null;
     var lbl = "";

        if (this.parvar == "nicky") {
		 lbl = this.rungster + "_getlinkbtn";
		 cls = "spotd_off";
                 tmpstr = tmpstr + "<div id='"+lbl+"' onclick='"+ocl+"' class='spotd_off' >";  
                 tmpstr = tmpstr + "post a link";
                 tmpstr = tmpstr + "</div>";
        }

       if ((this.linkurl != undefined) || (this.linkurl != "")) {      
           tlink = this.linkurl;

         lbl = this.spotid+"_"+tspot+"_link_addr"; 
         ocl = this.varname + ".update_link();";
         tmpstr = tmpstr + "<textarea id='"+lbl+"' style='width:250px;height:50px;' onkeyup='"+ocl+"'  >";    
         tmpstr = tmpstr + tlink;
         tmpstr = tmpstr + " </textarea> ";

       } else {

  
       }

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




