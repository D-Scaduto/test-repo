

function markyd(pspid) {
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


function unmarkyd(pspid) {
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



function revmarkyd(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
    if (pobj.getAttribute("class") != "spotl_on") {
       if (is_ie) {
         pobj.className = "spotl_mark";
       } else {
         pobj.setAttribute("class","spotl_mark");
       }
    }
  }
}


function unrevmarkyd(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
    if ( pobj.getAttribute("class") != "spotl_on" ) {
       if (is_ie) {
         pobj.className = "spotl_off";
       } else {
         pobj.setAttribute("class","spotl_off");
       }
    }
  }
}



function imarkyp(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
     if ( pobj.src != "deskfm/images/icons/pez-black.png" ) {
          pobj.src = "deskfm/images/icons/pez-white.png";
     }
  }
}


function unimarkyp(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
     if ( pobj.src != "deskfm/images/icons/pez-black.png" ) {
          pobj.src = "deskfm/images/icons/pez-silver.png";
     }
  }
}



function imarkyd(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
     pobj.src = "deskfm/images/icons/grey_round.png";
  }
}


function unimarkyd(pspid) {
  var pobj = document.getElementById(pspid);
  if (pobj != null) {
        pobj.src = "deskfm/images/icons/white_round.png";
  }
}





