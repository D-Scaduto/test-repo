

viewer.prototype.clear_list = function() {
    this.dalist = [];
    this.darungs= [];
    this.hide_screen();
}


viewer.prototype.goto_rung = function(pidex) {
   this.load_rungs(pidex);
   this.draw_view();
   window.scroll(0,0);
   var lbl=this.screen+"_rung_0";
   if ( document.getElementById(lbl) != null) {
     document.getElementById(lbl).focus(); 
   }
}


viewer.prototype.goto_end = function() {
   var e = this.dalist.length -2;
   this.goto_rung(e);
}


viewer.prototype.to_top = function(trung) {

   this.redraw_rungs(trung);
   if (this.darungs[0] != undefined) {
     this.darungs[0].postman.btnson = true;
     this.darungs[0].postman.redraw_rung();
   }
   window.scroll(0,0);

   var lbl=this.screen+"_rung_0";
   if ( document.getElementById(lbl) != null) {
     document.getElementById(lbl).focus(); 
   }
}


viewer.prototype.prev = function() {
    var bret = true;
    var n = this.listdex -1;
    if ( n <=0 ) {
         n = this.dalist.length -1;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}


viewer.prototype.next = function() {
    var bret = true;
    var n = this.listdex +1;
    if ( n >= this.dalist.length ) {
         n = 0;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}



viewer.prototype.load_random_rungs = function() {

   var tls = [];
   var r = 0;
   var i =0;
   var mx = this.dalist.length;
   var ro = null;
   this.darungs = [];

   while (i<this.top_end) {
       r = Math.floor((Math.random()*mx));
       ro = this.dalist[r];
       if (ro != undefined) {
         var used = false;
         for (var z=0;z<=tls.length;z++){
           if (r == tls[z]) {
               used = true;
           }
         }
         if (used == false) {
           tls.push(r);
           this.darungs[i] = new Object();
           this.darungs[i].dadex = r;
         }
       }
       i = i+1;
   }

    this.draw_view();

}


viewer.prototype.load_rungs = function(plocdex) {
       this.darungs = [];
       var r = 0;
       if (plocdex != undefined) {
        r = plocdex;
       }
       this.listdex = r;
 
       var lgo = true;
       var c=0;
       var k=0;
       while (lgo) {
         if (this.dalist[r] != undefined) {

           this.darungs[c] = new Object();
           k = this.dalist[r];
           if (dalist[k] != undefined) {
             this.darungs[c].dadex = r;
           }
         }
         r = r+1;
         if (r >= this.dalist.length) {
            r = 0;
         }
         c = c+1;
         if ((c >= this.top_end) || (c >=this.dalist.length))  {
           lgo=false;
         }
       }

    this.draw_view();

}

 
viewer.prototype.redraw_rungs = function(trungdex) {
    var r = 0;
    var c = 0;
    var a = 0;
    if (trungdex != undefined) {
       r = trungdex;
    }
    var darungs2 = [];
      for (c=r; c<this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             var rd = this.darungs[c].dadex;
             if (this.listype == "webits") {
               if (dalist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "people") {
               if (peeplist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "products") {
               if (prodlist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
         }
      }

      for (c=0; c<r;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             var rd = this.darungs[c].dadex;
             if (this.listype == "webits") {
               if (dalist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "people") {
               if (peeplist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "products") {
               if (prodlist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
         }
      }

      this.darungs=[];
      for (var z=0; z<darungs2.length;z++) {
        if (darungs2[z] != undefined) {
           this.darungs[z] = new Object();
           var ad = darungs2[z].dadex;
           this.darungs[z].dadex = ad;
        }
      }

      this.draw_screen();
} 


 viewer.prototype.load_list = function() {

    this.dalist = [];
    var lgo = true;
    var once= false;
    var d = 0;

     this.listype = "webits";

      for (var r=d; r<dalist.length;r++) {

        if (dalist[r] != undefined) {
         var ok = false;
          if (dalist[r].cat == this.cat) {
               if ((dalist[r].subcat == this.subcat) || (this.subcat == "")) {
                 ok = true;
               }
           }

           if (this.prodids.length > 0) {
             for (var z=0; z<this.prodids.length;z++) {
                 if (this.prodids[z] == dalist[r].prodid) {
                   ok = true;
                 }
             }
           }

         if (this.sterms != "") {
           ok = false;
           if (dalist[r] != undefined) {
              if (dalist[r].story != null) {
                if (dalist[r].story.search(this.sterms) > -1)  {
                  ok = true;
                }
              }
              if (dalist[r].uname != null) {
                if (dalist[r].uname.search(this.sterms) > -1)  {
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
}


 viewer.prototype.load_personlist = function(tuname) {

    this.dalist = [];
    var lgo = true;
    var once= false;
    var d = 0;
      for (var r=d; r<dalist.length;r++) {

        if (dalist[r] != undefined) {
           var ok = false;
           if (dalist[r].uname == tuname) {
             ok = true;
           }
           if (ok == true) {
             this.dalist[d] = r;
             d = d+1 
           }
        } 
    }
    this.load_rungs(0);
}



 viewer.prototype.load_prodlist = function() {
    this.dalist = [];
    this.listype = "products";
    var lgo = true;
    var once= false;
    var d = 0;
      for (var r=d; r<prodlist.length;r++) {
        if (prodlist[r] != undefined) {
           var ok = false;

           if (prodlist[r].price > 0) {
             if (this.prodids.length == 0) {
                ok = true;
             } else {
               for (var z=0; z<this.prodids.length;z++) {
                 if (this.prodids[z] == prodlist[r].prodid)  {
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
}


 viewer.prototype.load_providerlist = function() {

    this.dalist = [];
    this.listype = "providers";
    var lgo = true;
    var once= false;
    var d = 0;
      for (var r=d; r<providers.length;r++) {
        if (providers[r] != undefined) {
             this.dalist[d] = r;
             d = d+1 
        } 
      }
    this.load_rungs(0);
}



 viewer.prototype.load_peeplist = function(tgid) {

    if (tgid != undefined) {
      this.groupid = tgid; 
    }
    this.dalist = [];
    this.listype = "people";
    var lgo = true;
    var once= false;
    var d = 0;
      for (var r=d; r<peeplist.length;r++) {
        if (peeplist[r] != undefined) {
           var ok = false;
           if (peeplist[r].groupid == this.groupid )  {
               ok = true;
           }
           if (ok == true) {
             this.dalist[d] = r;
             d = d+1 
           }
        } 
      }
    this.load_rungs(0);
}



viewer.prototype.load_unsorted_list = function() {

    var lgo = true;
    var once= false;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;

     this.listype = "webits";
     this.dalist = [];

     mx = dalist.length;

      for (var r=d; r<mx;r++) {
        ro = dalist[r];
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
}


viewer.prototype.load_random_list = function() {
   var tls = [];
   var r = 0;
   var i =0;
   var mx = dalist.length;
   var ro = null;
   this.darungs = [];
   this.dalist = [];
    this.listype = "webits";

   while (i<100) {
       r = Math.floor((Math.random()*mx)+1);
       ro = dalist[r];
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
       }
   }
   this.load_rungs(0);
}

viewer.prototype.get_lsearch_list = function(tsterms) {
   this.sterms = tsterms;
   this.load_list();
   this.draw_screen();
}


viewer.prototype.get_lperson_list = function(tuname) {
   this.load_personlist(tuname);
   this.draw_screen();
}


viewer.prototype.set_searchscreen = function(pterms) {
   this.sterms = "";
   if (pterms != undefined) {
     this.sterms = pterms;
   }
   this.cat = "";
   this.subcat = "";
   this.load_list();
   this.draw_screen();
}

 
viewer.prototype.set_catscreen = function(pcat,psubcat) {
   if (pcat != undefined) {
     this.cat = pcat;
   }
   if (psubcat != undefined) {
     this.subcat = psubcat;
   }
   this.prodid = "";
 
   this.load_list();
   this.draw_screen();
}
 

viewer.prototype.set_prodscreen = function(tprodid) {
   if (tprodid != undefined) {
     if (tprodid != "") {
       this.prodids = [];
       this.prodids.push(tprodid);
     }
   }
   this.load_prodlist();
   this.draw_screen();
}


viewer.prototype.set_groupscreen = function(tgroupid) {
   if (tgroupid != undefined) {
     if (tgroupid != "") {
       this.groupid = trgoupid;
     }
   }
   this.load_prodlist();
   this.draw_screen();
}


viewer.prototype.set_providerscreen = function(tproviderid) {
   if (tproviderid != undefined) {
     if (tproviderid != "") {
       this.provider_id = tproviderid;
     }
   }
}


