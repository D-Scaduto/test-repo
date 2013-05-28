

 poster.prototype.draw_rung = function(pspot) {

     var tspot = this.rung;
     if (pspot != undefined) {
       tspot = pspot;
     }


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


          if (this.is_mini == true) {

              var s= "";
              var se1,se2 = null;
              se1 = eval(this.parvar);
              se2 = se1.parvar;
              if (se2 != undefined) {
                s = se2.picurl;
                if (this.picurl != s) {  
                  this.draw_pic();
                }

                s = se2.uname;
                if (this.uname != s) {  
                  this.draw_name();
                }

              }


          } else {

            this.draw_name();

            if ((this.btnson == true) && (buddah == true))  {
               this.get_pic();
            } else {
              this.draw_pic();
            }

            if (this.mini_showing == true) {
              this.show_mini();
            }

          }

      this.nav_btns();

     if ((this.btnson == true) && (buddah == true))  {
         this.work_btns();
     }

     if ((buddah == true) || (this.parvar == "nicky")) {
      this.change_btns();
     }

     if ((buddah == true)  && (this.listype == "webits")) {
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
       var cls = '';

       var wd = "";
       var mw = "";
       var sp ="";

           if (this.is_mini == true) {

               tmpstr=tmpstr+"<div style='background-color:white;' >"; 

                lbl= this.spotid + "_" + lspot + "_nav_btns";
                tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style='display:inline-block;'  >"; 
    	        tmpstr=tmpstr+"</span>";

                if (this.listype == "products") {
                  lbl= this.spotid + "_" + lspot + "_" + "buy"+ "_spot";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' style='display:inline-block;' >"; 
                  tmpstr=tmpstr+"</span>";
                } else {
                 lbl= this.spotid + "_" + lspot + "_" + "name" + "_spot";
                  cls="spotd_off";
	          tmpstr=tmpstr+"<span id='"+lbl+"' class='"+cls+"' style='display:inline-block;' >"; 
                  tmpstr=tmpstr+"</span>";
                }

                   lbl= this.spotid + "_" + lspot + "_" + "pic" + "_spot";
                   ocl=this.varname+".toggle_piczoom();";
	           tmpstr=tmpstr+"<span id='"+lbl+"' style='display:inline-block;' onclick='"+ocl+"' >"; 
                   tmpstr=tmpstr+"</span>";
 
                   lbl= this.spotid + "_" + lspot + "_" + "story" + "_spot";
                   cls = 'story';
	           tmpstr=tmpstr+"<span id='"+lbl+"'  class='"+cls+"'   style='display:inline-block;' >"; 
	           tmpstr=tmpstr+"</span>";


 	           lbl= this.spotid + "_" + lspot + "_" + "link" + "_spot";
                   tmpstr=tmpstr+"<div id='"+lbl+"' class='spotd_off'  style='display:inline-block;'  >"; 
    	           tmpstr=tmpstr+"</div>";

    	           tmpstr=tmpstr+"</div>";


           } else {


             tmpstr=tmpstr+"<div style='background-color:white;' >"; 

              if (this.listype == "people") {
                  lbl= this.spotid + "_" + lspot + "_" + "name" + "_spot";
                  cls="spotd_off";
	          tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='display:inline-block;' >"; 
                  tmpstr=tmpstr+"</div>";

                  lbl= this.spotid + "_" + lspot + "_" + "pic" + "_spot";
                  ocl=this.varname+".toggle_piczoom();";
	          tmpstr=tmpstr+"<span id='"+lbl+"' style='float:right;' onclick='"+ocl+"' >"; 
                  tmpstr=tmpstr+"</span>"; 

                  tmpstr = tmpstr + "<div  style='display:inline-block;'  >";
                  lbl = this.spotid +'_'+lspot + '_sort_btns';
                  tmpstr = tmpstr + "<span id='"+lbl+"'  style=''  >";
                  tmpstr = tmpstr + "</span>";

	          lbl= this.spotid + "_" + lspot + "_" + "send_btns";
                  tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";

                  lbl = this.spotid +'_'+lspot + '_work_btns';
                  tmpstr = tmpstr + "<span id='"+lbl+"'  style=''  >";
                  tmpstr = tmpstr + "</span>";
                  tmpstr = tmpstr + "</div>";

                  lbl= this.spotid + "_" + lspot + "_" + "mini";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class='' style='display:inline-block;'  >"; 
                  tmpstr=tmpstr+"</div>";

               } else {

   	          tmpstr=tmpstr+"<div style='background-color:white;' >";
                  lbl= this.spotid + "_" + lspot + "_nav_btns";
                  tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style='float:left;'  >"; 
    	          tmpstr=tmpstr+"</span>";

	          lbl= this.spotid + "_" + lspot + "_" + "send_btns";
                  tmpstr=tmpstr+"<span id='"+lbl+"' onclick='' onmouseover=''  onmouseout=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";

                  if (this.listype == "products") {
                    lbl= this.spotid + "_" + lspot + "_" + "buy"+ "_spot";
                    tmpstr=tmpstr+"<span id='"+lbl+"' class='spotd_off' style='float:right;' >"; 
                    tmpstr=tmpstr+"</span>";
                  } else {
                    lbl= this.spotid + "_" + lspot + "_" + "name" + "_spot";
                    cls="spotd_off";
	            tmpstr=tmpstr+"<span id='"+lbl+"' class='"+cls+"' style='float:right;' >"; 
                    tmpstr=tmpstr+"</span>";
                  }
                  tmpstr=tmpstr+"</div>";
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  tmpstr=tmpstr+"<div>";
                  lbl= this.spotid + "_" + lspot + "_" + "pic" + "_spot";
                  ocl=this.varname+".toggle_piczoom();";
	          tmpstr=tmpstr+"<span id='"+lbl+"' style='float:right;' onclick='"+ocl+"' >"; 
                  tmpstr=tmpstr+"</span>"; 
                  lbl= this.spotid + "_" + lspot + "_" + "story" + "_spot";
                  cls = 'story';
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class='"+cls+"'   style='float:left;' >"; 
	          tmpstr=tmpstr+"</span>";
                  tmpstr=tmpstr+"</div>";
                  tmpstr=tmpstr+"<div style='clear:left;' ></div>";
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  lbl = this.spotid +'_'+lspot + '_group_spot';
                  tmpstr = tmpstr + "<span id='"+lbl+"'  style=''  >";
                  tmpstr = tmpstr + "</span>";

                  lbl = this.spotid +'_'+lspot + '_sort_spot';
                  tmpstr = tmpstr + "<span id='"+lbl+"'  style=''  >";
                  tmpstr = tmpstr + "</span>";

                  lbl = this.spotid +'_'+lspot + '_work_btns';
                  tmpstr = tmpstr + "<span id='"+lbl+"'  style='float:right;'  >";
                  tmpstr = tmpstr + "</span>";

                  tmpstr = tmpstr + "</div>";

                  tmpstr=tmpstr+"<div style='clear:left;' ></div>";
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  if ((this.btnson == true) && (this.shape=="getpic")) {
  	              lbl= this.spotid + "_" + lspot + "_getpic";
	              tmpstr=tmpstr+"<div  id='"+lbl+"' style='float:right;' >";
                      tmpstr=tmpstr+"</div>";
  	              lbl= this.spotid ;
                      lbl = lbl + "_" + lspot + "_upic_frame";
                      var z = this.varname+".get_newpic();";
                      tmpstr=tmpstr+"<iframe id='"+lbl+"' name='"+lbl+"_name' onload='"+z+"' src='' style='display:none;' >"; 
                      tmpstr=tmpstr+"</iframe>";
                  }

                   tmpstr=tmpstr+"<div style='clear:left;' ></div>";

 	           lbl= this.spotid + "_" + lspot + "_" + "link" + "_spot";
                   tmpstr=tmpstr+"<div id='"+lbl+"' class='spotd_off'  style='vertical-align:top;'  >"; 
    	           tmpstr=tmpstr+"</div>";

           } 

           tmpstr=tmpstr+"</div>"; 
      }


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



