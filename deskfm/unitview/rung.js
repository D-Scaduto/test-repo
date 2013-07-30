

 poster.prototype.draw_rung = function(pspot) {

	 if (daviewer.zoom == true) {
		 this.btnson = true;
	 }

      this.draw_btns();

       if (this.listype == "people") {

         if (buddah == true) {
            this.draw_groups();
	 }

       } else {

            if (this.shape == "getstory" ) {
               this.get_story();
            } else {
               this.draw_story();
            }


            this.draw_price();

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

            if (this.shape == "getpic") {
               this.get_pic();
            } else {
               this.draw_pic();
            }

            if (this.mini_showing == true) {
              this.show_mini();
            }

          }

      if ((this.btnson == true) && (buddah == true))  {
         if (this.shape == "getsort")  {
           this.get_catsel();
         } else {
           if (this.shape == "") {
  	     this.draw_catsel();
	   }
	 }
      }


	 this.draw_date();

//     this.draw_place(pspot,this.darungs[tspot].dadex);

        if (debug == true) {
          this.draw_debug();
        }
}


 poster.prototype.build_rung = function() {

       var tmpstr = "";
       var ocl = "";
       var moin = "";
       var mout = "";
       var lbl = "";
       var cls = '';
       var pobj = null;

	  lbl = this.rungster + "_mark";
	  tmpstr=tmpstr+"<div id='"+lbl+"' class='' style='background-color:white;padding:4px;' >"; 

	  lbl= this.rungster + "_debug_spot";
	  tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='' >"; 
          tmpstr=tmpstr+"</div>";

	  lbl= this.rungster + "_btns_spot";
	  tmpstr=tmpstr+"<span id='"+lbl+"' style='' >"; 
    	  tmpstr=tmpstr+"</span>";


           if (this.is_mini == true) {

                lbl= this.spotid + "_" + lspot + "_" + "pic" + "_spot";
	        tmpstr=tmpstr+"<span id='"+lbl+"' style=''  >"; 
                tmpstr=tmpstr+"</span>";
 
                tmpstr=tmpstr+"<span class='story' >";
                lbl= this.spotid + "_" + lspot + "_" + "story" + "_spot";
	        tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='' >"; 
	        tmpstr=tmpstr+"</span>";
 	       

           } else {


              if (this.listype == "people") {

                  lbl= this.rungster + "_name_spot";
	          tmpstr=tmpstr+"<div id='"+lbl+"' class='' style='' >"; 
                  tmpstr=tmpstr+"</div>";

                  lbl= this.rungster + "_pic_spot";
	          tmpstr=tmpstr+"<div id='"+lbl+"' style=''  >"; 
                  tmpstr=tmpstr+"</div>"; 

                  lbl= this.rungster + "_mini";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class='' style='display:inline-block;'  >"; 
                  tmpstr=tmpstr+"</div>";

               } else {

                    if (this.listype == "products") {
                      lbl= this.rungster + "_" + "buy"+ "_spot";
                      tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;' >"; 
                      tmpstr=tmpstr+"</span>";
                    } else {
                      lbl= this.rungstert + "_" + "name" + "_spot";
	              tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;' >";
		 
                      tmpstr=tmpstr+"</span>";
                    }

                    tmpstr=tmpstr+"<div style='clear:right;' ></div>";
		

	  	  lbl= this.rungster + "_" + "pic" + "_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='float:right;'  >"; 
                  tmpstr=tmpstr+"</span>";

		  lbl= this.rungster + "_" + "story" + "_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='' >"; 
	          tmpstr=tmpstr+"</span>";	
                 
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";

                  if ((this.btnson == true) && (this.shape == "getpic")) {
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

		 
  		  lbl= this.rungster + "_date_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class='spotd_off'   style='float:right;' >"; 
                  tmpstr = tmpstr + "hey"; 
		  tmpstr=tmpstr+"</span>";	
                 
                  tmpstr=tmpstr+"<div style='clear:right;' ></div>";
 
		  lbl= this.rungster + "_link_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style='display:inline-block;'  >"; 
    	          tmpstr=tmpstr+"</div>";
  	          
		  lbl= this.rungster + "_embed_btn";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style='display:inline-block;'  >"; 
    	          tmpstr=tmpstr+"</div>";
	       
		  lbl= this.rungster + "_sort_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class='' onclick='' style='display:inline-block;'  >"; 
  		  tmpstr=tmpstr+"</div>";

		  lbl= this.rungster + "_embed_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";

           } 

    	   tmpstr=tmpstr+"</div>";

      }


      lbl = this.spotid + "_rung_" + this.rung;
      pobj = document.getElementById(lbl);

      if (pobj != null) {
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



