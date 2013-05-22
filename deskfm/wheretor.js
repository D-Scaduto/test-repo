

var pcats = ['home','work','school'];
var lcats = ['h','w','s'];
var werbs = ['in','or','at','orat','wherein'];

var where_at = "work";
var or_at = "";
var check_orat = false;

var showin = false;
var in_where = "";
var check_wherein = false;

var where_shape = "";
var where_showing = false;



function toggle_where() {

   if (where_showing == true) { 
       hide_where('hdr');
   } else {
       show_where('hdr');
   }
}




function toggle_whereshape() {

   if (where_shape == "set") { 
      where_shape = "";
   } else {
      where_shape = "set";
   }
   show_where('hdr');
}


function toggle_showin() {

   if (showin == true) { 
      showin = false;
   } else {
      showin = true;
   }
   show_where('hdr');
}


function hide_where(pspot) {

  where_showing = false;
  cater.set_shape("all");

   var t = "";
   var lbl = "";
  
  lbl = pspot + "_where_btns";
  obj = document.getElementById(lbl); 
  if (obj != null) {
      obj.setAttribute("class","spot_off");
  }

}

 

function show_where(pspot) {

   where_showing = true;

   var t = "";
   var lbl = "";
   
   t=t +"<table cellspacing=0 cellpadding=0 border=0 bgcolor=silver  >";
   t=t +"<tr>";
  
     t=t +"<td onclick='where_next();' class='text_on' >";
     t=t +" at ";
     t=t +"</td>";

    t=t +"<td id='"+pspot+"_whereat' >";
   t=t +"</td>";
   t=t +"<td id='"+pspot+"_wherein' >";
   t=t +"</td>";

   t=t +"</tr>";
   t=t +"</table>";
  
   lbl = "subcat_quesog";
   var obj = document.getElementById(lbl); 
   if (obj != null) {
      obj.innerHTML = t;
   }

   show_whereat(pspot);

   if (showin == true) {
     show_wherein(pspot);
   }
}



function show_whereat(pspot) {

   var t = "";
   var lbl = "";
   
     t=t +"<table align=right cellspacing=1 cellpadding=1 border=0 bgcolor=silver  >";
     t=t +"<tr>";
     t=t +"<td class='text_on' onclick='' >";
      if (where_at == "or") {

       t = t +   orat_text(pspot);

      } else if (where_at != "")  {

        t = t +  where_at;
 
      } else  {

      }
     t=t +"</td>";

    t=t +"</tr>";
    t=t +"</table>";

  lbl = pspot + "_whereat";
  var obj = document.getElementById(lbl); 
  if (obj != null) {
      obj.innerHTML = t;
  }

}



function where_next() {

   if (where_at == "or" ) {
     where_at = "home";
   } else if (where_at == "home") {
     where_at = "work";
   } else if (where_at == "work") {
     where_at = "school";
   } else if (where_at == "school") {
    where_at = "or";
   } else {
     where_at = "home";
   }

  show_where('hdr');

}




function orat_text(pspot) {
   var j  = "";

   if (where_at == "or") {

      if ((check_orat == true) || (or_at == "")) {

       j=j +"<td  id='orat_spot' class='text_off'   onmouseover='mark_where(\"orat\");' >";
       j=j +"<input id='categor_oratbox' size=8 value='"+or_at+"'  >";
       j=j +"</td>";

       } else {

       j=j +"<td  id='orat_spot' class='text_on' onclick='check_orat=true;show_where(\""+pspot+"\");'  onmouseover='mark_where(\"orat\");' >";
       j=j + "  " + or_at;
       j=j +"</td>";
 
      }

   } else {  

      if (check_orat == true) {
        j=j +"<td  id='orat_spot' class='text_off'   onmouseover='mark_where(\"orat\");' >";
        j=j +"<input id='categor_oratbox' size=8 value='"+or_at+"'  >";
        j=j +"</td>";
      } else {

       if (or_at != "") {
          j=j +"<td  id='orat_spot' class='text_off' onclick='check_orat=true;set_whereat(\""+pspot+"\",\"or\");'  onmouseover='mark_where(\"orat\");' >";
          j=j + "  " + or_at;
          j=j +"</td>";
       } else {
          j=j +"<td  id='orat_spot' class='text_on' onclick='check_orat=true;set_whereat(\""+pspot+"\",\"or\");'  onmouseover='mark_where(\"orat\");' >";
          j=j + " or ";
          j=j +"</td>";
        }

      }
    }
    return j;
}


