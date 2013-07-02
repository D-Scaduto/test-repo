

function stat () { 

    this.listype="";
    this.cat="";
    this.subcat="";
    this.prodid="";
    this.groupid="";
    this.lnum = 0;
    this.cnum=0;
    this.desc="";
    this.last_chunk=0;
    this.max_chunks=0;
}


stat.prototype.next_chunk = function() {

   var ret =0;
   var t = parseInt(this.last_chunk) + 1;
   if (t <= this.max_chunks) {
	   ret = t;
   }
   return ret;

}



function stater () { 

   this.substats = [];
   this.prodstats = [];
   this.groupstats = [];


   this.total_sorted = new stat();
   this.total_people = new stat();
   this.total_products = new stat ();
   this.total_unsorted = new stat();

}


stater.prototype.get_stats = function() {
   var url='deskfm/dbase/get_stats.php';
//   alert(url);
   $.getJSON(url,function(json) {
       update_stats(json);
   });    
   sal.waiting();

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
	st.max_chunks = Math.round(st.cnum/da_limit);
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
	st.max_chunks = Math.round(st.cnum/da_limit);
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
	st.max_chunks = Math.round(st.cnum/da_limit);
        st.desc = tp.get_desc(st.prodid);
        st.listype = "products";
        amare.prodstats.push(st);
     }


      amare.total_unsorted.cnum = statobj.total_unsorted;
      amare.total_unsorted.max_chunks = Math.round(amare.total_unsorted.cnum/da_limit);

      amare.total_sorted.cnum = statobj.total_sorted;
      amare.total_sorted.max_chunks = Math.round(amare.total_sorted.cnum/da_limit);

      amare.total_people.cnum = statobj.total_people;  
      amare.total_people.max_chunks = Math.round(amare.total_people.cnum/da_limit);

      amare.total_products.cnum = statobj.total_products;
      amare.total_products.max_chunks = Math.round(amare.total_products.cnum/da_limit);

      amare.count_lstats();
      amare.count_lpstats();

      got_stats = true;
      if (init_run == true) {
         amare.count_lstats();
         init_run = false;
         diego.redraw_view("webits");
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
    this.total_sorted.lnum = 0;

    var d=0;
    for (d=0;d<webitlist.length;d++) {
      if (webitlist[d] != undefined) {
        var c = webitlist[d].cat;
        var s = webitlist[d].subcat;
        if ((c != "") && (s != "")) {
	     this.total_sorted.lnum = this.total_sorted.lnum + 1;
	}

        for (var k=0; k<this.substats.length; k++) {
           
           if ((this.substats[k].cat == c) && (this.substats[k].subcat == s)) {
              this.substats[k].lnum = this.substats[k].lnum + 1;
           }
        }
      }
    } 

    for (d=0;d<productlist.length;d++) {
      if (productlist[d] != undefined) {
        var p = productlist[d].prodid;
        for (var l=0; l<this.prodstats.length; l++) {
          if (this.prodstats[l].prodid == p) {
            this.prodstats[l].lnum = this.prodstats[l].lnum + 1;
          }
        }
      }
    } 

}



stater.prototype.count_lpstats = function() {
    var i=0;
    this.total_people.lnum = 0;
    for (i=0; i<this.groupstats.length; i++) {
          this.groupstats[i].lnum = 0;
    }
    var d=0;
    var g = 0;
    for (d=0;d<peoplelist.length;d++) {
      if (peoplelist[d] != undefined) {
        g = peoplelist[d].groupid;
        if (peoplelist[d].groupid == "") {
  	    this.total_people.lnum = this.total_people.lnum + 1;
	} else {	
	  for (var l=0; l<this.groupstats.length; l++) {
            if (this.groupstats[l].groupid == g) {
              this.groupstats[l].lnum = this.groupstats[l].lnum + 1;
            }
          }
	}
     }
   }

}



