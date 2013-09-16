

poster.prototype.draw_price = function() {
     var tmp="";
     var pobj=null;
     var lbl = "";
     var moin = "";
     var mout = "";
     var ocl = "";

     if (this.price != -1) {
       lbl= this.spotid + "_" + this.rung + "_" + "buy"+ "_spot";
       ocl = this.parvar + ".to_top("+ this.rung + ");";
       moin = "marky(\""+lbl+"\");";
       mout = "unmarky(\""+lbl+"\");";
       tmp=tmp+"<div id='"+lbl+"' class='spotd_off' onclick='"+ocl+"' onmouseover='"+moin+"'  onmouseout='"+mout+"' >"; 
       tmp = tmp +  "$" + this.price;
       tmp = tmp + "</div>";
       lbl = this.spotid;
       lbl = lbl +'_'+this.rung;
       lbl = lbl + '_buy_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
          pobj.innerHTML = tmp;
       }
     }
}


poster.prototype.get_price = function() {
     var tmp="";
     var pobj=null;
     var z = '';
     var lbl = "";
     var lb2 = "";
     var  plist = ['','standesk','adjustable','hutch','mount','kvm','seat','footpad','workout','treadmill'];
     var nevfnd = true;
     tmp = tmp + "<table cellspacing=0 cellpadding=0 border=0 >";
     tmp = tmp + "<tr>";
     tmp = tmp + "<td>";
     lb2 = this.spotid;
     lb2 = lb2 +'_'+this.rung;
     lb2 = lb2 + '_prod_sel';
     tmp = tmp + "<select id='"+lb2+"' onchange='"+this.varname+".update_price();' >";
     for (var a=0;(a<plist.length); a++) {
       var fd = false;
        if (plist[a] == this.prodid) {
            fd = true;
            nevfnd = false;
         }
       if (fd == true) {
          tmp = tmp + "<option value='"+plist[a]+"' selected='selected' >"+plist[a]+"</option>";
       } else {
         tmp = tmp + "<option value='"+plist[a]+"' >"+plist[a]+"</option>";
       }
     }
     tmp = tmp + "</select>";
     tmp = tmp + "</td>";
     tmp = tmp + "</tr>";

     tmp = tmp + "<tr>";

     tmp = tmp + "<td>";
     if (this.price != -1) {
         z = this.price;
     }
     lb2 = this.spotid;
     lb2 = lb2 +'_'+this.rung;
     lb2 = lb2 + '_price_val';
     tmp = tmp +  "<input type=button value='$' onclick='"+this.varname+".update_price();'  />";
     tmp = tmp +  "<input  id='"+lb2+"' type=text size=4 value='"+z+"' onkeyup='' />";
     tmp = tmp + "</td>";
     tmp = tmp + "</tr>";
     tmp = tmp + "</table>";

     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_buy_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
         if (nevfnd == true) {
       //    this.update_price();
         }
     }
}


poster.prototype.update_price = function() {

     var tmp="";
     var pobj=null;
     var sobj = ""; 
     var lbl2 = "";

     var sdex = this.parvar + ".darungs["+this.rung+"].dadex";
     var dex = eval(sdex);

     lbl2 = this.spotid;
     lbl2 = lbl2 +'_'+this.rung;
     lbl2 = lbl2 + '_prod_sel';
     pobj = document.getElementById(lbl2);
     if ( pobj != null) {
        if (pobj.value != this.prodid) {
          this.prodid = pobj.value;    
        } 
     }


     lbl2 = this.spotid;
     lbl2 = lbl2 +'_'+this.rung;
     lbl2 = lbl2 + '_price_val';
     pobj = document.getElementById(lbl2);
     if ( pobj != null) {
          if (pobj.value != this.price) {
            this.price = pobj.value;
          }
     }
     this.get_price();
     this.change_btns(); 
}


