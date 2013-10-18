

poster.prototype.draw_story = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var cls = "";
   var urlts= null;

       var tiesto = this.story;

       cls = 'story';
       if (this.is_mini == true) {
          cls = '';
       }

    if ((this.story != "") && (this.story != null)) {
       tmp = tmp + "<span onclick='' class='"+cls+"' >";

       //tiesto = this.story.replace(/<br>/gi,"\n");

          var exp2 = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

          urlts=[];
          while ((urlts=exp2.exec(tiesto)) != null) {
             var s = urlts[0];
             if (this.linkurl == "") {
               this.linkurl = urlts[0];
               this.changed = true;
               this.link_changed = true;
            }
          } 

          var  exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          var pg =   tiesto;
	  pg =  tiesto.replace(exp,"");
          if (pg != this.story) {
             this.story = pg;
             this.story_changed = true;
             this.changed = true;
          }
          var ps = pg;
/*
          if (pg.length > 75) {
             ps = pg.substring(0,75);
             ps = ps + " ... ";
          }
*/
          tmp = tmp + ps;
         tmp = tmp + "</span>";
     }

      lbl = this.rungster + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmp;
      }
}


poster.prototype.get_story = function() {
   var tmpstr="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var oku = "";
   var urlts= null;
   var tiesto = "";

   tmpstr = "";
   if (this.story != null) {
	tiesto = this.story;
        tiesto = this.story.replace(/<br>/gi,"\n");
   } 

         oku = this.varname + ".update_story();";
         tmpstr = tmpstr + "<textarea id='"+this.rungster + "_story_area' data-mini='true' class='' onkeyup='"+oku+"' style=''  >";
         tmpstr = tmpstr + tiesto;
         tmpstr = tmpstr + "</textarea>";


      lbl = this.rungster + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmpstr;
         var ta = this.rungster + "_story_area";
         $('#'+ta).textinput();
      }
   
}


poster.prototype.update_story = function() {

     var lbl = "";
     var obj = null;
     var tmpstr = "";
     
     lbl = this.rungster + '_story_area';

      obj = document.getElementById(lbl);

       if (obj != null) {
          var bill = document.getElementById(lbl).value;
          this.story = bill.replace(/["']{1}/gi,"");
          this.story = bill.replace(/[\n]{1}/gi,"<br>");
          this.changed = true;
	  this.story_changed = true;
          this.change_btns(); 
          obj.focus();
      }

}


poster.prototype.toggle_getstory = function() {

    if (this.shape != "getstory") {
       this.shape = "getstory";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}


 poster.prototype.reset_story = function() {

     var tspot = this.rung;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_story_area';

        var sdex = this.parvar + ".darungs["+tspot+"].dadex";
        var dex = eval(sdex);
        sdex = this.parvar + ".dalist["+dex+"]";
        dex = eval(sdex);
 
        var sreq = "dalist["+dex+"].story";
        this.story = eval(sreq);
     
        this.draw_story();
        this.change_btns(); 

}



