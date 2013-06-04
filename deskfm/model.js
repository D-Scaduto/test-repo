

  var daviewer = null;
  var cater = null;
  var store = null;
  var nicky = null;
  var wanda = null;
  var joe = null; 
  var amare = null;
  var sal = null;
  var diego = null;
  var mac  = null;

  var dalist = [];
  var prodlist = [];
  var peeplist = [];
  var providers = [];

  var da_limit=1000;
  var calls_out = 0;
  var buddah = false;
  var pname = "";


function draw_main() {

   var tmp = "";
   var lbl = "";

      if (pname == "debug") {
           lbl = "header_debug";
           tmp = tmp + "<div id='"+lbl+"'  >";
           tmp = tmp + "</div>";
      }

       tmp = tmp + "<span style='background-color:white;width:400x;float:left;border-style:solid;border-width:5px;border-color:silver;' >";

       lbl = "logo_lbtn";
       tmp = tmp + "<span id='"+lbl+"' style='background-color:white;float:left;vertical-align:top;' onclick='sal.change_vman();' >";
       tmp = tmp + "</span>";

       tmp = tmp + "<span style='background-color:white;' >";
       lbl = "logo_spot";
       tmp = tmp + "<div id='"+lbl+"' style='background-color:white;' >";
       tmp = tmp + "</div>";
       tmp = tmp + "<div style='background-color:white;width:350px;max-width:450px;' >";
       tmp = tmp+ "<span id='top_rail' style='vertical-align:top;background-color:white;' >";
       tmp = tmp+"</span>";
       tmp = tmp + "</div>";
       tmp = tmp + "</span>";

       tmp = tmp + "</span>";

       lbl = "menu";
       tmp = tmp + "<span id='"+lbl+"' style=''  >";
       tmp = tmp + "</span>";

       tmp = tmp + "<div id='main_view' style='' >";
       tmp = tmp + "</div>";


       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


function update_providers(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<providers.length;i++) {
                  if (providers[i] != undefined) {
                    if (listobj.dalist[j].uname == providers[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  providers.splice(found_at,1);
               }
              providers.push(listobj.dalist[j]);
            }
         }
      }
       calls_out--; 
       if (calls_out <= 0) {
           sal.draw_vman();
       }
}  


function update_prodlist(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<prodlist.length;i++) {
                  if (prodlist[i] != undefined) {
                    if (listobj.dalist[j].pid == prodlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  prodlist.splice(found_at,1);
               }
              prodlist.push(listobj.dalist[j]);
            }
         }
      }
       calls_out--; 
       if (calls_out <= 0) {
          sal.draw_vman();
      }
}  


function add_unsorted_webits(listobj) {
       for (var j=0;j<listobj.dalist.length;j++) {
              dalist.push(listobj.dalist[j]);
       }
       amare.count_lstats();
       calls_out--; 
       if (calls_out <= 0) {
           sal.draw_vman();
       }
}  


function update_list(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<dalist.length;i++) {
                  if (dalist[i] != undefined) {
                    if (listobj.dalist[j].pid == dalist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  dalist[found_at] = listobj.dalist[j];
               } else {
                 dalist.push(listobj.dalist[j]);
               }             
            }
         }
      }
       amare.count_lstats();
       calls_out--; 
       if (calls_out <= 0) {
          sal.draw_vman();
          if (buddah == true) {
            joe.redraw_view();
          } else {
            cater.redraw_view();
          }
      }
}  


function add_unsorted_people(listobj) {

      for (var j=0;j<listobj.peeplist.length;j++) {
           peeplist.push(listobj.peeplist[j]);
      }

      amare.count_lpstats();

      calls_out--; 
      if (calls_out <= 0) {
           sal.draw_vman();
          if (buddah == true) {
            joe.redraw_view();
          }
      }
}  



function update_people(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.peeplist.length > 0 ) { 
         for (var j=0;j<listobj.peeplist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<peeplist.length;i++) {
                  if (peeplist[i] != undefined) {
                    if (listobj.peeplist[j].uname == peeplist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  peeplist.splice(found_at,1);
              }
              peeplist.push(listobj.peeplist[j]);
         }
      }

      amare.count_lpstats();

      calls_out--; 
      if (calls_out <= 0) {
           sal.draw_vman();
          if (buddah == true) {
            joe.redraw_view();
          }
      }
}  



function get_one(dpid) {

   if (pobj.listype == "webits") {
       for (var k=0; k<=dalist.length; k++) {
         if (dalist[k] != undefined) {
           if (dalist[k].pid == dpid) {
               return dalist[k];
           }
         }
       }
   }

   if (pobj.listype == "people") {
   }

}


function new_webit(pobj) {
      calls_out--; 
      if (calls_out <= 0) {
          sal.draw_vman();
      }

       var t = dalist.push(pobj);
       nicky.new_one(t-1);
        
}

function update_webit(pobj) {
      calls_out--; 
      if (calls_out <= 0) {
          sal.draw_vman();
      }
      var fnd = -1;
      if (pobj.listype == "webits") {
        for (var k=0; k<=dalist.length; k++) {
          if (dalist[k] != undefined) {
            if (dalist[k].pid == pobj.pid) {
                dalist[k] = pobj;
            }
          }
        }
        daviewer.update_one(pobj.pid);
      }

      if (pobj.groupid != "") {
        fnd = -1;
        for (var k=0; k<=peeplist.length; k++) {
          if (peeplist[k] != undefined) {
            if (peeplist[k].uname == pobj.uname) {
                peeplist[k].groupid = pobj.groupid;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            var w = new webit();
            w.uname = pobj.uname;
            w.groupid = pobj.groupid;
            peeplist.push(w);
        }
        daviewer.update_person(pobj.uname);
      }
}


function update_person(pobj) {
      calls_out--; 
      if (calls_out <= 0) {
          sal.draw_vman();
      }
      var fnd = -1;
     if (pobj.listype == "people") {
        fnd = -1;
        for (var k=0; k<=peeplist.length; k++) {
          if (peeplist[k] != undefined) {
            if (peeplist[k].uname == pobj.uname) {
                peeplist[k] = pobj;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            peeplist.push(pobj);
        }
        daviewer.update_person(pobj.uname);
      }
}


function del_webit(tpid) {

  daviewer.del_webit(tpid);
   for (var k=0; k<=dalist.length; k++) {
     if (dalist[k] != undefined) {
         if (dalist[k].pid == tpid) {
             dalist[k] = null;
         }
     }
   }
}


function del_person(tuname) {

   daviewer.del_person(tuname);

   for (var k=0; k<=peeplist.length; k++) {
     if ((peeplist[k] != undefined)&&(peeplist[k] != undefined)){
         if (peeplist[k].uname == tuname) {
             peeplist[k] = null;
         }
     }
   }

}



function add_webit(tpobj) {

   var t=-1;
   if (tpobj != undefined) {
     if (tpobj.listype == "webits") {
       t=  dalist.push(tpobj);
     }
   }
   if (t != -1) {
     var dx = t-1;
   }
}





function find_pos(obj) {
      var curleft = curtop = 0;
      if (obj.offsetParent) {
        do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
      }
      return [curleft,curtop];
}


