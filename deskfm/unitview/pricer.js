

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
       tmp=tmp+"<span id='"+lbl+"' class='spotd_off' onclick='"+ocl+"' onmouseover='"+moin+"'  onmouseout='"+mout+"' >"; 
       tmp = tmp +  "$" + this.price;
       tmp = tmp + "</span>";
       lbl = this.rungster + '_buy_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
          pobj.innerHTML = tmp;
       }
     }
}


poster.prototype.get_price = function() {
     var tmp="";
     var pobj=null;
     lbl = this.rungster + '_buy_spot';
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


