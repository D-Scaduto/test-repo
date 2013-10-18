
 poster.prototype.build_rung = function() {

       var tmpstr = "";
       var ocl = "";
       var lbl = "";
       var cls = '';
       var pobj = null;

           if (this.is_mini == true) {

   	        lbl= this.rungster + "_pic_spot";
	        tmpstr=tmpstr+"<img id='"+lbl+"' src=''  >"; 
                tmpstr=tmpstr+"</img>";

                lbl= this.rungster + "_story_spot";
	        tmpstr=tmpstr+"<p id='"+lbl+"'  class=''   style='font-weight:normal;' >"; 
	        tmpstr=tmpstr+"</p>";


           } else {


              if (daviewer.editing != true) {
                 
                  ocl = "daviewer.to_top("+this.rung+");";
                  ocl = ocl + "daviewer.toggle_zoom();";
	          tmpstr=tmpstr+"<a href='#'  class='' onclick='"+ocl+"' style='white-space:normal;' >";
              }

	  	  lbl= this.rungster + "_pic_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  src='' style='float:left;'  >"; 
                  tmpstr=tmpstr+"</span>";

	          lbl= this.rungster + "_story_spot";
                  tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='whitespace:normal;clear:right;font-weight:normal;' >"; 
                  tmpstr=tmpstr+"</span>";	

 		  lbl= this.rungster + "_link_btn";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";
  	          
		  lbl= this.rungster + "_embed_btn";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";

 		  lbl= this.rungster + "_date_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='font-weight:normal;' >"; 
		  tmpstr=tmpstr+"</span>";	

	          tmpstr=tmpstr+"<br>";	

                   if (this.listype == "products") {
                      lbl= this.rungster + "_buy_spot";
                      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='' >"; 
                      tmpstr=tmpstr+"</span>";
                    } else {
                      lbl= this.rungster + "_name_spot";
	              tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='' >";
                      tmpstr=tmpstr+"</span>";
                    }

               if ((this.listype == "people") || (this.listype == "suppliers"))  {

       	          lbl= this.rungster + "_nav_btns";
   	          tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='' >"; 
    	          tmpstr=tmpstr+"</span>";

                 lbl= this.rungster + "_mini";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
                  tmpstr=tmpstr+"</span>";
               }

               if (daviewer.zoom == true) {

	 	tmpstr = tmpstr + "<br>"; 

  	    	lbl = this.rungster + "_work_btns";
         	tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
	 	tmpstr = tmpstr + "</span>";
 
                  if ((this.listype == "unsorted") || (this.shape == "getsort")) {
	            lbl = this.rungster + "_sort_spot";
                    tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
 	            tmpstr = tmpstr + "</span>";
                   }

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

        	  lbl= this.rungster + "_link_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";
        
		  lbl= this.rungster + "_embed_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";

            }

            if (daviewer.zoom != true) { 
                  tmpstr=tmpstr+"</a>";	
            }

           if (debug == true) {
  	      lbl= this.rungster + "_debug_spot";
	      tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='' >"; 
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

//          this.draw_btns();

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
 
            if ((this.cat == "") || (this.cat == undefined))  {
                this.draw_date();
            }
 
            if (buddah == true) {
//              this.draw_groups();
            }
      
          }

      $('#'+this.rungster).trigger("create");
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



