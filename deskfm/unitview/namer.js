


poster.prototype.draw_name = function() {
   var tmp="";
   var pobj=null;
   var lbl = "";
   var tspot  = this.rung;
   var urlts= null;
   var ocl = "";
   var tlink = "";
/*
   if (this.source == "twitter") {
//     tlink =  = "http://twitter.com/Support/status/" + this.pid;
      tlink =  "http://twitter.com/" + this.uname;
      if (this.shape == "name") {
         tmp = "<a href='"+tlink+"' target='_blank' >"+this.uname+"</a>";
      } else {
         var s = this.uname;
         if (this.uname.length > 6) {
             s = this.uname.substr(0,6) + "..";
         }
         tmp = s;
      }

   }
*/

      var s = this.uname;
      tmp = s ;
 
      lbl = this.spotid;
      lbl = lbl +'_'+tspot;
      lbl = lbl + '_name_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmp;
      }
}


