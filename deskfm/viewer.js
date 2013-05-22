 

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
   if (dalist[pdx] == undefined) {
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
    for (var b=0; b<=this.dalist.length;b++) {
         if (dalist[this.dalist[b]] != undefined) {
           if (dalist[this.dalist[b].pid] == tpid) {
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


viewer.prototype.draw_screen = function() {

       this.draw_view();

       if (pname == "debug") {
         this.draw_debug();
       }
}


viewer.prototype.draw_view = function() {
    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var ct = 0; 
    var st = this.top_end;
 
    var cls='box';
/*
    if (this.listype == "people") {
      cls='bag';
    }
*/    
    if (this.zoom == true) {
      st = 1;
    }

    while (ct < st) {
      if (this.darungs[ct] != undefined) {
         
          lbl = this.screen+"_rung_"+ct;
          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='vertical-align:top;'  >"; 
          tmpstr=tmpstr+"</div>";

       }
     ct = ct + 1;
    }

    lbl = this.screen + "_view";
    if (document.getElementById(lbl)!= null) {
       document.getElementById(lbl).innerHTML=tmpstr;
       var ct = 0; 
       while (ct <= st) {
         if (this.darungs[ct] != undefined) {
           this.draw_rung(ct);
         }
         ct = ct + 1;
       }
    }

  if (this.is_mini == false ) {
    this.draw_rail();
  }

}


   
viewer.prototype.draw_rung = function(tspot) {

   var p = null;
   var adex = null;

  if (this.darungs[tspot] != undefined ) {
        adex = this.darungs[tspot].dadex;

        if (this.dalist[adex] != null) {
          p = this.dalist[adex];
          if (this.darungs[tspot].postman == undefined ) {
            var s = this.varname + ".darungs["+tspot+"].postman";
            this.darungs[tspot].postman = new poster(this.screen,tspot,this.varname,s,this.listype,this.is_mini);
          }
          this.darungs[tspot].postman.set_ppid(p);
        }

        if (this.darungs[tspot].postman != undefined) {
          this.darungs[tspot].postman.build_rung(tspot);
          this.darungs[tspot].postman.draw_rung(tspot);
        }

   } else {
 //        alert("err:" + adex);
   } 

}   



viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + " dalist="+ dalist.length;
     tmp = tmp + " catlist="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;

     lbl = this.screen + "_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


viewer.prototype.change_shape = function(tspot) {
  if (this.darungs[tspot] !=null  ) {
     if (this.darungs[tspot].shape=="") {
        this.set_shape(tspot,"pic");
     } else if (this.darungs[tspot].shape=="pic") {
        this.set_shape(tspot,"link");
     } else  if (this.darungs[tspot].shape=="link") {
        this.set_shape(tspot,"story");
     } else  if (this.darungs[tspot].shape=="story") {
        this.set_shape(tspot,"");
     }
   }
}


viewer.prototype.set_shape = function(tspot,tshape) {

   if (this.darungs[tspot] !=null  ) {
        if (this.darungs[tspot].postman != undefined  ) {
          this.darungs[tspot].postman.shape = tshape;
          this.darungs[tspot].postman.redraw_rung();
        }
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
   this.draw_screen();
}



viewer.prototype.set_zoom = function(pspot) {
   this.zoom = true;
   this.to_top(pspot);
}



 viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen + "_view";
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}






 viewer.prototype.draw_date = function(tspot,tdex) {

  var tmpstr = "";
                 if (dalist[tdex]!= null) {
                  if (dalist[tdex].dfdate != null) {
                      var a =  dalist[tdex].dfdate.split(" ");
                      var b =  a[0];
                      var c = b.split("-");
                      var m = c[1];
                      var pi = parseInt(m,10);
                      var nic =  ymons[pi] + " " +c[2] + " \'" + c[0].substr(2,2);
                      var my =  ymons[pi] + " " + " \'" + c[0].substr(2,2);
              //      tmpstr=tmpstr+ a + " ";
                      tmpstr=tmpstr+ my;
                   }
                }

  var lbl = this.screen +"_"+ tspot +"_date_spot";
  if ( document.getElementById(lbl) != null ) {
    document.getElementById(lbl).innerHTML= tmpstr;
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



 viewer.prototype.draw_name= function(tspot,tdex) {

  var tmpstr = "";

       if (dalist[tdex] != null ) {

             if (dalist[tdex].source == 'twitter' ) {
               turl = "http://twitter.com/Support/status/" + dalist[tdex].postnum;
               tmpstr = tmpstr + "<a href='"+turl+"' target='_blank' >";
               tmpstr = tmpstr + dalist[tdex].uname ;
               tmpstr = tmpstr + "</a>";
            }  else {	
              if (dalist[tdex].linkurl != undefined) {
               turl = dalist[tdex].linkurl;
 	        tmpstr=tmpstr + "<a href='"+turl+"' target='_blank' >";
 	        tmpstr=tmpstr + link_shrink(turl);
 	       tmpstr=tmpstr + "</a>";
              }
            }

        }

  var lbl = this.screen +"_"+ tspot +"_name_spot";
  if ( document.getElementById(lbl) != null ) {
    document.getElementById(lbl).innerHTML= tmpstr;
  }

}




