

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
           if (webitlist[k] != undefined) {
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
               if (webitlist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "people") {
               if (peoplelist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "products") {
               if (productlist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
            if (this.listype == "unsorted") {
               if (unsortedlist[rd] != null) {
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
               if (webitlist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "people") {
               if (peoplelist[rd] != null) {
                 darungs2[a].dadex = rd;
                 a = a+1;
               }
             }
             if (this.listype == "products") {
               if (productlist[rd] != null) {
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

      this.draw_view();
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
