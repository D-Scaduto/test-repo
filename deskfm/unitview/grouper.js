

poster.prototype.draw_groups = function() {
    var tmp="";
    var tspot = this.rung;
    var lbl = "";
    var pobj=null;

    lbl = this.spotid + '_' + this.rung + '_group_btn';

    moin = "markyd(\""+lbl+"\");";
    mout = "unmarkyd(\""+lbl+"\");";

    tmp = tmp +"<span id='"+lbl+"' class='spotd_off' onclick='"+this.varname+".get_groups();' onmouseover='"+moin+"' onmouseout='"+mout+"' >";
    if (this.groupid == "") {
      tmp = tmp + "<img src='deskfm/images/icons/people_blob.png' height=20px' > ";
    } else {
      tmp = tmp + this.groupid;
    }
    tmp=tmp + "</span>"; 

    lbl = this.spotid + '_' + this.rung + '_sort_spot';
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }
}


poster.prototype.get_groups = function() {
    var tmp="";
    var tspot = this.rung;
    var lb1 = "";
    var lb2 = "";

    lb1 = this.spotid+"_"+tspot+"_groupsog";
    tmp = tmp +"<span id='"+lb1+"' >";

    tmp=tmp + "</span>"; 

    var pobj=null;
    lb2 = this.spotid + '_' + this.rung + '_sort_spot';
    pobj = document.getElementById(lb2);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
        if (this.grouper == null) {
          this.grouper = new suggester(lb1,new group_provider(),this.varname + "grouper",this.varname);
        }
        this.grouper.request_suggestions();
    }
}


poster.prototype.update_groups = function() {

     var tspot = this.rung;
     var tmpgrp = "";
     var pobj=null;
     var sobj=null
     var sdex = "";
     var dex=null;

     var lbl = "";
     lbl = this.spotid +'_'+this.rung + '_group_sel';
 
     if (document.getElementById(lbl) != null) { 
        var pcsel = document.getElementById(lbl);
        if (pcsel != null) {
            tmpgrp = pcsel.value;
            if (this.groupid != tmpgrp) {
              this.groupid = tmpgrp;
              this.changed = true;
	      this.group_changed = false;
            }
            this.change_btns();
        }
     }
}


poster.prototype.set_group = function(pgroupid) {
      if (pgroupid != undefined) {
           this.groupid = pgroupid;
           this.changed = true;
	   this.group_changed = false;
           this.draw_groups();
           this.change_btns();
      } 
}


poster.prototype.toggle_getgroup = function() {

    if (this.shape != "getgroup") {
       this.shape = "getgroup";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.hide_groups = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}


