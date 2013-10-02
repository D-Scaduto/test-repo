
function footer (pspotid) {

    this.spotid = pspotid;
    this.varname = "ray";

}	

footer.prototype.show = function () {
    var lbl = "";
    var tmp = "";
    var ocl = "";
    tmp += " <div id='rail_spot' class='' style=''  >";
    tmp += " </div>";
tmp = "hey";

     $('foot_spot').html(tmp);
     $('foot_spot').trigger("create"); 
}
