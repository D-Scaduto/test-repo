  

function namer (pspotid) {

   this.spotid = pspotid + "_spot";
   this.showing = false;
   this.varname = "jesie";
   this.tmp_name = "";
   this.shape = "";  //twitter,facebook,google
}


namer.prototype.show = function() {
    var tmp = "";
    var lbl = "";
    var ocl = "";
    var moin = "";
    var mout = "";

       lbl ="name_talk";
       tmp=tmp +"<span id='"+lbl+"' style='display:inline-block;' >";
       tmp=tmp +"</span>";

   if (is_mini == true) {
       lbl = 'namer_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' class='menu_btn' >";
       tmp = tmp + "</span>"; 
     }


     lbl = this.spotid;
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
        this.showing = true; 
        this.say_hi();
    }
}

              
namer.prototype.get_name = function() {
    var tmp = "";
    var lbl = "";
    var ocl = "";
    var moin = "";
    var mout = "";

        var tval =  "";
        if (pname != "") {
          tval =  pname;
        } else {
          tval =  "name...";
        }
       tmp =tmp + "<input size=10 value='"+tval+"' id='pname_box' style='vertical-align:top;' > ";

       lbl = this.spotid + "check_btn";
       ocl = this.varname + ".find_me();";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/right_arrow_circle.png' class='menu_btn' >";
       tmp=tmp +"</span>";


       lbl = this.spotid + "twitter_btn";
       ocl = this.varname + ".set_shape(\"twitter\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' class='menu_btn' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_facebook_btn";
       ocl = this.varname + ".set_shape(\"facebook\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png' class='menu_btn' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_google_btn";
       ocl = this.varname + ".set_shape(\"google\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png' class='menu_btn' >";
       tmp=tmp +"</span>";

     lbl = "name_talk";
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
        this.showing = true; 
   } 
}


namer.prototype.say_hi = function() {
      var tmp = ""; 
      var ocl ="";
      var lbl = "";
      var moin = "";
      var mout = "";
      var cls = "";

    if (pname == "") {
 
       this.get_name();
 
    } else {

       lbl = "spacename_btn";
       moin = "marky(\""+lbl+"\");";
       mout = "unmarky(\""+lbl+"\");";
       ocl = "jesie.space_me();";
       cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp = tmp +  pname;
       tmp = tmp + "</span>";

       lbl = this.spotid + "twitter_btn";
       ocl = this.varname + ".set_shape(\"twitter\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' width='20px' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_facebook_btn";
       ocl = this.varname + ".set_shape(\"facebook\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png' width='20px' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_google_btn";
       ocl = this.varname + ".set_shape(\"google\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png' width='20px' >";
       tmp=tmp +"</span>";



    if (is_mini == true) {
       lbl = 'namer_unset_btn';
       ocl =  'diego.set_shape(\"\");'
       moin = 'marky(\"'+lbl+'\");';
       mout = 'unmarky(\"'+lbl+'\");';
       cls = 'spotd_off';
       tmp = tmp + "<span id='"+lbl+"' class='"+cls+"' onmouseover='"+moin+"' onmouseout='"+mout+"' onclick='"+ocl+"' style='float:right;'  >";
       tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' width='20px' >";
       tmp = tmp + "</span>"; 
     }

        lbl = "name_talk";
        if (document.getElementById(lbl)!=null) {
           document.getElementById(lbl).innerHTML= tmp;
           this.showing = true;
        } 
   }

}

namer.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
        tmpstr = tmpstr + "<span class='spotd_off'  onclick='jesie.say_hi();'  >";
        tmpstr = tmpstr + "are you "+ pname +" ?   ";
        tmpstr = tmpstr + "</span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.say_hi();' > y </span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.amnesiate();' > n </span>";
     lbl = "name_talk";
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


namer.prototype.amnesiate = function() {
      pname="";
      this.tmp_name="";
      pname_box = null;
/*
     FB.logout(function(response) {
       //alert(" user is now logged out ");
      say_hi();
     });
*/   
      this.get_name(); 
}


namer.prototype.find_me = function() {

    var cooknum = 0;
    var tmp_name = "";
    if (document.getElementById('pname_box') != null) {
      this.tmp_name = document.getElementById('pname_box').value;
    }

   if (tmp_name != "")  {
        pname = tmp_name;
    }
    this.say_hi();

}

namer.prototype.dejavu = function() {

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


namer.prototype.set_shape = function(pstr) {
       if (pstr != undefined) {
          this.shape=pstr;
        }
       this.show();
}


namer.prototype.toggle = function() {
    if (this.showing == true) {
      this.find_me();
      this.hide();
    } else {
      this.show();
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



