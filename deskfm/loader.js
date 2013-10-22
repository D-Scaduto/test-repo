
viewer.prototype.load_newbie_list = function() {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;
    var obj = null;
    this.stats = amare.total_newbies;
    var st = 0;
    this.dalist = [];
    mx = amare.newbielist.length;
      for (var r=d; r<mx;r++) {
        ro = amare.newbielist[r];
        if (ro != undefined) {
              obj = new listdex();
              obj.mdex = r;
	      obj.ltype = "newbie";
              this.dalist.push(obj);
              d = d+1 
        }
    } 
    this.load_rungs(st);
    this.draw_view();
}



viewer.prototype.load_search_list = function(pterms) {

   this.sterms = "";
   if (pterms != undefined) {
     this.sterms = pterms;
   }

    this.stats = amare.total_sorted;

    this.dalist = [];
    var lgo = true;
    var d = 0;
    var r = 0;

      for (r=0; r<amare.webitlist.length;r++) {
        if (amare.webitlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
           ok = false;
           if (amare.webitlist[r] != undefined) {
              if (amare.webitlist[r].story != null) {
                if (amare.webitlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (amare.webitlist[r].uname != null) {
                if (amare.webitlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }
         if (ok == true) {
	   this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "webits";
           d = d+1 
         }
      }  
    }

   if (buddah == true) {

      for  (r=0; r<amare.unsortedlist.length;r++) {
        if (amare.unsortedlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
           ok = false;
           if (amare.unsortedlist[r] != undefined) {
              if (amare.unsortedlist[r].story != null) {
                if (amare.unsortedlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (amare.unsortedlist[r].uname != null) {
                if (amare.unsortedlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }
         if (ok == true) {
	   this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "unsorted";
           d = d+1 
         }
       }
     }

       for  (r=0; r<amare.unsavedlist.length;r++) {
        if (amare.unsavedlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
           ok = false;
           if (amare.unsavedlist[r] != undefined) {
              if (amare.unsavedlist[r].story != null) {
                if (amare.unsavedlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (amare.unsavedlist[r].uname != null) {
                if (amare.unsavedlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }
         if (ok == true) {
	   this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "unsaved";
           d = d+1 
         }
       }
     }
   }

  this.load_rungs(0);
  this.draw_view();
}



viewer.prototype.load_category_list = function(pcat,psubcat,pstart) {

   if (pcat != undefined) {
     this.cat = pcat;
   }
   if (psubcat != undefined) {
     this.subcat = psubcat;
   }
  
   var st = 0;
   if (pstart != undefined) {
	  st = pstart;
   }

    this.stats = amare.get_catstat(this.cat,this.subcat);

    this.dalist = [];
    var lgo = true;
    var d = 0;

      for (var r=d; r<amare.webitlist.length;r++) {

        if (amare.webitlist[r] != undefined) {
         var ok = false;
          if (amare.webitlist[r].cat == this.cat) {
               if ((amare.webitlist[r].subcat == this.subcat) || (this.subcat == "")) {
                 ok = true;
               }
           }


         if (this.sterms != "") {
           ok = false;
           if (amare.webitlist[r] != undefined) {
              if (amare.webitlist[r].story != null) {
                if (amare.webitlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (amare.webitlist[r].uname != null) {
                if (amare.webitlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }

         if (ok == true) {
           this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "webits";
           d = d+1 
         }
      } 
    }

   this.load_rungs(st);
   this.draw_view();
}

viewer.prototype.load_unsorted_list = function(dtmon,pstart) {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;
    var obj = null;

     if (dtmon.month == "all") {
       this.stats = amare.total_unsorted;
     } else {

      this.stats = amare.get_monthstat(dtmon);
        if (this.stats != null) {
      //    alert("month="+this.stats.month);
         //alert(this.stats.listype);
       }
     }

     this.cat = "";

     var st = 0;
     if (pstart != undefined) {
	  st = pstart;
     }

     this.dalist = [];

     mx = amare.unsortedlist.length;
      for (var r=d; r<mx;r++) {
        ro = amare.unsortedlist[r];
        if (ro != undefined) {
            ok = false;
	    if (dtmon.month == "all") {
		ok = true;
	    } else {
	//	    alert("m=" + dtmon.month + " y=" + dtmon.year);
		if (check_month(ro,dtmon) == true) {
			ok = true;
		}
	    }
	    if (ok == true) {
              obj = new listdex();
              obj.mdex = r;
	      obj.ltype = "unsorted";
              this.dalist.push(obj);
              d = d+1 
	    }
        }
    } 
    this.load_rungs(st);
    this.draw_view();
}



viewer.prototype.load_group_list = function(tgroupid,pstart) {

   if (tgroupid != undefined) {
       this.groupid = tgroupid;
   }
   var st = 0;
   if (pstart != undefined) {
	  st = pstart;
   }


   if (this.groupid == "") {
     this.stats = amare.total_people;
   } else {
     this.stats  = amare.get_groupstat(this.groupid);
   }

   this.dalist = [];
   var lgo = true;
   var d = 0;
      for (var r=d; r<amare.peoplelist.length;r++) {
        if (amare.peoplelist[r] != undefined) {
           var ok = false;
           if (amare.peoplelist[r].groupid == this.groupid )  {
               ok = true;
           }
           if (ok == true) {
 	     this.dalist[d] = new Object();
             this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "people";
             d = d+1 
           }
        } 
      }
   this.load_rungs(st);
   this.draw_view();
}


viewer.prototype.load_person_list = function(tuname) {
    
    this.stats = null;

    this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.webitlist.length;r++) {

        if (amare.webitlist[r] != undefined) {
           var ok = false;
           if (amare.webitlist[r].uname == tuname) {
             ok = true;
           }
           if (ok == true) {
	     this.dalist[d] = new Object();
	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "webits";
             d = d+1;
           }
        } 
    }
    this.load_rungs(0);
    this.draw_view();
}


viewer.prototype.load_products_by_supplier = function(tsuppid) {

  if (tsuppid != undefined) {
   this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.productlist.length;r++) {
       if (amare.productlist[r] != undefined) {
           var ok = false;
          if (amare.productlist[r].uname == tsuppid ) {
             ok = true;
           }
           if (ok == true) {
	     this.dalist[d] = new Object();
 	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "products";
             d = d+1 
           }
        } 
      }
    this.load_rungs(0);
    this.draw_view();
  }
}


 viewer.prototype.load_products_by_type = function(tprodid) {
   if (tprodid != undefined) {
     if (tprodid != "") {
       this.prodids = [];
       this.prodids.push(tprodid);
     }
   }
    this.stats = amare.get_prodstat(this.prodid);
    this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.productlist.length;r++) {
        if (amare.productlist[r] != undefined) {
           var ok = false;

           if (amare.productlist[r].price > 0) {
             if (this.prodids.length == 0) {
                ok = true;
             } else {
               for (var z=0; z<this.prodids.length;z++) {
                 if (this.prodids[z] == amare.productlist[r].prodid)  {
                   ok = true;
                 }
               }
             }
           }

           if (ok == true) {
  	     this.dalist[d] = new Object();
 	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "products";
             d = d+1 
           }
        } 
      }

    this.load_rungs(0);
    this.draw_view();

}



viewer.prototype.load_supplier_list = function() {

    this.stats = amare.total_suppliers;

    this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.supplierlist.length;r++) {
        if (amare.supplierlist[r] != undefined) {
             this.dalist[d] = new Object();
  	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "suppliers";
             d = d+1 
        } 
      }
    this.load_rungs(0);
    this.draw_view();
}


viewer.prototype.load_sorted_list = function(pstart) {

   this.darungs = [];
   this.dalist = [];

   this.stats = amare.total_sorted;

   this.cat = "all";
    
   var st = 0;
   if (pstart != undefined) {
	  st = pstart;
   }
   var mx = amare.webitlist.length;

   var i = 0;
   var o = null;
   var obj = null;

   while (i < mx) {
       o = amare.webitlist[i];
       if (o != undefined) {
            obj = new listdex();
            obj.mdex = i;
	    obj.ltype = "webits";
            this.dalist.push(obj);
       }
       i = i+1;
   }
	     
   this.load_rungs(st,"webits");
   this.draw_view();

}


viewer.prototype.load_unsaved_list = function() {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;

     this.stats = amare.total_unsaved;
     this.dalist = [];

     mx = amare.unsavedlist.length;

     for (var r=d; r<mx;r++) {
        ro = amare.unsavedlist[r];
        if (ro != undefined) {
          ok = false;
	  this.dalist[d] = new Object();
          this.dalist[d].mdex = r;
	  this.dalist[d].ltype = "unsaved";
          d = d+1 
        }
     } 

    this.load_rungs(0,"unsaved");
    this.draw_view();
}




viewer.prototype.load_random_list = function() {

   var ro = null;
   this.darungs = [];

   var s = new stat();
   s.lnum = 99;
   s.cnum = 99;

   this.stats = s;

   this.dalist = [];
    
   var tls = [];
   var r = 0;
   var i =0;
   var j =0;
   var obj = null;

   var clone = amare.webitlist.slice(0);
   var mx = clone.length;
   var tls = [];
  
   while (i<99) {
       mx = clone.length;
       r = Math.floor((Math.random()*mx)+1);
       ro = clone[r];
       if (ro != undefined) {
            tls.push(r);
	    obj = new listdex();
            obj.mdex = r;
	    obj.ltype = "webits";
            this.dalist.push(obj);
            i = i+1;
       }
       clone.splice(r,1);
   }
	     
   this.load_rungs(0,"webits");
   this.draw_view();
}


