

function sharer (pspotid) {
   this.spotid = pspotid;
   this.varname="nicky";
   this.showing = false;

   this.newster = new poster(this.spotid,0,this.varname,this.varname +".newster","webits",false); 
   this.newster.btnson = true;

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

sharer.prototype.set_preset = function(tpreset) {

   this.preset = tpreset;
   this.newster.build_rung();
   this.newster.draw_rung();

}


sharer.prototype.show = function() {

        this.newster.build_rung();
        this.newster.draw_rung();

        this.draw_screen();

        this.showing = true;
}


sharer.prototype.draw_screen = function() {

       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";
       var moin = "";
       var mout = "";
       var cdx="";
       var cdxe = "";
       var stpid="";
       var spid="";

       lbl = this.spotid + "_reset_btn";
       moin = "markyd(\""+lbl+"\");";
       mout = "unmarkyd(\""+lbl+"\");";
       ocl = "nicky.newster.toggle_btns();";
       cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp=tmp +"<img src='deskfm/images/icons/grey_round.png' height='20px' >";
       tmp=tmp +"</span>";

       lbl = "name_spot";
       tmp = tmp + "<span  id='"+lbl+"' style='vertical-align:top;' >";
       tmp=tmp +"</span>";

       lbl = "tweetbtn_spot";
       moin = "markyd(\""+lbl+"\");";
       mout = "unmarkyd(\""+lbl+"\");";
       ocl = "";
       cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       var twparams='?count=none&url='+escape("http://deskfm.com");
//       twparams = twparams + "&text="+escape(this.story);
       tmp=tmp +"<a href='https://twitter.com.share"+twparams+"' class='twitter-share-button' data-lang='en' > </a>";
       tmp=tmp +"</span>";

/*
       lbl = this.spotid + "_email_btn";
       moin = "markyd(\""+lbl+"\");";
       mout = "unmarkyd(\""+lbl+"\");";
       cls='spotd_off';
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp=tmp +"<img src='deskfm/images/icons/email_black.png' height='20px' >";
       tmp=tmp +"</span>";
*/
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

     lbl = "share_top";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
//          this.tweet_btn();

     }

//            this.fbsend_btn();
//            this.gplus_render();
}


sharer.prototype.gplus_render = function() {

    var po = document.createElement('script');
    po.type='text/javascript';
    po.async= true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po,s);

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


sharer.prototype.tweet_btn = function() {
/*
    window.twttr = (function (d,s,id) {

      var t, js, fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;

      js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);

      return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });

    } (document, "script", "twitter-wjs"));
*/
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



sharer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


sharer.prototype.hide = function() {
     this.newster.hide_rung(); 
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

