
function sharer (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "nicky";
   this.showing = false;
   this.shape = "";  

   this.newster = new poster('top_view',0,"nicky","nicky.newster",false);
}


sharer.prototype.show = function() {
    var lbl = "";
    var tmp = "";
 
     tmp = tmp + "<span id='nets_spot'  class='' style=''  >";
     tmp = tmp + "</span>";
  
    tmp += "<div id='top_view_rung_0' class='box' >";
    tmp += "</div";

    lbl = "top_view";
    $('#'+lbl).html(tmp);

    $('#'+lbl).popup("open");


    this.showing = true;

        this.show_newster(); 
        this.share_this();
//        this.show_nets();
        daviewer.draw_view();
}

sharer.prototype.show_newster = function() {

    var lbl = "";
    var tmp = "";
    var ocl = "";
    if (buddah == true) { 
      if ((this.newster.pid == undefined) || (this.newster.pid == "")) {
         this.newster.set_ppid(-1,"unsaved");
      }
      this.newster.redraw_rung();
   } else { 
      if ((this.newster.pid != undefined) && (this.newster.pid != "")) {
        this.newster.redraw_rung();
      }
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

     this.newster.set_ppid(pdex,ptype);
//    window.scroll(0,0);
     this.show();
}


sharer.prototype.del_rung = function(tspot) {

    this.newster.clear();
    diego.set_topshape("");
    this.hide();
}


sharer.prototype.share_this = function() {

	var tmp = "";
	var lbl = "";
        var ocl = "";

        tmp += "<span class='st_sharethis_large' displayText='ShareThis'></span>";
	tmp += "<span class='st_facebook_large' displayText='Facebook'></span>";
	tmp += "<span class='st_twitter_large' displayText='Tweet'></span>";
	tmp += "<span class='st_linkedin_large' displayText='LinkedIn'></span>";
	tmp += "<span class='st_pinterest_large' displayText='Pinterest'></span>";
	tmp += "<span class='st_email_large' displayText='Email'></span>";

        ocl = "$(\"#top_view\").popup(\"close\");";
        tmp = tmp + "<span  class='mybtns' style='vertical-align:top;'  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
        tmp = tmp + "<img src='deskfm/images/icons/delete_black.png'  class='menu_btn'  >";
        tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = "nets_spot";
       $('#'+lbl).html(tmp);
       stButtons.locateElements();

}

sharer.prototype.show_nets = function() {

	var tmp = "";
	var lbl = "";
        var cls = "";

	tmp += "<div id='social'>";
 	tmp += "   <div class='plusone'>";
 	tmp += "   <g:plusone size='medium' annotation='none'></g:plusone>"
 	tmp += "   </div>";
 	tmp += "   <div class='twitter'>";
 	tmp += "   <a href='https://twitter.com/share' class='twitter-share-button' data-count='none' data-via='' >Tweet</a>";  
 	tmp += "   </div>";
// 	tmp += "   <div class='fb-like' data-send='false' data-layout='button_count' data-width='90' data-show-faces='false' data-href='http://www.deskfm.com' ></div>";
	tmp += "</div>";


     lbl = "nets_spot";
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmp;

//	if (netson == true) {
  //        this.fb_render();
          this.gplus_render();
          if (twttr != undefined) {
           if (twttr.widgets != undefined) {
              twttr.widgets.load();
           }
          }
//	}

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

//    FB.XFBML.parse();

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
              

