

poster.prototype.draw_embed = function() {

  var tspot = this.rung; 
  var tmp = "";
  var tlink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";

   if ((this.embedurl != "") && (this.embedurl != undefined)) { 

        cls = 'spotd_off';
        ocl =  ocl + this.varname+".toggle_embed();";
        tmp = tmp + "<span class='"+cls+"' onclick='"+ocl+"' >";  
        tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
        tmp = tmp + "</span>";

       lbl = this.rungster + '_embed_btn';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }
 
       tmp = "";
       if (this.embed_show == true ) {
           tmp = tmp + " <div style='width:250px;margin:0 auto;' > ";
           tmp = tmp + "<iframe src='"+this.embedurl+"' style='width:250px;' ";
           tmp = tmp + " scrolling='no'  width='250' height='200' > ";
           tmp = tmp + " </iframe> ";
           tmp = tmp + " </div> ";
         }

       lbl = this.rungster + '_embed_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }

  
   } else {

       if (this.parvar == "nicky") {

         if (this.link_embed == true ) {
           tlink = this.preseter.provider.preset_embed(this.preset);
           tmp = tmp + " <div style='width:250px;margin:0 auto;' > ";
           tmp = tmp + "<iframe src='"+tlink+"' style='width:250px;' ";
           tmp = tmp + " scrolling='no'  width='250' height='200' > ";
           tmp = tmp + " </iframe> ";
           tmp = tmp + " </div> ";
         }

       }

       lbl = this.rungster + '_embed_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }
  }
   
}



poster.prototype.get_embed = function() {
     var tspot = this.rung; 
     var tmpstr="";
     var tlink = "";
     var ocl="";
     var ps = "";
     var pobj=null;
     var lbl = "";

       if ((this.linkurl == undefined) || (this.linkurl == "")) {      
         if (this.parvar == "nicky") {
            tlink = this.preseter.provider.preset_embed(this.preset);
         }
       } else {
           tlink = this.embedurl;
       }

         tmpstr = tmpstr + " <div> ";
         lbl = this.spotid+"_"+tspot+"_embed_addr";
         ocl = this.varname + ".update_embed();";
         tmpstr = tmpstr + "<textarea id='"+lbl+"' style='width:250px;height:50px;' onkeyup='"+ocl+"'  >";    
         tmpstr = tmpstr + tlink;
         tmpstr = tmpstr + " </textarea> ";
         tmpstr = tmpstr + " </div> ";

         if (this.embed_show == true ) {
           tmpstr = tmpstr + " <div style='width:250px;margin:0 auto;' > ";
           tmpstr = tmpstr + " <iframe src='"+tlink+"' style='width:250px;margin:0 auto;' ";
           tmpstr = tmpstr + " scrolling='no'  width='250' height='200' > ";
           tmpstr = tmpstr + " </iframe> ";
           tmpstr = tmpstr + " </div> ";
         }

       lbl = this.rungster + '_embed_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmpstr;
       }
      
}


poster.prototype.toggle_getembed = function() {

    if (this.shape != "getembed") {
       this.shape = "getembed";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.toggle_embed = function  () {

     if (this.embed_show == true) {
        this.embed_show = false;
     } else {
         this.embed_show = true;
     }

     this.work_btns();
     this.draw_embed();

}



poster.prototype.update_embed = function() {

     var tmp="";
     var pobj=null;
     var lbl = "";
     lbl = this.rungster + '_embed_addr';
     pobj = document.getElementById(lbl);
     if (pobj != null ) {
        var tv = pobj.value;
        if ((tv != null) && (tv != undefined)) {
          this.embedurl = tv;
        }
        this.change_btns();
        pobj.focus();
     }
}






