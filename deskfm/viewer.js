
function viewer (pscreen,pvarname) {

   this.screen = pscreen;
   this.varname = pvarname;

   this.cat="";       
   this.subcat="";    
   this.sterms = "";
   this.prodids = [];
   this.price = -1;
   this.groupid = "";
   this.stats = null;

   this.listdex = 0;
   this.dalist=[];
   this.darungs= [];

   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

   this.top_end=10;
   this.gridcols=0;

   this.zoom = false;
   this.editing = false;
   this.metro_spd=0;
   this.metro_dir="fwd";
 
}


viewer.prototype.draw_view = function() {

    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var cls='';
    var ct = 0; 
    var st = this.top_end;
    var vdex = "";
    var ltype = "";
    var mdex = "";

    if (debug == true) {
      lbl = this.screen+"_debug";
      cls='spotd_off'
      tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style=''  >"; 
      tmpstr=tmpstr+"</div>";
    }


      if (this.zoom == true) {
         st = 1;
      }

       tmpstr=tmpstr+"<div id='' style=''  >";
 
   if (jqm_off == false) {
     if (this.is_mini == true) { 
       tmpstr=tmpstr+"<div id='' style=''  >";
     } else if ((this.gridcols ==1) || (this.zoom == true)) { 
       tmpstr=tmpstr+"<ul id='lv' data-role='listview' data-inset='false' data-split-theme='d' style=''  >";
     } else if (this.gridcols == 2) {
        tmpstr=tmpstr+"<ul  id='lv'  data-role='listview'  class='ui-grid-a' data-inset='false'  data-split-theme='d' style='' >";
     } else if (this.gridcols == 3) {
        tmpstr=tmpstr+"<ul  id='lv'  data-role='listview'  class='ui-grid-b'  data-inset='false'  data-split-theme='d'  style=''  >";
     } else if (this.gridcols == 4) {
        tmpstr=tmpstr+"<ul  id='lv' data-role='listview' class='ui-grid-c'  data-inset='false'  data-split-theme='d'  style=''  >";
     }
     cls = '';
   }

      while (ct < st) {
        if (this.darungs[ct] != undefined) {

         lbl = this.screen+"_rung_"+ct;
         if ((jqm_off == true)  || (this.is_mini == true)) {
              tmpstr=tmpstr+"<div id='"+lbl+"' class='my-box' style=''  >"; 
              tmpstr=tmpstr+"</div>";
         } else {

            if ((this.gridcols == 1) || (this.zoom == true)) {
              cls = '';
            } else {
              cls  = this.next_gridblock(cls);
            }
              tmpstr=tmpstr+"<li id='"+lbl+"' class='"+cls+"' style='min-height:100px;vertical-align:top;padding:10px;white-space:normal;' data-icon='false'  >"; 
              tmpstr=tmpstr+"</li>";
         }
        }
       ct = ct + 1;
      }
 
    if ((jqm_off == true)  || (this.is_mini == true)) {
      tmpstr=tmpstr+"</div>";
    } else {
      tmpstr=tmpstr+"</ul>";
    }
     tmpstr=tmpstr+"</div>";
 
    if (this.zoom == true) {
      tmpstr=tmpstr+"<br>";
      tmpstr=tmpstr+"<div style='text-align:center;height:40px;' >";

      if (buddah == true) {
        ocl = "daviewer.toggle_editing();";
        tmpstr = tmpstr + "<button  onclick='"+ocl+"' >";  
        tmpstr = tmpstr + "<img src='deskfm/images/icons/layers.png' height='20px' >";
        tmpstr = tmpstr + "</button>";
      }

      lbl = "share_btns";
      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
      tmpstr=tmpstr+"</span>";
      lbl = "work_btns";
      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
      tmpstr=tmpstr+"</span>";
      lbl = "change_btns";
      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
      tmpstr=tmpstr+"</span>";
       tmpstr=tmpstr+"</div>";
   }

    lbl = this.screen;
 
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;

        ct = 0;
         while (ct <= st) {
           if (this.darungs[ct] != undefined) {
             vdex = this.darungs[ct].vdex;

             if (this.dalist[vdex] != null) {
               mdex = this.dalist[vdex].mdex;
	       ltype = this.dalist[vdex].ltype;

               if (this.darungs[ct].postman == undefined ) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster(this.screen,ct,this.varname,s,this.is_mini);
               }
               if (this.darungs[ct].postman != undefined) {
	         this.darungs[ct].postman.set_ppid(mdex,ltype);
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
               }
	     }
           }
           ct = ct + 1;
	 }

       if ((jqm_off == false) && (this.is_mini == false)) {
          $('#lv').listview();
          $('#lv').listview("refresh");
       }
   }

    if (this.is_mini == false ) {
	    dale.draw_raildata();
            sal.draw_vman();
    }

    if (this.zoom == true) {
     if (this.editing == true) {
      this.work_btns();
      this.change_btns();
     }
      this.share_btns();
   }

    if (debug == true) {
       this.draw_debug();
    }

}


