
poster.prototype.toggle_mini = function() {
     if ( this.mini_showing == true) {
        this.hide_mini();
     } else {
        this.show_mini();
     }
}

poster.prototype.show_mini = function() {
   if (this.mini_viewer != null) {
     this.mini_viewer.draw_view();
     this.mini_showing = true;
   } else {
     this.set_mini();
   }
}


poster.prototype.set_mini = function() {
   var lbl = "";
   lbl  = this.rungster + "_mini";
   var s = this.varname + ".mini_viewer";
   this.mini_viewer = new viewer(lbl,s,this.varname);
   this.mini_viewer.load_person_list(this.uname);
}


poster.prototype.hide_mini = function() {
   if (this.mini_viewer != null) {
       this.mini_viewer.hide_screen();
   }
   this.mini_showing = false;
}



