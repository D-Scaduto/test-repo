
function footer (pspotid) {

    this.spotid = pspotid;
    this.varname = "ray";

}	

footer.prototype.show = function () {
    var lbl = "";
    var tmp = "";
    var ocl = "";

     tmp = tmp + "<span id='lcount_spot' ></span>";      

     tmp = tmp + "<span id='mcount_spot' ></span>";      

     $('#foot_spot').html(tmp);
     $('#foot_spot').trigger("create"); 
}
