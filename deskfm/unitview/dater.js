

poster.prototype.draw_date = function() {

    var tmpstr = "";

    if (this.dfdate != null) {
        var a =  this.dfdate.split(" ");
        var b =  a[0];
        var c = b.split("-");
        var m = c[1];
        var pi = parseInt(m,10);
        var nic =  ymons[pi] + " " +c[2] + " \'" + c[0].substr(2,2);
        var my =  ymons[pi] + " " + " \'" + c[0].substr(2,2);
     //      tmpstr=tmpstr+ a + " ";
         tmpstr=tmpstr+ my;
     }

    var lbl = this.rungster + "_date";

    if ( document.getElementById(lbl) != null ) {
      document.getElementById(lbl).innerHTML= tmpstr;
    }

}

