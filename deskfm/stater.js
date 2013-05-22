

function stat () { 
    this.listype="";
    this.cat="";
    this.subcat="";
    this.prodid="";
    this.groupid="";
    this.lnum = 0;
    this.cnum=0;
    this.desc="";
    this.top_chunk=0;
}


stat.prototype.next_chunk = function() {
   var ret =0;
   var max_chunks = this.cnum / da_limit;
   var cur_chunk = this.lnum / da_limit;
   var next_chunk = cur_chunk + 1;
   if (next_chunk < max_chunks) {
     ret = next_chunk;
   }
   return ret;
}

stat.prototype.draw = function() {

   var lbl = "";
   var tmp = "";
   var ocl1 = "";
   var ocl2 = "";
   var ts = null;

    if (this.listype == "webits") {
              lbl = "subcat_stats_"+this.cat + "_"+this.subcat;
              ocl1="amare.toggle_zonein();";
              ocl1 = ocl1 + "amare.set_subcat(\""+this.cat+"\",\""+this.subcat+"\");";
              ocl2 = "amare.get_cat_list(\""+this.cat+"\",\""+this.subcat+"\");";
    } else if (this.listype == "people") {
              lbl = "group_stats_"+this.groupid;
              ocl1="amare.toggle_zonein();";
              ocl1 = ocl1 + "amare.set_group(\""+this.groupid+"\");";
              ocl2 = "amare.get_group_list(\""+this.groupid+"\");";
    } else  if (this.listype == "products") {
              lbl = "prod_stats_"+this.prodid;
              ocl1="amare.toggle_zonein();";
              ocl1 = ocl1 + "amare.set_product(\""+this.prodid+"\");";
              ocl2 = "amare.get_prod_list(\""+this.prodid+"\");";
    } else {
    }
        tmp = tmp + "<div>";
        tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl1+"' style='float:left;'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
        tmp = tmp +  this.desc;
        tmp = tmp + "</span>";

        tmp = tmp + "<span style='float:right;'  >";

        lbl = lbl +"_lnum";
        tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style=''  onclick=''  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
        tst =  this.lnum ;  
        tmp = tmp + tst;
        tmp = tmp + "</span>";

        lbl = lbl +"_cnum";
        tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style=''  onclick='"+ocl2+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
        tst =  " of " + this.cnum;  
        tmp = tmp + tst;
        tmp = tmp + "</span>";
        tmp = tmp + "</span>";

        tmp = tmp + "</div>";
        tmp = tmp + "<div style='clear:left;' >";
        tmp = tmp + "</div>";

      return tmp;

}



function stater (pspotid) { 

   this.spotid = pspotid;
   this.showing =false;
   this.zonein = false;

   this.key="";

   this.cat="";
   this.subcat="";
   this.substats = [];
   this.chunkset = [];

   this.prodid="";
   this.prodstats = [];

   this.groupid="";
   this.groupstats = [];

}


stater.prototype.show = function() {
      this.showing = true;
      this.draw_keystats();
}

stater.prototype.draw_keystats = function() {

   var lbl = "";
   var tmp = "";
   var ds = "";

          tmp = tmp + "<div>";
          tmp = tmp + "<span>";
          lbl = "stats_data_btn";
          ocl = "wanda.toggle();";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " search ";
          tmp = tmp + "</span>";

          tmp = tmp + "<span id='search_sog' >";

          tmp = tmp + "<span>";
          lbl = "stats_products";
          ocl = "amare.set_key(\"products\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " products ";
          tmp = tmp + "</span>";

          lbl = "stats_peopler";
          ocl = "amare.set_key(\"people\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " people ";
          tmp = tmp + "</span>";
/*
          lbl = "stats_providers";
          ocl = "amare.set_key(\"providers\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " providers ";
          tmp = tmp +  this.total_providers ;
          tmp = tmp + "</span>";
*/
          lbl = "stats_webits";
          ocl = "amare.set_key(\"webits\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " webits ";
          tmp = tmp + "</span>";

          lbl = "stats_fill";
          ocl = "amare.set_key(\"feeds\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " feeds ";
          tmp = tmp + "</span>";

          tmp = tmp + "</span>";

       tmp = tmp + "</div>";

       tmp = tmp + "<div id='stats_spot' style='width:400px;background-color:white;' >";
       tmp = tmp + "</div>";

   lbl = "mobile_top";
   if (document.getElementById(lbl)!= null) {
      document.getElementById(lbl).innerHTML=tmp;
      if (this.key == "feeds") {
          this.draw_feedcon();
      } else { 
          this.draw_drillstats();
      }
   }
}

