

function set_header() {


          if ($(window).width() < 600) {

            if (main_shape != "mini") {
              main_shape = "mini";
              diego.show();
           }
          } else {

           if ($(window).width() > 1000) {
              if (main_shape != "wide") {
                 main_shape = "wide";
                 diego.show();
             }

            } else {

               if ($(window).width() > 800) {
                  if (main_shape != "wide") {
                    main_shape = "wide";
                    diego.show();
                 } 

               } else {

                if (main_shape != "reg") {
                    main_shape = "reg";
                    diego.show();
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
 
