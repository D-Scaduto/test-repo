

function calendor (pspotid, pvarname, pfunc) { 

   this.spotid = pspotid; 
   this.varname = pvarname;
   this.funcstr = pfunc;

   this.showing = false;
 
   this.current_month = new Object();
   this.first_month =new Object();
   this.da_month = new Object();

   this.months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
   this.mini_months = ['j','f','m','a','m','j','j','a','s','o','n','d'];

   this.init();
}


calendor.prototype.init = function() {

   this.first_month.month = 6;
   this.first_month.year = 2011;

   var now = new Date();
   this.current_month.year = parseInt(now.getFullYear().toString());
   this.current_month.month = now.getMonth();

   this.da_month.year = this.current_month.year;
   this.da_month.month = this.current_month.month;
}



calendor.prototype.show = function() {

         var t = "";
         var lbl = "";
         var o = null;
         var cls = '';
         var ocl= "";
	 var btnstr = "";

          o=this.get_net_month(this.da_month,-1);
          if (o != null) {
	    ocl = this.varname + ".scroll_months(-1);";
	  }
          lbl = 'hdr_prevmon_btn';
          t = t+ "<button  id='"+lbl+"'  onclick='"+ocl+"' data-role='button' >";
          t=t+ " <";
          t = t + "</button>";

          lbl = 'hdr_month_btn';
	  ocl = this.funcstr;
          t = t+ "<button  id='"+lbl+"' onclick='"+ocl+"' data-role='button' >";
          btnstr=btnstr+ " " +this.months[this.da_month.month];
          btnstr=btnstr+ " '" +this.da_month.year;
	  t = t + btnstr;
          t = t + "</button>";

	  o=this.get_net_month(this.da_month,1);
	  lbl = 'hdr_nextmon_btn';
	  ocl = "";
          if (o!=null) {
		  ocl = this.varname + ".scroll_months(1);";
          }    
          t = t+ "<button  id='"+lbl+"'  onclick='"+ocl+"' data-role='button'  >";
          t=t+ " >";
          t = t + "</button>";
	    
     
    lbl = this.spotid;
    var obj = document.getElementById(lbl); 
    if (obj != null) {
      obj.innerHTML = t;
      this.showing = true;
    }
}


calendor.prototype.get_da_month = function() {
	var o = new Object();
	o.month = this.da_month.month;
	o.year = this.da_month.year;
	return o;
}



calendor.prototype.scroll_months = function(ppnet) {

   var pnet = parseInt(ppnet);

   var r = this.da_month.month;
   var y = this.da_month.year;

   // going up 
   if (pnet > 0) {

         // crossing year
         if ((r+ pnet) >= 12) {
             y = y+1;
             if (y <= this.current_month.year) {
               this.da_month.month = r + pnet - 12;
               this.da_month.year = y;
             }
         } else {
             if ((y != this.current_month.year) || ((r+pnet) <= this.current_month.month)) {
               this.da_month.month = r + pnet;
               this.da_month.year = y;
             }
         } 

   // going down 
   } else {

         // crossing year
         if ((r+ pnet)< 0) {
             y = y-1;
             if (y >= this.first_month.year) {
               this.da_month.month = r + pnet + 12;
               this.da_month.year = y;
             }
         } else {
             if ((y != this.first_month.year) || ((r+pnet) >= this.first_month.month)) {
               this.da_month.month = r + pnet;
               this.da_month.year = y;
             }
         } 
   }
 
   this.show();

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

         if (ret.year > this.current_month.year) {
             ret = null;
         } else if (ret.year == this.current_month.year) {
             if (ret.month > this.current_month.month) {
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

       if (ret.year == this.first_month.year) {
          if (ret.month < this.first_month.month) {
              ret = null;
          }
       } 
   }        

   return ret;
}


calendor.prototype.get_net_year = function(pdiff) {

  var m = this.da_month.year; 
  m =  m + pdiff ;

  if (m>this.current_month.year) {
    m = this.da_month.year;
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