stater.prototype.draw_cats = function() {

   var tmp = "";

          tmp = tmp + "<div>";
          tmp = tmp + "<span>";
          lbl = "stats_cat_who";
          ocl = "amare.set_cat(\"who\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " who ";
          tmp = tmp + "</span>";

          tmp = tmp + "<span>";
          lbl = "stats_cat_what";
          ocl = "amare.set_cat(\"what\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " what ";
          tmp = tmp + "</span>";

          tmp = tmp + "<span>";
          lbl = "stats_cat_why";
          ocl = "amare.set_cat(\"why\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " why ";
          tmp = tmp + "</span>";

          tmp = tmp + "<span>";
          lbl = "stats_cat_how";
          ocl = "amare.set_cat(\"how\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " how ";
          tmp = tmp + "</span>";

          tmp = tmp + "<span>";
          lbl = "stats_cat_sort";
          ocl = "amare.set_cat(\"\")";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          tmp = tmp +  " unsorted ";
          tmp = tmp + "</span>";


     return tmp;

}

stater.prototype.draw_drillstats = function() {

   var lbl = "";
   var tmp = "";
   var ds = "";
   var ts = null;
   var tst = "";

      if (this.key == "products") {
             ts = this.get_prodstat(this.prodid);
             if (ts != null) { 
                   tmp = tmp + ts.draw();
             }
      } else if (this.key == "people") {
             ts = this.get_groupstat(this.groupid);
             if (ts != null) { 
                   tmp = tmp + ts.draw();
             }
      } else if (this.key == "providers") {

      } else  if (this.key == "webits") {
             tmp = tmp + this.draw_cats();
             ts = this.get_catstat(this.cat,this.subcat);
             if (ts != null) { 
                   tmp = tmp + ts.draw();
             }
     }

   if (this.zonein == false) {
      var j=0;
      if (this.key == "products") {
             for  (j=0; (j < this.prodstats.length); j++) {
                if (this.prodstats[j].prodid != this.prodid) {
                   tmp = tmp + this.prodstats[j].draw();
                }
             }
      } else if (this.key == "people") {
             for (j=0; (j < this.groupstats.length); j++) {
                if (this.groupstats[j].groupid != this.groupid) {
                    tmp = tmp + this.groupstats[j].draw();
                }
             }
      } else if (this.key == "providers") {
      } else  if (this.key == "webits") {
             for (j=0; (j < this.substats.length); j++) {
                if (this.substats[j].cat == this.cat)  {
                  if ( this.substats[j].subcat != this.subcat) {
                     tmp = tmp + this.substats[j].draw();
                  }
                }
             } 
      }
   }
   
   lbl = 'stats_spot';
   if (document.getElementById(lbl)!= null) {
      document.getElementById(lbl).innerHTML=tmp;
      if (this.key == "people") {
          daviewer.load_peeplist(this.groupid);
          daviewer.draw_screen();
      } else if (this.key == "products") {
           daviewer.set_prodscreen(this.prodid);
      } else if (this.key == "providers") {
           daviewer.set_providerscreen(this.provider_id);
      } else if (this.key == "webits") {
           daviewer.set_catscreen(this.cat,this.subcat);
      } else { 
           daviewer.load_random_list();
           daviewer.draw_view();
      }
   }
}

