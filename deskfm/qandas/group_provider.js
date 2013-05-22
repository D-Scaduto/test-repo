
function group_provider() {

  this.sealist=[];
  this.init();

}



group_provider.prototype.init = function () {

     this.sealist.push({'text':'who does it ' ,'groupid':'stands'   });
     this.sealist.push({'text':'who dances while they do it ' ,'groupid':'dances'  });
     this.sealist.push({'text':'who works out at theirs ' ,'groupid':'workout'  });
     this.sealist.push({'text':'who is curious about it ' ,'groupid':'curious'  });
     this.sealist.push({'text':'who wants a standing desk ' ,'groupid':'curious'  });
     this.sealist.push({'text':'who is trying it ' ,'groupid':'newbie'  });
     this.sealist.push({'text':'who made their own  ' ,'groupid':'diy'  });
     this.sealist.push({'text':'who shares about standing' ,'groupid':'sharer'  });
     this.sealist.push({'text':'who is a big fan of it ' ,'groupid':'fanatic'  });
     this.sealist.push({'text':'who recomends standing' ,'groupid':'recomends'  });
     this.sealist.push({'text':'who is critic ' ,'groupid':'critic'  });
     this.sealist.push({'text':'who is anti  ' ,'groupid':'anti'   });
     this.sealist.push({'text':'who is a demo ' ,'groupid':'demo'  });

}


group_provider.prototype.requestSuggestions = function (osuggester,btype_ahead) {

  var asuggestions = [];
  var tbvalue = "";
  if (osuggester != null) {

   var found=false;
   for (var i=0; i < this.sealist.length; i++ ) {
       asuggestions.push(this.sealist[i]);
       found=true;
   }
   osuggester.autosuggest(asuggestions);
  }
}


group_provider.prototype.get_desc = function (tgroupid) {
   var ret="";
   var found = false;
   for (var i=0; i < this.sealist.length; i++ ) {
     if (this.sealist[i].groupid == tgroupid){
           ret = this.sealist[i].text;
          found = true;
     }
   }
  if (found == false) {
     ret = tgroupid;
  }
  if (ret == "") { ret = "ungrouped"; }
  return ret;
}
