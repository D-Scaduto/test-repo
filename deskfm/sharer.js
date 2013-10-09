
function sharer (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "nicky";
   this.showing = false;
   this.shape = "";  

   this.newster = new poster('top_view',0,"nicky","nicky.newster",false);
}


sharer.prototype.show = function() {

   var tmp = "";
   var lbl = "";
   var cls = "";
   var ocl = "";

   if (this.shape == "twitter") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
          tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' class='menu_btn'  >";
       tmp=tmp +"</button>";

       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

    }  else if (this.shape == "facebook") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
          tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png'  class='menu_btn'  >";
       tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

    }  else if (this.shape == "google") {

       lbl = this.spotid +  "_unset_btn";
       ocl = this.varname + ".set_shape(\"\");";
          tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png'  class='menu_btn'  >";
       tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = "twitter_spot";
       tmp=tmp +"<span id='"+lbl+"'  >";
       tmp=tmp +"</span>";

     } else if (this.shape == "") {

       lbl = this.spotid +  "_twitter_btn";
//       ocl = this.varname + ".set_shape(\"twitter\");";
          tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png'  class='menu_btn'  >";
       tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = this.spotid +  "_facebook_btn";
//       ocl = this.varname + ".set_shape(\"facebook\");";
         tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png'  class='menu_btn'  >";
       tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = this.spotid +  "_google_btn";
//       ocl = this.varname + ".set_shape(\"google\");";
        tmp = tmp + "<span  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png'  class='menu_btn'  >";
       tmp=tmp +"</button>";
        tmp=tmp +"</span>";
     }

     lbl = this.spotid;
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;
        this.showing = true;
        $('#'+lbl).trigger("create");
        this.show_newster(); 
        if ((buddah == true) && ("mainshape" == "mini")) {
           sal.hide();
        } 
        daviewer.draw_view();
     } 
}


sharer.prototype.update_one = function(tpid,mdex,ltype) {

         if (this.newster.pid == tpid) {
            this.newster.set_ppid(mdex,ltype);
            this.newster.shape= "";
            this.newster.redraw_rung();
         }
}


sharer.prototype.set_webit = function(pdex,ptype) {

    if (this.showing == false) {
      this.show();
    }

     this.newster.set_ppid(pdex,ptype);
    this.newster.redraw_rung(); 
     window.scroll(0,0);
}



sharer.prototype.show_newster = function() {

    var lbl = "";
    var tmp = "";
    
    tmp += "<div id='top_view_rung_0' class='box' >";
    tmp += "</div";
    lbl = "top_view";
    $('#'+lbl).html(tmp);

 
    if ((this.newster.pid == undefined) || (this.newster.pid == "")) {
       this.newster.set_ppid(-1,"unsaved");
    }
    this.newster.redraw_rung(); 

}


sharer.prototype.del_rung = function(tspot) {

    this.newster.clear();
    diego.set_topshape("");
    this.hide();
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


sharer.prototype.set_shape = function(pshape) {
	if (pshape != undefined) {
          this.shape = pshape;
          this.show();
        }
}


sharer.prototype.change = function() {
	this.toggle();
}


sharer.prototype.hide_newster = function() {

   this.newster.hide_rung();
   lbl = 'top_view';
   $('#'+lbl).html("");
}

sharer.prototype.hide = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   lbl = this.spotid;

   this.hide_newster();

   pobj = document.getElementById(lbl);
   if ( pobj != null) {
        pobj.innerHTML = tmp;
   }
   this.showing = false; 
   daviewer.draw_view();

   if ((buddah == true) && ("mainshape" == "mini")) {
       sal.show();
   } 
 
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


sharer.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = "diego.toggle_topshape(\"share\");";
        if ((buddah == true) && (main_shape != "mini")) {
          ocl = "nicky.toggle();";
        }
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/share.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'share_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

sharer.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'share_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
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




