


poster.prototype.draw_name = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var urlts= null;
   var ocl = "";
   var tlink = "";
   var s = "";

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

              

poster.prototype.get_name = function() {
    var tmp = "";
    var lbl = "";
    var ocl = "";

    tmp =tmp + "<span class='spotd_off'  onclick='jesie.findme();' > ";
    tmp = tmp + "what\'s your name ?";
    tmp =tmp + "</span>";

    var tval =  "";
        if (this.pname != "") {
          tval =  this.pname;
        } else {
          val =  this.tmp_name;
        }
    tmp =tmp + "<br>";
    tmp =tmp + "<input size=15 value='"+tval+"' id='pname_box' onclick='' > ";

      lbl = this.rungster + '_name_spot';
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
    } 
}



poster.prototype.update_name = function() {

     var lbl = "";
     var obj = null;
     lbl = this.rungster + '_name_spot';

        var tmpstr="";
       obj = document.getElementById(lbl);

       if (obj != null) {
          var bill = document.getElementById(lbl).value;
          this.story = bill.replace(/["']{1}/gi,"");
          this.story = bill.replace(/[\n]{1}/gi,"<br>");
          this.changed = true;
	  this.story_changed = true;
          this.change_btns(); 
          obj.focus();
      }

}


poster.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
        tmpstr = tmpstr + "<span class='spotd_off'  onclick='jesie.say_hi();'  >";
        tmpstr = tmpstr + "are you "+ this.pname +" ?   ";
        tmpstr = tmpstr + "</span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.say_hi();' > y </span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.amnesiate();' > n </span>";
      lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


poster.prototype.amnesiate = function(pspotid) {
    if (pspotid != undefined) {
      this.spotid = pspotid
    }

      this.pname="";
      this.tmp_name="";
      pname_box = null;
/*
     FB.logout(function(response) {
       //alert(" user is now logged out ");
      say_hi();
     });
*/   
      this.draw_name(); 
}


poster.prototype.findme = function() {

    var cooknum = 0;

    if (document.getElementById('pname_box') != null) {
      this.tmp_name = document.getElementById('pname_box').value;
    }
    if (this.tmp_name != "")  {

      if (this.tmp_name != this.pname) {

        this.pname = this.tmp_name;
      }
    }
    this.draw_name();

}

poster.prototype.dejavu = function(pspotid) {

     var tmpstr = "";
     var lbl = "";
     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick='jesie.whichone();'  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick='jesie.addName();'  >";

      lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmpstr;
     } 
}


