
poster.prototype.draw_name = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var urlts= null;
   var ocl = "";
   var tlink = "";
   var s = "";
   cls = "";

   if (this.uname == "")   {

         if (this.editing == true) {
            ocl = this.varname + ".set_shape(\"getname\");";
            ps = "deskfm/images/icons/people_clay.png";
            tmp += "<img src='"+ps+"' onclick='"+ocl+"' width='50px'  class='"+cls+"' >"; 
         } 
 
   } else {
      if (this.source == "twitter") {
//       tlink =  = "http://twitter.com/Support/status/" + this.pid;
         tlink =  "http://twitter.com/" + this.uname;
          tmp = tmp + this.uname;
//          tmp = "<a href='"+tlink+"' target='_blank' >"+this.uname+"</a>";
      } else {
          tmp = tmp + this.uname;
      }

    }
  
      lbl = this.rungster + '_name_spot';
      if ( document.getElementById(lbl) != null ) {
        document.getElementById(lbl).innerHTML= tmp;
     }
     
}
              

poster.prototype.get_name = function() {
    var tmp = "";
    var lbl = "";
    var ocl = "";

    ocl = this.varname + ".update_name();";
    tmp =tmp + "<span class='spotd_off'  onclick='"+ocl+"' > ";
    tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' height='20px' >";
    tmp =tmp + "</span>";
 
    var tval =  "";
        if (this.uname != "") {
          tval =  this.uname;
        } else {
          tval =  pname;
        }
 
    lbl = this.rungster + '_name_box';

    tmp =tmp + "<input size=15 value='"+tval+"' id='"+lbl+"' onclick='' > ";

      lbl = this.rungster + '_name_spot';
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
    } 
}



poster.prototype.update_name = function() {

     var lbl = "";
     var obj = null;
     lbl = this.rungster + '_name_box';

        var tmpstr="";
       obj = document.getElementById(lbl);

       if (obj != null) {
          var bill = document.getElementById(lbl).value;
          this.uname = bill;
          pname = bill;
      }
      this.set_shape("");

}


poster.prototype.toggle_getname = function() {

    if (this.shape != "getname") {
       this.shape = "getname";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
     var ocl = "";

     tmpstr = tmpstr + "<span class='spotd_off'  onclick=''  >";
     tmpstr = tmpstr + "are you "+ this.pname +" ?   ";
     tmpstr = tmpstr + "</span>";
 
     ocl = this.varname + ".draw_name();";   
     tmpstr = tmpstr + "<span class='spotd_on' onclick='"+ocl+"' > y </span>";
     ocl = this.varname + ".amnesiate();";   
     tmpstr = tmpstr + "<span class='spotd_on' onclick='"+ocl+"' > n </span>";

     lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


poster.prototype.amnesiate = function() {

      this.uname = "";
      this.name_tmp = "";
/*
     FB.logout(function(response) {
       //alert(" user is now logged out ");
      say_hi();
     });
*/   
      this.draw_name(); 
}



poster.prototype.dejavu = function() {

     var tmpstr = "";
     var lbl = "";

     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick=''  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick=''  >";

      lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmpstr;
     } 
}


