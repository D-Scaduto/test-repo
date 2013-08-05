

viewer.prototype.prev = function(px) {
    var c = 1;
    if (px != undefined) {
	    c = px;
    }

    var bret = true;
    var n = this.listdex -c;
    if ( n <0 ) {
        n = this.dalist.length -1;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}


viewer.prototype.next = function(px) {
    var c = 1;
    if (px != undefined) {
	    c = px;
    } 
    var bret = true;
    var n = this.listdex +c;
    if ( n >= this.dalist.length ) {
         n = 0;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}




viewer.prototype.goto_listdex = function(ldex) {

   this.load_rungs(ldex);

   this.draw_view();
}


viewer.prototype.goto_end = function() {
   var e = this.dalist.length -2;
   this.to_top(e);
}


viewer.prototype.to_top = function(trung) {

   this.redraw_rungs(trung);

   if (this.darungs[0] != undefined) {
    if (this.darungs[0].postman != undefined) {
//     this.darungs[0].postman.btnson = true;
       this.darungs[0].postman.redraw_rung();
     }
   }

   window.scroll(0,0);
   var lbl=this.screen+"_rung_0";
   if ( document.getElementById(lbl) != null) {
     document.getElementById(lbl).focus(); 
   }
}



viewer.prototype.clear_list = function() {
    this.dalist = [];
    this.darungs= [];
    this.hide_screen();
}



viewer.prototype.load_rungs = function(ldex) {

       this.darungs = [];
       var r = 0;
       if (ldex != undefined) {
        r = ldex;
       }
       this.listdex = r;
 
       var lgo = true;
       var c=0;
       var mdex=0;
       var ltype = "";

       while (lgo) {

         if (this.dalist[r] != undefined) {

           mdex = this.dalist[r].mdex;
	   ltype = this.dalist[r].ltype;
	   
    	   this.darungs[c] = new Object();

           if (ltype == "webits") {
             if (amare.webitlist[mdex] != undefined) {
               this.darungs[c].vdex = r;
             }
	   }
           if (ltype == "people") {
             if (amare.peoplelist[mdex] != undefined) {
               this.darungs[c].vdex = r;
             }
	   }
           if (ltype == "products") {
             if (amare.productlist[mdex] != undefined) {
               this.darungs[c].vdex = r;
             }
	   }
           if (ltype == "unsorted") {
             if (amare.unsortedlist[mdex] != undefined) {
               this.darungs[c].vdex = r;
             }
	   }
	   if (ltype == "unsaved") {
             if (amare.unsavedlist[mdex] != undefined) {
               this.darungs[c].vdex = r;
             }
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
    var rd, lt = "";

    if (trungdex != undefined) {
       r = trungdex;
    }

    var darungs2 = [];
      for (c=r; c<this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             rd = this.darungs[c].vdex;

             if (lt == "webits") {
               if (amare.webitlist[rd] != null) {
                 darungs2[a].vdex = rd;
                 a = a+1;
               }
             }
             if (lt == "people") {
               if (amare.peoplelist[rd] != null) {
                 darungs2[a].vdex = rd;
                 a = a+1;
               }
             }
             if (lt == "products") {
               if (amare.productlist[rd] != null) {
                 darungs2[a].vdex = rd;
                 a = a+1;
               }
             }
            if (lt == "unsorted") {
               if (amare.unsortedlist[rd] != null) {
                 darungs2[a].vdex = rd;
                 a = a+1;
               }
             }

	    if (lt == "unsaved") {
               if (amare.unsavedlist[rd] != null) {
                 darungs2[a].vdex = rd;
                 a = a+1;
               }
            }
         }
      }

      for (c=0; c<r;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             rd = this.darungs[c].dadex;
	     if (this.dalist[rd] != undefined) {
 	       lt = this.dalist[rd].ltype;

               if (lt == "webits") {
                 if (amare.webitlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
               if (lt == "people") {
                 if (amare.peoplelist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
               if (lt == "products") {
                 if (amare.productlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "unsorted") {
                 if (amare.unsortedlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "unsaved") {
                 if (amare.unsavedlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	     }
         }
      }

      this.darungs=[];
      for (var z=0; z<darungs2.length;z++) {
        if (darungs2[z] != undefined) {
           this.darungs[z] = new Object();
           var ad = darungs2[z].dadex;
           this.darungs[z].vdex = ad;
        }
      }

      this.draw_view();
} 




viewer.prototype.load_random_rungs = function() {

   var tls = [];
   var r = 0;
   var i =0;
   var mx = this.dalist.length;
   var mdex = null;
   var ltype = "";

   this.darungs = [];

   while (i<this.top_end) {
       r = Math.floor((Math.random()*mx));
       if (this.dalist[r] != undefined) {
         mdex = this.dalist[r].mdex;
         ltype = this.dalist[r].ltype;
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




viewer.prototype.update_one = function(pdx) {
//	alert(pdx);
  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.pid == pdx) {
                   fnd_rung = c;
              }
            }
         }
  }
  if (fnd_rung != -1) {
        if (this.darungs[fnd_rung].postman != undefined) {
          this.darungs[fnd_rung].postman.changed =false;
          this.darungs[fnd_rung].postman.redraw_rung();
        }
  } 
}


viewer.prototype.update_person = function(pname) {
  var s= "";
  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.uname == pname) {
                   fnd_rung = c;
              }
            }
         }
  }
  if (fnd_rung != -1) {
        if (this.darungs[fnd_rung].postman != undefined) {
          this.darungs[fnd_rung].postman.changed =false;
        }
        this.draw_rung(fnd_rung);
  } 
}


viewer.prototype.add_one = function(pdx) {
   var t = null;
   if (webitlist[pdx] == undefined) {
//      alert("adderr " + pdx);
   } else {
         this.dalist.unshift(pdx);
         this.load_rungs();  
   } 
}


viewer.prototype.del_rung = function(tspot) {
     var da = this.darungs[tspot].dadex;
     this.dalist.splice(da,1);
     this.darungs.splice(tspot,1);
     this.load_rungs();
}


viewer.prototype.del_webit = function(tpid) {
  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.pid == tpid) {
                   fnd_rung = c;
              }
            }
         }
  }
  if (fnd_rung != -1) {
     this.del_rung(fnd_rung);
  } else {
    var fnd_le = -1;
    for (var b=0; b<=this.webitlist.length;b++) {
         if (webitlist[this.webitlist[b]] != undefined) {
           if (webitlist[this.webitlist[b].pid] == tpid) {
                fnd_le = b;
           }
         }
    }
    if (fnd_le != -1) {
      this.dalist.splice(fnd_le,1);
    }
  }
}


viewer.prototype.del_person = function(puname) {

  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.uname == puname) {
                   fnd_rung = c;
              }
            } 
         }
  }
  if (fnd_rung != -1) {
     this.del_rung(fnd_rung);
  } else {
    var fnd_le = -1;
    for (var b=0; b<=this.dalist.length;b++) {
         if (peeplist[this.dalist[b]] != undefined) {
            if (peeplist[this.dalist[b].uname] == puname) {
                   fnd_le = b;
            }
         }
    }
    if (fnd_le != -1) {
      this.dalist.splice(fnd_le,1);
    }
  }
}



