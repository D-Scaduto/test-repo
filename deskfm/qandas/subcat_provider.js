function subcat_provider() {

  this.sealist=[];
  this.init();

}



subcat_provider.prototype.init = function () {

     this.sealist.push({'text':'stands at their desk ? ', 'cat':'who','subcat':'stands' });
     this.sealist.push({'text':'dances at their desk ? ', 'cat':'who','subcat':'dances' });
//     this.sealist.push({'text':'who sits all day at their desk', 'cat':'who','subcat':'sitter' });
     this.sealist.push({'text':'wants a standing desk ?', 'cat':'who','subcat':'wants' });
     this.sealist.push({'text':'is trying a standing desk ?', 'cat':'who','subcat':'newbie' });
     this.sealist.push({'text':'likes standing at their desk ?', 'cat':'who','subcat':'likes' });
     this.sealist.push({'text':'shares about standing desks ?', 'cat':'who','subcat':'shares' });
     this.sealist.push({'text':'is curious about standing desks ?', 'cat':'who','subcat':'curious' });
     this.sealist.push({'text':'made their own standing desk ? ', 'cat':'who','subcat':'diy' });
     this.sealist.push({'text':'is anti standing ?' ,'cat':'who','subcat':'anti' });

     this.sealist.push({'text':'is a standing desk ?', 'cat':'what','subcat':'' });
     this.sealist.push({'text':'are the reports on standing desks ?', 'cat':'what','subcat':'report' });
     this.sealist.push({'text':'is a hutch ?', 'cat':'what','subcat':'hutch' });
     this.sealist.push({'text':'is an adjustable desk? ', 'cat':'what','subcat':'adjustable' });
     this.sealist.push({'text':'about chairs ? ', 'cat':'what','subcat':'chair' });
     this.sealist.push({'text':'about feet pain ? ', 'cat':'what','subcat':'footpad' });

     this.sealist.push({'text':'should you have a standing desk ?', 'cat':'why','subcat':'' });
     this.sealist.push({'text':'is lots of sitting bad ?', 'cat':'why','subcat':'sitonly' });
     this.sealist.push({'text':'is standing healthy ? ', 'cat':'why','subcat':'health' });
     this.sealist.push({'text':'does standing helps back pain ?', 'cat':'why','subcat':'back' });
     this.sealist.push({'text':'does standing burns calories ?', 'cat':'why','subcat':'weight' });
     this.sealist.push({'text':'is standing productive ?', 'cat':'why','subcat':'productive' });
     this.sealist.push({'text':'not stand up ?' ,'cat':'why','subcat':'anti' });

     this.sealist.push({'text':'do you stand at a desk ? ', 'cat':'how','subcat':'howto' });
     this.sealist.push({'text':'difficult is standing ? ', 'cat':'how','subcat':'difficult' });
     this.sealist.push({'text':'do you make a standing desk ? ' , 'cat':'how','subcat':'diy' });
     this.sealist.push({'text':'do you get a standing desk ? ' , 'cat':'how','subcat':'get' });
     this.sealist.push({'text':'do you compare standing desks ? ', 'cat':'how','subcat':'compare' });
     this.sealist.push({'text':'do you workout at a desk   ' , 'cat':'how','subcat':'workout' });

}


subcat_provider.prototype.get_setlist = function (pcat) {

  var retlist = [];
  var tcat = "";
  if ( pcat != undefined) {
    tcat = pcat;
  }
   for (var i=0; i < this.sealist.length; i++ ) {
     if ((this.sealist[i].cat == tcat) || (tcat == "")) {
           retlist.push(this.sealist[i]);
     }
   }
   return retlist;
}


subcat_provider.prototype.get_desc = function (tcat,tsubcat) {
  var ret="";
   for (var i=0; i < this.sealist.length; i++ ) {
     if ((this.sealist[i].cat == tcat)&& (this.sealist[i].subcat == tsubcat)){
           ret = this.sealist[i].text;
     }
   }
  if (ret == "") {
     ret = tcat + "-" + tsubcat;
   }
  return ret;
}


subcat_provider.prototype.requestSuggestions = function (osuggester) {

  var asuggestions = [];
  var tbvalue = "";
  if (osuggester != null) {
    if (osuggester.textbox != null) {
        tbvalue = osuggester.textbox.value;
    } else {
       tbvalue = osuggester.textval;
    }
    if (tbvalue != undefined) {
//      if (tbvalue.length > 0) {
        var found=false;
        for (var i=0; i < this.sealist.length; i++ ) {
          if (this.sealist[i].cat == tbvalue) {
            asuggestions.push(this.sealist[i]);
            found=true;
          }
        }
        osuggester.autosuggest(asuggestions);
//      }
    }
  }
}
