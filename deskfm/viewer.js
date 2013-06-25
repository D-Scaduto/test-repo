 

function viewer (pscreen,pvarname) {

   this.screen = pscreen;
   this.varname = pvarname;

   this.listype = "webits";
   this.cat="";       
   this.subcat="";    
   this.sterms = "";
   this.prodids = [];
   this.price = -1;
   this.groupid = "";

   this.stats = null;
   
   this.dalist=[];
   this.listdex = 0;
   this.darungs= [];

   this.top_end=10;

   this.zoom = false;
   this.metro_spd=0;
   
   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

   this.track_show = true;
   this.color="";
   this.whenaply = false; 
}


viewer.prototype.get_dadex = function() {
   return this.dalist[this.listdex];
}


viewer.prototype.update_one = function(pdx) {
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
        }
        this.draw_rung(fnd_rung);
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


viewer.prototype.draw_view = function() {

    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var moin = "";
    var mout = "";
    var ct = 0; 
    var st = this.top_end;
 
    var cls='box';
    if (is_mobile == true) {
      cls='mbox';
    }
    if (this.is_mini == true) {
      cls='cbox';
    }

    if (this.zoom == true) {
      st = 1;
    }

    while (ct < st) {
      if (this.darungs[ct] != undefined) {
         
          lbl = this.screen+"_rung_"+ct;
//          moin = "markyd(\""+lbl+"\");";
//	  mout = "unmarkyd(\""+lbl+"\");";
          tmpstr=tmpstr+"<span id='"+lbl+"' class='"+cls+"' style='vertical-align:top;' onmouseover='"+moin+"' onmouseout='"+mout+"' >"; 
          tmpstr=tmpstr+"</span>";

       }
     ct = ct + 1;
    }

    lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
       document.getElementById(lbl).innerHTML=tmpstr;
       var ct = 0; 
       while (ct <= st) {
         if (this.darungs[ct] != undefined) {
           adex = this.darungs[ct].dadex;
           if (this.dalist[adex] != null) {
             p = this.dalist[adex];
             if (this.darungs[ct].postman == undefined ) {
               var s = this.varname + ".darungs["+ct+"].postman";
               this.darungs[ct].postman = new poster(this.screen,ct,this.varname,s,this.listype,this.is_mini);
             }
             this.darungs[ct].postman.set_ppid(p);
           }
           if (this.darungs[ct].postman != undefined) {

   
            if (this.listype == "unsorted") {
              this.darungs[ct].postman.shape = "getsort";
             }
             this.darungs[ct].postman.build_rung(ct);
             this.darungs[ct].postman.draw_rung(ct);
           }
         }
         ct = ct + 1;
       }
    }

  if (this.is_mini == false ) {
    this.draw_rail();
  }


   if (debug == true) {
       this.draw_debug();
   }

}


viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " webitlist="+ webitlist.length;
     tmp = tmp + " viewerlist="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


viewer.prototype.toggle_zoom = function() {

   if (this.zoom == true) {
     this.unset_zoom();
   } else {
     this.set_zoom();
   }

}



viewer.prototype.unset_zoom = function() {
   this.zoom = false;
   this.darungs[0].postman.btnson = false;
   this.draw_view();
}



viewer.prototype.set_zoom = function(pspot) {
   this.zoom = true;
   this.to_top(pspot);
}



 viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}





 viewer.prototype.draw_place = function(tspot,tdex) {

  var tmpstr = "";
  var lbl = this.screen +"_"+ tspot +"_place_spot";
   tmpstr = tmpstr + " ";

 if ( document.getElementById(lbl) != null ) {
    document.getElementById(lbl).innerHTML= tmpstr;
  }

}



