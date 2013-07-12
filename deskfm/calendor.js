
function calendor (pspotid,pvarname) { 

   this.spotid = pspotid;
   this.showing = false;
   this.varname = pvarname;

   this.ymons = ['','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
   this.mini_mons = ['','j','f','m','a','m','j','j','a','s','o','n','d'];
   this.wdays = ['mon','tue','wed','thu','fri','sat','sun'];
   this.mini_days = ['m','t','w','t','f','s','s'];
   this.denoms = ['all','year','qtr','month','week','day'];

   this.da_denom = "qtr";
   this.da_year = 0;
   this.da_qtr = "";
   this.da_month = "";
   this.da_week = 1;
   this.da_day = "";

   this.cur_mon = new Object();
   this.first_mon = new Object();
   this.init_months();
}


calendor.prototype.init_months = function() {

   this.first_mon.month = 7;
   this.first_mon.year = 11;

   var cur_time = new Date();
   var s = cur_time.getFullYear().toString();
   this.cur_mon.year = s.substr(2);
   this.cur_mon.month = cur_time.getMonth()+1;

   this.da_month = this.cur_mon.month;
   this.da_year = this.cur_mon.year;
}



calendor.prototype.show = function() {

   this.showing = true;

   var t = "";
   var lbl = "";
   var o = null;
   var cls = '';
   var byrs = false;
  

//       if (this.da_denom == "qtr") {  

          var da_mon = new Object();
          da_mon.month = this.da_month;
          da_mon.year = this.da_year;

          o=this.get_net_month(da_mon,-2);
          if (o != null) {
              lbl = 'hdr_prevmon_btn';
              t = t+ "<span  id='"+lbl+"'  onclick='"+this.varname + ".scroll_months(-1);' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
              t=t+ " <";
              t = t + "</span>";
          }
/*
          o=this.get_net_month(da_mon,-1);
          if (o != null) {
          lbl = 'hdr_month_btna';
          t = t+ "<td  id='"+lbl+"'  onclick='"+this.varname +".set_month("+o.month+","+o.year+");' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          t=t+ " " +this.ymons[o.month];
          t = t + "</td>";
          if (o.month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
              byrs = true;
          }
         }
*/
          lbl = 'hdr_month_btnb';
          t = t+ "<span  id='"+lbl+"' onclick='' class='spotd_on'  onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");'  >";
          t=t+ " " +this.ymons[this.da_month];
          t = t + "</span>";
	  /*
           if (this.da_month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
              byrs = true;
            }
	    */
/*
          o=this.get_net_month(da_mon,1);
          if (o != null) {
           lbl = 'hdr_month_btnc';
           t = t+ "<td  id='"+lbl+"'  onclick='"+this.varname + ".set_month("+o.month+","+o.year+");' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
           t=t+ " " +this.ymons[o.month];
           t = t + "</td>";
           if (o.month == 12) {
              lbl = 'hdr_year_btn';
              t = t+ "<td  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
              t=t+ " '" +o.year;
              t = t + "</td>";
              byrs = true;
            }
          }
*/
          o=this.get_net_month(da_mon,2);
          if (o!=null) {
              lbl = 'hdr_nextmon_btn';
              t = t+ "<span  id='"+lbl+"'  onclick='"+this.varname + ".scroll_months(1);' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
              t=t+ " >";
              t = t + "</span>";
          }


        if (byrs != true) {
          lbl = 'hdr_year_btn';
          t = t+ "<span  id='"+lbl+"'  onclick='' class='spot_off'   onmouseover='markyd(\""+lbl+"\");' onmouseout='unmarkyd(\""+lbl+"\");' >";
          t = t + " '"+ this.da_year;
          t = t + "</span>";
        }

  //    }
 
  
    lbl = this.spotid;
    var obj = document.getElementById(lbl); 
    if (obj != null) {
      obj.innerHTML = t;
    }
}

calendor.prototype.set_demon = function(pstr) {
   this.da_denom = pstr;
   this.show();
}

calendor.prototype.change_demon = function() {

   if (this.da_denom == "month" ) {
     this.da_denom = "qtr";
   } else if (this.da_denom == "qtr") {
     this.da_denom = "years";
   } else if (this.da_denom == "years") {
     this.da_denom = "month";
   } else {
     this.da_denom = "month";
   } 
   this.show();
}

calendor.prototype.set_month = function(pmon,pyr) {

   this.da_month = pmon;
   if (pyr != undefined) {     
     this.da_year = pyr;
   }
   this.show(); 
}


calendor.prototype.set_week = function(pweek) {

  if (pweek != undefined) {
     this.da_week = pweek;
     this.da_denom = "month";
     this.show(); 
  }
}


calendor.prototype.set_day = function(pday) {

  if (pday != undefined) {
     this.da_day = pday;
     this.da_denom = "month";
     this.show(); 
 }
}

calendor.prototype.set_qtr = function(pqtr) {

 if (pqtr != undefined) {
     this.da_qtr = pqtr;
     var c = this.da_qtr * 3 - 1;
     this.da_month =  c;
     this.da_denom = "qtr";
     this.show();
  }
}

calendor.prototype.set_year = function(pyr) {
 
 if (pyr != undefined) {
     this.da_year = pyr;
     this.da_denom = "month";
     this.show();
  }
}


calendor.prototype.get_net_year = function(pdiff) {

  var m = this.da_year; 

  m =  m + pdiff ;

  if (m>this.cur_mon.year) {
    m = this.da_year;
  }

  return m;

}


calendor.prototype.get_net_months = function(from,to) {


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

calendor.prototype.get_net_month = function(from,pnet) {
   var ret = {};

   // going up 
   if (pnet > 0) {

         ret.year = from.year;
         ret.month = from.month + pnet;
       
         if (ret.month > 12) {
            ret.month = ret.month-12;
            ret.year = ret.year+1;
        }

         if (ret.year > this.cur_mon.year) {
             ret = null;
         } else if (ret.year == this.cur_mon.year) {
             if (ret.month > this.cur_mon.month) {
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

       if (ret.year == this.first_mon.year) {
          if (ret.month < this.first_mon.month) {
              ret = null;
          }
       } 
   }        

   return ret;
}


calendor.prototype.scroll_months = function(ppnet) {

   var pnet = parseInt(ppnet);

   var r = this.da_month;
   var y = this.da_year;

   // going up 
   if (pnet > 0) {

         // crossing year
         if ((r+ pnet)> 12) {
             y = y+1;
             if (y <= this.cur_mon.year) {
               this.da_month = r + pnet - 12;
               this.da_year = y;
             }
         } else {
             if ((y != this.cur_mon.year) || ((r+pnet) <= this.cur_mon.month)) {
               this.da_month = r + pnet;
               this.da_year = y;
             }
         } 

   // going down 
   } else {

         // crossing year
         if ((r+ pnet)< 1) {
             y = y-1;
             if (y >= this.first_mon.year) {
               this.da_month = r + pnet + 12;
               this.da_year = y;
             }
         } else {
             if ((y != this.first_mon.year) || ((r+pnet) >= this.first_mon.month)) {
               this.da_month = r + pnet;
               this.da_year = y;
             }
         } 
   }
 
   this.show();

}



calendor.prototype.toggle = function() {

   if (this.showing == true) { 
      this.hide();
   } else {
      this.show();
   }
}

calendor.prototype.hide = function() {


  var t = "";
  var lbl = this.spotid;
  var obj = document.getElementById(lbl); 
  if (obj != null) {
      obj.innerHTML = t;
  }
  this.showing = false;
}

