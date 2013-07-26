


function product_provider() {
  this.sealist=[];
  this.init();
}


product_provider.prototype.init = function () {
 
//     this.sealist.push({'text':'' ,'prodid':''  });
     this.sealist.push({'text':'tall desks & tall chairs' ,'prodid':'tall' });
     this.sealist.push({'text':'adjustable height desks' , 'prodid':'adjustable' });
     this.sealist.push({'text':'hutches and lecturns' , 'prodid':'hutch' });
//     this.sealist.push({'text':'do it yourself solutions' , 'prodid':'diy'});
     this.sealist.push({'text':'custom desk installation' , 'prodid':'custom'});
//     this.sealist.push({'text':'footpads and mousepads' , 'prodid':'pads' });
//     this.sealist.push({'text':'standing desk accesories', 'prodid':'accesories' });
     this.sealist.push({'text':'personal training for desks' , 'prodid':'workout' });

}


product_provider.prototype.get_setlist = function () {

  var retlist = [];
   for (var i=0; i < this.sealist.length; i++ ) {
           retlist.push(this.sealist[i]);
   }
   return retlist;
}

product_provider.prototype.requestSuggestions = function (osuggester) {

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
//          if (this.sealist[i].mode.indexOf(tbvalue) == 0) {
            asuggestions.push(this.sealist[i]);
            found=true;
//          }
        }
        osuggester.autosuggest(asuggestions);
//      }
    }
  }
}


product_provider.prototype.get_desc = function (tprodid) {
  var ret="";
   for (var i=0; i < this.sealist.length; i++ ) {
     if (this.sealist[i].prodid == tprodid){
           ret = this.sealist[i].text;
     }
   }
  return ret;
}
