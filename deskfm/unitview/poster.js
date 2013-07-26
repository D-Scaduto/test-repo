

function poster(idtogo,trung,tparvar,tvarname,tlistype,bimini) { 

   this.spotid = idtogo;
   this.parvar = tparvar;
   this.varname = tvarname;
   this.rung = trung;
   this.listype = tlistype;
   this.is_mini = false;
   if (bimini == true) {
     this.is_mini = bimini 
   }

   this.showing = false;
   this.btnson = false;
   this.rungster = this.spotid + "_"+this.rung;

   this.mini_viewer = null;
   this.mini_showing = false;
   if ((tlistype == "people") || (this.parvar == "nicky"))  { 
     this.mini_showing = true;
   }

   this.pid = "";
   this.story="";
   this.story_tmp;
   this.picurl ="";

   this.linkurl ="";
   this.link_tmp;

   this.embedurl = "";
   this.embed_show = false;
   this.embed_tmp;

   this.urls = [];

   this.shape = "";

   this.cat ="";
   this.subcat ="";
   this.prodid = "";
   this.price = -1;

   this.dacater = null;
   this.subcater = null;
   this.grouper = null; 
 
   this.uname = "";
   this.groupid = "";
   this.emailaddr = "";
   this.facebookid = "";
   this.twitterid = "";
   this.googleid = "";

   this.source = "deskfm";
   this.dadex=0;
   this.piczoom = false;
   this.color = "black";

   this.changed = false;
   this.pic_changed = false;
   this.link_changed = false;
   this.embed_changed = false;   
   this.cat_changed = false;
   this.group_changed = false;

}


poster.prototype.set_ppid = function(pdadex) {
  var s = "";
  var pobj = null;

  if (pdadex != undefined) {
    this.dadex = pdadex;
    if (this.listype == "webits") {
        s =  "amare.webitlist[" + pdadex + "]";
    } else if (this.listype == "people") {
        s =  "amare.peoplelist[" + pdadex + "]";
    } else if (this.listype == "products") {
        s =  "amare.productlist[" + pdadex + "]";
    } else if (this.listype == "unsorted") {
        s =  "amare.unsortedlist[" + pdadex + "]";
    }

    pobj = eval(s);
    if (pobj != null) {

      this.pid=pobj.pid;
      this.uname=pobj.uname;
      this.source=pobj.source;
      this.picurl=pobj.picurl;
      this.linkurl=pobj.linkurl;
      this.story=pobj.story;         

      if (pobj.listype == "webits") {
        this.cat=pobj.cat;
        this.subcat=pobj.subcat;

        if (buddah == true) {
          this.groupid = amare.get_person_group(this.uname);
        }

      }

      if (pobj.listype == "products") {
        this.prodid=pobj.prodid;
        this.price=pobj.price;
      }

      if (pobj.listype == "people") {
        this.groupid=pobj.groupid;
      }
     
      this.changed = false;
    } else {
//      alert("err: "+pdadex);
    }
  } else {
//   alert("err: "+pdadex);
  }  
}





poster.prototype.draw_btns = function() {

    var tmp = "";
       var lbl = "";
       var ocl="";

       if ((this.parvar == "nicky") || (daviewer.zoom == true)) {
	 ocl = this.varname + ".change_shape()";
       } else {
	 ocl = this.varname + ".toggle_btnson()";
       }
	 lbl = this.rungster + "_btns_btn";
         tmp = tmp + "<button  id='"+lbl+"'   onclick='"+ocl+"';   >";
         tmp = tmp + "<img src='deskfm/images/icons/black_round.png' height='10px' >";
         tmp = tmp + "</button>";

        if (this.btnson == true) {
	 lbl = this.rungster + "_nav_btns";
         tmp = tmp + "<span  id='"+lbl+"' >";  
	 tmp = tmp + "</span>";

	 lbl = this.rungster + "_work_btns";
         tmp = tmp + "<span  id='"+lbl+"' >";  
	 tmp = tmp + "</span>";

	 lbl = this.rungster + "_send_btns";
         tmp = tmp + "<span  id='"+lbl+"' style='float:right;' >";  
	 tmp = tmp + "</span>";

	 tmp = tmp + "<div  style='clear:right;' ></div>";  
	}

     lbl = this.rungster + '_btns_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
	  if (this.btnson == true) {
	    this.work_btns();
	    this.nav_btns();
	    this.change_btns();
	  }
     }

}


