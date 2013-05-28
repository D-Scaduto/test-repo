

poster.prototype.draw_debug = function() {

     var tmpstr="";
     var pobj=null;
     var tspot = this.rung;
     var lbl = "";
     var s = "";
     var es = "";
     lbl = this.spotid;
     lbl = lbl +'_'+tspot;
     lbl = lbl + '_debug_spot';

      tmpstr=tmpstr +  "rng=" + this.rung;
      tmpstr=tmpstr +  "dadex="+this.dadex;
      if (this.listype == "webits") {
        tmpstr=tmpstr +  "pid="+this.pid;
      }
      if (this.listype == "people") {
        tmpstr=tmpstr +  "uname="+this.uname;
      }
      if (this.listype == "products") {
        tmpstr=tmpstr +  "pid="+this.pid;
      }

      tmpstr=tmpstr +  "shape="+this.shape;
      tmpstr=tmpstr +  "ltype="+this.listype;

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}



