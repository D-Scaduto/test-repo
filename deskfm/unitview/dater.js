

poster.prototype.draw_date = function() {

    var tmpstr = "";
    var mon = "";
    var year = "";
    var day = "";
    var arr = null;


    if ((this.created_at != "")  && (this.created_at != undefined)) { 
        arr =  this.created_at.split(" ");
        var b =  arr[0];
        var c = b.split("-");
        var m = c[1]-1;
	day = c[2];
        var pi = parseInt(m,10);
        var nic =  krono.months[pi] + " " + day + " \'" + c[0].substr(2,2);
        var my =  krono.months[pi] + " " + " \'" + c[0].substr(2,2);
//        tmpstr=tmpstr+ arr + "<br>";
        tmpstr=tmpstr+ nic;
    }

    var lbl = this.rungster + "_date_spot";

    if ( document.getElementById(lbl) != null ) { 
      document.getElementById(lbl).innerHTML= tmpstr;
    }

}




