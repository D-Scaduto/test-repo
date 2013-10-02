
 poster.prototype.build_rung = function() {

       var tmpstr = "";
       var ocl = "";
       var moin = "";
       var mout = "";
       var lbl = "";
       var cls = '';
       var pobj = null;

          if (debug == true) {
	    lbl= this.rungster + "_debug_spot";
	    tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='' >"; 
            tmpstr=tmpstr+"</div>";
          }

           if (this.is_mini == true) {

                lbl= this.rungster + "_pic_spot";
	        tmpstr=tmpstr+"<span id='"+lbl+"' style=''  >"; 
                tmpstr=tmpstr+"</span>";
 
                lbl= this.rungster + "_story_spot";
	        tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='' >"; 
	        tmpstr=tmpstr+"</span>";

           } else {

   	       lbl= this.rungster + "_btns_spot";
               moin = 'marky(\"'+lbl+'\");';
               mout = 'unmarky(\"'+lbl+'\");';
	       tmpstr=tmpstr+"<div id='"+lbl+"' class='spotd_off'  onmouseover='"+moin+"' onmouseout='"+mout+"' style='' >"; 
    	       tmpstr=tmpstr+"</div>";

              if ((this.listype == "people") || (this.listype == "suppliers"))  {

                  lbl= this.rungster + "_name_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;' >"; 
                  tmpstr=tmpstr+"</span>";

                   tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  lbl= this.rungster + "_pic_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"' style='float:right;'  >"; 
                  tmpstr=tmpstr+"</span>"; 

                   tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  lbl= this.rungster + "_mini";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class='' style=''  >"; 
                  tmpstr=tmpstr+"</div>";

               } else {

                  if ((this.listype == "unsorted") || (this.shape == "getsort")) {
	            lbl = this.rungster + "_sort_spot";
                    tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
 	            tmpstr = tmpstr + "</span>";
                   }


                  if (this.shape == "getstory") {
		     lbl= this.rungster + "_story_spot";
	             tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='' >"; 
	             tmpstr=tmpstr+"</span>";	
                  }

                   tmpstr=tmpstr+"<span style='float:right;' >";

                    if (this.listype == "products") {
                      lbl= this.rungster + "_buy_spot";
                      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;' >"; 
                      tmpstr=tmpstr+"</span>";
                    } else {
                      lbl= this.rungster + "_name_spot";
	              tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;' >";
                      tmpstr=tmpstr+"</span>";
                    }
                    tmpstr=tmpstr+"<div style='clear:right;' ></div>";

	  	  lbl= this.rungster + "_pic_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;'  >"; 
                  tmpstr=tmpstr+"</span>";

                  tmpstr=tmpstr+"</span>";

                  if (this.shape != "getstory") {
		     lbl= this.rungster + "_story_spot";
	             tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='' >"; 
	             tmpstr=tmpstr+"</span>";	
                  }

		  lbl= this.rungster + "_link_spot";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";
  	          
		  lbl= this.rungster + "_embed_btn";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";
	
  		  lbl= this.rungster + "_date_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off'   style='' >"; 
		  tmpstr=tmpstr+"</span>";	
                 
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  if (this.shape == "getpic") {
  	              lbl= this.rungster + "_getpic";
	              tmpstr=tmpstr+"<div  id='"+lbl+"' style='float:right;' >";
                      tmpstr=tmpstr+"</div>";
                      tmpstr=tmpstr+"<div style='clear:right;' ></div>";

  	              lbl= this.rungster + "_upic_frame";
		      var z = "";
                      z = this.varname+".get_newpic();";
                      tmpstr=tmpstr+"<iframe id='"+lbl+"' name='"+lbl+"_name' onload='"+z+"' src='' style='display:none;' >"; 
                      tmpstr=tmpstr+"</iframe>";
                  }
                
		  lbl= this.rungster + "_embed_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";

           } 

      }

      lbl = this.spotid + "_rung_" + this.rung;
      pobj = document.getElementById(lbl);

      if (pobj != null) {
         pobj.innerHTML=tmpstr;
      }
}


poster.prototype.draw_rung = function() {

          this.draw_btns();

          if (this.is_mini == true) {

              this.draw_story();

             if (this.listype == 'people') { 
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
            } else if (this.listype == 'products') {
                this.draw_pic();
                this.draw_price();
            }

          } else {

            if (this.shape == "getstory" ) {
               this.get_story();
            } else {
               this.draw_story();
            }

            if (this.listype == "products") {
              this.draw_price();
            }

            if (this.shape == "getlink") {
               this.get_link();
            } else {
               this.draw_link();
            }

            if (this.shape == "getembed") {
               this.get_embed();
            } else {
               this.draw_embed();
            }

            if (this.shape == "getname") {
               this.get_name();
            } else {
               this.draw_name();
            }

            if (this.shape == "getpic") {
               this.get_pic();
            } else {
               this.draw_pic();
            }

            if (this.mini_showing == true) {
              this.show_mini();
            }

            if (this.shape == "getsort")  {
              this.get_catsel();
            } else {
              if (debug == true) {
  	        this.draw_catsel();
	      }
	    }
 
       //     if ((this.cat == "") || (this.cat = undefined))  {
              this.draw_date();
        //    }
 
            if (buddah == true) {
//              this.draw_groups();
            }
      
          }

 
        if (debug == true) {
          this.draw_debug();
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



