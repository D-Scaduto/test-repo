
function suggester (isugg_id, oprovider, pvname, pboss, binputable) {

  this.sugg_id = isugg_id;

  this.cur = -1;
  this.layer=null;
  this.varname = pvname;
  this.boss = pboss;
  this.suggs = [];
  this.textval = "";
  this.textbox = null;
  if (binputable) {
    this.textbox=document.getElementById(isugg_id);
  } 
  this.provider=oprovider;
  this.init();
}


suggester.prototype.init = function() {
  var othis = this;
  var onode = null;
  if (this.textbox != null) {
    onode = this.textbox;
    onode.onkeyup = function(oEvent) {
    if (!oEvent) {
      oEvent=window.event;
     }
    othis.handle_key_up(oEvent);
   }
  var othis = this;
  onode.onkeydown = function(oEvent) {
    if (!oEvent) {
      oEvent=window.event;
     }
    othis.handle_key_down(oEvent);
   }
  onode.onmouseover = function(oEvent) {
    if (!oEvent) {
      oEvent=window.event;
     }
    othis.request_suggestions(false);
   };
  }
  this.create_drop_down();
};


suggester.prototype.select_range = function (istart, ilength) {
  if (this.textbox.createTextRange) { 
    var oRange = this.textbox.CreateTextRange();
    oRange.moveStart("character",istart);
    oRange.moveEnd("character",ilength - this.textbox.value.length);
    oRange.select();
  } else if (this.textbox.setSelectionRange) {
    this.textbox.setSelectionRange(istart,ilength);
  }
  this.textbox.focus();
}


suggester.prototype.type_ahead = function (sSuggestion) { 
  if (this.textbox.createTextRange || this.textbox.setSelectionRange) {
    var ilen = this.textbox.value.length;
    this.textbox.value = sSuggestion;
    this.select_range(ilen,sSuggestion.length);
  }
}


suggester.prototype.autosuggest = function (asuggestions,btype_ahead) {
   if (asuggestions.length > 0) {
     if (btype_ahead) {
 //      this.type_ahead(asuggestions[0]);
     }
     this.show_suggestions(asuggestions);
   } else {
     this.hide_suggestions();
   }
}


suggester.prototype.request_suggestions = function (pseed,btype_ahead) {
     this.textval = pseed;
     this.provider.requestSuggestions(this,btype_ahead);
}


suggester.prototype.refresh_provider = function (anames) {
     this.provider.refresh_list(anames);
     if (this.suggestions_showing() == "visible") {
       this.provider.requestSuggestions(this,true);
     }
}


suggester.prototype.handle_key_up = function (oEvent) {
  var iKeyCode = oEvent.keyCode;
  if (iKeyCode > 8 && iKeyCode < 32 || (iKeyCode >= 33 && iKeyCode < 46) || (iKeyCode >= 112 && iKeyCode <= 123)) { 
    // ignore 
  } else {
     this.provider.requestSuggestions(this,false);
     this.viewer.do_search(this.textbox.value);
     this.textbox.focus();
  }
}


suggester.prototype.handle_key_down = function (oEvent) {

  switch(oEvent.keyCode) {
    case 38: // up arrow
         this.previous_suggestion();
         break;
    case 40: // down arrow 
         this.next_suggestion();
         break;
    case 13:  //enter
         this.hide_suggestions();
         break;
  }
        this.hide_suggestions();
}


suggester.prototype.next_suggestion = function() {
  var suggestion_nodes = this.layer.childNodes;
  if (this.cur < suggestion_nodes.length) {
    this.cur = this.cur+1;
  } else {
    this.cur = 0;
  }

  if (suggestion_nodes.length > 0 && this.cur <= suggestion_nodes.length-1) {
    var onode = suggestion_nodes[this.cur];
    this.highlight_suggestion(onode);
    if (this.textbox != null) {
      this.textbox.value = onode.firstChild.nodeValue;
    }
  } 
}


