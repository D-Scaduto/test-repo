function creator (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "adoni";
   this.showing = false;
   this.shape = "";  

   this.postman = new poster(this.spotid,0,"adoni","adoni.postman",false);
   this.listype;
}


creator.prototype.show = function() {
    var lbl = "";
    var tmpstr = "";
 
    tmpstr += "<div id='' class='box' >";
    tmpstr += "</div>";
   
    tmpstr += "<div id='create_spot_rung_0' class='box' >";
    tmpstr += "</div>";

       tmpstr=tmpstr+"<div>";
       lbl = "new_work_btns";
       tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
       tmpstr=tmpstr+"</span>";
 
       lbl = "new_change_btns";
       tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
       tmpstr=tmpstr+"</span>";
       tmpstr=tmpstr+"</div>";
 
    lbl = this.spotid;
   $('#'+lbl).html(tmpstr);
   this.showing = true;
 
   this.postman.set_ppid(-1,"unsaved");
   this.postman.redraw_rung(); 
   this.work_btns();
}

 
creator.prototype.work_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";
 
        var s = this.varname + ".postman";
 
	 ocl = s + ".toggle_getstory();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/pencil_msg.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getpic();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/camera.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getlink();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getembed();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getname();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getsort();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/sort.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getgroup();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' height='20px' >";
	 tmp = tmp + "</button>";

     lbl = 'new_work_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}



creator.prototype.change_btns = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var ts = "";

      var s = this.varname + ".postman";
       if (eval(s + ".changed") == true) {

         ocl = s + ".do_undo();";
         tmp = tmp + "<span  id=''  onclick='"+ocl+"' >";
         tmp = tmp + "<img src='deskfm/images/icons/black_undo.png' height='20px' >";
         tmp = tmp + "</span>";

          if (this.listype == "people") {

              ocl = s+".update_person();";
              if (eval(s + ".stored") == false) {
 		ocl = s+".add_person();";
	      }
              tmp=tmp + "<span onClick='"+ocl+"'    >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

         } else if (this.listype=="product") {

              ocl = s+".update_product();";
              if (eval(s + ".stored") == false) {
 		ocl = s+".add_product();";
	      }
              tmp=tmp + "<span id='' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

	 } else if (this.listype == "suppliers") {

              ocl = s+".update_supplier();";
              if (eval(s + ".stored") == false) {
 		ocl = s+".add_supplier();";
	      }
              tmp=tmp + "<span id='' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

	 } else  {

              ocl = s+".update_webit();";
              if (eval(s + ".stored") == false) {
 		ocl = s +".add_webit();";
	      }
              tmp=tmp + "<span id='' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

 	  } 
       } 

     lbl = 'new_change_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}


creator.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}

creator.prototype.hide = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";

   this.postman.hide_rung();

   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
        pobj.innerHTML = tmp;
   }
   this.showing = false;

}

