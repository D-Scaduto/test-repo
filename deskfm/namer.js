  

function namer (pspotid) {

   this.spotid = "";
   if (pspotid != undefined) {
      this.spotid = pspotid;
   }
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
    tmp = tmp + "<span id='"+lbl+"' onclick='"+ocl+"' onmouseover='"+moin+"' onmouseout='"+mout+"' class='spotd_off' style='' >";
    tmp = tmp + "";
    tmp = tmp + "</span>";

    lbl = "name_share";
    tmp = tmp + "<span id='"+lbl+"'  style='vertical-align:top;' >";
    tmp = tmp + "</span>";


    if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML=tmp; 
	this.say_hi();
	this.share_btns();
    } 
}


namer.prototype.share_btns = function() {

	var tmp = "";
	var lbl = "";
	var moin = "";
	var mout = ""
        var cls = "";

                var twparams='?count=none';
                twparams = twparams + "&text="+escape(this.story);
/*
                if (this.linkurl != "") {
                  twparams = twparams + "&url="+escape(this.linkurl);
                } else {
                  twparams = twparams + "&url="+escape("http://deskfm.com");
                }
*/
                tmp=tmp +"<a href='https://twitter.com.share"+twparams+"' class='twitter-share-button' data-lang='en' style='vertical-align:top;' > </a>";

//       tmp=tmp +"<span class='fb-send' data-href='http://www.deskfm.com' style='vertical-align:top;'  ></span>";
       tmp=tmp +"<span class='fb-like' data-send='false' data-layout='button_count' data-width='90' data-show-faces='false' data-href='' ></span>";
//       tmp=tmp +"<div class='fb-like' data-send='true' data-layout='button_count' data-width='90' data-show-faces='false' data-href='http://www.deskfm.com' ></div>";
//       tmp=tmp +"<img src='deskfm/images/random/facebook-small.png' height='20px' >";


       lbl = this.spotid +  "_google_btn";
//       tmp=tmp +"<g:plusone></g:plusone>";
       tmp=tmp +"<span class='g-plusone' data-size='medium' data-annotation='none' data-width='40'  >";
       tmp=tmp +"</span>";

     lbl = "name_share";
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;
        this.fb_render();
        this.gplus_render();
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
           tmp = tmp + "hi";
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




namer.prototype.gplus_render = function() {

    var po = document.createElement('script');
    po.type='text/javascript';
    po.async= true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po,s);

}


namer.prototype.fb_render = function() {
   var s="script";
   var id="facebook-jssdk";
   var js,fjs=document.getElementsByTagName(s)[0];

   if(!document.getElementById(id)) {
       js=document.createElement(s);
       js.id=id;
       js.src="//connect.facebook.net/en_US/all.js#xfbml=l";
//       js.src="//connect.facebook.net/en_US/all.js#xfbml=l&appId=191528434226668";
       fjs.parentNode.insertBefore(js,fjs);
    }
}








