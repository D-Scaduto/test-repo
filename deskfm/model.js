

  var daviewer = null;

  var cater = null;  //categor
  var store = null;  //shoper
  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var joe = null;    //manager
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var mac  = null;   //farmer

  var webitlist = [];
  var productlist = [];
  var peoplelist = [];
  var providerlist = [];
  var unsortedlist = [];

  var da_limit=1000;
  var init_run = true;
  var got_stats = false;
  var buddah = false;
  var pname = "";
  var debug = false;


function draw_main() {

   var tmp = "";
   var lbl = "";

       if (pname == "debug") {
           lbl = "header_debug";
           tmp = tmp + "<div id='"+lbl+"'  >";
           tmp = tmp + "</div>";
       }

          tmp = tmp + "<span id='' style='width:375px;float:right;background-color:white;border-color:silver;border-style:solid;border-size:5px;'  >";

          tmp = tmp + "<div class='' style='background-color:white;' >";
 
	  lbl = "network_btns";
          tmp = tmp + "<span id='"+lbl+"' class='' style='min-width:150px;width:200px;background-color:white;' >";
          tmp = tmp + "</span>";     

	  lbl = "name_spot";
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style='background-color:white;float:right;' >";
          tmp = tmp + "</span>";  

	  ocl = "nicky.toggle();";
	  lbl = 'share_btn';
          tmp = tmp + "<span id='"+lbl+"' class='spotd_off' style='float:right;'  onclick='"+ocl+"' > ";
          tmp = tmp + "<img src='deskfm/images/icons/grey_round.png' height='15px' >";
          tmp = tmp + "</span>";

      	  tmp = tmp + "</div>";
          tmp = tmp + "<div style='clear:right;' ></div>";

       	  lbl = "share_spot";
          tmp = tmp + "<div id='"+lbl+"' style='background-color:white;'  >";
          tmp = tmp + "</div>";

          tmp = tmp + "</span>"; 

          tmp = tmp + "<span id='logo' style='float:left;background-color:white;padding:3px;border-color:silver;border-style:solid;border-size:5px;'  >";
          tmp = tmp + "</span>"; 

          tmp = tmp + "<div id='menu' style='width:350px;padding:10px;background-color:white;border:solid;border-width:5px;border-color:silver;float:left;'  >";
          tmp = tmp + "</div>";
   

       var pobj = document.getElementById('main_spot');
       if (pobj != null) {
          pobj.innerHTML = tmp;
	  nicky.network_btns();
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
               for (var i=0;i<providerlist.length;i++) {
                  if (providerlist[i] != undefined) {
                    if (listobj.dalist[j].uname == providerlist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  providerlist.splice(found_at,1);
               }
              providerlist.push(listobj.dalist[j]);
            }
         }
      }
}  


function update_products(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<productlist.length;i++) {
                  if (productlist[i] != undefined) {
                    if (listobj.dalist[j].pid == productlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  productlist.splice(found_at,1);
               }
              productlist.push(listobj.dalist[j]);
            }
         }
      }
}  




function update_webits(listobj) {
       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<webitlist.length;i++) {
                  if (webitlist[i] != undefined) {
                    if (listobj.dalist[j].pid == webitlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  webitlist[found_at] = listobj.dalist[j];
               } else {
                 webitlist.push(listobj.dalist[j]);
               }             
            }
         }
      }
      if (got_stats == true) {
         amare.count_lstats();
         diego.redraw_view("webits",listobj.dachunk);
         init_run = false;
      }
}  




function update_people(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if ( listobj.peoplelist.length > 0 ) { 
         for (var j=0;j<listobj.peoplelist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<peoplelist.length;i++) {
                  if (peoplelist[i] != undefined) {
                    if (listobj.peoplelist[j].uname == peoplelist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  peoplelist.splice(found_at,1);
              }
              peoplelist.push(listobj.peoplelist[j]);
         }
      }

      if (got_stats == true) {
        amare.count_lpstats();
        diego.redraw_view("people",listobj.dachunk);
      }
}  



function add_unsorted(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;
       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<unsortedlist.length;i++) {
                  if (unsortedlist[i] != undefined) {
                    if (listobj.dalist[j].uname == unsortedlist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  unsortedlist.splice(found_at,1);
              }
              unsortedlist.unshift(listobj.dalist[j]);
         }
      }

       amare.count_lstats();
       diego.redraw_view("unsorted");
}  




function get_one(dpid) {

   if (pobj.listype == "webits") {
       for (var k=0; k<=webitlist.length; k++) {
         if (webitlist[k] != undefined) {
           if (webitlist[k].pid == dpid) {
               return webitlist[k];
           }
         }
       }
   }

   if (pobj.listype == "people") {
   }

}



function add_webit(tpobj) {

   var t=-1;
   if (tpobj != undefined) {
     if (tpobj.listype == "webits") {
       t=  webitlist.push(tpobj);
     }
   }
   if (t != -1) {
     var dx = t-1;
   }
}


function new_webit(pobj) {

       sal.draw_vman();
       var t = webitlist.push(pobj);

       nicky.new_one(t-1);
        
}

function update_webit(pobj) {
      
      sal.draw_vman();

      var fnd = -1;
      if (pobj.listype == "webits") {
        for (var k=0; k<=webitlist.length; k++) {
          if (webitlist[k] != undefined) {
            if (webitlist[k].pid == pobj.pid) {
                webitlist[k] = pobj;
		fnd = k;
            }
          }
        }
	if (fnd != -1) {
          daviewer.update_one(pobj.pid);
    	  nicky.update_one(fnd);
	}
      }

      if (pobj.groupid != "") {
        fnd = -1;
        for (var k=0; k<=peoplelist.length; k++) {
          if (peoplelist[k] != undefined) {
            if (peoplelist[k].uname == pobj.uname) {
                peoplelist[k].groupid = pobj.groupid;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            var w = new webit();
            w.uname = pobj.uname;
            w.groupid = pobj.groupid;
            peoplelist.push(w);
        }
        daviewer.update_person(pobj.uname);
      }
}

function del_webit(tpid) {

  daviewer.del_webit(tpid);
   for (var k=0; k<=webitlist.length; k++) {
     if (webitlist[k] != undefined) {
         if (webitlist[k].pid == tpid) {
             webitlist[k] = null;
         }
     }
   }
}



function update_person(pobj) {
     var fnd = -1;
     if (pobj.listype == "people") {
        fnd = -1;
        for (var k=0; k<=peoplelist.length; k++) {
          if (peoplelist[k] != undefined) {
            if (peoplelist[k].uname == pobj.uname) {
                peoplelist[k] = pobj;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            peoplelist.push(pobj);
        }
        daviewer.update_person(pobj.uname);
      }
}



function del_person(tuname) {

   daviewer.del_person(tuname);

   for (var k=0; k<=peoplelist.length; k++) {
     if ((peoplelist[k] != undefined)&&(peoplelist[k] != undefined)){
         if (peoplelist[k].uname == tuname) {
             peoplelist[k] = null;
         }
     }
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