stater.prototype.get_catstat = function(tcat,tsubcat) {
  var ret = null;

     if (tcat == "all") {

	  return this.total_sorted;

     } else {
    
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
     if (tp == "") {
        ret = this.total_people;
     } else {
       for (var i=0; i<this.groupstats.length; i++) {
        if (this.groupstats[i].groupid == tp) {
              ret = amare.groupstats[i];
         }
       }
     }
    return ret;
}


stater.prototype.get_person_group = function(tname) {
    var ret = "";
    for (var i=0; i<peoplelist.length; i++) {
        if (peoplelist[i].uname == tname) {
              ret = peoplelist[i].groupid;
        }
    }
    return ret;
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





stater.prototype.get_webits = function(tchunk) {
   var url='deskfm/dbase/get_webits.php';
   url = url + "?lim="+ da_limit;
   var c = ""
   if (tchunk != undefined) {
      c = tchunk;
   } else {
      c = this.total_sorted.next_chunk();
   }
   url = url + "&chunk="+ c;
//   alert(url);
   $.getJSON(url,function(json) {
      update_webits(json);
   });   
   sal.waiting();
}
  


stater.prototype.get_people = function(tchunk) {
   var url='deskfm/dbase/dfm_people.php';
   url = url + "?lim="+ da_limit;
   var c = ""
   if (tchunk != undefined) {
      c = tchunk;
   } else {
      c = this.total_people.next_chunk();
   }
   url = url + "&chunk="+ c;
//   alert(url);
   $.getJSON(url,function(json) {
       update_people(json);
   });   // end get json 
   sal.waiting();
}



stater.prototype.get_group_list = function(pgroupid) {
   var url='deskfm/dbase/dfm_people.php';
   url = url + "?lim="+ da_limit;
   url = url + "&groupid="+ pgroupid;

//   var c = ""
//   c = this.total_sorted.next_chunk();
//   url = url + "&chunk="+ c;
//
//  alert(url);
   $.getJSON(url,function(json) {
       update_people(json);
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

   $.getJSON(url,function(json) {
      add_unsorted(json);
   });   
   sal.waiting();
}


stater.prototype.get_products = function() {

  var url='deskfm/dbase/get_products.php';
  //  alert(url);
  $.getJSON(url,function(json) {
      update_products(json);
   });   
   sal.waiting();
} 

stater.prototype.get_providers = function() {
   var url='deskfm/dbase/get_providers.php';
//  alert(url);
   $.getJSON(url,function(json) {
       update_providers(json);
   });   // end get json 
   sal.waiting();
}




stater.prototype.get_random_list = function() {
  var url='deskfm/dbase/dfm_dbrand.php';
  url = url + "?lim="+ da_limit;
  var p = this.boss;
  url = url + "&rand="+Math.random();
  //alert(url);
  $.getJSON(url,function(json) {
      update_webitlist(json,p);
  });   // end get json 
}



 stater.prototype.get_product_list = function(tprod) {

   var url='deskfm/dbase/dfm_dbget.php';
    url = url + "?lim="+ da_limit;
    if (tprod != undefined ) {
       url = url + "&prodid="+ tprod;
       this.prodids = [];
       this.prodids.push(tprod);
    }
  $.getJSON(url,function(json) {
      update_products(json);
   });   // end get json a
  sal.waiting();
}  



 stater.prototype.get_time_list = function() {
   var url='deskfm/dbase/dfm_dbget.php';
    url = url + "?lim="+ da_limit;
    url = url + "&yr="+ da_year;
    url = url + "&mon="+ da_month;
 // alert(url);
  $.getJSON(url,function(json) {
      update_webits(json);
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

//    alert(url);
    $.getJSON(url,function(json) {
      update_webits(json);
    });   
  sal.waiting();
}  



stater.prototype.get_csearch_list = function(tsterms) {

   var url='deskfm/dbase/dfm_dbget.php';
   url = url + "?lim="+ da_limit;
   if ((tsterms != "") &&  (tsterms != undefined)){
     url = url + "&sterms="+ tsterms;
     this.sterms = tsterms;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      update_webits(json);
   });   // end get json 
}  


stater.prototype.get_cperson_list = function(tuname) {

   var url='deskfm/dbase/dfm_dbget.php';
   url = url + "?lim="+ da_limit;
   if ((tuname != "") &&  (tuname != undefined)){
     url = url + "&uname="+ tuname;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      update_webits(json);
   });   // end get json 
}  


