


viewer.prototype.load_search_list = function(pterms) {


   this.sterms = "";
   if (pterms != undefined) {
     this.sterms = pterms;
   }

    this.stats = amare.total_sorted;

    this.dalist = [];

    var lgo = true;
    var d = 0;

      for (var r=d; r<amare.webitlist.length;r++) {

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
    this.load_rungs(0,"webits");

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

   this.load_rungs(st,"webits");
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
   this.load_rungs(st,"people");
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
    this.load_rungs(0,"webits");
    this.draw_view();
}



 viewer.prototype.load_product_list = function(tprodid) {
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

    this.load_rungs(0,"products");
    this.draw_view();

}



viewer.prototype.load_provider_list = function(tproviderid) {

   if (tproviderid != undefined) {
     if (tproviderid != "") {
       this.provider_id = tproviderid;
     }
   }
    this.stats = null;
    this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.providerlist.length;r++) {
        if (amare.providerlist[r] != undefined) {
             this.dalist[d] = new Object();
  	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "unsaved";
             d = d+1 
        } 
      }
    this.load_rungs(0,"providers");
    this.draw_view();
}


viewer.prototype.load_unsorted_list = function(dtmon) {

    var month = "";
    var year = "";

    if (dtmon != undefined) {
	    month = dtmon.getMonth();
	    year = dtmon.getFullYear();
	    year = year.toString().substr(2,2);
	 alert("m="+month + " y="+year);
    }

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;
    var obj = null;

     this.stats = amare.total_unsorted;
     this.dalist = [];

     mx = amare.unsortedlist.length;

      for (var r=d; r<mx;r++) {
        ro = amare.unsortedlist[r];
        if (ro != undefined) {
          ok = false;
	  if (month != "") {
		 var dt = null;
                 if ((ro.dfdate != "") && (ro.dfdate != undefined))  {
		    var t = ro.dfdate.split(/[- :]/);
		    dt = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
                 } else if ((ro.created_at != "")  && (ro.created_at != undefined)) {
		   dt = new Date(ro.created_at);
		 }
		 if (dt != null) {
	
			 var ma = dt.getMonth();
			 var ya = dt.getFullYear().toString().substr(2,2);

  	           if ( (month == ma) && (year == ya) )  {
	alert(dt + " m="+month + " y="+year + " ma=" + ma);
                        ok = true;
		   } 
		 }
	  } else {
	//	 if (ro.cat == "") {
        	     ok = true;
	 //         }
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
    
    this.load_rungs(0,"unsorted");
    this.draw_view();
}






viewer.prototype.load_list = function(pstart) {

   this.darungs = [];
   this.dalist = [];

   this.stats = amare.total_sorted;
    
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

  
   var mx = amare.webitlist.length;
   var ro = null;
   this.darungs = [];

   this.stats = amare.total_sorted;
   this.dalist = [];
    
   var tls = [];
   var r = 0;
   var i =0;
   var j =0;
   var obj = null;

   if (mx == 0) {
	    return;
   }

   while ((i<100) && (j < 100)) {
       r = Math.floor((Math.random()*mx)+1);
       ro = amare.webitlist[r];
       if (ro != undefined) {
         var used = false;
	 
         for (var z=0;z<tls.length;z++){
           if (r == tls[z]) {
               used = true;
           }
         }
	 
         if (used == false) {
            tls.push(r);
	    obj = new listdex();
            obj.mdex = r;
	    obj.ltype = "webits";
            this.dalist.push(obj);
            this.darungs[i].vdex = r;
            i = i+1;
         }
       } else {
	   j = j+1;
       }
   }
	     
   this.load_rungs(0,"webits");
   this.draw_view();

}
