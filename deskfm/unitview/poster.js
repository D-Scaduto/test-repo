

function poster(idtogo,trung,tparvar,tvarnam,tlistype,bimini) { 

   this.spotid = idtogo;
   this.parvar = tparvar;
   this.varname = tvarnam;
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
   this.picurl ="";

   this.linkurl ="";
   this.link_shape = ""; // embed // link 
   this.link_source="";
   this.linkshow = false;
   this.urls = [];

   this.shape = "";

   this.preseter = null; 
   this.preset = "sitonly";
   if (this.parvar == "nicky")  { 
     this.preseter = new suggester(this.rungster+"_presog",new preset_provider(), this.varname +".preseter",this.varname);
     this.link_source="sketchup";
     this.link_shape = "embed";
     if (is_mobile == false) {
       this.linkshow = true;
     }
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
   this.changed = false;
   this.color = "black";

}


poster.prototype.set_ppid = function(pdadex) {
  var s = "";
  var pobj = null;

  if (pdadex != undefined) {
    this.dadex = pdadex;
    if (this.listype == "webits") {
        s =  "dalist[" + pdadex + "]";
    } else if (this.listype == "people") {
        s =  "peeplist[" + pdadex + "]";
    } else if (this.listype == "products") {
        s =  "prodlist[" + pdadex + "]";
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

        cls = 'spotd_off';
        if (this.shape ==  "link") {
           cls = 'spotd_on';
        }
 
         tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".set_shape(\"link\");' >";  
         tmp = tmp + "<img src='deskfm/images/icons/link-black.jpg' height='20px' >";
         tmp = tmp + "</span>"; 
 
        cls = 'spotd_off';
        if (this.shape ==  "embed") {
           cls = 'spotd_on';
        }

           tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".set_shape(\"embed\");' >";  
           tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' height='20px' >";
           tmp = tmp + "</span>"; 

         cls = 'spotd_off';
        if (this.shape ==  "getpic") {
           cls = 'spotd_on';
        }
          tmp = tmp + "<span class='"+cls+"' onclick='"+this.varname+".set_shape(\"getpic\");' >";  
           tmp = tmp + "<img src='deskfm/images/icons/camera.png' height='20px' >";
           tmp = tmp + "</span>"; 

     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_work_btns';
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

       var se = eval(this.parvar);

         if (this.btnson == true) { 

              lbl = this.spotid + "_" + tspot + "_editing_btn";
              cls='spotd_off';
              ocl = this.varname + ".toggle_btns();";
              var ilbl = this.spotid + "_" + tspot + "_editing_img";
              tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='imarkyd(\""+ilbl+"\");' onmouseout='unimarkyd(\""+ilbl+"\");'  >";
              tmp = tmp + "<img id='"+ilbl+"' src='deskfm/images/icons/white_round.png' height='20px' >";
              tmp = tmp + "</span>";

              if (this.parvar != "nicky" ) {
                lbl = this.spotid + "_" + tspot + "_zoom_btn";
                cls='spotd_off';
                if (this.rung == 0) {
                  if (se.zoom == true) {
                    ocl = this.parvar + ".unset_zoom();";
                  } else {
                    ocl = this.parvar + ".set_zoom();";
                  }
                } else {
                  ocl = this.parvar + ".zoom=true;";
                  ocl = ocl + this.parvar + ".to_top("+this.rung+");";
                }
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='imarkyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='20px' >";
                tmp = tmp + "</span>";
              }

          if (this.is_mini == true ) {
              cls='spotd_off';
              ocl = this.parvar + ".del_rung("+this.rung+")";
              lbl = this.spotid + "_" + tspot + "_delfrom_mini_btn";
              tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
              tmp = tmp + "<img src='deskfm/images/icons/delete_black.png' height='20px' >";
              tmp = tmp + "</span>";
          }

          if (this.listype == "people") {
                cls='spotd_off';
                ocl = this.varname + ".toggle_mini();";
                lbl = this.spotid + "_" + tspot + "_mini_btn";
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                tmp = tmp + "<img src='deskfm/images/icons/layers.png' height='20px' >";
                tmp = tmp + "</span>";

                cls='spotd_off';
                ocl = "amare.get_cperson_list(\""+this.uname+"\");";
                lbl = this.spotid + "_" + tspot + "_refresh_mini";
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
                tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='25px' >";
                tmp = tmp + "</span>";
          }
 
          if (buddah==true) {

              if (this.listype == "webits") {

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
       }  else {  

              lbl = this.spotid + "_" + tspot + "_editing_btn";
              cls='spotd_off';
              ocl = this.varname + ".toggle_btns();";
              var ilbl = this.spotid + "_" + tspot + "_editing_img";
              tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='imarkyd(\""+ilbl+"\");' onmouseout='unimarkyd(\""+ilbl+"\");'  >";
              tmp = tmp + "<img id='"+ilbl+"' src='deskfm/images/icons/white_round.png' height='20px' >";
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
       var cdx="";
       var cdxe = "";
       var stpid="";
       var spid="";

      if (this.changed == true) {
              cls='spotd_off';
              ocl = this.varname + ".do_undo();";
              lbl = this.spotid + "_" + this.rung + "_undo_btn";
              tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
              tmp = tmp + "<img src='deskfm/images/icons/black_undo.png' height='20px' >";
              tmp = tmp + "</span>";

        if (this.listype == "webits") {
            if (this.pid == "") {
              ocl = this.varname+".do_newpost();";
              tmp=tmp + "<span class='spotd_off'  onClick='"+ocl+"' >";  
              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "</span>";
            } else {
              ocl = this.varname+".update_webit();";
              tmp=tmp + "<span class='spotd_off' onClick='"+ocl+"' >";  
              tmp = tmp + "<img src='deskfm/images/icons/black_redo.png' height='20px' >";
              tmp = tmp + "</span>";
            }
        } else if (this.listype = "people") {
              ocl = this.varname+".update_person();";
              tmp=tmp + "<span class='spotd_off' onClick='"+ocl+"' >";  
              tmp = tmp + " update";
              tmp = tmp + "</span>";
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


poster.prototype.toggle_btns = function() {
  if (this.btnson == true) {
     this.btnson = false;
  } else {
     this.btnson = true;
  }
  this.redraw_rung();
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

     var prams = "?uname="+this.uname+"&source="+this.source;

     prams = prams + "&listype=webits";
     prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     prams = prams + "&storycode="+storycode;
     prams = prams + "&linkcode="+linkcode;
     prams = prams + "&picode="+picode;
     prams = prams + "&groupid="+this.groupid;

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

     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=webits";
     prams = prams + "&pid="+this.pid;
     prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     prams = prams + "&storycode="+storycode;
     prams = prams + "&linkcode="+linkcode;
     prams = prams + "&picode="+picode;
     prams = prams + "&groupid="+this.groupid;

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


