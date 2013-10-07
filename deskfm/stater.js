
function stat () { 

    this.cat="";
    this.subcat="";
    this.sterms="";
    this.prodid="";
    this.groupid="";
    this.month;
    this.year;
    this.desc="";
    this.listype="";
    this.lnum;
    this.cnum;
    this.last_chunk = -1;
    this.max_chunks;
}


function stater () { 
 
   this.webitlist = [];
   this.peoplelist = [];
   this.productlist = [];
   this.supplierlist = [];
   this.unsortedlist = [];
   this.unsavedlist = [];

   this.substats = [];
   this.prodstats = [];
   this.groupstats = [];
   this.monthstats = [];
   this.searchstats = [];

   this.total_sorted = new stat();
   this.total_people = new stat();
   this.total_products = new stat ();
   this.total_suppliers = new stat();
   this.total_unsorted = new stat();
   this.total_unsaved = new stat();

   this.cat_set = new cat_provider();
   this.subcat_set = new subcat_provider();
   this.group_set = new group_provider();
   this.product_set = new product_provider();

   this.got_webits = false;
   this.got_stats = false;

}


stater.prototype.get_stats = function() {

   var url='deskfm/dbase/get_stats.php';
//   alert(url);
   $.getJSON(url,function(json) {
       amare.update_stats(json);
   });    
   sal.waiting();

} 


stater.prototype.update_stats = function (statobj) {

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
        st.last_chunk=-1;
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
        st.last_chunk=0;
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

     s = "";
     for (z=0; z<statobj.months.length;z++) {
        st = new stat();
        st.month=statobj.months[z].month;
        st.year=statobj.months[z].year;
        st.cnum=statobj.months[z].cnum;
	st.max_chunks = Math.round(st.cnum/da_limit);
        st.listype = "unsorted";
        st.last_chunk=-1;
        amare.monthstats.push(st);
     }

      amare.total_unsorted.listype = "unsorted";
      amare.total_unsorted.cnum = statobj.total_unsorted;
      amare.total_unsorted.max_chunks = Math.round(amare.total_unsorted.cnum/da_limit);
      amare.total_unsorted.last_chunk = -1;
      amare.total_unsorted.cat = "";

      amare.total_sorted.listype = "webits";
      amare.total_sorted.cnum = statobj.total_sorted;
      amare.total_sorted.max_chunks = Math.round(amare.total_sorted.cnum/da_limit);
      amare.total_sorted.last_chunk = -1;
      amare.total_sorted.cat = "all";

      amare.total_people.listype = "people";
      amare.total_people.cnum = statobj.total_people;  
      amare.total_people.max_chunks = Math.round(amare.total_people.cnum/da_limit);
      amare.total_people.last_chunk = -1;

      amare.total_products.listype = "products";
      amare.total_products.cnum = statobj.total_products;
      amare.total_products.max_chunks = Math.round(amare.total_products.cnum/da_limit);
      amare.total_products.last_chunk = -1;

      amare.total_suppliers.listype = "suppliers";
      amare.total_suppliers.cnum = statobj.total_suppliers;
      amare.total_suppliers.max_chunks = Math.round(amare.total_suppliers.cnum/da_limit);
      amare.total_suppliers.last_chunk = -1;

      amare.total_unsaved.listype = "unsaved";
      amare.total_unsaved.lnum = 0;
      amare.total_unsaved.cnum = 0;
      amare.total_unsaved.max_chunks = -1;
      amare.total_unsaved.last_chunk = -1;

      amare.count_lwstats();
      amare.count_lpstats();
      amare.count_lustats();

      this.got_stats = true;

// alert("ir="+ init_run + " gw=" + this.got_webits + " gs="+this.got_stats);

     if (init_run == true) {
          if (buddah == true) {
	    if (this.got_unsorted == true) {
                 init_run = false;
                 this.total_unsorted.last_chunk=0;
                 daviewer.update_stat(this.total_unsorted);
                 daviewer.redraw_view();
            }
          } else {
            if (this.got_webits == true) {
                init_run = false;
                 this.total_sorted.last_chunk=0;
                 daviewer.update_stat(this.total_sorted);
                 daviewer.load_sorted_list();
                 daviewer.randomize_rungs();
             }
          }
      } else {
        daviewer.redraw_view();
      }
   }
}


