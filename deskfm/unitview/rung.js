

 poster.prototype.draw_rung = function(pspot) {

     var s= "";
     var se = "";
     var tspot = this.rung;
     if (pspot != undefined) {
       tspot = pspot;
     }

       se = eval(this.parvar);  

       if (this.listype != "person") {

            if ((this.btnson == true) && (buddah == true)) {
               this.get_story();
            } else {
               this.draw_story();
            }
            if ((this.btnson == true) && (buddah==true)) {
               this.get_link();
            } else {
               this.draw_link();
            }
            this.draw_price();

       }

          this.draw_name();

          if (se.is_mini == true) {

    //        s = se.boss.picurl;
            if (this.picurl != s) {  
              this.draw_pic();
            }

          } else {

            if ((this.btnson == true) && (buddah == true))  {
               this.get_pic();
            } else {
              this.draw_pic();
            }
            if (this.mini_showing == true) {
              this.show_mini();
            }

          }

      this.work_btns();

     if ((buddah == true) || (this.parvar == "nicky")) {
      this.change_btns();
     }

     if ((buddah == true) && (this.parvar != "nicky")) {
        this.draw_catsel();
        this.draw_groups();
      } 


//     this.darungs[tspot].postman.set_price();
//     this.draw_date(tspot,this.darungs[tspot].dadex);
//     this.draw_place(tspot,this.darungs[tspot].dadex);

        if (pname == "debug") {
          this.draw_debug();
        }
}


 poster.prototype.build_rung = function(tspot) {
     var lspot = this.rung;
     if (tspot != undefined) {
      lspot = tspot;
     }

       var tmpstr = "";
       var tocl = "";
       var lbl = "";
       var ocl = "";
       var moin = "";
       var mout = "";
       var lbl = "";
       var wd = "";
       var mw = "";
       var sp ="";

         if (pname == "debug") {
           lbl = this.spotid +'_'+lspot + '_debug_spot';
           tmpstr=tmpstr+"<div id='"+lbl+"' class=''  onmouseover=''  onmouseout=''  >"; 
	   tmpstr=tmpstr+"</div>";
         }

                tmpstr=tmpstr+"<span style='float:right;' >"; 
                if (this.listype == "products") {
                  lbl= this.spotid + "_" + lspot + "_" + "buy"+ "_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class='spotd_off' style='float:right;' >"; 
                  tmpstr=tmpstr+"</div>";
                } else {
                 lbl= this.spotid + "_" + lspot + "_" + "name" + "_spot";
                  cls="spotd_off";
	          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='float:right;' >"; 
                  tmpstr=tmpstr+"</div>";
   	          lbl= this.spotid + "_" + lspot + "_" + "group_btns";
                  tmpstr=tmpstr+"<div id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";

                }
                tmpstr=tmpstr+"</span>";

	        lbl= this.spotid + "_" + lspot + "_" + "work_btns";
                tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style=''  >"; 
    	        tmpstr=tmpstr+"</span>";

	        lbl= this.spotid + "_" + lspot + "_" + "send_btns";
                tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style=''  >"; 
    	        tmpstr=tmpstr+"</span>";

                tmpstr=tmpstr+"<div style='clear:right;'  >"; 
                tmpstr=tmpstr+"</div>";


                   lbl= this.spotid + "_" + lspot + "_" + "story" + "_spot";
                   cls = 'story';
	           tmpstr=tmpstr+"<span id='"+lbl+"'  class='"+cls+"'   style='float:left;' >"; 
	           tmpstr=tmpstr+"</span>";

                   lbl= this.spotid + "_" + lspot + "_" + "pic" + "_spot";
                   ocl=this.varname+".toggle_piczoom();";
	           tmpstr=tmpstr+"<div id='"+lbl+"' style='float:right;vertical-align:top;margin:auto;' onclick='"+ocl+"' >"; 
                   tmpstr=tmpstr+"</div>"; 

                   tmpstr=tmpstr+"<div style='clear:left;' ></div>";
                   tmpstr=tmpstr+"<div style='clear:right;' ></div>";


                   if (this.btnson == true) {
  	              lbl= this.spotid + "_" + lspot + "_getpic";
	              tmpstr=tmpstr+"<div  id='"+lbl+"' style='background-color:white;float:right;' >";
                      tmpstr=tmpstr+"</div>";
                      tmpstr=tmpstr+"<div style='clear:right;' ></div>";
  	              lbl= this.spotid ;
                      lbl = lbl + "_" + lspot + "_upic_frame";
                      var z = this.varname+".get_newpic();";
                      tmpstr=tmpstr+"<iframe id='"+lbl+"' name='"+lbl+"_name' onload='"+z+"' src='' style='display:none;' >"; 
                      tmpstr=tmpstr+"</iframe>";
                   }


 	           lbl= this.spotid + "_" + lspot + "_" + "link" + "_spot";
                   tmpstr=tmpstr+"<div id='"+lbl+"' class='spotd_off'  style='vertical-align:top;'  >"; 
    	           tmpstr=tmpstr+"</div>";


                lbl = this.spotid +'_'+lspot + '_work_spot';
                tmpstr = tmpstr + "<div id='"+lbl+"'  style=''  >";
                tmpstr = tmpstr + "</div>";


                lbl= this.spotid + "_" + lspot + "_" + "mini_view";
                tmpstr=tmpstr+"<div id='"+lbl+"' class='' style=''  >"; 
                tmpstr=tmpstr+"</div>";


    lbl = this.spotid + "_rung_" + lspot;
    var pobj = document.getElementById(lbl);
    if (pobj!= null) {
        pobj.innerHTML=tmpstr;
    }
}

 poster.prototype.hide_rung = function(lspot) {

   var t = this.rung;
   if (lspot != undefined) {
      t = lspot;
   }

    var tmpstr = "";
    var lbl = "";
 
    lbl = this.spotid + "_rung_" + t;
    var pobj = document.getElementById(lbl);
    if (pobj!= null) {
        pobj.innerHTML=tmpstr;
    }
}



