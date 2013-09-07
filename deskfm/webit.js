

function listdex () {
    this.mdex = "";
    this.ltype = "";
}


function webit(tpid) { 

   this.pid = "";
   if (tpid != undefined) {
      this.pid = tpid;
   }
  
   this.listype = "";
   this.source = "deskfm";
   this.stored = false;

   this.created_at = "";
   this.change_date = "";

   this.uname = "";
   this.groupid = "";
   this.picurl = "";
   this.cat = "";
   this.subcat = "";
   this.story = "";
   this.prodid = "";
   this.price = -1;

   this.picurl = "";
   this.linkurl ="";
   this.embedurl ="";

}


check_month = function(pobj,dtmon) {

    var month = "";
    var year = "";
    var arr = null;
    ret = false;

    if (pobj != null) {

    if ((pobj.created_at != "")  && (pobj.created_at != undefined)) { 
        arr =  pobj.created_at.split(" ");
        var b =  arr[0];
        var c = b.split("-");
        month = c[1]-1;
        year =  c[0];
    }

    if ((dtmon.month == month) && (dtmon.year == year)) {
	    ret = true;
    }
    }

   return ret; 

}

