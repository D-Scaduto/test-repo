

function peopler (pspotid) { 

   this.spotid=pspotid;
   this.varname='robby';
   this.showing = false;
   this.shape="groups";  // person , groups
   this.groupid="stands";

   this.grouper = new suggester("group_quesog",new group_provider(), "robby.grouper","robby");

}


peopler.prototype.show = function() {
   this.draw_groups();
   this.draw_people();
}


peopler.prototype.set_group = function(tgrp) {
    if (tgrp != undefined) {
      this.groupid = tgrp;
    }
    this.draw_people();
}


peopler.prototype.draw_people = function() {
   daviewer.load_peeplist(this.groupid);
   daviewer.draw_screen();
}


peopler.prototype.draw_groups = function() {
      var tmp = "";
      var lbl = "";
      var pobj = null;
      var omo = "";
      var omt="";


        tmp=tmp+"<span id='group_quesog'  >";

        tmp=tmp+"<span class='spotd_off' onclick='robby.grouper.request_suggestions();'  >";
        tmp=tmp+"who stands at their desk ?";
        tmp=tmp+"</span>";
        tmp=tmp+"</span>";

        lbl = this.spotid + '_top';
        pobj = document.getElementById(lbl);
        if (pobj != null) {
           pobj.innerHTML = tmp; 
        }
}


peopler.prototype.hide = function() {
      var tmp = "";
      var lbl = "";
      var pobj = null;

      lbl = this.spotid + '_top';
      pobj = document.getElementById(lbl);
      if (pobj != null) {
         pobj.innerHTML = ""; 
      }
}


