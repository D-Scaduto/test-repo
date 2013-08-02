

poster.prototype.draw_debug = function() {

     var tmpstr="";
     var pobj=null;
     var lbl = "";
     var s = "";
     var es = "";
  

      tmpstr=tmpstr +  " rng=" + this.rung;
      tmpstr=tmpstr +  " mdex="+this.dadex;
      tmpstr=tmpstr +  " ltype="+this.listype;
      tmpstr=tmpstr +  " source="+this.source;
      tmpstr=tmpstr +  "<br>";

      if (this.listype == "people") {
        tmpstr=tmpstr +  "uname="+this.uname;
      } else {
        tmpstr=tmpstr +  " pid="+this.pid;
      }

      tmpstr=tmpstr +  " shape="+this.shape;

   lbl = this.rungster + '_debug_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
	     
          pobj.innerHTML = tmpstr;
     }
}



