

poster.prototype.draw_pic = function() {

   var tspot = this.rung;
   var tmp="";
   var pobj=null;
   var lbl = "";
   var wd ="75";
   var ps="";
   var sty="";
   var ocl = "";
      ps = this.picurl;
      if (ps != "") {

          if ((this.piczoom == true) || (daviewer.zoom == true))  {
              wd = "200";
              tmp=tmp + "<img src='"+ps+"'  width='"+wd+"px' style='"+sty+"'  >";
          } else {
              sty = "clip:rect(0px,100px,100px,0px);";
              tmp=tmp + "<img src='"+ps+"'  width='"+wd+"px' style='"+sty+"'  >";
          }

      } else {

          if (this.parvar == "nicky") {
              lbl= this.rungster+"_presog";
              tmp=tmp + "<span id='"+lbl+"' class='spotd_off'  >";  
              if (this.preseter != null) {
                 ocl = this.varname + ".preseter.request_suggestions();"
                 tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"'  >";  
                 tmp = tmp + this.preseter.provider.preset_pic(this.preset);
                 tmp = tmp + "</span>";
              }
              tmp = tmp + "</span>";
          }

      }

      lbl = this.spotid;
      if (tspot != undefined) {
        lbl = lbl +'_'+tspot;
      }
      lbl = lbl + '_pic_spot';
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

   this.draw_pic();

   if ((tspot != undefined) && (tspot != null)) {
        lbl = this.spotid;
        lbl = lbl +"_"+tspot+"_upic_frame_name";

        tmp = tmp + "<form id='"+this.spotid+"_upload_form' name='"+this.spotid+"_upload_form_name' method='post' enctype='multipart/form-data' action='pics/uploader.php' target='"+lbl+"' style='display:inline;' >";
        tmp = tmp + "<input name='it' id='it' size='1' type='file' onChange='document."+this.spotid+"_upload_form_name.submit();"+this.varname+".pic_progress();'  >";
        tmp = tmp + "</form>";   
        lbl = this.spotid;
        if (tspot != undefined) {
          lbl = lbl +'_'+tspot;
        }
        lbl = lbl + '_getpic';
        if (document.getElementById(lbl) != null) {  
          document.getElementById(lbl).innerHTML=tmp;
        }
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
        var sobj = "dalist["+this.dadex+"].picurl = '" + this.picurl + "'";
        eval(sobj);

        this.draw_pic();
        this.changed = true;     
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


poster.prototype.preset_pic = function(wdt) { 
    var wd=50;
    if (wdt != undefined) {
      wd = wdt;
    }
    var tmpstr = "";
    var pobj ="";
    var lbl = "";

    var s = this.parvar + ".preseto";
    var e = eval(s);
    if (e != null) {
//alert(this.preseto.preset);
       var tmpsrc = "http://www.deskfm.com/pics/vman/2d/";
       tmpsrc = tmpsrc + e.preset; 
       tmpsrc = tmpsrc + ".jpg";
//     tmpsrc = tmpsrc + "-stand.jpg";
//     var randomnumber=Math.floor(Math.random()*11);
//     tmpsrc = tmpsrc +"?"+randomnumber;
      tmpstr = "<img src='"+tmpsrc+"' width='"+wd+"px' >";
    }
    return  tmpstr;
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




/* ****

   if (this.dalist[tdex].source == "youtube") { 

    imgstr=imgstr+"<iframe title='YouTube video player' class='youtube-player' type='text/html' ";
       imgstr=imgstr+" width='"+wd+"' ";
      imgstr=imgstr+" src='http://"+this.dalist[tdex].linkurl+"' ";
      imgstr=imgstr+" frameborder='0'></iframe>";

    } 

****  */


