


viewer.prototype.load_search_list = function(pterms) {


   this.sterms = "";
   if (pterms != undefined) {
     this.sterms = pterms;
   }

    this.stats = amare.total_sorted;

    this.dalist = [];

    var lgo = true;
    var d = 0;

     this.listype = "webits";

      for (var r=d; r<webitlist.length;r++) {

        if (webitlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
           ok = false;
           if (webitlist[r] != undefined) {
              if (webitlist[r].story != null) {
                if (webitlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (webitlist[r].uname != null) {
                if (webitlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }

         if (ok == true) {
           this.dalist[d] = r;
           d = d+1 
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

     this.listype = "webits";

      for (var r=d; r<webitlist.length;r++) {

        if (webitlist[r] != undefined) {
         var ok = false;
          if (webitlist[r].cat == this.cat) {
               if ((webitlist[r].subcat == this.subcat) || (this.subcat == "")) {
                 ok = true;
               }
           }


         if (this.sterms != "") {
           ok = false;
           if (webitlist[r] != undefined) {
              if (webitlist[r].story != null) {
                if (webitlist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (webitlist[r].uname != null) {
                if (webitlist[r].uname.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
           }
         }

         if (ok == true) {
           this.dalist[d] = r;
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
    this.listype = "people";
    var lgo = true;
    var d = 0;
      for (var r=d; r<peoplelist.length;r++) {
        if (peoplelist[r] != undefined) {
           var ok = false;
           if (peoplelist[r].groupid == this.groupid )  {
               ok = true;
           }
           if (ok == true) {
             this.dalist[d] = r;
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
      for (var r=d; r<webitlist.length;r++) {

        if (webitlist[r] != undefined) {
           var ok = false;
           if (webitlist[r].uname == tuname) {
             ok = true;
           }
           if (ok == true) {
             this.dalist[d] = r;
             d = d+1 
           }
        } 
    }
    this.load_rungs(0);
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
    this.listype = "products";
    var lgo = true;
    var d = 0;
      for (var r=d; r<productlist.length;r++) {
        if (productlist[r] != undefined) {
           var ok = false;

           if (productlist[r].price > 0) {
             if (this.prodids.length == 0) {
                ok = true;
             } else {
               for (var z=0; z<this.prodids.length;z++) {
                 if (this.prodids[z] == productlist[r].prodid)  {
                   ok = true;
                 }
               }
             }
           }

           if (ok == true) {
             this.dalist[d] = r;
             d = d+1 
           }
        } 
      }

    this.load_rungs(0);
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
    this.listype = "providers";
    var lgo = true;
    var d = 0;
      for (var r=d; r<providerlist.length;r++) {
        if (providerlist[r] != undefined) {
             this.dalist[d] = r;
             d = d+1 
        } 
      }
    this.load_rungs(0);
    this.draw_view();
}


viewer.prototype.load_unsorted_list = function() {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;

     this.listype = "unsorted";

     this.stats = amare.total_unsorted;

     this.dalist = [];


     mx = unsortedlist.length;

      for (var r=d; r<mx;r++) {
        ro = unsortedlist[r];
        if (ro != undefined) {
          ok = false;
          if (ro.cat == "") {
             ok = true;
          }
          if (ok == true) {
            this.dalist[d] = r;
            d = d+1 
          }
        }
    } 
    
    this.load_rungs(0);
    this.draw_view();
}




viewer.prototype.load_random_list = function() {

  
   var mx = webitlist.length;
   var ro = null;
   this.darungs = [];

   this.stats = amare.total_sorted;
   this.dalist = [];
   this.listype = "webits";
    
   var tls = [];
   var r = 0;
   var i =0;
   var j =0;

   if (mx == 0) {
	    return;
   }

   while ((i<100) && (j < 100)) {
       r = Math.floor((Math.random()*mx)+1);
       ro = webitlist[r];
       if (ro != undefined) {
         var used = false;
	 
         for (var z=0;z<tls.length;z++){
           if (r == tls[z]) {
               used = true;
           }
         }
	 
         if (used == false) {
           tls.push(r);
           this.dalist.push(r);
           this.darungs[i] = new Object();
           this.darungs[i].dadex = r;
           i = i+1;
         }
       } else {
	   j = j+1;
       }
   }
	     
   this.load_rungs(0);
   this.draw_view();

}


viewer.prototype.load_list = function(pstart) {
  
   this.darungs = [];
   this.dalist = [];

   this.stats = amare.total_sorted;
   this.listype = "webits";
    
   var st = 0;
   if (pstart != undefined) {
	  st = pstart;
   }
   var mx = webitlist.length;

   var i = 0;
   var o = null;

   while (i < mx) {
       o = webitlist[i];
       if (o != undefined) {
           this.dalist.push(i);
       }
       i = i+1;
   }
	     
   this.load_rungs(st);
   this.draw_view();

}