function show_wherein(pspot) {

   var t = "";
   var lbl = "";
 
   if (where_shape != "" )  {  
  
     t=t +"<table align=right cellspacing=1 cellpadding=1 border=0 bgcolor=silver  >";
     t=t +"<tr>";

     if (check_wherein == true)  {  

         t=t +"<td  id='wherein_spot' class='text_off'   onmouseover='mark_where(\"wherein\");' >";
         t=t +"<input size=6 id='"+pspot+"_whereinbox' value='"+in_where+"' >";
         t=t +"</td>";
 
     } else {
 
         t=t +"<td  id='wherein_spot' class='text_off'  onclick='check_wherein=true;show_where(\""+pspot+"\");'  onmouseover='mark_where(\"wherein\");' >";
         t=t +  in_where;
         t=t +"</td>";
     }

     t=t +"</tr>";
     t=t +"</table>";
   }
  
   lbl = pspot + "_wherein";
   var obj = document.getElementById(lbl); 
   if (obj != null) {
      obj.innerHTML = t;
   }
}


function get_orat(pspot) {
  lbl = pspot + "_oratbox";
   var obj = document.getElementById(lbl); 
   if (obj != null) {
      if (obj.value == "") {
        where_at="";
      } else {
        or_at = obj.value;
      }
      check_orat = false;
   }
   show_where(pspot);
}




function set_whereat(pspot,beat) {
   if (beat != undefined) {
     where_at = beat;
   }
   show_where(pspot);
}


 
function next_where(pspot) {

  where_at = "";
  show_where(pspot);

  if (where_mark == "home") {
     mark_where("work");
  } else if (where_mark == "work") {
    mark_where("school"); 
  } else if (where_mark == "school") {
    mark_where("or");
    where_at = "or";
    check_orat = true;
    show_whereat(pspot);
  } else {
    check_orat = false;
    show_whereat(pspot);
    mark_where("home");
  }

}



function prev_where(pspot) {
  where_at = "";
  show_where(pspot);

  if (where_mark == "school") {
     mark_where("work");
  } else if (where_mark == "work") {
    mark_where("home"); 
  } else if (where_mark == "home") {
    mark_where("or");
    where_at = "or";
    check_orat = true;
    show_whereat(pspot);
  } else {
    check_orat = false;
    show_whereat(pspot);
    mark_where("school");
  }

}

 
function set_wherein(pspot) {
 lbl = pspot + "_whereinbox";
  var obj = document.getElementById(lbl); 
 if (obj != null) {
       in_where = obj.value;
       check_wherein = false;
  }
 show_where(pspot);

}


function mark_where (wat) { 


  if (wat != undefined) {
    where_mark = wat;
	
   for (var f=0; (f<werbs.length); f++ ) { 
        lbl = werbs[f] + "_spot";
        if (document.getElementById(lbl)!= null) {
          var wz =  document.getElementById(lbl).className;
          if ((wz == 'text_on2') && (wz != where_mark)) { 
               document.getElementById(lbl).className = "text_off";
          }
          if (wz != 'text_on') { 
            if (where_mark == werbs[f]) {
              document.getElementById(lbl).className = "text_on2";
            }
          }
        }
    }

   for (var h=0; (h<pcats.length); h++ ) {

        lbl = pcats[h] + "_spot";
        if (document.getElementById(lbl)!= null) {
          wz =  document.getElementById(lbl).className;
          if ((wz == 'text_on2') && (wz != where_mark)) { 
               document.getElementById(lbl).className = "text_off";
          }
          if (wz != 'text_on') { 
            if (where_mark == pcats[h]) {
              document.getElementById(lbl).className = "text_on2";
            }
          }
        }

    }

 }

}


