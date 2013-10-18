

function draw_page() {

   var tmp = "";
   var lbl = "";

   if (main_shape == "mini") {
      tmp += "<div id='head_spot' style='' class=''   data-role='header' data-theme='b'  >";
    } else {
      tmp += "<div id='head_spot' style='' class=''  data-position='fixed' data-role='header' data-theme='b'  >";
    }
    tmp += " <div id='menu_spot' style='' class='' >";
    tmp += "  </div>";
    tmp += "  <div style='clear:right;' ></div>";
    tmp += "    <div id='top_view' class='' style='float:right' data-role='popup'   >";
    tmp += "    </div>";
    tmp += "       <div id='' class='' style='clear:right;' ></div>";
    tmp += " </div>";

    if (buddah == true) {
       tmp += "<div data-role='content'  class='ui-grid-a' style=''  >";
        tmp += "<div id='adside_bar' class='ui-block-a' style=''  >";
        tmp += "</div>";
        tmp += "<div id='admain_spot'  class='ui-block-b'  style=''   >";
        tmp += "</div>";
      tmp += "</div>";


    } else {
      tmp += "    <div id='main_spot'  class=''  style=''   >";
      tmp += "    </div>";
    }

   if (main_shape == "mini") {
    tmp += "<div id='foot_spot' style='min-width:350px;text-align:center;' class=''  data-role='footer' data-theme='b'  >";
   } else {
    tmp += "<div id='foot_spot' style='min-width:350px;text-align:center;' class='' data-position='fixed'  data-role='footer' data-theme='b'  >";
    }
    tmp += "</div>";

   lbl = 'page_spot';
   $('#'+lbl).html(tmp);
   $('#'+lbl).trigger("pagecreate");
   ray.show();
   
}


function set_header() {


          if ($(window).width() < 600) {

            if (main_shape != "mini") {
              main_shape = "mini";
              draw_page();
              diego.show();
              diego.set_topshape();
               if (buddah == true) {
                diego.set_botshape();
              }
            }
          } else {

           if ($(window).width() > 1000) {
              if (main_shape != "wide") {
                 main_shape = "wide";
                 draw_page();
                 diego.show();
                 diego.set_topshape();
                 if (buddah == true) {
                   diego.set_botshape();
                 }
              }

            } else {

               if ($(window).width() > 800) {
                  if (main_shape != "wide") {
                    main_shape = "wide";
                    draw_page();
                    diego.show();
                    diego.set_topshape();
                    if (buddah == true) {
                      diego.set_botshape();
                    }
                  } 

               } else {

                if (main_shape != "reg") {
                    main_shape = "reg";
                    draw_page();
                    diego.show();
                    diego.set_topshape();
                    if (buddah == true) {
                      diego.set_botshape();
                   }
                }
              }
            }
          }
}
 
function set_viewer() {

          if ($(window).width() < 600) {
           if (daviewer.gridcols != 1) {
              daviewer.gridcols=1;
              daviewer.draw_view();
            }
          } else {

           if ($(window).width() > 1000) {
             if ((buddah == false) || (diego.top_shape == "")) {
                if (daviewer.gridcols != 4) {
                  daviewer.gridcols=4;
                  daviewer.draw_view();
                }
              } else {
                 if (daviewer.gridcols != 3) {
                  daviewer.gridcols=3;
                  daviewer.draw_view();
                }
              }

            } else {
               if ($(window).width() > 800) {
                  if ((buddah == false) || (diego.top_shape == "")) {
                    if (daviewer.gridcols != 3) {
                      daviewer.gridcols=3;
                      daviewer.draw_view();
                    }
                  } else {
                    if (daviewer.gridcols != 2) {
                       daviewer.gridcols=2;
                       daviewer.draw_view();
                    }
                  }

              } else {
 
                   if (daviewer.gridcols != 2) {
                       daviewer.gridcols=2;
                       daviewer.draw_view();
                    }
 
             }
           }
        }
}
 
