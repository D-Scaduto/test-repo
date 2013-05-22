function cat_provider() {

  this.sealist=[];
  this.init();

}



cat_provider.prototype.init = function () {

     this.sealist.push({'text':'who', 'cat':'who' });
     this.sealist.push({'text':'what', 'cat':'what' });
     this.sealist.push({'text':'why','cat':'why' });
     this.sealist.push({'text':'how', 'cat':'how' });
     this.sealist.push({'text':'junk', 'cat':'junk' });

}


cat_provider.prototype.requestSuggestions = function (osuggester,btype_ahead) {

  var asuggestions = [];
   for (var i=0; i < this.sealist.length; i++ ) {
       asuggestions.push(this.sealist[i]);
   }
   osuggester.autosuggest(asuggestions);
}