suggester.prototype.previous_suggestion = function() {
  var suggestion_nodes = this.layer.childNodes;
  if (this.cur > 0) {
    this.cur = this.cur-1;
  } else {
    this.cur = suggestion_nodes.length -1;
  }

  if (suggestion_nodes.length > 0 && this.cur >= 0) {
    var onode = suggestion_nodes[this.cur];
    this.highlight_suggestion(onode.text);
    if (this.textbox != null) {
      this.textbox.value = onode.firstChild.nodeValue;
    }
  } 
}


suggester.prototype.highlight_suggestion = function (oselectednode) {
//alert(oselectednode.id);
  this.cur=0;
  var onode= null;
  for (var i=0; i<this.layer.childNodes.length; i++) {
     onode = this.layer.childNodes[i];
     if (onode.id == oselectednode.id) {
        onode.className = "current";      
        this.cur = i;
     } else if ( onode.className == "current") {
        onode.className ="";
     }
  }
}


suggester.prototype.show_suggestions = function (asuggestions) { 
  this.suggs = asuggestions.slice();
  if (asuggestions.length > 0) {
    var odiv=null;
    this.layer.innerHTML = "";
    this.layer.style.display = 'inline';
    var oThis = this;
    for (var i=0; i<asuggestions.length; i++) {
      odiv = document.createElement("div");
//      odiv.style.display = 'inline';
      var to = null;
      var tmp ="";
      var sl = this.varname.length;
  
    if (this.varname.substring(sl-8,sl) == "preseter") {

        var ti = new Image();
        var src = "http://www.deskfm.com/pics/vman/2d/";
        src =src + asuggestions[i].preset; 
        src = src + ".jpg";
        ti.src = src;
        ti.width='50';
        ti.height='50';
        ti.id = this.sugg_id + "_pop_"+i;
/*
        ti.onmousedown = this.layer.onmouseup = 
        ti.onmouseover = function (oEvent) {
           oEvent = oEvent || window.event;
           oTarget = oEvent.target || oEvent.srcElement;
           if (oEvent.type == "mousedown") {
             oThis.hide_suggestions();        
           } else if (oEvent.type == "mouseover") {
             oThis.highlight_suggestion(oTarget); 
          }
        }
*/
        tmp =  asuggestions[i].preset;
        to = document.createTextNode("");
        odiv.id = this.sugg_id + "_pop_"+i;
        odiv.appendChild(ti);
      } else {
        tmp =  asuggestions[i].text;
        to = document.createTextNode(tmp);
        odiv.id = this.sugg_id + "_pop_"+i;
        odiv.appendChild(to);
      }
      this.layer.appendChild(odiv);
    }

    var onode=null;
      if (this.textbox != null) {
       onode=this.textbox;
    } else {
       if (document.getElementById(this.sugg_id) != null) {
         onode = document.getElementById(this.sugg_id);
       }
    }
    var pos = find_pos(onode);
    this.layer.style.left = pos[0] + "px";
    this.layer.style.top = pos[1] + "px";
//    this.layer.style.left = this.get_left() + "px";
//    this.layer.style.top = (this.get_top() + onode.offsetHeight) + "px";
    this.layer.style.visibility = "visible";
  }
}


suggester.prototype.get_left = function () {
  var onode = null;
  var ileft = 0;
  if (this.textbox != null) {
     onode=this.textbox;
  } else {
     onode=  document.getElementById(this.sugg_id);
  }
  while (onode.tagName != "BODY") {
     ileft += onode.offsetLeft;
     onode = onode.offsetParent;
  }
  return ileft;
}


suggester.prototype.get_top = function () {
  var onode = null;
  var itop = 0;
  if (this.textbox != null) {
     onode=this.textbox;
  } else {
     onode=  document.getElementById(this.sugg_id);
  }
  while (onode.tagName != "BODY") {
     itop += onode.offsetTop;
     onode = onode.offsetParent;
  }
  return itop;
}


