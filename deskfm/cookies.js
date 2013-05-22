var daname_cookie="";

var dacookie_names = [];  // the cookie name  list



function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
}


function eraseCookie(name) {
	createCookie(name,"",-1);
}




function get_cookie_names() {

       var dacookie_names=[];

       var dc = readCookie("danames");

         if (dc!=undefined) {

          dacookie_names = dc.split('\|');

         if ( dacookie_names != undefined ) {

         //  alert("dcl="+dacookie_names.length);

          for (i = 0; i < dacookie_names.length; i++) {

         //  alert("i="+i);

            if (dacookie_names[i] != undefined ) {

               var tspots = [];

           //    alert("dcn="+dacookie_names[i]);

               tspots = dacookie_names[i].split('-');

           //    alert("tspots="+tspots);

               var tmpname= tspots[0] ;
               var tmpnum= tspots[1] ;

               namelist.push({'pname':tmpname , 'pnum': tmpnum });

           }

         }
       }
    }
}




function find_in_cookie(ptmpname) {

       daname_cookie = readCookie("danames");

        if (daname_cookie != null) {

          dacookie_names = daname_cookie.split('|');

          for (i = 0; i < dacookie_names.length; i++) {

            var spots = [];
            spots = dacookie_names[i].split('-');

             if (ptmpname == spots[0])   {
                return spots[1];
             }

           }

        }

}