function update_stats(statobj) {
   if (statobj != undefined) {

     var tp = new subcat_provider();
     var s = "";
     var st = null;
     var z=0;
     for (z=0; z<statobj.subs.length;z++) {
        st = new stat();
        st.cat=statobj.subs[z].cat;
        st.subcat=statobj.subs[z].subcat;
        st.cnum=statobj.subs[z].cnum;
        st.desc = tp.get_desc(st.cat,st.subcat);
        st.listype = "webits";
        amare.substats.push(st);
     }

     tp = new group_provider();
     s = "";
     for (z=0; z<statobj.groups.length;z++) {
        st = new stat();
        st.groupid=statobj.groups[z].groupid;
        st.cnum=statobj.groups[z].cnum;
        st.desc = tp.get_desc(st.groupid);
        st.listype = "people";
        amare.groupstats.push(st);
     }

     tp = new product_provider();
     s = "";
     for (z=0; z<statobj.prods.length;z++) {
        st = new stat();
        st.prodid=statobj.prods[z].prodid;
        st.cnum=statobj.prods[z].cnum;
        st.desc = tp.get_desc(st.prodid);
        st.listype = "products";
        amare.prodstats.push(st);
     }

       amare.count_lstats();
       amare.count_lpstats();

       daviewer.draw_rail();
       calls_out--; 
       if (calls_out <= 0) {
          sal.draw_vman();
      }
   }
}  


stater.prototype.count_lpstats = function() {
     var i=0
     for (i=0; i<this.groupstats.length; i++) {
          this.groupstats[i].lnum = 0;
     }
    var d=0;
    for (d=0;d<peeplist.length;d++) {
      if (peeplist[d] != undefined) {
        var g = peeplist[d].groupid;
        for (var l=0; l<this.groupstats.length; l++) {
          if (this.groupstats[l].groupid == g) {
            this.groupstats[l].lnum = this.groupstats[l].lnum + 1;
          }
        }
     }
   } 
}


stater.prototype.count_lstats = function() {
     var i=0
     for (i=0; i<this.substats.length; i++) {
          this.substats[i].lnum = 0;
     }
     for (i=0; i<this.prodstats.length; i++) {
          this.prodstats[i].lnum = 0;
     }
    var d=0;
    for (d=0;d<dalist.length;d++) {
      if (dalist[d] != undefined) {
        var c = dalist[d].cat;
        var s = dalist[d].subcat;
          for (var k=0; k<this.substats.length; k++) {
            if ((this.substats[k].cat ==c) && (this.substats[k].subcat == s)) {
               this.substats[k].lnum = this.substats[k].lnum + 1;
            }
          }
     }
   } 
    for (d=0;d<prodlist.length;d++) {
      if (prodlist[d] != undefined) {
        var p = prodlist[d].prodid;
        for (var l=0; l<this.prodstats.length; l++) {
          if (this.prodstats[l].prodid == p) {
            this.prodstats[l].lnum = this.prodstats[l].lnum + 1;
          }
        }
     }
   } 

}


stater.prototype.get_catstat = function(tcat,tsubcat) {
  var ret = null;
     if ((tsubcat != undefined)&& (tcat != undefined)) {
        for (var i=0; (i < amare.substats.length); i++) {
          if ((amare.substats[i].cat ==tcat) && (amare.substats[i].subcat == tsubcat)) {
              ret = amare.substats[i];
          }
        }
     }
  return ret;
}

stater.prototype.get_prodstat = function(tp) {
    var ret = null;
     for (var i=0; i<this.prodstats.length; i++) {
        if (this.prodstats[i].prodid == tp) {
              ret = amare.prodstats[i];
        }
     }
    return ret;
}


stater.prototype.get_groupstat = function(tp) {
    var ret = null;
     for (var i=0; i<this.groupstats.length; i++) {
        if (this.groupstats[i].groupid == tp) {
              ret = amare.groupstats[i];
         }
     }
    return ret;
}




