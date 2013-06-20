

function sharer (pspotid) {

   this.spotid = pspotid;
   this.varname="nicky";
   this.showing = false;
   this.shape = "solo";  //menued 

   this.newster = new poster("share_spot",0,this.varname,this.varname +".newster","webits",false); 
   this.newster.btnson = true;

}


sharer.prototype.show = function() {

    var lbl = "";
    var pobj = null;
    var tmp = "";
    var lbl = "";
    var ocl = "";

    tmp = tmp + "<span id='share_spot_rung_0' class='sbox' style='' >";
    tmp = tmp + "</span>";


    lbl = this.spotid;
    pobj = document.getElementById(lbl);
    if (pobj != null) {
      pobj.innerHTML = tmp;
      this.showing = true;
      this.newster.build_rung();
      this.newster.draw_rung();
      jesie.show();
    }
 

     lbl = "share_btn";
     pobj = document.getElementById(lbl);
     if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_on";
       } else {
         pobj.setAttribute("class","spotd_on");
       }
     }
   

}


sharer.prototype.network_btns = function() {

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

     lbl = "network_btns";
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;
        this.fb_render();
        this.gplus_render();
               if (twttr != undefined) {
                 if (twttr.widgets != undefined) {
                   twttr.widgets.load();
                 }
               }
     } 

}


sharer.prototype.new_one = function(pdex) {
     var g = null;
     var t = -1;
     if (pdex == undefined) { 
       g = new webit();
       t = dalist.push(g);
       this.newster.set_ppid(t-1);
     } else {
       this.newster.set_ppid(pdex);
     }
     this.newster.redraw_rung();
}


sharer.prototype.add_one = function(pdex) {
   var lbl = "";
   if (this.showing == false) {
       this.show();
   }
   this.newster.mini_viewer.add_one(pdex);
   this.newster.redraw_rung();
}



sharer.prototype.update_one = function(pdex) {
   var lbl = "";
   if (this.showing == false) {
       this.show();
   }
   if (pdex != undefined) { 
       this.newster.set_ppid(pdex);
   }
   this.newster.redraw_rung();
}


sharer.prototype.set_shape = function(jnk,pshape) {
   if (pshape != undefined) {
      this.shape = pshape;
      this.newster.shape = this.shape;
      this.newster.build_rung(0);
      this.newster.draw_rung(0);
   }
}


sharer.prototype.set_dex = function(tdex) {
   if (tdex != undefined) {
      this.pidex = tdex;
      this.show();
   }
}


sharer.prototype.set_preset = function(tpreset) {

   this.preset = tpreset;
   this.newster.build_rung();
   this.newster.draw_rung();

}

sharer.prototype.change = function() {
   this.toggle();
}

sharer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


sharer.prototype.hide = function() {

   this.newster.hide_rung(); 
   jesie.hide();

   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if (pobj != null) {
         pobj.innerHTML = "";
   }

   this.showing = false; 
 
   lbl = "share_btn";
   pobj = document.getElementById(lbl);
   if (pobj != null) {
       if (is_ie) {
         pobj.className = "spotd_off";
       } else {
         pobj.setAttribute("class","spotd_off");
       }
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




