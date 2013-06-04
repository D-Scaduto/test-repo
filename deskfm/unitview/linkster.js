

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

       if ((this.linkurl == undefined) || (this.linkurl == "")) {      
         if (this.parvar == "nicky") {
           tlink = this.preseter.provider.preset_link(this.preset);
         }
       } else {
           tlink = this.linkurl;
       }

         lbl = this.spotid+"_"+tspot+"_link_addr"; 
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


poster.prototype.toggle_getlink = function() {

    if (this.shape != "getlink") {
       this.shape = "getlink";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
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
        }
        this.change_btns();
        pobj.focus();
     }
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