stater.prototype.get_person_group = function(tname) {
    var ret = "";
    for (var i=0; i<peeplist.length; i++) {
        if (peeplist[i].uname == tname) {
              ret = peeplist[i].groupid;
        }
    }
    return ret;
}


stater.prototype.set_group = function (tgroupid) {
  if (tgroupid != undefined) {
    this.groupid = tgroupid;
  }
  this.draw_drillstats();
}


stater.prototype.set_product = function (tproduct) {
  if (tproduct != undefined) {
    this.prodid = tproduct;
  }
  this.draw_drillstats();
}


stater.prototype.set_cat = function (tcat) {
  if (tcat != undefined) {
    this.cat = tcat;
  }
  this.subcat = "";
  this.draw_drillstats();
}



stater.prototype.set_subcat = function (tcat,tsubcat) {
  if (tcat != undefined) {
    this.cat = tcat;
  }
  if (tsubcat != undefined) {
    this.subcat = tsubcat;
  }
  this.draw_drillstats();
}


stater.prototype.set_key = function (tkey) {
  if (tkey != undefined) {
    this.key = tkey;
  }
  this.zonein = false;
  this.draw_keystats();
}




stater.prototype.check_feed = function() {

   var lbl = "";
   var tmp = "";
   var s="";
   lbl = 'feed_string';
   if (document.getElementById(lbl)!= null) {
      s = document.getElementById(lbl).value;
      tws_get(s); 
   }

}

 
stater.prototype.draw_feedcon = function() {
   var lbl = "";
   var tmp = "";
   var ds = "";
       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "twitter";
       tmp = tmp + "</span>";
       tmp = tmp + "<span class='spotd_off' >";
       tmp = tmp + "<input id='feed_string' size='10' >";
       tmp = tmp + "</span>";
       tmp = tmp + "<span class='spotd_off' onclick='amare.check_feed();' >";
       tmp = tmp + "check";
       tmp = tmp + "</span>";
       tmp = tmp + "<span id='feed_btns'  >";
       tmp = tmp + "</span>";

   lbl = 'stats_spot';
   if (document.getElementById(lbl)!= null) {
      document.getElementById(lbl).innerHTML=tmp;
   }
}


stater.prototype.toggle_zonein = function () {

   if (this.zonein == true ) {
       this.zonein = false;
   } else {
       this.zonein = true;
   }
   this.draw_drillstats();
}




