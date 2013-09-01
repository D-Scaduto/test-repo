

poster.prototype.draw_pic = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var wd ="75";
   var ps="";
   var cls = "";

      ps = this.picurl;
      if (ps != "") {

	  cls = "piclip";
	  if (is_mobile == true) {
         	  cls = "picmobile";
	  }
          if (this.piczoom == true)   {
              cls = "piczoom";
          }
	  ocl = this.varname + ".toggle_piczoom();";
          tmp=tmp + "<img src='"+ps+"' onclick='"+ocl+"' class='"+cls+"'  >";

      } else {
          if (this.shape == "") {
		ocl = this.varname+".set_shape(\"getpic\");";
                tmp = tmp + "<button  onclick='"+ocl+"' >";  
       		tmp = tmp + "<img src='deskfm/images/icons/camera.png' height='20px' >";
	        tmp = tmp + "</button>";
	   }
      }

      lbl = this.rungster + '_pic_spot';
      if (document.getElementById(lbl) != null) {
        document.getElementById(lbl).innerHTML=tmp;
      }
}


poster.prototype.get_pic = function() {
   var tmp="";
   var pobj=null;
   var lbl = "";
   var wd ="75";
   var ps="";
   var cls = "";
   var ocl = "";

     tmp = "";
     ps = this.picurl;

     cls = "piclip";
     if (is_mobile == true) {
         cls = "picmobile";
     }
     if (this.piczoom == true)   {
         cls = "piczoom";
     }
     ocl = this.varname + ".toggle_piczoom();";

     if ( (ps != "") && (ps != undefined)) {
          tmp=tmp + "<img src='"+ps+"'  onclick='"+ocl+"' class='"+cls+"'  >";
     } else {
           tmp = tmp + "<img src='deskfm/images/icons/camera.png' onclick='"+ocl+"'  class='"+cls+"' >";
     }

      lbl = this.rungster + '_pic_spot';
      if (document.getElementById(lbl) != null) {
        document.getElementById(lbl).innerHTML=tmp;
      }

        tmp = "";
        lbl = this.rungster + "_upic_frame_name";
        tmp = tmp + "<form id='"+this.spotid+"_upload_form' name='"+this.spotid+"_upload_form_name' method='post' enctype='multipart/form-data' action='uploader.php' target='"+lbl+"' style='display:inline;' >";
        tmp = tmp + "<input name='it' id='it' size='1' type='file' onChange='document."+this.spotid+"_upload_form_name.submit();"+this.varname+".pic_progress();'  >";
        tmp = tmp + "</form>";   

        lbl = this.rungster + '_getpic';
        if (document.getElementById(lbl) != null) {  
          document.getElementById(lbl).innerHTML=tmp;
        }

}


 poster.prototype.get_newpic = function() {
   var doctmp;
   var lbl = "";

   lbl = this.rungster + "_upic_frame";
   if (document.getElementById(lbl) != null) {

      doctmp = document.getElementById(lbl).contentWindow.document;

      if (doctmp.getElementById('tmp_extra') != null) {
        this.picurl = doctmp.getElementById('tmp_extra').innerHTML;

        this.draw_pic();
        this.changed = true;
	this.pic_changed = true;
        this.change_btns();
     }
   }
}



poster.prototype.pic_progress = function() {

  var  tspot = this.rung;
    var lbl ="";
    lbl = this.spotid;

    if (tspot != undefined) {
      lbl = lbl+'_'+tspot;
    }
      lbl = lbl +'_pic_spot';

     var tmpstr="";

     tmpstr=tmpstr + "<img src='deskfm/images/random/loading-go.gif' width='100px' >"; 

     var pobj = document.getElementById(lbl);
   if (pobj != null) {
         pobj.innerHTML=tmpstr; 
   }

}



poster.prototype.toggle_getpic = function() {

    if (this.shape != "getpic") {
       this.shape = "getpic";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}


 poster.prototype.poke_pic = function() {

   var tmp="";
   var lbl =  "";
   var pobj = null;

   lbl = "it";

   pobj = document.getElementById(lbl);
   if (pobj != null) {
      pobj.click();
   }
}




poster.prototype.toggle_piczoom = function() {
     if (this.piczoom == true) {
       this.piczoom = false;
     } else {
       this.piczoom = true;
     }
     this.redraw_rung();
}


poster.prototype.set_piczoom = function(tbool) {
     if (tbool != undefined) {
       this.pizoom = tbool;
     }
     this.redraw_rung();
}




