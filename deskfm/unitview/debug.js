

poster.prototype.draw_debug = function() {

     var tmpstr="";
     var pobj=null;
     var lbl = "";
     var s = "";
     var es = "";
  

      tmpstr=tmpstr +  "rng=" + this.rung;
      tmpstr=tmpstr +  "dadex="+this.dadex;

      if (this.listype == "webits") {
        tmpstr=tmpstr +  "pid="+this.pid;
      }
      if (this.listype == "unsorted") {
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

   lbl = this.rungster + '_debug_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
	     
          pobj.innerHTML = tmpstr;
     }
}



