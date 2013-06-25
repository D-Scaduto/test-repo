

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

   this.preseter = null; 
   this.preset = "sitonly";
   if (this.parvar == "nicky")  { 
     this.preseter = new suggester(this.rungster+"_presog",new preset_provider(), this.varname +".preseter",this.varname);
   }

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
        s =  "webitlist[" + pdadex + "]";
    } else if (this.listype == "people") {
        s =  "peoplelist[" + pdadex + "]";
    } else if (this.listype == "products") {
        s =  "productlist[" + pdadex + "]";
    } else if (this.listype == "unsorted") {
        s =  "unsortedlist[" + pdadex + "]";
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


 poster.prototype.work_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";

    if (this.btnson == true) {

    if ((buddah == true) || (this.parvar == "nicky")) {

       cls = 'spotd_off';
       tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".toggle_getstory();' >";  
       tmp = tmp + "<img src='deskfm/images/icons/pencil_msg.png' height='20px' >";
       tmp = tmp + "</span>"; 

       if (this.listype != "people") { 
         cls = 'spotd_off';
         ocl =  this.varname+".toggle_getlink();";
         tmp = tmp + "<span class='"+cls+"' onclick='"+ocl+"' >";  
         tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
         tmp = tmp + "</span>";

         cls = 'spotd_off';
         ocl =  this.varname+".toggle_getembed();";
         tmp = tmp + "<span class='"+cls+"' onclick='"+ocl+"' >";  
         tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
         tmp = tmp + "</span>";
       }

       cls = 'spotd_off';
       tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".toggle_getpic();' >";  
       tmp = tmp + "<img src='deskfm/images/icons/camera.png' height='20px' >";
       tmp = tmp + "</span>"; 

       if (buddah == true)  {
	 cls = 'spotd_off';
         tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".toggle_getsort();' >";  
         tmp = tmp + "<img src='deskfm/images/icons/categories.png' height='20px' >";
         tmp = tmp + "</span>"; 
       } 

    }
    }

     lbl = this.rungster + '_work_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}


poster.prototype.nav_btns = function() {

   var tmp = "";
   var lbl = "";
   var ocl = "";
   var tspot = this.rung;

         if (this.btnson == true) { 

          if (this.is_mini == true ) {

              cls='spotd_off';
              ocl = this.parvar + ".del_rung("+this.rung+")";
              lbl = this.spotid + "_" + tspot + "_delfrom_mini_btn";
              tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
              tmp = tmp + "<img src='deskfm/images/icons/delete_black.png' height='20px' >";
              tmp = tmp + "</span>";

          } else {


          }

          if (this.listype == "people") {
                cls='spotd_off';
                ocl = this.varname + ".toggle_mini();";
                lbl = this.spotid + "_" + tspot + "_mini_btn";
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                tmp = tmp + "<img src='deskfm/images/icons/layers.png' height='20px' >";
                tmp = tmp + "</span>";
/*
                cls='spotd_off';
                ocl = "amare.get_cperson_list(\""+this.uname+"\");";
                lbl = this.spotid + "_" + tspot + "_refresh_mini";
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='25px' >";
                tmp = tmp + "</span>";
*/
          }
 
          if (buddah==true) {

              if ((this.shape == "share") && (this.listype == "webits")) {

                cls='spotd_off';
                lbl = this.spotid + "_" + tspot + "_tweetbtn";
                moin = "markyd(\""+lbl+"\");";
                mout = "unmarkyd(\""+lbl+"\");";
                ocl='';
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
                var twparams='?count=none';
                twparams = twparams + "&text="+escape(this.story);
/*
                if (this.linkurl != "") {
                  twparams = twparams + "&url="+escape(this.linkurl);
                } else {
                  twparams = twparams + "&url="+escape("http://deskfm.com");
                }
*/
                tmp=tmp +"<a href='https://twitter.com.share"+twparams+"' class='twitter-share-button' data-lang='en' > </a>";
                tmp = tmp + "</span>";

              }

          }

              if (this.parvar != "nicky" ) {
                  lbl = this.spotid + "_" + tspot + "_btns";
                  cls='spotd_off';
                  ocl = this.varname + ".toggle_btnson();";
                  tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                  tmp = tmp + "<img src='deskfm/images/icons/black_round.png' height='10px' >";
                  tmp = tmp + "</span>";

		  lbl = this.spotid + "_" + tspot + "_zoom";
                  cls='spotd_off';
                  ocl = ""; 
		  if (this.rung != 0) {
			ocl = this.parvar + ".to_top("+this.rung+");";
		  }
		  ocl = ocl + this.parvar + ".toggle_zoom();";
                  tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                  tmp = tmp + "<img src='deskfm/images/icons/black_round.png' height='10px' >";
                  tmp = tmp + "</span>";
	      }
     
       } else {
                  lbl = this.spotid + "_" + tspot + "_btns";
                  cls='spotd_off';
                  ocl = this.varname + ".toggle_btnson();";
                  tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                  tmp = tmp + "<img src='deskfm/images/icons/black_round.png' height='10px' >";
                  tmp = tmp + "</span>";
       }

         lbl = this.spotid + "_" + tspot + "_nav_btns";
         if (document.getElementById(lbl)!= null) {
             document.getElementById(lbl).innerHTML=tmp;
             if (this.btnson == true) {
               if (twttr != undefined) {
                 if (twttr.widgets != undefined) {
                   twttr.widgets.load();
                 }
               }
             }
         } 
}


 poster.prototype.change_btns = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var omo = "";
     var omt = "";

       if (this.changed == true) {

         cls='spotd_off';
         ocl = this.varname + ".do_undo();";
         lbl = this.spotid + "_" + this.rung + "_undo_btn";
         tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
//              tmp = tmp + "<img src='deskfm/images/icons/black_undo.png' height='20px' >";
         tmp = tmp + "undo";
         tmp = tmp + "</span>";

         if (this.listype == "webits") {

            lbl = this.spotid + "_" + this.rung + "_save_btn";
            omo = "markyd(\""+lbl+"\");";
            omt = "unmarkyd(\""+lbl+"\");";
            if (this.pid == "") {
              ocl = this.varname+".do_newpost();";
              tmp=tmp + "<span id='"+lbl+"' class='spotd_off'  onClick='"+ocl+"'  onmouseover='"+omo+"' onmouseout='"+omt+"' >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</span>";
            } else {
              lbl = this.spotid + "_" + this.rung + "_update_btn";
              ocl = this.varname+".update_webit();";
              tmp=tmp + "<span id='"+lbl+"' class='spotd_off' onClick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</span>";
            }

         } else if (this.listype == "people") {

              ocl = this.varname+".update_person();";
              tmp=tmp + "<span class='spotd_off' onClick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";  
              tmp = tmp + "save";
              tmp = tmp + "</span>";

         } else if (this.listype=="unsorted") {

            lbl = this.spotid + "_" + this.rung + "_save_btn";
            omo = "markyd(\""+lbl+"\");";
            omt = "unmarkyd(\""+lbl+"\");";
            if (this.pid == "") {
              ocl = this.varname+".do_newpost();";
              tmp=tmp + "<span id='"+lbl+"' class='spotd_off'  onClick='"+ocl+"'  onmouseover='"+omo+"' onmouseout='"+omt+"' >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</span>";
            } else {
              lbl = this.spotid + "_" + this.rung + "_update_btn";
              ocl = this.varname+".update_webit();";
              tmp=tmp + "<span id='"+lbl+"' class='spotd_off' onClick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";  
//              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "save";
              tmp = tmp + "</span>";
            }
	 }
	 
     }

     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_send_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
}


poster.prototype.set_shape = function(tshape) {
     this.shape = tshape;
     this.redraw_rung();
}


poster.prototype.set_preset = function(tpreset) {
     this.preset = tpreset;
     this.build_rung();
     this.draw_rung();

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
    this.nav_btns();
    this.work_btns();
  }
}

poster.prototype.turn_btnsoff = function() {
  if (this.btnson != false) {
    this.btnson = false;
    this.nav_btns();
    this.work_btns();
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
//     alert(url);
     $.getJSON(url,function(json) {
           new_webit(json.pobj);
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
          update_webit(json.pobj);
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
          update_one(json.pobj);
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
          update_one(json.pobj);
     });
     sal.waiting();
}



 poster.prototype.del_post = function() {

     var prams = "?pid="+this.pid+"&uname="+this.uname+"&source="+this.source; 
      prams = prams + "&listype="+this.listype;

     var url = "deskfm/dbase/dfm_dbdel.php"+prams;


//     alert(url);
     $.getJSON(url,function(json) {
           del_one(json.pid);
     });
    sal.waiting();
}


