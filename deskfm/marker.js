

function marky(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
    if (pobj.getAttribute("class") != "spotd_on") {
       if (is_ie) {
         pobj.className = "spotd_mark";
       } else {
         pobj.setAttribute("class","spotd_mark");
       }
      }
  }
}


function unmarky(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
     if ( pobj.getAttribute("class") != "spotd_on" ) {
       if (is_ie) {
         pobj.className = "spotd_off";
       } else {
         pobj.setAttribute("class","spotd_off");
       }
     }
  }
}




