
function footer (pspotid) {

    this.spotid = pspotid;
    this.varname = "ray";

}	

footer.prototype.show = function () {
    var lbl = "";
    var tmp = "";
    var ocl = "";
/*
    tmp += " <div   class='ui-grid-a' style=''  >";
    tmp += "<div id='rail_spot'  class='ui-block-a' style='width:75%'   >";
    tmp += "</div>";

     tmp += "<div id='rail_btns' class='ui-block-b' style='width:25%;vertical-align:middle;'  >";
    tmp += "</div>";

    tmp += "</div>";
*/

    tmp += "<div id='rail_spot'  class='' style=''   >";
    tmp += "</div>";

     $('#foot_spot').html(tmp);
     dale.show();
     $('#foot_spot').trigger("create"); 
}
