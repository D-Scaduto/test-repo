

poster.prototype.draw_story = function() {
   var tmpstr="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var omo = "";
   var omt="";
   var tspot  = this.rung;
   var urlts= null;

   if (this.story == undefined) {
      return;
   }

       var tiesto = this.story;
 
       if (this.story != "") {

         tiesto = this.story.replace(/<br>/gi,"\n");
         ocl = "";

          var exp2 = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
          this.urls=[];
          while ((urlts=exp2.exec(tiesto)) != null) {
             this.urls.push(urlts[0]);
             var s = urlts[0];
             if (this.linkurl != s) {
               this.linkurl = urlts[0];
               this.changed = true;
/*
               var sdex = this.parvar + ".darungs["+tspot+"].dadex";
               var dex = eval(sdex);
               sdex = this.parvar + ".dalist["+dex+"];";
               dex = eval(sdex);
               if (dalist[dex] != undefined) {
                 var lobj = "dalist["+dex+"].linkurl = '" + this.linkurl + "'";
                 eval(lobj);
              }
*/
            }
          } 

          var    exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          var pg =   tiesto.replace(exp," ");
          var ps = pg;
/*
          if (pg.length > 75) {
             ps = pg.substring(0,75);
             ps = ps + " ... ";
          }
*/
          tmpstr = tmpstr + ps;

      } else {
          if (this.parvar == "nicky") {
             tmpstr = tmpstr + this.preseter.provider.preset_story(this.preset);
          }
      }

      lbl = this.spotid;
      lbl = lbl +'_'+tspot;
      lbl = lbl + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmpstr;
      }
}


poster.prototype.get_story = function() {
   var tmpstr="";
   var pobj=null;
   var lbl = "";
   var tspot  = this.rung;
   var ocl = "";
   var urlts= null;

   if (this.story != null) {
     var tiesto = this.story;

         tiesto = this.story.replace(/<br>/gi,"\n");
         if (tiesto == "") { 
            if (this.parvar == "nicky") {
              tiesto = this.preseter.provider.preset_story(this.preset);
            }
         }
         var oku = this.varname + ".update_story();";
         tmpstr = tmpstr + "<textarea id='"+this.spotid+"_"+tspot+"_story_area' class='getstory' onkeyup='"+oku+"' >";
         tmpstr = tmpstr + tiesto;
         tmpstr = tmpstr + "</textarea>";

      lbl = this.spotid;
      lbl = lbl +'_'+tspot;
      lbl = lbl + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmpstr;
      }
   }
}


poster.prototype.update_story = function() {

     var tspot = this.rung;
     var lbl = "";
     var obj = null;
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_story_area';

        var tmpstr="";
       obj = document.getElementById(lbl);

       if (obj != null) {
          var bill = document.getElementById(lbl).value;
          this.story = bill.replace(/["']{1}/gi,"");
          this.story = bill.replace(/[\n]{1}/gi,"<br>");
          this.changed = true;
          this.change_btns(); 
    //    obj.focus();
      }

}


poster.prototype.preset_story = function() { 
    var tmp = "";
    var pobj ="";
    var lbl = "";

 //   tmp = "post text, pics, and links about standing desks ";

    return  tmp;
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



/*
 poster.prototype.set_story = function() {

     var tspot = this.rung;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_story_area';

        var tmpstr="";
       if (document.getElementById(lbl) != null) {
          var bill = document.getElementById(lbl).value;
            this.story = bill.replace(/["']{1}/gi,"");
	    this.story = bill.replace(/[\n]{1}/gi,"<br>");
	}

        var sdex = this.parvar + ".darungs["+tspot+"].dadex";
        var dex = eval(sdex);
        sdex = this.parvar + ".dalist["+dex+"]";
        dex = eval(sdex);
 
        var sobj = "dalist["+dex+"].story = '" + this.story + "'";
        eval(sobj);
     
        this.changed = true;
        this.draw_story();
        this.change_btns(); 

}
*/


