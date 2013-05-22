

var ymons = ['','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
var mini_mons = ['','j','f','m','a','m','j','j','a','s','o','n','d'];
var wdays = ['mon','tue','wed','thu','fri','sat','sun'];
var mini_days = ['m','t','w','t','f','s','s'];
var denoms = ['all','year','qtr','month','week','day'];

var da_denom = "qtr";
var da_year = 0;
var da_qtr = "";
var da_month = "";
var da_week = 1;
var da_day = "";

var cur_mon = new Object();
var first_mon = new Object();
var when_showing = false;


function init_months() {

   first_mon.month = 7;
   first_mon.year = 11;

   var cur_time = new Date();
   var s = cur_time.getFullYear().toString();
   cur_mon.year = s.substr(2);
   cur_mon.month = cur_time.getMonth()+1;

   da_month = cur_mon.month;
   da_year = cur_mon.year;
}


function toggle_when() {

   if (when_showing == true) { 
      hide_month_header();
   } else {
      show_month_header();
   }
}


function hide_month_header() {

  var t = "";
  var lbl = "caldar_spot";
  var obj = document.getElementById(lbl); 
  if (obj != null) {
      obj.innerHTML = t;
  }
  when_showing = false;
}


function set_denom(pstr) {
   da_denom = pstr;
   show_month_header();
}


function change_denom() {

   if (da_denom == "month" ) {
     da_denom = "qtr";
   } else if (da_denom == "qtr") {
     da_denom = "years";
   } else if (da_denom == "years") {
     da_denom = "month";
   } else {
     da_denom = "month";
   } 
   show_month_header();
}


function show_month_header() {

   when_showing = true;

   var t = "";
   var lbl = "";
   var o = null;
   var cls = '';
   var byrs = false;
  
    t=t +"<table cellspacing=1 cellpadding=1 border=0 bgcolor=white  >";
    t=t +"<tr>";

       if (da_denom == "qtr") {  

          var da_mon = new Object();
          da_mon.month = da_month;
          da_mon.year = da_year;

          o=get_net_month(da_mon,-2);
          if (o != null) {
              lbl = 'hdr_prevmon_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='scroll_months(-1);' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
              t=t+ " <";
              t = t + "</td>";
          }

          o=get_net_month(da_mon,-1);
          if (o != null) {
          lbl = 'hdr_month_btna';
          t = t+ "<td  id='"+lbl+"'  onclick='set_month("+o.month+","+o.year+");' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
          t=t+ " " +ymons[o.month];
          t = t + "</td>";
          if (o.month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
              byrs = true;
          }
         }

          lbl = 'hdr_month_btnb';
          t = t+ "<td   id='"+lbl+"' onclick='' class='spot_on'  onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");'  >";
          t=t+ " " +ymons[da_month];
          t = t + "</td>";
           if (da_month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
                byrs = true;
            }

          o=get_net_month(da_mon,1);
          if (o != null) {
           lbl = 'hdr_month_btnc';
           t = t+ "<td  id='"+lbl+"'  onclick='set_month("+o.month+","+o.year+");' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
           t=t+ " " +ymons[o.month];
           t = t + "</td>";
           if (o.month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
               byrs = true;
            }
          }

          o=get_net_month(da_mon,2);
          if (o!=null) {
              lbl = 'hdr_nextmon_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='scroll_months(1);' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
              t=t+ " >";
              t = t + "</td>";
          }

        if (byrs != true) {
          lbl = 'hdr_year_btn';
          t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd\""+lbl+"\");' onmouseout='unmarkyd\""+lbl+"\");' >";
          t = t + " '"+ da_year;
          t = t + "</td>";
        }
      }
 
    t=t +"</tr>";
    t=t +"</table>";
  
    lbl = "caldar_spot";
    var obj = document.getElementById(lbl); 
    if (obj != null) {
      obj.innerHTML = t;
    }
}


function set_month(pmon,pyr) {
 
   da_month = pmon;
   if (pyr != undefined) {     
     da_year = pyr;
   }
  show_month_header(); 
}


function set_week(pweek) {
  if (pweek != undefined) {
     da_week = pweek;
     da_denom = "month";
     show_month_header(); 
  }
}

function set_day(pday) {
  if (pday != undefined) {
     da_day = pday;
     da_denom = "month";
     show_month_header(); 
 }
}


function set_qtr(pqtr) {
 if (pqtr != undefined) {
     da_qtr = pqtr;
     var c = da_qtr * 3 - 1;
     da_month =  c;
     da_denom = "qtr";
     show_month_header();
  }
}

 
function set_year(pyr) {
 if (pyr != undefined) {
     da_year = pyr;
     da_denom = "month";
     show_month_header();
  }
}



function get_net_year(pdiff) { 

  var m = da_year; 

  m =  m + pdiff ;

  if (m>cur_mon.year) {
    m = da_year;
  }

  return m;

}


function get_net_months(from,to) { 

  var m = 0; 

  if (from.year == to.year) {
     m = to.month - from.month;
  }

  if (from.year < to.year) {
     m =  12 - from.month;
     m =  m + to.month;
  }

  return m;

}


function get_net_month(from,pnet) { 


   var ret = {};

   // going up 
   if (pnet > 0) {

         ret.year = from.year;
         ret.month = from.month + pnet;
       
         if (ret.month > 12) {
            ret.month = ret.month-12;
            ret.year = ret.year+1;
        }

         if (ret.year > cur_mon.year) {
             ret = null;
         } else if (ret.year == cur_mon.year) {
             if (ret.month > cur_mon.month) {
                 ret = null;
             }
         }
 
   } else {

         // crossing year
         if ((from.month + pnet)< 1) {
             ret.month = from.month + pnet + 12;
             ret.year = from.year-1;
         } else {
             ret.month = from.month + pnet;
             ret.year = from.year;
         }

       if (ret.year == first_mon.year) {
          if (ret.month < first_mon.month) {
              ret = null;
          }
       } 
   }        

   return ret;
}


function scroll_months(ppnet) {

   var pnet = parseInt(ppnet);

   var r = da_month;
   var y = da_year;

   // going up 
   if (pnet > 0) {

         // crossing year
         if ((r+ pnet)> 12) {
             y = y+1;
             if (y <= cur_mon.year) {
               da_month = r + pnet - 12;
               da_year = y;
             }
         } else {
             if ((y != cur_mon.year) || ((r+pnet) <= cur_mon.month)) {
               da_month = r + pnet;
               da_year = y;
             }
         } 

   // going down 
   } else {

         // crossing year
         if ((r+ pnet)< 1) {
             y = y-1;
             if (y >= first_mon.year) {
               da_month = r + pnet + 12;
               da_year = y;
             }
         } else {
             if ((y != first_mon.year) || ((r+pnet) >= first_mon.month)) {
               da_month = r + pnet;
               da_year = y;
             }
         } 
   }
 
   show_month_header();

}