function find_pos(obj) {
  var curleft = curtop = 0;
  if (obj != null) {
    if (obj.offsetParent) {
       do { 
         curleft += obj.offsetLeft;
         curtop += obj.offsetTop;
       } while (obj = obj.offsetParent);
    }
  }
  return [curleft,curtop];
}


suggester.prototype.create_drop_down = function () {
   this.layer = document.createElement("div");
   this.layer.id = this.sugg_id + "_pop"; 
   this.layer.className = "suggestions";
   this.layer.style.visibility = "hidden";
   this.layer.style.textAlign = 'left';
   this.layer.style.display = 'inline';
   document.body.appendChild(this.layer);
   var oThis = this;

   $("#"+this.layer.id).mouseleave(function(){oThis.hide_suggestions();});

   this.layer.onmousedown = this.layer.onmouseup  = function (oEvent) {
       oEvent = oEvent || window.event;
       oTarget = oEvent.target || oEvent.srcElement;
       if (oEvent.type == "mousedown") {
          oThis.click_suggestion();        
       } else if (oEvent.type == "mouseover") {
          oThis.highlight_suggestion(oTarget); 
       } else {
          if (oThis.textbox != null) {
            oThis.textbox.focus();
          }
       }
   }

   this.layer.onmouseover = function (oEvent) {
       oEvent = oEvent || window.event;
       oTarget = oEvent.target || oEvent.srcElement;
      oThis.highlight_suggestion(oTarget); 
   }
}


suggester.prototype.suggestions_showing = function () {
   if (this.layer != null) {
     return this.layer.style.visibility;
  }
}


suggester.prototype.hide_suggestions = function () {

   if (this.layer != null) {
      this.layer.style.visibility = "hidden";
   }

     var se = "";
          if (this.varname == "cater.subcater") {
             se = this.boss + ".show();";
             eval(se);
          } else if (this.varname == "nicky.preseter") {

          } else if (this.varname == "store.producter") {

          } else {
             var vnl = this.varname.length;
             if (this.varname.substring(vnl-7,vnl) == "dacater") {
             }
             if (this.varname.substring(vnl-8,vnl) == "subcater") {
             }
             if (this.varname.substring(vnl-8,vnl) == "preseter") {
             }
          }
}


suggester.prototype.click_suggestion = function () {

    var se = "";
    var oit = null;
    if (this.suggs[this.cur] != undefined) {

          if (this.varname == "cater.subcater") {
              se = this.boss + ".set_cats(\""+this.suggs[this.cur].cat+"\",\""+this.suggs[this.cur].subcat+"\");";
              eval(se);
          } else if (this.varname == "nicky.preseter") {
             se = this.boss + ".set_preset(\""+this.suggs[this.cur].preset+"\");";
             eval(se);
          } else if (this.varname == "store.producter") {
             se = this.boss + ".set_product(\""+this.suggs[this.cur].prodid+"\");";
             eval(se);
          } else {
             var vnl = this.varname.length;
             if (this.varname.substring(vnl-7,vnl) == "dacater") {
               se = this.varname.substring(0,vnl-7) + "subcater.request_suggestions(\""+ this.suggs[this.cur].cat+"\");";
               eval(se);
               se = this.varname.substring(0,vnl-7) + "set_cat(\""+ this.suggs[this.cur].cat+"\");";
               eval(se);
             }
             if (this.varname.substring(vnl-8,vnl) == "subcater") {
               se = this.varname.substring(0,vnl-8) + "set_subcat(\""+ this.suggs[this.cur].subcat+"\");";
               eval(se);
             }
             if (this.varname.substring(vnl-7,vnl) == "grouper") {
               se = this.varname.substring(0,vnl-7) + ".set_group(\""+ this.suggs[this.cur].groupid+"\");";
               eval(se);
             }
             if (this.varname.substring(vnl-8,vnl) == "preseter") {
               se = this.varname.substring(0,vnl-9) + ".set_preset(\""+ this.suggs[this.cur].preset+"\");";
               eval(se);
             }
          }

         this.hide_suggestions();

    }
}


