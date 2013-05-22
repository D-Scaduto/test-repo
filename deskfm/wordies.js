


function  stringify (obj) {

        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';

            return String(obj);
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            for (n in obj) {
                v = obj[n];
                t = typeof(v);
                if (obj.hasOwnProperty(n)) {
                    if (t == "string") {
                        v = '"' + v + '"';
                    } else if (t == "object" && v !== null){
                        v = jQuery.stringify(v);
                    }

                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }

            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
}


function  image_word (pspotid,pword,psz,pclr) {

   var tmpstr = "";
   var clr = "gb";
   if (pclr != undefined) {
      clr = pclr;
   }
   var lbl = "";
   var tmpsrc = "";
   if (pword!=undefined)  {

       for (var g=0;(g<pword.length);g++) {

          lbl = pspotid + "_" + g;
          var l = pword.charAt(g);
          if (l == ".") {
              l = "dot";
          }
          tmpstr=tmpstr+"<span onmousemove='toggle_imgword(\""+lbl+"\");' style='padding:1px;' >";
          tmpsrc = "deskfm/images/logos/" + l;
          tmpsrc = tmpsrc + "-"+clr+"-hi.gif";
 	  tmpstr=tmpstr+ "<img src='"+tmpsrc+"' id='"+lbl+"' height='"+psz+"' >"; 
          tmpstr=tmpstr+"</span> ";
       }

   }
   return tmpstr;
}


function  toggle_imgword (sptg) {
   var s = "a";
   var l =0;
   var h =0;

   var lbl = sptg;

   var pobj = document.getElementById(lbl)
   if (pobj != null) {
   var wasrc = pobj.src;
   var sp = wasrc.lastIndexOf("-");

   var newsrc = wasrc.substring(0,sp);

   var wasat = wasrc.substring(sp+1,sp+3);
   var tobe = "lo";

   if (wasat == "lo") { 
      tobe = "hi"; 
   } else {
      tobe = "lo";
   }

   newsrc = newsrc + "-"+ tobe+".gif";
   
        if (audio_on == true) {
 //         play_sound(s,l);
        }

   pobj.src = newsrc;
   }

 } 




function toggle_fm() {

   var tmpstr = "";
    if (fm=="fm") {
       fm = "freedom";
       tmpstr = table_word("FREEDOM");
       if (ds=="standup") {
             toggle_ds();
       }
    } 
    else if (fm=="freedom") {
       fm = "fm";
       tmpstr = table_word("FM");
    }
   if (document.getElementById('fm_btn') !=null) {
       document.getElementById('fm_btn').innerHTML=tmpstr;
   }
}



function toggle_ds() {
   var tmpstr="";
    if (ds=="desk") {
       ds="standup";
       tmpstr = table_word("STAND UP");
         if (fm=="freedom") {
           toggle_fm();
         }
    } 
    else if (ds=="standup") {
       ds="desk";
       tmpstr = table_word("DESK");
    }
   if (document.getElementById('logodesk') !=null) {
       document.getElementById('logodesk').innerHTML=tmpstr;
   }
}


function exclude_word(tword) {
  var excl = false;
  if (tword.length<2) { excl = true; }
  if (tword=="the") { excl = true; }
  return excl;
}



 function  table_word (tlbl,pword) {

   var tmpstr = "";
   if (pword!=undefined)  { 
       for (var g=0;(g<pword.length);g++) {
         var lbl = tlbl + "_pword_" + g;
          tmpstr=tmpstr+"<span id='"+lbl+"' class=spotd_off  onmouseover='markyd(\""+lbl+"\");'   onmouseout='unmarkyd(\""+lbl+"\");' >";
   	  tmpstr=tmpstr+pword.charAt(g);
          tmpstr=tmpstr+"</span>";
       }
   }

  return tmpstr;
 
}


