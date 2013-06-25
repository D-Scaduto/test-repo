

poster.prototype.draw_pic = function() {

   var tspot = this.rung;
   var tmp="";
   var pobj=null;
   var lbl = "";
   var wd ="75";
   var ps="";
   
   var cls="";
   var ocl = "";

      ps = this.picurl;
      if (ps != "") {

	  cls = "piclip";
	  if (is_mobile == true) {
         	  cls = "picmobile";
	  }
          if ((this.piczoom == true) || (daviewer.zoom == true))  {
              cls = "piczoom";
          }
          tmp=tmp + "<img src='"+ps+"'  class='"+cls+"'  >";

      } else {

	   /*
           if (this.parvar == "nicky") {
                 ocl = this.varname + ".set_shape(\"getpic\");";
		 lbl = this.rungster + "_getpicbtn";
		 cls = "spotd_off";
                 tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' class='spotd_off' >";  
                 tmp = tmp + "share a picture"
                 tmp = tmp + "</span>";
	   }
	   */

      }

      lbl = this.rungster + '_pic_spot';
      if (document.getElementById(lbl) != null) {
        document.getElementById(lbl).innerHTML=tmp;
      }
}


poster.prototype.get_pic = function() {
   var tspot = this.rung;
   var tmp="";
   var pobj=null;
   var lbl = "";
   var wd ="75";
   var ps="";

     ps = this.picurl;
      if (ps != "") {

	  cls = "piclip";
	  if (is_mobile == true) {
         	  cls = "picmobile";
	  }
          if ((this.piczoom == true) || (daviewer.zoom == true))  {
              cls = "piczoom";
          }
          tmp=tmp + "<img src='"+ps+"'  class='"+cls+"'  >";

      } else {

           if (this.parvar == "nicky") {
		 tmp = tmp + "<span class='spotd_off' >";
                 tmp = tmp + "upload a picture";
		 tmp = tmp + "</span>";
	   }

      }

      lbl = this.rungster + '_pic_spot';
      if (document.getElementById(lbl) != null) {
        document.getElementById(lbl).innerHTML=tmp;
      }

        tmp = "";
        lbl = this.rungster + "_upic_frame_name";

        tmp = tmp + "<form id='"+this.spotid+"_upload_form' name='"+this.spotid+"_upload_form_name' method='post' enctype='multipart/form-data' action='pics/uploader.php' target='"+lbl+"' style='display:inline;' >";
        tmp = tmp + "<input name='it' id='it' size='1' type='file' onChange='document."+this.spotid+"_upload_form_name.submit();"+this.varname+".pic_progress();'  >";
        tmp = tmp + "</form>";   
        lbl = this.rungster + '_getpic';
        if (document.getElementById(lbl) != null) {  
          document.getElementById(lbl).innerHTML=tmp;
        }
}


 poster.prototype.get_newpic = function() {

   var tspot = this.rung;
   var doctmp;
   var tmpstr="";
   var tsrc = "";
   var tmpfile="";
   var picstr="";
   var lbl = "";


   lbl= this.spotid ;
   lbl = lbl + "_" + tspot + "_upic_frame";
   if (document.getElementById(lbl) != null) {

      doctmp = document.getElementById(lbl).contentWindow.document;
      if (doctmp.getElementById('tmp_extra') != null) {
        this.picurl = doctmp.getElementById('tmp_extra').innerHTML;
      }


      if (doctmp.getElementById('tmp_pic') != null) {
 
        tsrc = doctmp.getElementById('tmp_pic').src;

        this.picurl = tsrc;
        var sobj = "webitlist["+this.dadex+"].picurl = '" + this.picurl + "'";
        eval(sobj);

        this.draw_pic();
        this.changed = true;
	this.pic_changed = true;
        this.change_btns();
     }
   }
}


 poster.prototype.set_pic = function() {

   var tspot = this.rung;

   if ((tspot != undefined) && (tspot != null)) {
     var st = this.parvar+".darungs["+tspot+"].shape";
     var sh = eval (st);
   }

     var tmp="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_pic_spot';

    if (document.getElementById(lbl) != null) {
        document.getElementById(lbl).innerHTML=tmp;
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
       this.shape = "pic";
     }
     this.redraw_rung();
}


poster.prototype.set_piczoom = function(tbool) {
     if (tbool != undefined) {
       this.pizoom = tbool;
     }
     this.redraw_rung();
}