poster.prototype.nav_btns = function() {

   var tmp = "";
   var lbl = "";
   var ocl = "";

          if (this.is_mini == true ) {

              ocl = this.parvar + ".del_rung("+this.rung+")";
              lbl = this.rungster + "_delfrom_mini_btn";
              tmp = tmp + "<button  id='"+lbl+"'   onclick='"+ocl+"';   >";
              tmp = tmp + "<img src='deskfm/images/icons/delete_black.png' height='20px' >";
              tmp = tmp + "</button>";

          } else {

	     if (this.parvar != "nicky") {
               lbl = this.rungster + '_totop_btn';
               ocl = "";
   	       if (this.rung == 0)  { 
	 	 ocl = "daviewer.toggle_zoom();";
 	       } else {
                 ocl = this.parvar + ".to_top("+this.rung+");";
	         ocl = ocl + "daviewer.set_zoom();";
	       }

              tmp = tmp + "<button  id='"+lbl+"' onclick='"+ocl+"' data-role='button'  >";
              tmp = tmp + "<img src='deskfm/images/icons/black_mag.png' height='15px' >";
              tmp = tmp + "</button>";
            }

          }

          if (this.listype == "people") {
                ocl = this.varname + ".toggle_mini();";
                lbl = this.rungster + "_mini_btn";
                tmp = tmp + "<button  id='"+lbl+"'  onclick='"+ocl+"'  >";
                tmp = tmp + "<img src='deskfm/images/icons/layers.png' height='20px' >";
                tmp = tmp + "</button>";
/*
                cls='spotd_off';
                ocl = "amare.get_cperson_list(\""+this.uname+"\");";
                lbl = this.spotid + "_" + tspot + "_refresh_mini";
                tmp = tmp + "<button  id='"+lbl+"'  onclick='"+ocl+"' >";
                tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='25px' >";
                tmp = tmp + "</button>";
*/
          }
         
     
         lbl = this.rungster + "_nav_btns";
         if (document.getElementById(lbl)!= null) {
             document.getElementById(lbl).innerHTML=tmp;
         } 
}


 poster.prototype.work_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";

       if (this.shape == "getstory") {
       	 tmp = tmp + "<button  onclick='"+this.varname+".toggle_getstory();' >";  
         tmp = tmp + "<img src='deskfm/images/icons/pencil_msg.png' height='20px' >";
         tmp = tmp + "</button>";  
       } 
       if (this.shape == "getpic" ) {
	 tmp = tmp + "<button  onclick='"+this.varname+".toggle_getpic();' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/camera.png' height='20px' >";
	 tmp = tmp + "</button>"; 
       } 
       if (this.shape == "getlink" ) {
         ocl = this.varname + ".toggle_getlink();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
	 tmp = tmp + "</button>";

       } 
       if (this.shape == "getembed" ) {
	 ocl = this.varname + ".toggle_getembed();";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
	 tmp = tmp + "</button>";
       } 
       if (this.shape == "getsort" ) {
	 ocl = this.varname + ".set_shape(\"\");";
         tmp = tmp + "<button  onclick='"+ocl+"' >";  
	 tmp = tmp + "<img src='deskfm/images/icons/sort.png' height='20px' >";
	 tmp = tmp + "</button>";
       }

     lbl = this.rungster + '_work_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}




 poster.prototype.change_btns = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var omo = "";
     var omt = "";

       if (this.changed == true) {

         ocl = this.varname + ".do_undo();";
         lbl = this.spotid + "_" + this.rung + "_undo_btn";
         tmp = tmp + "<button  id='"+lbl+"'  onclick='"+ocl+"' >";
//              tmp = tmp + "<img src='deskfm/images/icons/black_undo.png' height='20px' >";
         tmp = tmp + "undo";
         tmp = tmp + "</button>";

         if (this.listype == "webits") {

            lbl = this.spotid + "_" + this.rung + "_save_btn";
            if (this.pid == "") {
              ocl = this.varname+".do_newpost();";
              tmp=tmp + "<button id='"+lbl+"' onClick='"+ocl+"'  >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</button>";
            } else {
              lbl = this.spotid + "_" + this.rung + "_update_btn";
              ocl = this.varname+".update_webit();";
              tmp=tmp + "<button id='"+lbl+"' onClick='"+ocl+"'  >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</button>";
            }

         } else if (this.listype == "people") {

              ocl = this.varname+".update_person();";
              tmp=tmp + "<button onClick='"+ocl+"'    >";  
              tmp = tmp + "save";
              tmp = tmp + "</button>";

         } else if (this.listype=="unsorted") {

            lbl = this.spotid + "_" + this.rung + "_save_btn";
            if (this.pid == "") {
              ocl = this.varname+".do_newpost();";
              tmp=tmp + "<button id='"+lbl+"' onClick='"+ocl+"'  >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</button>";
            } else {
              lbl = this.spotid + "_" + this.rung + "_update_btn";
              ocl = this.varname+".update_webit();";
              tmp=tmp + "<button id='"+lbl+"' onClick='"+ocl+"'  >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</button>";
            }
	 }
	 
     }


     lbl = this.rungster + '_send_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}


poster.prototype.set_shape = function(tshape) {
     this.shape = tshape;
     this.redraw_rung();
}


poster.prototype.change_shape = function() {
     var tshape = "";

     if (this.shape == "") {
	     tshape = "getstory";
     } else if (this.shape == "getstory") {
	     tshape = "getpic";
     } else if (this.shape == "getpic") {
	     tshape = "getlink";
     } else if (this.shape == "getlink") {
	     tshape = "getembed"; 
     } else if (this.shape == "getembed") {
	     tshape = "getsort";
     } else if (this.shape == "getsort") {
	     tshape = "";
     }
	
     this.set_shape(tshape);
}