stater.prototype.update_webits = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if (listobj == undefined) {
	       return;
       }

       var lstat = this.get_stat(listobj);

       if (lstat != null) {
          lstat.last_chunk = listobj.dachunk;
          daviewer.update_stat(lstat);
       } 

       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<this.webitlist.length;i++) {
                  if (this.webitlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.webitlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  this.webitlist[found_at] = listobj.dalist[j];
               } else {
                  this.webitlist.push(listobj.dalist[j]);
               }             
            }
         }
      }

      this.got_webits = true;
      this.count_lwstats();
 // alert("ir="+ init_run + " gw=" + this.got_webits + " gs="+this.got_stats);

     if (init_run == true) {
           if (buddah == false)  {
              if (this.got_stats == true) {
	         init_run = false;
                 this.total_sorted.last_chunk=0;
                 daviewer.update_stat(this.total_sorted);
                 daviewer.load_sorted_list();
                 daviewer.randomize_rungs();
               }
           }
      } else {
           daviewer.redraw_view();
      }
    
}  


stater.prototype.add_unsorted = function(listobj,bgrnd) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       var brefresh = true;
       if (bgrnd == true) {
         brefresh = false;
       }

       if (listobj == undefined) {
	       return;
       }

       if ( listobj.dalist.length > 0 ) { 
         	       
         for (var j=0;j<listobj.dalist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<this.unsortedlist.length;i++) {
                  if (this.unsortedlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.unsortedlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  this.unsortedlist.splice(found_at,1);
              }
              this.unsortedlist.unshift(listobj.dalist[j]);
         }
      }

      this.got_unsorted = true;
      this.count_lustats();

      if (init_run == true) {
            if (buddah == true)  {
              if (this.got_stats == true) {
	         init_run = false;
                 this.total_unsorted.last_chunk=0;
                 daviewer.update_stat(this.total_unsorted);
                 daviewer.redraw_view()
               }
           }
      } else {
          var lstat = this.get_stat(listobj);

          if (lstat != null) {
	    lstat.last_chunk = listobj.dachunk;
            if (brefresh == true) {
              daviewer.update_stat(lstat);
            }
          }

          daviewer.redraw_view();

          if ((buddah == true) && (diego.top_shape == "sort")) {
            mac.show();
          }

      }
}  


stater.prototype.update_people = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if ( listobj.peoplelist.length > 0 ) { 
         for (var j=0;j<listobj.peoplelist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<this.peoplelist.length;i++) {
                  if (this.peoplelist[i] != undefined) {
                    if (listobj.peoplelist[j].uname == this.peoplelist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  this.peoplelist.splice(found_at,1);
              }
              this.peoplelist.push(listobj.peoplelist[j]);
         }
      }

      this.got_people = true;
      this.count_lpstats();
      if (init_run == true) {
      } else {
  //       daviewer.redraw_view();
      }
}  



stater.prototype.count_lwstats = function() {

    var i=0
    for (i=0; i<this.substats.length; i++) {
          this.substats[i].lnum = 0;
    }
    this.total_sorted.lnum = 0;

    var d=0;
    for (d=0;d<this.webitlist.length;d++) {
      if (this.webitlist[d] != undefined) {
        this.total_sorted.lnum = this.total_sorted.lnum + 1;
        var c = this.webitlist[d].cat;
        var s = this.webitlist[d].subcat;
        for (var k=0; k<this.substats.length; k++) {
           if ((this.substats[k].cat == c) && (this.substats[k].subcat == s)) {
              this.substats[k].lnum = this.substats[k].lnum + 1;
           }
        }
      }
    } 

}