stater.prototype.toggle = function () {

   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


stater.prototype.hide = function () {

   lbl = this.spotid;
   if (document.getElementById(lbl) != null ) { 
     document.getElementById(lbl).innerHTML=""; 
   }
   this.showing = false;
}


stater.prototype.true_count = function() {

    var true_count = 0; 
    for (var i=0; (i < amare.chunkset.length); i++) {
      if (amare.chunkset[i] == true) {
        true_count = true_count + 1;
      }
    }
    return true_count;
}




stater.prototype.get_stats = function() {
   var url='deskfm/dbase/get_stats.php';
//   alert(url);
   $.getJSON(url,function(json) {
       update_stats(json);
   });    
   sal.waiting();

}  


 stater.prototype.get_products = function() {

  var url='deskfm/dbase/get_products.php';
  //  alert(url);
  calls_out++;
  $.getJSON(url,function(json) {
      update_prodlist(json);
   });   // end get json 
   sal.waiting();
}  


stater.prototype.get_unsorted = function(tchunk) {
   var url='deskfm/dbase/get_unsorted.php';
   url = url + "?lim="+ da_limit;

    if (tchunk != undefined) {
       url = url + "&chunk="+ tchunk;
    } 

//  alert(url);

   calls_out++;
   $.getJSON(url,function(json) {
      add_unsorted_webits(json);
      add_unsorted_people(json);
   });   // end get json 
   sal.waiting();
}

stater.prototype.get_webits = function(tchunk) {
   var url='deskfm/dbase/get_webits.php';
   url = url + "?lim="+ da_limit;
    if (tchunk != undefined) {
       url = url + "&chunk="+ tchunk;
    } 
 // alert(url);
   calls_out++;
   $.getJSON(url,function(json) {
      update_list(json);
   });   // end get json 
   sal.waiting();
}
  

stater.prototype.get_providers = function() {
   var url='deskfm/dbase/get_providers.php';
//  alert(url);
   calls_out++;
   $.getJSON(url,function(json) {
       update_providers(json);
   });   // end get json 
   sal.waiting();
}



stater.prototype.get_people = function(tchunk) {
   var url='deskfm/dbase/dfm_people.php';
   url = url + "?lim="+ da_limit;

    if (tchunk != undefined) {
       url = url + "&chunk="+ tchunk;
    } 
//  alert(url);
   calls_out++;
   $.getJSON(url,function(json) {
       update_people(json);
   });   // end get json 
   sal.waiting();
}


stater.prototype.get_group_list = function(pgroupid) {
   var url='deskfm/dbase/dfm_people.php';
   url = url + "?lim="+ da_limit;
   url = url + "&groupid="+ pgroupid;
/*
    if (tchunk != undefined) {
       url = url + "&chunk="+ tchunk;
    } 
*/
//  alert(url);
   calls_out++;
   $.getJSON(url,function(json) {
       update_people(json);
   });   // end get json 
   sal.waiting();
}


stater.prototype.get_random_list = function() {
  var url='deskfm/dbase/dfm_dbrand.php';
  url = url + "?lim="+ da_limit;
  var p = this.boss;
  url = url + "&rand="+Math.random();
  //alert(url);
  calls_out++;
  $.getJSON(url,function(json) {
      update_list(json,p);
  });   // end get json 
}


 stater.prototype.get_cat_list = function(tcat,tsubcat) {

   var url='deskfm/dbase/dfm_dbget.php';
    url = url + "?lim="+ da_limit;
    if (tcat != undefined ) {
       url = url + "&cat="+ tcat;
       this.cat = tcat;
    }
    if (tsubcat != undefined) {
       url = url + "&subcat="+ tsubcat;
       this.subcat=tsubcat;
    } 

    var st =this.get_catstat(tcat,tsubcat);
    if (st != null) {
       url = url + "&chunk="+ st.next_chunk();
    }

//   alert(url);
    calls_out++;
    $.getJSON(url,function(json) {
      update_list(json);
    });   
  sal.waiting();
}  


 stater.prototype.get_product_list = function(tprod) {

   var url='deskfm/dbase/dfm_dbget.php';
    url = url + "?lim="+ da_limit;
    if (tprod != undefined ) {
       url = url + "&prodid="+ tprod;
       this.prodids = [];
       this.prodids.push(tprod);
    }
    calls_out++;
  $.getJSON(url,function(json) {
      update_list(json);
   });   // end get json a
  sal.waiting();
}  



 stater.prototype.get_time_list = function() {
   var url='deskfm/dbase/dfm_dbget.php';
    url = url + "?lim="+ da_limit;
    url = url + "&yr="+ da_year;
    url = url + "&mon="+ da_month;
 // alert(url);
    calls_out++;
  $.getJSON(url,function(json) {
      update_list(json);
   });   // end get json 
}  



stater.prototype.get_csearch_list = function(tsterms) {

   var url='deskfm/dbase/dfm_dbget.php';
   url = url + "?lim="+ da_limit;
   if ((tsterms != "") &&  (tsterms != undefined)){
     url = url + "&sterms="+ tsterms;
     this.sterms = tsterms;
   } 
   calls_out++;
//   alert(url);
   $.getJSON(url,function(json) {
      update_list(json);
   });   // end get json 
}  


stater.prototype.get_cperson_list = function(tuname) {

   var url='deskfm/dbase/dfm_dbget.php';
   url = url + "?lim="+ da_limit;
   if ((tuname != "") &&  (tuname != undefined)){
     url = url + "&uname="+ tuname;
   } 
   calls_out++;
//   alert(url);
   $.getJSON(url,function(json) {
      update_list(json);
   });   // end get json 
}  


