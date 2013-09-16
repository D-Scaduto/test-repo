

function header () {

    this.shape = "";  // browse,search,share,shop,sort,feed,manage,group    
    this.shapes = "";
    this.varname = "diego";
}	
 

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<span id='logo_spot' class='' style=''  >";
     tmp = tmp + "</span>";

     tmp = tmp + " <div id='search_spot' class='' style='display:inline-block;'  >";
     tmp = tmp + "</div>";

     tmp = tmp + " <div id='browse_spot' class='' style='display:inline-block;'  >";
     tmp = tmp + "</div>";

      tmp = tmp + "<div id='shop_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='share_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='manage_spot' class='' style='display:inline-block;'  >";
      tmp = tmp + "</div>";
 
      var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

             this.draw_btns();
             for (var i=0;i<this.shapes.length;i++) {
                var s = this.shapes[i].split(':');
                if (s[0] == this.shape) { 
                   var es = s[1] + '.show()'; 
                   eval(es);
                }
             }
      }
}



header.prototype.draw_btns = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var mout = "";
     var moin = "";

     tmp = tmp + "<span class='menu_btns' style=''  >";
 
   if (buddah == true) {

       lbl = 'sort_btn';
       ocl = this.varname + '.set_shape(\"sort\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       if (this.shape == 'sort') {
         cls='spotd_on';
       }
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/categories.png' width='20px' >";
       tmp = tmp + "</span>"; 

       lbl = 'feed_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.set_shape(\"feed\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/cloud.png' width='20px' >";
       tmp = tmp + "</span>"; 

       lbl = 'manage_btn';
         moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
      ocl = this.varname + '.set_shape(\"manage\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/molecule.png' width='20px' >";
       tmp = tmp + "</span>"; 

       lbl = 'group_btn';
          moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.set_shape(\"group\");'
       tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style=''  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' width='20px' >";
       tmp = tmp + "</span>"; 

   } else {

     lbl = 'browse_btn';
         moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
    ocl = this.varname + '.set_shape(\"browse\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/browse.png' width='20px' >";
     tmp = tmp + "</span>";  

     lbl = 'search_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.set_shape(\"search\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;' >";
     tmp = tmp + "<img src='deskfm/images/icons/search.png' width='20px' >";
     tmp = tmp + "</span>"; 

     lbl = 'share_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
     ocl = this.varname + '.set_shape(\"share\");'
     tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='width:30px;'  >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png' width='20px' >";
     tmp = tmp + "</span>";

       lbl = 'shop_btn';
        moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       ocl = this.varname + '.set_shape(\"shop\");'
       tmp = tmp + "<span id='"+lbl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"'style='width:30px;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' width='20px' >";
       tmp = tmp + "</span>"; 

   } 
    
       tmp = tmp + "</span>";

       tmp = tmp + "<span class='rail_btns' style=''  >";

       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");'; 
        tmp = tmp + "<span id='prev_btn' onclick='daviewer.prev();' style='width:20px;'  >";
        tmp = tmp + "<img src='deskfm/images/icons/prev.png' width='20px' >";
        tmp = tmp + "</span>";

       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
        tmp = tmp + "<span id='next_btn' onclick='daviewer.next();' style='width:20px;'  >";
        tmp = tmp + "<img src='deskfm/images/icons/play.png' width='20px' >";
        tmp = tmp + "</span>";

       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");'; 
        tmp = tmp + "<span id='nitro_lbtn' onclick='daviewer.nitro_stop();' style='width:20px;'  >";
        tmp = tmp + "<img src='deskfm/images/icons/stop.png' width='20px' >";
        tmp = tmp + "</span>";

       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");'; 
        tmp = tmp + "<span id='nitro_rbtn' onclick='daviewer.nitro_start();' style='width:20px;'  >";
        tmp = tmp + "<img src='deskfm/images/icons/fast_fwd.png' width='20px' >";
        tmp = tmp + "</span>";

       tmp = tmp + "</span>";

      var pobj = document.getElementById('menu_btnspot');
       if (pobj != null) {
          pobj.innerHTML = tmp;

 //       $('#share_btn').button();
//	  $('#search_btn').button();
          if (this.shape == "" ) {
  	    sal.show();
          }
       }
}



header.prototype.set_shapes = function (pshapes) {

   if (pshapes != undefined) {
        this.shapes = pshapes;
   }
   this.show();
}


header.prototype.set_shape = function (pshape) {

   if (pshape != undefined) {
      if (this.shape == pshape) {
         this.shape = "";
      } else {
        this.shape = pshape;
      }
   }

   if (this.shape == "") {
      sal.show();
   } else {
     sal.hide();
   }

      var s , es = "";
      for (var i=0;i<this.shapes.length;i++) {
         s = this.shapes[i].split(':');
         es = s[1] + '.hide();';
         if (s[0] == this.shape) { 
            es = s[1] + '.show()'; 
         }
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
      }
}


header.prototype.redraw_view = function (psetype,pchunk) {

    if (psetype == "webits") { 
        if (cater.showing == true) {
           cater.redraw_view(pchunk);
	}
    }
/*
    if (psetype == "people") { 
       if (joe.showing == true) {
         joe.redraw_view(pchunk);
       }
    } 
*/
      if (psetype == "unsaved") { 
        if (moe.showing == true) { 
          moe.redraw_view("unsaved",pchunk);
        } 
      }

      if (psetype == "unsorted") { 
         if (mac.showing == true) { 
          mac.redraw_view("unsorted",pchunk);
         }  
      }

    if (wanda.sterms != "") {
        wanda.check_local();
    }

}


