


poster.prototype.draw_name = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var tspot  = this.rung;
   var urlts= null;
   var ocl = "";
   var tlink = "";
   var s = "";

   if (this.parvar == "nicky") {
        s =  this.rungster+"_name_spot";
        jesie.say_hi(s);

   } else {

    tmp  = this.uname;

    if (this.source == "twitter") {
//       tlink =  = "http://twitter.com/Support/status/" + this.pid;
         tlink =  "http://twitter.com/" + this.uname;
          tmp = "<a href='"+tlink+"' target='_blank' >"+this.uname+"</a>";
     }
  
      lbl = this.rungster + '_name_spot';
      if ( document.getElementById(lbl) != null ) {
        document.getElementById(lbl).innerHTML= tmp;
     }
   }

 
}


