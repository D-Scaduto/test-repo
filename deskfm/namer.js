  

function namer () {

   this.spotid = "";
   this.tmp_name = "";
   this.pname = "";
   this.name_source = "deskfm";
//   this.pname_box = new suggester(document.getElementById("pname_box"), new name_provider(namelist));

}

namer.prototype.get_name = function(pspotid) {
    if (pspotid != undefined) {
      this.spotid = pspotid
    }
    var tmp = "";

    tmp =tmp + "<span class=spotd_off  onclick='jesie.findme();' > ";
    tmp = tmp + "what\'s your name ?";
    tmp =tmp + "</span>";

    var tval =  "";
        if (this.pname != "") {
          tval =  this.pname;
        } else {
          val =  this.tmp_name;
        }

    tmp =tmp + "<input size=8 value='"+tval+"' id='pname_box' onclick='' > ";

    if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML=tmp; 
    } 
}


namer.prototype.say_hi = function(pspotid) {
     if (pspotid != undefined) {
      this.spotid = pspotid
    }
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
           tmp = tmp + "hi";
           tmp = tmp + "</span>";
        }

        lbl = this.spotid;
        if (document.getElementById(lbl)!=null) {
           document.getElementById(lbl).innerHTML= tmp;
        } 
}


namer.prototype.space_me = function(pspotid) {
   if (pspotid != undefined) {
      this.spotid = pspotid
    }

     var tmpstr = "";
     var lbl = "";
        tmpstr = tmpstr + "<span class='spotd_off'  onclick='jesie.say_hi();'  >";
        tmpstr = tmpstr + "are you "+ this.pname +" ?   ";
        tmpstr = tmpstr + "</span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.say_hi();' > y </span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.amnesiate();' > n </span>";
     lbl = this.spotid;
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
     if (pspotid != undefined) {
      this.spotid = pspotid
    }


     var tmpstr = "";
     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick='jesie.whichone();'  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick='jesie.addName();'  >";

     if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML= tmpstr;
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


