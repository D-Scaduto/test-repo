

function listdex () {
    this.mdex = "";
    this.ltype = "";
}


function webit(tpid) { 

   this.pid = "";
   if (tpid != undefined) {
	   this.pid =tpid;
   }
  
   this.listype="";
   this.source = "deskfm";
   this.stored=false;

   this.dfdate = null;
   this.created_at = "";
   this.change_date = "";

   this.uname="";
   this.groupid = "";
   this.picurl="";
   this.cat ="";
   this.subcat ="";
   this.story="";
   this.prodid = "";
   this.price = -1;

   this.picurl = "";
   this.linkurl ="";
   this.embedurl ="";


   this.color = "black";
//   this.showing=false;
//   this.changed=false;
//   this.shape = "";
//   this.rung = "";
//
}


check_month = function(pobj,dtmon) {

    var month = "";
    var year = "";
    var arr = null;
    ret = false;

    if (pobj != null) {

    if ((pobj.dfdate != "") && (pobj.dfdate != undefined))  {

       arr =  pobj.dfdate.split(" ");
        var b =  arr[0];
        var c = b.split("-");
        month = c[1]-1;
        year = c[0].substr(2,2);

    } else if ((pobj.created_at != "")  && (pobj.created_at != undefined)) { 
        arr =  pobj.created_at.split(" ");
        var b =  arr[0];
        var c = b.split("-");
        month = c[1]-1;
        year =  c[0].substr(2,2);
    }

    if ((dtmon.month == month) && (dtmon.year == year)) {
	    ret = true;
    }
    }

   return ret; 

}

