

poster.prototype.draw_link = function() {

  var tspot = this.rung; 
  var tmp = "";
  var tlink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";

   if ((this.linkurl != "") && (this.linkurl != undefined)) { 

       tlink = link_shrink(this.linkurl);
/*
           if (tlink.substr(0,7) == "http://" ) {
             tlink=tlink.substr(7);
           }
*/
       tmp = tmp + "<a href='"+this.linkurl+"' target='_blank' > "; 
       tmp = tmp + tlink;
       tmp = tmp + " </a> ";
  
   } else {

       if (this.parvar == "nicky") {
           tmp = tmp + this.preseter.provider.preset_link(this.preset);
       }

   } 

     lbl = this.spotid;
     if (tspot != undefined) {
         lbl = lbl +'_'+tspot;
     }

     lbl = lbl + '_link_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
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

      if (this.link_shape == "link") {
         tmpstr = tmpstr + "<span class='spotd_on' onclick='"+this.varname+".toggle_linkshow();' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 
      } else {
         tmpstr = tmpstr + "<span class='spotd_off' onclick='"+this.varname+".set_linkshape(\"link\");' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 
      }

     if (this.link_shape == "embed") {
         tmpstr = tmpstr + "<span class='spotd_on' onclick='"+this.varname+".toggle_linkshow();' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 
     } else {
         tmpstr = tmpstr + "<span class='spotd_off' onclick='"+this.varname+".set_linkshape(\"embed\");' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 
     }

     lbl = this.spotid+"_"+tspot+"_link_addr";      
     tmpstr = tmpstr + "<input id='"+lbl+"' value='"+tlink+"' onclick=''  >";    

     if (this.link_shape == "embed") {
         tmpstr = tmpstr + "<span class='spotd_off' onclick='"+this.varname+".set_linksource(\"sketchup\");' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/sketchup.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 

         tmpstr = tmpstr + "<span class='spotd_off' onclick='"+this.varname+".set_linksource(\"youtube\");' >";  
         tmpstr = tmpstr + "<img src='deskfm/images/icons/youtube.jpg' height='20px' >";
         tmpstr = tmpstr + "</span>"; 
     }

     if ((this.linkurl == undefined) || (this.linkurl == "")) {      

       if (this.parvar == "nicky") {
           tmpstr = tmpstr + this.preseter.provider.preset_link(this.preset);
       }

     } else {
         tlink = this.linkurl ;
         if (tlink != "" ) {
           if (tlink.substr(0,7) == "http://" ) {
             tlink=tlink.substr(7);
           }
         }
    }

    lbl = this.spotid;
    if (tspot != undefined) {
      lbl = lbl +'_'+tspot;
      lbl = lbl + '_link_spot';
      pobj = document.getElementById(lbl);
      if ( pobj != null) {
         pobj.innerHTML = tmpstr;
      }
    }
}


poster.prototype.set_link = function() {
     var tspot = this.rung;
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_link_addr';

   if (document.getElementById(lbl) != null ) {

        var tv = document.getElementById(lbl).value;
        if ((tv != null) && (tv != undefined)) {
          this.linkurl = "http\:\/\/" + tv;
        }

        var sdex = this.parvar + ".darungs["+tspot+"].dadex";
        var dex = eval(sdex);
        sdex = this.parvar + ".dalist["+dex+"]";
        dex = eval(sdex);
        var sobj = "dalist["+dex+"].linkurl = '" + this.linkurl + "'";
        eval(sobj);
     
        this.changed = true;
        this.change_btns();
   }

    this.draw_link();
}


poster.prototype.update_link = function() {

     var tspot = this.rung;
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_link_addr';

   if (document.getElementById(lbl) != null ) {

        var tv = document.getElementById(lbl).value;
        if ((tv != null) && (tv != undefined)) {
          this.linkurl = "http://" + tv;
        }

        this.change_btns();
   }

    this.draw_link();

}


poster.prototype.reset_link = function() {
     var tspot = this.rung;
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_link_addr';

     var sdex = this.parvar + ".darungs["+tspot+"].dadex";
     var dex = eval(sdex);
     sdex = this.parvar + ".dalist["+dex+"]";
     dex = eval(sdex);
     var sreq = "dalist["+dex+"].linkurl";
     var sl = eval(sreq);
 
     this.linkurl = sl;
     this.change_btns();
     this.draw_link();
}





poster.prototype.clear_link = function() {

     var tspot = this.rung;
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_link_addr';
 
   if (document.getElementById(lbl) != null ) {
        this.linkurl = "";
        document.getElementById(lbl).value = "";
        var sdex = this.parvar + ".darungs["+tspot+"].dadex";
        var dex = eval(sdex);
        var sobj = this.parvar + ".dalist["+dex+"].linkurl = '" + this.linkurl + "'";
        eval(sobj);
        this.edit_link=true;
   }

   this.set_link();

}


poster.prototype.set_linkshape = function  (tshape) {

     if (tshape != undefined) {
        this.link_shape = tshape;
     }
     this.get_link();
}


poster.prototype.set_linksource = function  (tsource) {

     if (tsource != undefined) {
        this.link_source = tsource;
     }
     this.get_link();
}



poster.prototype.toggle_linky = function  (purl,pspot) {

  var pobj = document.getElementById(pspot);
  if (pobj != null) {
     if ((pobj.getAttribute("class") == "spot_on")||(pobj.getAttribute("class") == "spot_mark")) {
        unshow_linky(purl,pspot);
     } else {
        show_linky(purl,pspot);
     }
  } 
}


poster.prototype.set_linkshape = function (tshape) {

     if (tshape != undefined) {
        this.link_shape = tshape;
     }

     if (this.btnson == true) { 
       this.get_link();
     } else {
       this.draw_link();
     }
}

poster.prototype.toggle_linkshow = function () {

     if (this.linkshow == true) {
        this.linkshow = false;
     } else {
        this.linkshow = true;
     }

     if (this.btnson == true) { 
       this.get_link();
     } else {
       this.draw_link();
     }
}



poster.prototype.toggle_linky = function (purl,pspot) {

  var pobj = document.getElementById(pspot);
  if (pobj != null) {
     if ((pobj.getAttribute("class") == "spot_on")||(pobj.getAttribute("class") == "spot_mark")) {
        unshow_linky(purl,pspot);
     } else {
        show_linky(purl,pspot);

     }
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



function show_linky (purl,pspot) {
  var tmpstr = "";
  tmpstr=tmpstr+"<iframe src='"+purl+"' class='zoofm25' >";        
   tmpstr=tmpstr+"</iframe>";        
//   tmpstr=tmpstr+"<object data='"+turl+"' type='text/html' class='zoofm'  >";
//   tmpstr=tmpstr+"</object>";        

  var pobj = document.getElementById(pspot);
  if (pobj != null) {
     pobj.innerHTML = tmpstr;
     pobj.setAttribute("class") = "spot_on";
 }
}



function unshow_linky (purl,pspot) {
  var tmpstr = "";
  tmpstr = "link";
 
  var pobj = document.getElementById(pspot);
  if (pobj != null) {
     pobj.innerHTML = tmpstr;
      pobj.setAttribute("class") = "spot_off";
 }
}


