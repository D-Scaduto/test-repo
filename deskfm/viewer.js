 

function viewer (pscreen,pvarname) {

   this.screen = pscreen;
   this.varname = pvarname;
   this.btns_showing = false;

   this.listype = "webits";
   this.cat="";       
   this.subcat="";    
   this.sterms = "";
   this.prodids = [];
   this.price = -1;
   this.groupid = "";

   this.stats = null;

   this.listdex = 0;
   this.dalist=[];
   this.darungs= [];

   this.top_end=10;

   this.zoom = false;
   this.tail = true;

   this.metro_spd=0;
   
   this.is_mini = false;
   var sl = this.varname.length;
   if (this.varname.substring(sl-11) == "mini_viewer") {
        this.is_mini = true;
   }

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
    var adex = "";
    var pid = "";
    var s = "";
 
    var cls='box';
    if (is_mobile == true) {
      cls='mbox';
    }
    if (this.is_mini == true) {
      cls='cbox';
    }

    if (this.zoom == true) {
         lbl = "zoom_rung_0";
         tmpstr=tmpstr+"<div id='"+lbl+"' class='zbox' style='' onmouseover='"+moin+"' onmouseout='"+mout+"' >"; 
         tmpstr=tmpstr+"</div>";
	 ct = ct + 1;
    }
    
    if (this.tail == true) {
      while (ct < st) {
        if (this.darungs[ct] != undefined) {
          lbl = this.screen+"_rung_"+ct;
//          moin = "markyd(\""+lbl+"\");";
//	    mout = "unmarkyd(\""+lbl+"\");";
          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='vertical-align:top;' onmouseover='"+moin+"' onmouseout='"+mout+"' >"; 
          tmpstr=tmpstr+"</div>";
        }
       ct = ct + 1;
      }
    }

     lbl = this.screen;
     if (document.getElementById(lbl)!= null) {
       document.getElementById(lbl).innerHTML=tmpstr;

       ct = 0; 
       if (this.zoom == true) {
          if (this.darungs[ct] != undefined) {
             adex = this.darungs[ct].dadex;
             if (this.dalist[adex] != null) {
               pid = this.dalist[adex];
	       if (this.darungs[ct].postman == undefined) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster("zoom",ct,this.varname,s,this.listype,this.is_mini);
	       }
               if (this.darungs[ct].postman != undefined) {
                 this.darungs[ct].postman.set_ppid(pid);
                 this.darungs[ct].postman.spotid = 'zoom';
  	         this.darungs[ct].postman.piczoom = true;
                 if (this.listype == "unsorted") {
                   this.darungs[ct].postman.shape = "getsort";
                 }
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
              }
	     }
	  }
	  ct = ct + 1;
       }

       if (this.tail == true) {
         while (ct <= st) {
           if (this.darungs[ct] != undefined) {
             adex = this.darungs[ct].dadex;
             if (this.dalist[adex] != null) {
               pid = this.dalist[adex];
               if (this.darungs[ct].postman == undefined ) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster(this.screen,ct,this.varname,s,this.listype,this.is_mini);
               }
               if (this.darungs[ct].postman != undefined) {
	         this.darungs[ct].postman.set_ppid(pid);
                 if (this.listype == "unsorted") {
                   this.darungs[ct].postman.shape = "getsort";
                 }
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
               }
	     }
           }
           ct = ct + 1;
	 }
       }
    }

    if (this.is_mini == false ) {
       if (this.btns_showing == false) {
	  this.draw_railbtns();
       }
       this.draw_raildata();
    }


    if (debug == true) {
       this.draw_debug();
    }

}


viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " webitlist="+ amare.webitlist.length;
     tmp = tmp + " viewerlist="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


viewer.prototype.change_shape = function() { 

	if (this.zoom == false) {
          if (this.tail == true) {
	      this.unset_tail();
           }
   	   this.set_zoom();
	} else {
	    if (this.tail == false) {
		    this.set_tail();
	    } else {
		  this.unset_zoom();
	    }
	}

}


viewer.prototype.toggle_tail = function() {

   if (this.tail == true) {
     this.unset_tail();
   } else {
     this.set_tail();
   }
}


viewer.prototype.unset_tail = function() {
	var lbl = "";
	var pobj = null;
	var tmp = "";

   this.tail = false;
   lbl = "main_view";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }

   this.set_zoom(); 
}



viewer.prototype.set_tail = function(pspot) {
   this.tail = true;
   this.draw_view();
}


viewer.prototype.toggle_zoom = function() {

   if (this.zoom == true) {
     this.unset_zoom();
   } else {
     this.set_zoom();
   }

}



viewer.prototype.unset_zoom = function() {
	var lbl = "";
	var pobj = null;
	var tmp = "";

   this.zoom = false;
 
   lbl = "zoom_rung_0";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }

   this.darungs[0].postman = undefined;
   this.tail = true;
   this.draw_view();
}



viewer.prototype.set_zoom = function(pspot) {
   this.zoom = true;
   this.tail = false;
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



