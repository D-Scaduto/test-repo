

function buyer (pspotid) {
 
   this.spotid = pspotid;
   this.varname = "pal";
   this.showing = false;
   this.pidex = 0;
   this.shape = "";
}


buyer.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl="";
     var omo = "";
     var s = "";
     var e = "";

     tmp="<table border=0 bgcolor='silver' cellspacing=0 cellpadding=0 width='100%' >";
     tmp=tmp+"<tr>";
     tmp=tmp+"<td>";
     tmp=tmp  +"<table border=0 bgcolor='' cellspacing=0 cellpadding=0 width='' >";
     tmp=tmp+"<tr>";

       ocl = "";
       lbl = 'pal_btn';
       cls = "spot_mark";
       tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=left onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
       tmp = tmp + "<img src='deskfm/images/icons/paypal_pround.jpg' height='25px' >";
       tmp = tmp + "</td>";

    if (this.shape == "buy") {
       ocl = ocl + "pal.hide();";
       lbl = 'pal_unbuy_btn';
       cls = "spot_mark";

       tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=left onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
       tmp = tmp + "<input type=button value='buy' >";
       tmp = tmp + "</td>";


    } else if (this.shape == "") { 
       ocl = "pal.set_shape(\"buy\");";
       lbl = 'pal_buy_btn';
       cls = "spot_mark";

       tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=left onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
       tmp = tmp + "<input type=button value='buy' >";
       tmp = tmp + "</td>";
     }

    if (this.shape == "sell") {

       ocl = "pal.set_shape(\"\");";
       lbl = 'pal_unsell_btn';
       cls = "spot_mark";
       tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
       tmp = tmp + "<input type=button value='sell' >";
       tmp = tmp + "</td>";

            cls='spot_mark';
            lbl = 'pal_write_btn';
            tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=center onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
            tmp = tmp + "<img src='deskfm/images/icons/pencil_sheet.png' height='25px' >";
            tmp = tmp + "</td>";
 
            cls='spot_mark';
            lbl = 'pal_pic_btn';
            tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=center onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
            tmp = tmp + "<img src='deskfm/images/icons/camera_grey.png' height='25px' >";
            tmp = tmp + "</td>";

            cls='spot_mark';
            lbl = 'pal_link_btn';
            tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=center onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
            tmp = tmp + "<img src='deskfm/images/icons/link_blue.png' height='25px' >";
            tmp = tmp + "</td>";

            cls='spot_mark';
            lbl = 'pal_price_btn';
            tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=center onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
            tmp = tmp + "<img src='deskfm/images/icons/dollar_circle.png' height='25px' >";
            tmp = tmp + "</td>";

    } else if (this.shape == "") {
       cls='spot_mark';
       lbl = 'pal_sell_btn';
       tmp = tmp + "<td  id='"+lbl+"'  class='"+cls+"' align=left onclick='"+ocl+"';  onmouseover='revmarkyd(\""+lbl+"\");' onmouseout='unrevmarkyd(\""+lbl+"\");'  >";
       tmp = tmp + "<input type=button value='sell' >";
       tmp = tmp + "</td>";
    }

         lbl = this.spotid + '_new_0_work_spot';
         ocl = "";
         tmp = tmp + "<td id='"+lbl+"'  onclick='"+ocl+"' >";
         tmp = tmp + "</td>";

       tmp = tmp+"</tr>";
      tmp=tmp+"</table>";
      tmp=tmp+"</td>";
      tmp = tmp+"</tr>";
 
     tmp=tmp+"<tr>";
     tmp=tmp+"<td id='buy_view' >";
     tmp=tmp+"</td>";
     tmp=tmp+"</tr>";

     tmp=tmp+"</table>";

     lbl = this.spotid + "_buy";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = true;

     lbl = this.spotid + "_pal_btn";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.style.backgroundColor = "silver";
     }
   
}

 
buyer.prototype.set_shape = function(pstr) {
  var s = "";
  var e = "";
  if (pstr != undefined ) {
    if (pstr != this.shape) {
       this.shape = pstr;
    }
  }
  this.show();
}


buyer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
      this.set_shape("buy");
   }
}

buyer.prototype.hide = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var s = "";
     var e = "";

     lbl = this.spotid + "_buy";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

     lbl = this.spotid + "_pal_btn";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.style.backgroundColor = "white";
     }

     s = this.boss + ".newster.hide_rung();";
     e = eval(s);
     if (this.boss != "obiwan.daviewer") {
       s = this.boss + ".draw_screen();";
       eval(s);
     }
}


buyer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     lbl = 'buyer_debug';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}

