

function sharer (pspotid) {

   this.spotid = pspotid;
   this.varname = "nicky";
   this.showing = false;
   this.shape = "";  
   this.menued = false;

}


sharer.prototype.show = function() {

	var tmp = "";
	var lbl = "";
	var moin = "";
	var mout = ""
        var cls = "";
        var ocl = "";

   lbl = "share_reset_btn";
   ocl= "diego.set_shape(\"\");";
   tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"' class='' style='' >";
   tmp = tmp + "share";
   tmp = tmp + "</button>";


    if (this.shape == "twitter") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' width='20px' >";
       tmp=tmp +"</button>";

       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

     }  else if (this.shape == "facebook") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png' width='20px' >";
       tmp=tmp +"</button>";

       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

     }  else if (this.shape == "google") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png' width='20px' >";
       tmp=tmp +"</button>";

       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

     } else if (this.shape == "") {

       lbl = this.spotid +  "_twitter_btn";
       ocl = this.varname + ".set_shape(\"twitter\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' width='20px' >";
       tmp=tmp +"</button>";

       lbl = this.spotid +  "_facebook_btn";
       ocl = this.varname + ".set_shape(\"facebook\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png' width='20px' >";
       tmp=tmp +"</button>";

       lbl = this.spotid +  "_google_btn";
       ocl = this.varname + ".set_shape(\"google\");";
       tmp=tmp +"<button onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png' width='20px' >";
       tmp=tmp +"</button>";
     }

     lbl = "share_unset_btn";
     ocl= "diego.set_shape(\"\")";
     tmp = tmp + "<button id='"+lbl+"' onclick='"+ocl+"'  class='' style='float:right;' >";
     tmp = tmp + "<img src='deskfm/images/icons/share.png' width='20px' >";
     tmp = tmp + "</button>";

     lbl = "name_spot";
     tmp=tmp +"<div id='"+lbl+"'  >";
     tmp=tmp +"</div>";


     lbl = this.spotid;
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;
        this.showing = true;
        if (this.shape == "getname") {
             jesie.show();
        }
        $('#share_reset_btn').button();
     } 

}



sharer.prototype.new_one = function() {
     var g = null;
     var t = -1;
     g = new webit();
     t = amare.unsavedlist.push(g);
     daviewer.add_one(t-1,"unsaved");
}



sharer.prototype.show_nets = function() {

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

//         tmp = tmp + "<fb:like send='true' width='450' show_faces='true' ></fb:like>";
//       tmp=tmp +"<span class='fb-send' data-href='http://www.deskfm.com' style='vertical-align:top;'  ></span>";
       tmp=tmp +"<span class='fb-like' data-send='false' data-layout='button_count' data-width='90' data-show-faces='false' data-href='' ></span>";
//       tmp=tmp +"<div class='fb-like' data-send='true' data-layout='button_count' data-width='90' data-show-faces='false' data-href='http://www.deskfm.com' ></div>";
//       tmp=tmp +"<img src='deskfm/images/random/facebook-small.png' height='20px' >";


       lbl = this.spotid +  "_google_btn";
//       tmp=tmp +"<g:plusone></g:plusone>";
       tmp=tmp +"<span class='g-plusone' data-size='medium' data-annotation='none' data-width='40'  >";
       tmp=tmp +"</span>";

     lbl = this.spotid;
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;

	if (netson == true) {
          this.fb_render();
          this.gplus_render();
          if (twttr != undefined) {
           if (twttr.widgets != undefined) {
              twttr.widgets.load();
           }
          }
	}

     } 

}


sharer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


sharer.prototype.set_menued = function(ptog) {

	if (ptog == true) {
		this.menued = true;
		this.spotid = "menu_bar";
	} else {
		this.mened = false;
		this.spotid = this.menuid + "_spot";
	}
}


sharer.prototype.set_shape = function(pshape) {
	if (pshape != undefined) {
          this.shape = pshape;
          this.show();
        }
}


sharer.prototype.change = function() {
	this.toggle();
}


sharer.prototype.hide = function() {


   var pobj=null;
   var lbl = "";
   var tmp = "";

   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
        pobj.innerHTML = tmp;
   }
   this.showing = false; 

}


sharer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}





sharer.prototype.gplus_render = function() {

    var po = document.createElement('script');
    po.type='text/javascript';
    po.async= true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po,s);

}



sharer.prototype.fb_render = function() {

    FB.XFBML.parse();

}


sharer.prototype.tweet_btn = function() {

                cls='spotd_off';
                lbl = this.spotid + "_" + tspot + "_tweetbtn";
                moin = "markyd(\""+lbl+"\");";
                mout = "unmarkyd(\""+lbl+"\");";
                ocl='';
                tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
                var twparams='?count=none';
                twparams = twparams + "&text="+escape(this.story);
/*
                if (this.linkurl != "") {
                  twparams = twparams + "&url="+escape(this.linkurl);
                } else {
                  twparams = twparams + "&url="+escape("http://deskfm.com");
                }
*/
                tmp=tmp +"<a href='https://twitter.com.share"+twparams+"' class='twitter-share-button' data-lang='en' > </a>";
                tmp = tmp + "</span>";
}
              

sharer.prototype.fbsend_btn = function() {
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

/*
       lbl = this.spotid + "_facebook_btn";
       moin = "markyd(\""+lbl+"\");";
       mout = "unmarkyd(\""+lbl+"\");";

       tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp=tmp +"<span class='fb-send' data-href='http://www.deskfm.com'  >";
//       tmp=tmp +"<div class='fb-like' data-send='true' data-layout='button_count' data-width='90' data-show-faces='false' data-href='http://www.deskfm.com' >";
       tmp=tmp +"<img src='deskfm/images/random/facebook-small.png' height='20px' >";
       tmp=tmp +"</span>";
*/

/*
       lbl = this.spotid +  "_google_btn";
       moin = "markyd(\""+lbl+"\");";
       mout = "unmarkyd(\""+lbl+"\");";
       cls='';
       ocl ="";
       tmp = tmp + "<span  id='"+lbl+"'  class='"+cls+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp=tmp +"<img src='deskfm/images/random/google-plus-icon.jpg' height='20px' >";
       tmp=tmp +"<g:plusone></g:plusone>";
       tmp=tmp +"<span class='g-plusone' data-size='medium' data-annotation='none' style='display:inline;'>";
       tmp=tmp +"</span>";
*/


//            this.fbsend_btn();
//            this.gplus_render();




