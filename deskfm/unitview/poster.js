
function poster(idtogo,trung,tparvar,tvarname,bmini) { 

   this.spotid = idtogo;
   this.parvar = tparvar;
   this.varname = tvarname;
   this.rung = trung;

   this.listype = "";
   this.dadex=0;

   this.stored = false;
   this.source = "deskfm";
 
   this.is_mini = false;
   if (bmini != undefined) {
      this.is_mini = bmini;
   }
   this.mini_viewer = null;
   this.mini_showing = false;

   this.showing = false;
   this.rungster = this.spotid + "_" + this.rung;

   this.pid = "";
   this.story="";
   this.story_tmp;
   this.picurl ="";
   this.created_at = "";
   this.change_date = "";
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

   this.uname = "";
   this.uname_tmp = "";
   this.groupid = "";
   this.emailaddr = "";
   this.facebookid = "";
   this.twitterid = "";
   this.googleid = "";

   this.piczoom = false;
   this.color = "black";

   this.changed = false;
   this.name_changed = false;
   this.story_changed = false;
   this.pic_changed = false;
   this.link_changed = false;
   this.embed_changed = false;   
   this.cat_changed = false;
   this.group_changed = false;

}


poster.prototype.set_ppid = function(pdadex,plistype) {
   var s = "";
   var pobj = null;
   
   if (pdadex != undefined) {
     this.dadex = pdadex;
   }

   if (plistype != undefined) {
       this.listype = plistype;
   } 

    this.stored = true;
    if (this.listype == "webits") {
        s =  "amare.webitlist[" + pdadex + "]";
    } else if (this.listype == "people") {
        s =  "amare.peoplelist[" + pdadex + "]";
    } else if (this.listype == "products") {
        s =  "amare.productlist[" + pdadex + "]";
    } else if (this.listype == "suppliers") {
        s =  "amare.supplierlist[" + pdadex + "]";
    } else if (this.listype == "unsorted") {
        s =  "amare.unsortedlist[" + pdadex + "]";
    } else if (this.listype == "unsaved") {
        s =  "amare.unsavedlist[" + pdadex + "]";
	this.stored = false;
    } else if (this.listype == "newbie") {
        s =  "amare.newbielist[" + pdadex + "]";
	this.stored = false;
    } 

    pobj = eval(s);
  
    if (pobj != null) {

      this.pid=pobj.pid;
      this.uname=pobj.uname;
      this.listype=pobj.listype;
      this.stored=pobj.stored;
      this.source=pobj.source;
 
      this.created_at=pobj.created_at;
      this.change_date=pobj.change_date;

      this.picurl=pobj.picurl;
      this.linkurl=pobj.linkurl;
      this.story=pobj.story;         

      if ((pobj.listype == "webits") || (pobj.listype == "newbie") || (pobj.listype == "unsaved")) {
        this.cat=pobj.cat;
        this.subcat=pobj.subcat;

        if (buddah == true) {
          this.groupid = amare.get_person_group(this.uname);
        }

      }

      if (pobj.listype == "products") {
        this.product_type=pobj.product_type;
        this.price=pobj.price;
      }

      if (pobj.listype == "people") {
        this.groupid=pobj.groupid;
        this.set_mini();
        this.mini_showing = true;
      }
     
      if (pobj.listype == "suppliers")  {
         this.set_mini();
         this.mini_showing = true;
      }
      
      this.changed = false;
      this.story_changed = false;
      this.pic_changed = false;
      this.link_changed = false;
      this.embed_changed = false;   
      this.cat_changed = false;
      this.group_changed = false;

       if (pobj.listype == "unsaved")  { 
    	   this.changed = true;
           if ((pobj.story != "") && (pobj.story != undefined)) {
	     this.story_changed = true;
           }
	   if ((pobj.picurl != "")  && (pobj.picurl != undefined)){
	      this.pic_changed = true;
	   }
	   if ((pobj.linkurl != "") && (pobj.linkurl != undefined)) {
	      this.link_changed = true;
	   }
	   if ((pobj.embedurl != "") && (pobj.embedurl != undefined)) {
	      this.embed_changed = true;   
	   }
	   if ((pobj.cat != "") && (pobj.cat != undefined)) {
	     this.cat_changed = true;
	   }
	   if ((pobj.groupid != "") && (pobj.groupid != undefined)) {
	     this.group_changed = true;
	   }
       }   
    }
   
}


