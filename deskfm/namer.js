  

function namer (pspotid) {

   this.spotid = "";
   if (pspotid != undefined) {
      this.spotid = pspotid;
   }
   this.showing = false;
   this.tmp_name = "";
   this.pname = "";
   this.name_source = "deskfm";
//   this.pname_box = new suggester(document.getElementById("pname_box"), new name_provider(namelist));

}


namer.prototype.show = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var moin = "";
    var mout= "";

    lbl = "name_talk";
    ocl = "";
    moin = "markyd(\""+lbl+"\");";
    mout = "unmarkyd(\""+lbl+"\");";
    tmp = tmp + "<div id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+moin+"' onmouseout='"+mout+"' class='spotd_off' style='' >";
    tmp = tmp + "hey";
    tmp = tmp + "</div>";


    if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML=tmp; 
	this.say_hi();
	this.showing = true;
    } 
}


              

namer.prototype.get_name = function() {
    var tmp = "";
    var lbl = "";

    tmp =tmp + "<span class='spotd_off'  onclick='jesie.findme();' > ";
    tmp = tmp + "what\'s your name ?";
    tmp =tmp + "</span>";

    var tval =  "";
        if (this.pname != "") {
          tval =  this.pname;
        } else {
          val =  this.tmp_name;
        }

    tmp =tmp + "<input size=8 value='"+tval+"' id='pname_box' onclick='' > ";

    lbl = "name_talk";
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
    } 
}


namer.prototype.say_hi = function() {
      var tmp = ""; 
      var ocl ="";
      var lbl = "";

      if ( (this.pname != "") || (this.tmp_name != ""))  {

       lbl = "getname_btn";
       var moin = "markyd(\""+lbl+"\");";
       var mout = "unmarkyd(\""+lbl+"\");";
       ocl = "jesie.get_name();";
       var cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp = tmp +  "hi, ";
       tmp = tmp + "</span>";

       lbl = "spacename_btn";
       var moin = "markyd(\""+lbl+"\");";
       var mout = "unmarkyd(\""+lbl+"\");";
       ocl = "jesie.space_me();";
       var cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp = tmp +  this.pname;
       tmp = tmp + "</span>";

        } else {
           lbl = "getname_btn";
           var moin = "markyd(\""+lbl+"\");";
           var mout = "unmarkyd(\""+lbl+"\");";
           ocl = "jesie.get_name();";
           var cls='spotd_off';
           tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
           tmp = tmp + "what's your name?";
           tmp = tmp + "</span>";
        }

        lbl = "name_talk";
        if (document.getElementById(lbl)!=null) {
           document.getElementById(lbl).innerHTML= tmp;
        } 
}


namer.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
        tmpstr = tmpstr + "<span class='spotd_off'  onclick='jesie.say_hi();'  >";
        tmpstr = tmpstr + "are you "+ this.pname +" ?   ";
        tmpstr = tmpstr + "</span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.say_hi();' > y </span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.amnesiate();' > n </span>";
     lbl = "name_talk";
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


namer.prototype.amnesiate = function(pspotid) {
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
      this.say_hi(); 
}


namer.prototype.findme = function() {

    var cooknum = 0;

    if (document.getElementById('pname_box') != null) {
      this.tmp_name = document.getElementById('pname_box').value;
    }
    if (this.tmp_name != "")  {

      if (this.tmp_name != this.pname) {

        this.pname = this.tmp_name;
      }
    }
    this.say_hi();

}

namer.prototype.dejavu = function(pspotid) {

     var tmpstr = "";
     var lbl = "";
     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick='jesie.whichone();'  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick='jesie.addName();'  >";

     lbl = "name_talk";
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmpstr;
     } 
}


namer.prototype.suggest_names = function() {

   if (document.getElementById('pname_box') != null) {
      this.tmp_name = document.getElementById('pname_box').value;
   }
   this.pname_box.request_suggestions(false);
}


namer.prototype.pname_toggle = function() {

   if (this.pname_box != null) {
     if (this.pname_box.suggestions_showing()=="visible") {
       this.pname_box.hide_suggestions();
     } else { 
       this.pname_box.request_suggestions(true);
     }
   }
}






namer.prototype.hide = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;


    if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML=tmp; 
	this.showing = false;
    } 
}