stater.prototype.count_lustats = function() {
 
    var i=0
    for (i=0; i<this.monthstats.length; i++) {
          this.monthstats[i].lnum = 0;
    }
   this.total_unsorted.lnum = 0;
   
    var top = this.unsortedlist.length;
    var d=0;
    for (d=0;d<top;d++) {
      if (this.unsortedlist[d] != undefined) {
        var dp1 = this.unsortedlist[d].created_at.split(" ");
        var dp2 = dp1[0].split("-");
        var dt = new Date(dp2[0], dp2[1] - 1, dp2[2]);
        var m = dt.getMonth();
        var y = new String(dt.getFullYear());

	this.total_unsorted.lnum = this.total_unsorted.lnum + 1;

        for (var k=0; k<this.monthstats.length; k++) {
	    var dtmon = new Object();
	    dtmon.month =  this.monthstats[k].month;
            dtmon.year =  this.monthstats[k].year;
 	    if ((dtmon.month == m) && ( dtmon.year == y)) {
// alert("m=" + this.monthstats[k].month + " sm="+dtmon.month+" sy="+dtmon.year +" m="+m+" y="+y);
                this.monthstats[k].lnum = this.monthstats[k].lnum + 1;
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
    for (d=0;d<this.peoplelist.length;d++) {
      if (this.peoplelist[d] != undefined) {
        g = this.peoplelist[d].groupid;
        if (this.peoplelist[d].groupid == "") {
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


stater.prototype.get_stat = function (pstat) {

     var ret = null;

	if (pstat != undefined) {

                if ((pstat.sterms != "") && (pstat.sterms != undefined)) {
       
                     ret = this.get_searchstat(pstat.sterms);

		} else if (pstat.listype == "people" ) {

		     ret = this.get_groupstat(pstat.groupid);

		} else if  (pstat.listype == "unsorted" ) {
			if (pstat.month == "all" )  {
	  	             ret = this.total_unsorted;
			} else {
	       	             ret = this.get_monthstat(pstat);
			}

		} else if  (pstat.listype == "webits" ) {

		     ret =  this.get_catstat(pstat.cat,pstat.subcat);

		} else if  (pstat.listype == "unsaved" ) {
		     ret =  this.total_unsaved;

		}

	}
    return ret;
}



stater.prototype.update_supplier = function(pobj) {

      var fnd = -1;
      var mdex = -1;
      var ltype = "";

        for (var k=0; k<this.supplierlist.length; k++) {
          if (this.supplierlist[k] != undefined) {
            if (this.supplierlist[k].pid == pobj.pid) {
                this.supplierlist[k] = pobj;
		fnd = k;
            }
          }
        }

	if (fnd != -1) {
		// update supplierlist 
		ltype = "suppliers";
		mdex = fnd;
	 	pobj.ltype = "suppliers";
                this.supplierlist[fnd] = pobj; 
	} else {
		 ltype = "suppliers";
		 pobj.ltype = "suppliers";
 		 mdex = this.supplierlist.push(pobj); 
	}	

//    alert("pid=" + pobj.pid + "mdx=" + mdex + " ltp=" + ltype);

      daviewer.update_one(pobj.pid,mdex,ltype);

}
	

stater.prototype.update_webit = function(pobj) {

      var fnd = -1;
      var j = "";                    
      var u = 0;
      var s = 0;
      var mdex = -1;
      var ltype = "";

        for (var k=0; k<this.webitlist.length; k++) {
          if (this.webitlist[k] != undefined) {
            if (this.webitlist[k].pid == pobj.pid) {
                this.webitlist[k] = pobj;
		fnd = k;
            }
          }
        }
	if (fnd != -1) {

		// update webitlist 
		ltype = "webits";
		mdex = fnd;
	 	pobj.ltype = "webits";
                this.webitlist[fnd] = pobj; 

                // ** update webit cats stats

	} else {

           // if cat != "" and != junk 
	   // add to webitlist 

	   if ((pobj.cat != "") && (pobj.cat != "junk")) {
		 ltype = "webits";
		 pobj.ltype = "webits";
 		 mdex = this.webitlist.push(pobj); 

                // ** update webit cats stats
	   }

           u = 0;
           while (u<this.unsortedlist.length) {
             if (this.unsortedlist[u] != undefined) {
               if (this.unsortedlist[u].pid == pobj.pid) {
                  this.unsortedlist[u] = pobj;
	   	  fnd = u;
               }
             }
	     u = u + 1;
           }

           if (fnd != -1) {

			// if cat != ""
			// remove from unsorted list 
			// else update unsorted
			// ** update unsorted stats

			if (pobj.cat != "") {
 		 	    this.unsortedlist.splice(fnd,1);
	    	       } else {
			   this.unsortedlist[fnd] = pobj;
				ltype = "unsorted";
				mdex = fnd;
			}

	   } else {

		// if cat == "" add to unsorted list 
		// else add to webitlist 
		// update stats 

		if (pobj.cat == "") {
			pobj.ltype="unsorted";
		        ltype = "unsorted";
			mdex = this.unsortedlist.push(pobj);
		} else {
			pobj.ltype="webits";
			ltype = "webits";
			mdex = this.webitlist.push(pobj);
		}

 		s = 0;
                while (s<this.unsavedlist.length) {
                  if (this.unsavedlist[s] != undefined) {
                    if (this.unsavedlist[s].pid == pobj.pid) {
                      this.unsavedlist[s] = pobj;
	   	      fnd = s;
                    }
                  }
	          s = s + 1;
                }
		if (fnd != -1) {

		    // remove from unsaved list	
                    // update stats
		    this.unsavedlist.splice(fnd,1);
		}

	   }
	}

//may not need...
      amare.count_lwstats();
      amare.count_lustats();

     if ((buddah == true) && (diego.top_shape == "sort")) {
        mac.show();
     }

     daviewer.update_one(pobj.pid,mdex,ltype);

/*
      if ((pobj.groupid != "") && (pobj.groupid != undefined)) {
        fnd = -1;
        for (var k=0; k<=this.peoplelist.length; k++) {
          if (this.peoplelist[k] != undefined) {
            if (this.peoplelist[k].uname == pobj.uname) {
                this.peoplelist[k].groupid = pobj.groupid;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            var w = new webit();
            w.uname = pobj.uname;
            w.groupid = pobj.groupid;
            this.peoplelist.push(w);
        }
        daviewer.update_person(pobj.uname);
      }
*/

}



stater.prototype.get_searchstat = function(sterms) {

     var ret = null;

     if ( (sterms != "") || (sterm  != undefined))  {

        for (var i=0; (i < amare.searchstats.length); i++) {
          if (amare.searchstats[i].sterms == sterms) {
              ret = amare.searchstats[i];
          }
        }

     }

     return ret;
}




stater.prototype.get_catstat = function(tcat,tsubcat) {

     var ret = null;

     if ( (tcat == "all") || (tcat == ""))  {

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



stater.prototype.get_monthstat = function(pmon) {
  
    var ret = null;
    if ((pmon == undefined) || (pmon.month == "")) {
	ret = this.total_unsorted;
    } else {
  
      for (var i=0; i<this.monthstats.length; i++) {
        if ((this.monthstats[i].month == pmon.month) && (this.monthstats[i].year == pmon.year)) {
              ret = amare.monthstats[i];
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


stater.prototype.count_products_by_supplier = function(tsuppid) {
  var ret = 0;
  if (tsuppid != undefined) {
      for (var r=0; r<amare.productlist.length;r++) {
       if (amare.productlist[r] != undefined) {
           var ok = false;
          if (amare.productlist[r].uname == tsuppid ) {
             ok = true;
           }
           if (ok == true) {
             ret = ret + 1; 
           }
        } 
      }
   }
   return ret;
}



stater.prototype.get_person_group = function(tname) {
    var ret = "";
    for (var i=0; i<this.peoplelist.length; i++) {
        if (this.peoplelist[i].uname == tname) {
              ret = this.peoplelist[i].groupid;
        }
    }
    return ret;
}



stater.prototype.get_people = function(tchunk) {

   var url='deskfm/dbase/get_people.php';
   url = url + "?lim="+ da_limit;
   var c = this.total_people.last_chunk; 
   if (c != -1) {
      c = c +1;
      url = url + "&chunk="+ c;
   }
//   alert(url);
   $.getJSON(url,function(json) {
       amare.update_people(json);
   });   // end get json 
   sal.waiting();
}



stater.prototype.get_group_list = function(pgroupid) {

   var url='deskfm/dbase/dfm_people.php';
   url = url + "?lim="+ da_limit;
   url = url + "&groupid="+ pgroupid;
 
   var pstats = this.get_groupstat(pgroupid);
   var c = -1;
   if (pstats != null) {
     c = pstats.last_chunk; 
   }
   c = c +1;
   url = url + "&chunk="+ c;
//  alert(url);
   $.getJSON(url,function(json) {
       amare.update_people(json);
   });    
   sal.waiting();
}
 

stater.prototype.get_webits = function() {

   var url='deskfm/dbase/get_webits.php';
   url = url + "?lim="+ da_limit;
   var c = this.total_sorted.last_chunk; 
   if (c != -1) {
      c = c +1;
      url = url + "&chunk="+ c;
   }
//   alert(url);
   $.getJSON(url,function(json) {
      amare.update_webits(json);
   });   
   sal.waiting();
}
  

stater.prototype.get_unsorted = function(pstats,bgrnd) {

   var dstats = this.total_unsorted;
   if (pstats != undefined) {
       dstats = pstats;
   }

   var url='deskfm/dbase/get_unsorted.php';
   url = url + "?lim="+ da_limit;
   var m = 0;

   var gots = false;
//alert(dstats.month + "-" + dstats.year);
   if ((dstats.month != undefined) && (dstats.month != "all")) {
       m = dstats.month +1;
       url = url + "&month="+ m;
       gots = true;
   } 
   if ((dstats.year != undefined) && (dstats.year != "")) {
       url = url + "&year="+ dstats.year;
       gots = true;
   }

   var c = 0;
   if (dstats.last_chunk != undefined) {
     c = dstats.last_chunk; 
     c = parseInt(c,10) +1;
   }

   url = url + "&chunk="+ c;
//   alert("localhost/" + url);

   if (bgrnd == true) {
     $.getJSON(url,function(json) {
        amare.add_unsorted(json,true);
     });
   } else {
     $.getJSON(url,function(json) {
        amare.add_unsorted(json);
     });
   }  
 
   sal.waiting();

}



 stater.prototype.get_cat_list = function(pstats) {

   var url='deskfm/dbase/get_webits.php';
    url = url + "?lim="+ da_limit;

    if (pstats.cat != undefined ) {
       url = url + "&cat="+ pstats.cat;
    }
    if (pstats.subcat != undefined) {
       url = url + "&subcat="+ pstats.subcat;
    } 

   var c = pstats.last_chunk;
      c = parseInt(c) +1;
      url = url + "&chunk="+ c;
 // alert(url);
    $.getJSON(url,function(json) {
      amare.update_webits(json);
    });   
  sal.waiting();
}  



stater.prototype.get_products = function() {

  var url='deskfm/dbase/get_products.php';
  //  alert(url);
  $.getJSON(url,function(json) {
      amare.update_products(json);
   });   
   sal.waiting();
} 


stater.prototype.get_suppliers = function() {
   var url='deskfm/dbase/get_suppliers.php';
//  alert(url);
   $.getJSON(url,function(json) {
       amare.update_suppliers(json);
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
  $.getJSON(url,function(json) {
      amare.update_products(json);
   });   // end get json a
  sal.waiting();
}  




stater.prototype.get_csearch_list = function(tsterms) {

   var url='deskfm/dbase/get_webits.php';
   url = url + "?lim="+ da_limit;
   if ((tsterms != "") &&  (tsterms != undefined)){
     url = url + "&sterms="+ tsterms;
     this.sterms = tsterms;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      amare.update_webits(json);
   });   // end get json 
}  




stater.prototype.get_cperson_list = function(tuname) {

   var url='deskfm/dbase/get_webits.php';
   url = url + "?lim="+ da_limit;
   if ((tuname != "") &&  (tuname != undefined)){
     url = url + "&uname="+ tuname;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      amare.update_webits(json);
   });   // end get json 
}  


 stater.prototype.update_suppliers = function (listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<this.supplierlist.length;i++) {
                  if (this.supplierlist[i] != undefined) {
                    if (listobj.dalist[j].uname == this.supplierlist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  this.supplierlist.splice(found_at,1);
               }
              this.supplierlist.push(listobj.dalist[j]);
            }
         }
      }
      this.total_suppliers.lnum = this.supplierlist.length;
}  


 stater.prototype.update_products = function(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<this.productlist.length;i++) {
                  if (this.productlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.productlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  this.productlist.splice(found_at,1);
               }
              this.productlist.push(listobj.dalist[j]);
            }
         }
      }
      this.total_products.lnum = this.productlist.length;
}  



stater.prototype.add_unsaved = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if (listobj == undefined) {
	       return;
       }

       var lstat = this.get_stat(listobj);
       if (lstat != null) {
            daviewer.update_stat(lstat);
       }

       if (listobj.dalist == null) {
          return;
       }

       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<this.unsavedlist.length;i++) {
                  if (this.unsavedlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.unsavedlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  this.unsavedlist.splice(found_at,1);
              }
              this.unsavedlist.unshift(listobj.dalist[j]);
         }
      }

      this.total_unsaved.lnum = this.unsavedlist.length;
      daviewer.redraw_view();

}  




 stater.prototype.add_webit = function(tpobj) {

   var t=-1;
   if (tpobj != undefined) {
     if (tpobj.listype == "webits") {
       t=  this.webitlist.push(tpobj);
     }
   }
   if (t != -1) {
     var dx = t-1;
   }
}


 stater.prototype.del_webit= function(tpid) {

  daviewer.del_webit(tpid);
   for (var k=0; k<=this.webitlist.length; k++) {
     if (this.webitlist[k] != undefined) {
         if (this.webitlist[k].pid == tpid) {
             this.webitlist[k] = null;
         }
     }
   }
}



 stater.prototype.update_person= function(pobj) {
     var fnd = -1;
     if (pobj.listype == "people") {
        fnd = -1;
        for (var k=0; k<=this.peoplelist.length; k++) {
          if (this.peoplelist[k] != undefined) {
            if (this.peoplelist[k].uname == pobj.uname) {
                this.peoplelist[k] = pobj;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            this.peoplelist.push(pobj);
        }
        daviewer.update_person(pobj.uname);
     }
}



 stater.prototype.del_person= function(tuname) {

   daviewer.del_person(tuname);

   for (var k=0; k<=this.peoplelist.length; k++) {
     if ((peoplelist[k] != undefined)&&(peoplelist[k] != undefined)){
         if (peoplelist[k].uname == tuname) {
             peoplelist[k] = null;
         }
     }
   }

}


