


function servicer_provider() {
  this.sealist=[];
  this.init();
}


servicer_provider.prototype.init = function () {
 
     this.sealist.push({'text':'services' , 'prodid':''  });
     this.sealist.push({'text':'furniture installation' , 'prodid':'installer'   });
     this.sealist.push({'text':'interior design ' , 'prodid':'design'  });
     this.sealist.push({'text':'workouts' , 'prodid':'training'  });

}


servicer_provider.prototype.requestSuggestions = function (osuggester) {

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


servicer_provider.prototype.get_prodo = function (tprod) {

   var ret = "";
   for (var i=0; i<this.sealist.length;i++) {
          if (this.sealist[i].prodid == tprod) {
              ret = this.sealist[i];
          }
   }
   return ret;
}