viewer.prototype.set_gridcols = function (pnum) {
   this.gridcols = parseInt(pnum);
   this.draw_view();

}


viewer.prototype.next_gridblock = function (pstr) {
   var ret = "ui-block-a";

   if (this.gridcols == 2) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     }

   } else if (this.gridcols == 3) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     } else if (pstr == "ui-block-b") {
        ret = "ui-block-c";
     }
   } else if (this.gridcols == 4) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     } else if (pstr == "ui-block-b") {
        ret = "ui-block-c";
     } else if (pstr == "ui-block-c") {
        ret = "ui-block-d";
     }
   }

   return ret;
}


viewer.prototype.share_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";

       var s = this.darungs[0].postman.pid;

//       tmp = tmp + "<span class='screen-talk' >Share</span>";
       tmp = tmp + "<a href='https://twitter.com/share' class='twitter-share-button' data-url='http://twitter.com/statuses/"+ s +"' data-count='none'></a>";
 
     lbl = 'share_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          nicky.twitter_render();
     }
  

}

 
viewer.prototype.work_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";
 
        var s = this.varname + ".darungs[0].postman";
 
	 ocl = s + ".toggle_getstory();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/pencil_msg.png' height='20px' >";
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

      if (buddah == true) {
	 ocl = s + ".toggle_getsort();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/sort.png' height='20px' >";
	 tmp = tmp + "</button>";
      }

      if (this.listype == "people") {
	 ocl = s + ".toggle_getgroup();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' height='20px' >";
	 tmp = tmp + "</button>";
      }

     lbl = 'work_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}



viewer.prototype.change_btns = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var ts = "";

       if (this.changed == true) {

         ocl = this.varname + ".do_undo();";
         lbl = this.rungster + "_undo_btn";
         tmp = tmp + "<span  id='"+lbl+"'  onclick='"+ocl+"' >";
         tmp = tmp + "<img src='deskfm/images/icons/black_undo.png' height='20px' >";
         tmp = tmp + "</span>";

          if (this.listype == "people") {

	      lbl = this.rungster + "_save_btn";
              ocl = this.varname+".update_person();";
              if (this.stored == false) {
 		ocl = this.varname+".add_person();";
	      }
              tmp=tmp + "<span onClick='"+ocl+"'    >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

         } else if (this.listype=="product") {

              lbl = this.rungster + "_save_btn";
              ocl = this.varname+".update_product();";
              if (this.stored == false) {
 		ocl = this.varname+".add_product();";
	      }
              tmp=tmp + "<span id='"+lbl+"' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

	 } else if (this.listype == "suppliers") {

              lbl = this.rungster + "_save_btn";
              ocl = this.varname+".update_supplier();";
              if (this.stored == false) {
 		ocl = this.varname+".add_supplier();";
	      }
              tmp=tmp + "<span id='"+lbl+"' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

	 } else  {

       	      lbl = this.rungster + "_save_btn";
              ocl = this.varname+".update_webit();";
              if (this.stored == false) {
 		ocl = this.varname+".add_webit();";
	      }
              tmp=tmp + "<span id='"+lbl+"' onClick='"+ocl+"'  >";  
              tmp = tmp + "<img src='deskfm/images/icons/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</span>";

 	  } 
       } 

     lbl = 'change_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}


viewer.prototype.toggle_editing = function () {
   if (this.editing == true ) {
       this.editing = false;
   } else {
       this.editing = true;
   }
   this.draw_view();
}


viewer.prototype.toggle_zoom = function () {
   if (this.zoom == true ) {
       this.unset_zoom();
   } else {
       this.set_zoom();
   }
}


viewer.prototype.unset_zoom = function() {
   this.zoom = false;

   var s = this.varname + ".darungs[0].postman.shape=\"\"";
   eval(s);

   this.draw_view();
}


viewer.prototype.set_zoom = function() {
   this.zoom = true;

   this.draw_view();
}



viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}



viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " listlen="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;
     tmp = tmp + " cat="+ this.cat;
     tmp = tmp + " subcat="+ this.subcat;
     tmp = tmp + " sterms="+ this.sterms;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}