poster.prototype.nav_btns = function() {

   var tmp = "";
   var lbl = "";
   var ocl = "";
   var src = "";

         if (this.listype == "people") {
                ocl = this.varname + ".toggle_mini();";
                lbl = this.rungster + "_mini_btn";
                tmp = tmp + "<span  id='"+lbl+"'  onclick='"+ocl+"'  >";
                tmp = tmp + "<img src='deskfm/images/icons/layers.png' height='20px' >";
                tmp = tmp + "</span>";

                ocl = "amare.get_cperson_list(\""+this.uname+"\");";
                lbl = this.rungster + "_refresh_mini";
                tmp = tmp + "<span  id='"+lbl+"'  onclick='"+ocl+"' >";
                tmp = tmp + "<img src='deskfm/images/icons/refresh.png' height='20px' >";
                tmp = tmp + "</span>";
         }

         if (this.listype == "suppliers") {
                ocl = this.varname + ".toggle_mini();";
                lbl = this.rungster + "_mini_btn";
                tmp = tmp + "<span  id='"+lbl+"'  onclick='"+ocl+"'  >";
                tmp = tmp + "<img src='deskfm/images/icons/layers.png' height='20px' >";
                tmp = tmp + "</span>";
         }

      lbl = this.rungster + "_nav_btns";
      if (document.getElementById(lbl)!= null) {
            document.getElementById(lbl).innerHTML=tmp;
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



poster.prototype.do_undo = function() {
   if (this.pid == "") {
     this.clear();
   } else {
     this.set_ppid(this.dadex,this.listype);
   }
   this.changed = false;
   this.shape = "";
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
   this.embedurl = "";
   this.created_at = "";
   this.change_date = "";
   this.changed = false;
   this.shape="";
   this.redraw_rung();
}



 poster.prototype.add_webit = function() {

     var pcat="";

     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=" + this.listype;
     if (this.pid != "") {
       prams = prams + "&pid="+this.pid;
     }

     if (this.cat_changed == true) {
       prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     }
     if (this.story_changed == true) {
       prams = prams + "&story="+this.story;
     }

     if (this.link_changed == true) {
       prams = prams + "&link="+this.linkurl;
     }
     if (this.pic_changed == true) {
	  prams = prams + "&pic="+ this.picurl;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embed=" + this.embedurl;
     }
     if (this.group_changed == true) {
       prams = prams + "&groupid="+this.groupid;
     }

     var url = "";
     url = "deskfm/dbase/add_webit.php"+prams;
     url = encodeURI(url);
     this.changed = false;
     this.story_changed = false;
     this.pic_changed = false;
     this.link_changed = false;
     this.embed_changed = false;   
     this.cat_changed = false;
     this.group_changed = false;
//     alert(url);
     $.getJSON(url,function(json) {
          daviewer.editing = false;
          amare.update_webit(json.pobj);
     });
     sal.waiting();
}



 poster.prototype.update_webit = function() {

     var pcat="";
     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=" + this.listype;
     prams = prams + "&pid="+this.pid;

     if (this.created_at != undefined) {
       prams = prams + "&created_at="+this.created_at;
     }

     if (this.cat_changed == true) {
       prams = prams + "&cat="+this.cat+"&subcat="+this.subcat;
     }
     if (this.story_changed == true) {
       prams = prams + "&story=" + this.story;
     }

     if (this.link_changed == true) {
       prams = prams + "&link=" + this.linkurl;
     }
     if (this.pic_changed == true) {
	  prams = prams + "&pic=" + this.picurl;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embed=" + this.embedurl;
     }
     if (this.group_changed == true) {
       prams = prams + "&groupid=" + this.groupid;
     }

     var url = "";
     url = "deskfm/dbase/update_webit.php"+prams;
     url = encodeURI(url);
     this.changed = false;
     this.story_changed = false;
     this.pic_changed = false;
     this.link_changed = false;
     this.embed_changed = false;   
     this.cat_changed = false;
     this.group_changed = false;
//     alert(url);
     $.getJSON(url,function(json) {
           daviewer.editing = false;
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
           daviewer.editing = false;
          amare.update_one(json.pobj);
     });
     sal.waiting();
}


poster.prototype.add_product = function() {

     var linkcode = escape(this.linkurl);
     var storycode = escape(this.story);
     var embedcode = escape(this.embedurl);
     var picode = escape(this.picurl);

     var prams = "?uname="+this.uname+"&source="+this.source;
     prams = prams + "&listype=" + this.listype;
     if (this.pid != "") {
       prams = prams + "&pid="+this.pid;
     }

     if (this.story_changed == true) {
       prams = prams + "&storycode="+storycode;
     }

     if (this.link_changed == true) {
       prams = prams + "&linkcode="+linkcode;
     }
     if (this.pic_changed == true) {
	  prams = prams + "&picode="+ picode;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embedcode="+embedcode;
     }

     var url = "";
     url = "deskfm/dbase/add_product.php"+prams;
     this.changed = false;
     this.story_changed = false;
     this.pic_changed = false;
     this.link_changed = false;
     this.embed_changed = false;   
 //    alert(url);
     $.getJSON(url,function(json) {
           daviewer.editing = false;
          amare.update_product(json.pobj);
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
           daviewer.editing = false;
          amare.update_one(json.pobj);
     });
     sal.waiting();
}


 poster.prototype.add_supplier = function() {

     var pcat="";
     var linkcode = escape(this.linkurl);
     var storycode = escape(this.story);
     var embedcode = escape(this.embedurl);
     var picode = escape(this.picurl);

     var prams = "?pid="+this.pid;

     if (this.name_changed == true) {
       prams = prams + "&uname="+uname;
     }


     if (this.story_changed == true) {
       prams = prams + "&storycode="+storycode;
     }

     if (this.link_changed == true) {
       prams = prams + "&linkcode="+linkcode;
     }
     if (this.pic_changed == true) {
	  prams = prams + "&picode="+ picode;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embedcode="+embedcode;
     }

     var url = "";
     url = "deskfm/dbase/add_supplier.php"+prams;
     this.changed = false;
     this.story_changed = false;
     this.pic_changed = false;
     this.link_changed = false;
     this.embed_changed = false;   
//     alert(url);
     $.getJSON(url,function(json) {
           daviewer.editing = false;
          amare.update_supplier(json.pobj);
     });
     sal.waiting();
}


poster.prototype.update_supplier = function() {

     var pcat="";
     var linkcode = encodeURI(this.linkurl);
     var storycode = encodeURI(this.story);
     var picode = encodeURI(this.picurl);

       var prams = "?pid="+this.pid;

     if (this.name_changed == true) {
       prams = prams + "&uname=" + this.uname;
     }

     if (this.story_changed == true) {
       prams = prams + "&storycode="+storycode;
     }

     if (this.link_changed == true) {
       prams = prams + "&linkcode="+linkcode;
     }
     if (this.pic_changed == true) {
	  prams = prams + "&picode="+ picode;
     }
     if (this.embed_changed == true) {
       prams = prams + "&embedcode="+embedcode;
     }

     var url = "deskfm/dbase/update_supplier.php"+prams;
//     alert(url);
     $.getJSON(url,function(json) {
           daviewer.editing = false;
          amare.update_supplier(json.pobj);
     });
     sal.waiting();
}



 poster.prototype.del_post = function() {

     var prams = "?pid="+this.pid+"&uname="+this.uname+"&source="+this.source; 
      prams = prams + "&listype="+this.listype;

     var url = "deskfm/dbase/dfm_dbdel.php"+prams;


//     alert(url);
     $.getJSON(url,function(json) {
           daviewer.editing = false;
           amare.del_one(json.pid);
     });
    sal.waiting();
}


