
function footer (pspotid) {

    this.spotid = pspotid;
    this.varname = "ray";

}	

footer.prototype.show = function () {
    var lbl = "";
    var tmp = "";
    var ocl = "";

     $('#foot_spot').html(tmp);
     $('#foot_spot').trigger("create"); 
}
