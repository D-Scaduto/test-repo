

 poster.prototype.draw_catsel = function() {
    var tmp="";
    var tspot = this.rung;
    var lbl = "";
    var pobj=null;

     lbl = this.spotid+"_"+tspot+"_catsog";
     ocl = this.varname + ".get_catsel();";
     tmp = tmp +"<span id='"+lbl+"' class='spotd_off' onclick='"+ocl+"' >";
     if (this.cat == "") {
       tmp = tmp + "sort";
     } else {
       tmp = tmp + this.cat;
     }
     tmp=tmp + "</span>"; 

     lbl = this.spotid+"_"+tspot+"_subcatsog";
     ocl = this.varname + ".get_catsel();";
     tmp = tmp +"<span id='"+lbl+"' class='spotd_off'  onclick='"+ocl+"' >";
     tmp = tmp + this.subcat;
     tmp=tmp + "</span>"; 

    lbl = this.spotid + '_' + this.rung + '_work_spot';
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }

}


 poster.prototype.get_catsel = function() {
     var tmp="";
     var tspot = this.rung;
     var lbl = "";
     var lb1 = "";
     var lb2 = "";

     lb1 = this.spotid+"_"+tspot+"_catsog";
     ocl = this.varname + ".dacater.request_suggestions();";
     tmp = tmp +"<span id='"+lb1+"' class='spotd_off' onclick='"+ocl+"' >";
     tmp = tmp + this.cat;
     tmp=tmp + "</span>"; 

     lb2 = this.spotid+"_"+tspot+"_subcatsog";
     ocl = this.varname + ".subcater.request_suggestions(\""+this.cat+"\");";
     tmp = tmp +"<span id='"+lb2+"' class='spotd_off'  onclick='"+ocl+"' >";
     tmp = tmp + this.subcat;
     tmp=tmp + "</span>"; 

     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl + '_' + this.rung + '_work_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
        if (this.dacater == null) {
          this.dacater = new suggester(lb1,new cat_provider(),this.varname + ".dacater",this.parvar);
        }
        if (this.subcater == null) {
          this.subcater = new suggester(lb2,new subcat_provider(),this.varname + ".subcater",this.parvar);
        }
        this.dacater.request_suggestions(); 
     }
     
}


poster.prototype.set_cat = function(pcat) {
      if (pcat != undefined) {
           this.cat = pcat;
           this.subcat = "";
           this.changed = true;
           this.draw_catsel();
           this.change_btns();
      }
 
}


poster.prototype.set_subcat = function(psubcat) {

      if (psubcat != undefined) {
          this.subcat = psubcat;
          this.changed = true;
          this.draw_catsel();
          this.change_btns();
      }

}


poster.prototype.hide_catsel = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_work_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}