poster.prototype.redraw_rung = function() {
   this.build_rung();
   this.draw_rung();
}


poster.prototype.show = function() {
   this.redraw_rung();
}


poster.prototype.toggle_btnson = function() {
  if (this.btnson == true) {
     this.turn_btnsoff();
  } else {
     this.turn_btnson();
  }
}


poster.prototype.turn_btnson = function() {
  if (this.btnson != true) {
    this.btnson = true;
    this.redraw_rung();
  }
}

poster.prototype.turn_btnsoff = function() {
  if (this.btnson != false) {
    this.btnson = false;
    this.redraw_rung();
  }
}


poster.prototype.do_undo = function() {
   if (this.pid == "") {
     this.clear();
   } else {
     this.set_ppid(this.dadex);
   }
   this.changed = false;
   this.redraw_rung();
 
}


poster.prototype.check_empty = function() {
  var ret = true;
  if (this.story !="") {
     ret = false;
  }
  if (this.linkurl !="") {
     ret = false;
  }
  if (this.picurl !="") {
     ret = false;
  }
  return ret;
}



poster.prototype.clear = function() {
   this.pid = "";
   this.uname = "";
   this.story="";
   this.picurl ="";
   this.cat ="";
   this.subcat ="";
   this.groupid = "";
   this.prodid = "";
   this.price = -1;
   this.linkurl ="";
   this.urls = [];
   this.changed = false;
   this.shape="";
   this.redraw_rung();
}



 poster.prototype.do_newpost = function() {

     var pcat="";
     var linkcode = escape(this.linkurl);
     var storycode = escape(this.story);
     var picode = escape(this.picurl);
     var embedcode = escape(this.embedurl);

     var prams = "?uname="+ jesie.pname;
     prams = prams + "&source="+this.source;
     prams = prams + "&listype=webits";
     if (this.cat_changed == true) {
       prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     }
     if (this.story_changed == true) {
       prams = prams + "&storycode="+storycode;
     }

     if (this.link_changed == true) {
       prams = prams + "&linkcode="+linkcode;
     }
     if (this.pic_changed == true) {
       prams = prams + "&picode="+picode;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embedcode="+embedcode;
     }
     if (this.group_changed == true) {
       prams = prams + "&groupid="+this.groupid;
     }
     var url = "deskfm/dbase/dfm_dbadd.php"+prams;
     alert(url);
     $.getJSON(url,function(json) {
           amare.new_webit(json.pobj);
     });
    sal.waiting();
}


 poster.prototype.update_webit = function() {

     var pcat="";
     var linkcode = escape(this.linkurl);
     var storycode = escape(this.story);
     var picode = escape(this.picurl);
     var embedcode = escape(this.embedurl);

     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=webits";
     prams = prams + "&pid="+this.pid;

     if (this.cat_changed == true) {
       prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     }
     if (this.story_changed == true) {
       prams = prams + "&storycode="+storycode;
     }

     if (this.link_changed == true) {
       prams = prams + "&linkcode="+linkcode;
     }
     if (this.pic_changed == true) {
       prams = prams + "&picode="+picode;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embedcode="+embedcode;
     }
     if (this.group_changed == true) {
       prams = prams + "&groupid="+this.groupid;
     }

     var url = "deskfm/dbase/update_webit.php"+prams;
//     alert(url);
     $.getJSON(url,function(json) {
          amare.update_webit(json.pobj);
     });
     sal.waiting();
}



 poster.prototype.update_person = function() {

     var pcat="";
     var linkcode = encodeURI(this.linkurl);
     var storycode = encodeURI(this.story);
     var picode = encodeURI(this.picurl);

     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=people";

       prams = prams + "&groupid="+this.groupid;

     var url = "deskfm/dbase/update_person.php"+prams;
//     alert(url);
     $.getJSON(url,function(json) {
          amare.update_one(json.pobj);
     });
     sal.waiting();
}


poster.prototype.update_product = function() {

     var pcat="";
     var linkcode = encodeURI(this.linkurl);
     var storycode = encodeURI(this.story);
     var picode = encodeURI(this.picurl);

     var prams = "?uname="+this.uname+"&source="+this.source;
      prams = prams + "&listype="+this.listype;

       prams = prams + "&pid="+this.pid;

       prams = prams + "&linkcode="+linkcode;
       prams = prams + "&picode="+picode;
       prams = prams + "&price="+this.price;
       prams = prams + "&prodid="+this.prodid;

     var url = "deskfm/dbase/update_product.php"+prams;
//     alert(url);
     $.getJSON(url,function(json) {
          amare.update_one(json.pobj);
     });
     sal.waiting();
}



 poster.prototype.del_post = function() {

     var prams = "?pid="+this.pid+"&uname="+this.uname+"&source="+this.source; 
      prams = prams + "&listype="+this.listype;

     var url = "deskfm/dbase/dfm_dbdel.php"+prams;


//     alert(url);
     $.getJSON(url,function(json) {
           amare.del_one(json.pid);
     });
    sal.waiting();
}


