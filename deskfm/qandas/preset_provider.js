

function preset_provider() {
  this.sealist=[];
  this.init();
}


preset_provider.prototype.init = function () {
 
     this.sealist.push({'text':'standing desk and a tall chair',  'preset':'talldesk','sketch':'bd8e4e9e04ffff886817581d760cf46c'});
     this.sealist.push({'text':'a hutch for a standing desk', 'preset':'hutch', 'sketch':'606adf01ebf2d1ec6817581d760cf46c'});
     this.sealist.push({'text':'a custom mounted standing workarea' , 'preset':'mounted' ,'sketch':'8ba142c33b5ccd43749b941927ab6c4'});
     this.sealist.push({'text':'blocks to raise a desk to standing height' ,'preset':'blocks', 'sketch':'54984584b8be7a696817581d760cf46c'});
     this.sealist.push({'text':'a filling cabinet as a standing desk' ,'preset':'worktop','sketch':'aa43a2624012ab9d6817581d760cf46c'});
/*
     this.sealist.push({'text':'shelves as a standing workspace', 'preset':'shelves' , 'sketch':'b218d6360d3c9c733749b941927ab6c4' });
*/
     this.sealist.push({'text':'sit only workspace' , 'preset':'sitonly','sketch':'47c93cc4b323d5596817581d760cf46c'});
     this.sealist.push({'text':'adjustable height desk', 'preset':'adjustable', 'sketch':'abe71d5f456fc8f73749b941927ab6c4'});
//     this.sealist.push({'text':'adjustable height desk with two legs', 'preset':'adjustable2l', 'sketch':'df9262dfe1eec9ac3749b941927ab6c4'});
//     this.sealist.push({'text':'adjustable height desk with three legs', 'preset':'adjustable3l', 'sketch':'7cd3abff590992e96817581d760cf46c'});

}


preset_provider.prototype.requestSuggestions = function (osuggester) {
  var asuggestions = [];
  if (osuggester != null) {
     for (var i=0; i < this.sealist.length; i++ ) {
        asuggestions.push(this.sealist[i]);
     }
  } else {
      asuggestions = this.sealist;
  }
  osuggester.autosuggest(asuggestions);
}


preset_provider.prototype.get_preset = function (tpreset) {
   var ret = null;
 
   if (tpreset == undefined) {
      ret = this.sealist[3];
   } else { 

     for (var i=0; i<this.sealist.length;i++) {
          if (this.sealist[i].preset == tpreset) {
              ret = this.sealist[i];
          }
     }
   }
   return ret;
}


preset_provider.prototype.preset_pic = function (tpreset,twidth) {

    var wd = "50px";
    if (twidth != undefined) {
       wd = twidth;
    }
    var o = this.get_preset(tpreset);
    var tmp = "";
    var src = "http://www.deskfm.com/pics/vman/2d/";
    src =src + o.preset; 
    src = src + ".jpg";
    tmp = "<img src='"+src+"' width='"+wd+"' >";

    return tmp;

}


preset_provider.prototype.preset_link = function (tpreset) {
     var tmp = "";
     var o = null;
     o = this.get_preset(tpreset);
     var src="";
     if (o != null) {
       src =o.sketch; 
       tmp = tmp + "<iframe src='http://sketchup.google.com/3dwarehouse/mini?mid=";
       tmp = tmp + src;
       tmp = tmp + "&etyp=sw&width=400&height=300'";
       tmp = tmp + " frameborder='0' scrolling='no' marginheight='0' marginwidth='0' ";
       tmp = tmp + " width='350' height='250'></iframe> ";
     }

     return tmp;
}


preset_provider.prototype.preset_story = function (tpreset) {

    var o = this.get_preset(tpreset);
    var tmp = o.text;

    return tmp;

}

