


function pager_header() {

    max_chips = Math.round(set_total/100);
    if (max_chips ==0 ) {
      max_chips = 1;
    } 
    var tmps = "";
    tmps = tmps + " set " + cur_chip + " of " + max_chips;
//   tmps = tmps +  " total= " + set_total;
  
    var lbl = "feed_btns";
  
    var obj = document.getElementById(lbl); 
    if (obj != null) {
       obj.innerHTML=tmps;
    }
}



function prev_chip() {
 if (cur_chip >1) {
     cur_chip = cur_chip -1;
     dfm_twsget(da_year,da_month,da_week);
     pager_header();
  }
}


function next_chip() {
 if (cur_chip < max_chips) {
   cur_chip = cur_chip +1;
   dfm_twsget(da_year,da_month,da_week);
   pager_header();
 }
}


function tws_btns(i)  { 
   if (i == undefined) {
    for (var k=0;k<main_array.length;k++) {
       btns_doit(k);
    }
   } else {
     btns_doit(i);
   }
}


function btns_doit(j)  { 

   if (main_array[j] != undefined) {

         var hide = main_array[j].hide;
         var state = main_array[j].state;

         var tr = "";

          if (hide) {
             tr = tr  +  "<input  id='twtb-"+j+"'  type=button value='"+j+"' onClick='tws_toggle("+j+")' >  ";
          } else {

             tr = tr  +  "<input  id='twtb-"+j+"'  type=button value='"+j+"' onClick='tws_toggle("+j+")' >  ";
               if (state == "stored" ) {  
                  tr = tr + "<input type=button value='unstore' onClick='tws_unstore("+j+");' > "; 
                  var url='http://www.deskfm.com/deskfm/twitter/fixer/tws_access.php?command=fixone';
                  url = url + "&twid="+main_array[j].id_str;
                  tr = tr + "<a href='"+ url + "' >fix</a> ";
 
                } else {

                   if (state == "ignored" ) {  
                      tr = tr + "<input type=button value='unignore' onClick='tws_unignore("+j+");' > "; 
                   } else {
                      tr = tr + "<input type=button value='ignore' onClick='tws_ignore("+j+");' > "; 
                      tr = tr + "<input type=button value='store' onClick='tws_store("+j+");' > "; 
                   }
               }
           }


          var lbl = "tws_" + j+"_btns";
          var obj = document.getElementById(lbl);
          if (obj != null) {
             obj.innerHTML=tr;
          }

           lbl = "tws_" + j;
           obj = document.getElementById(lbl);
          if (obj != null) {
             obj.className="tws_"+state;
          }

     }  //main_array not null 

 }




function dfm_buildblocks()
 {

    var counter = 0;
     var row_counter = 0;

     var op= "";

        $.each(main_array,function(i) {  

         var tr = "";

         if (counter ==0)  {
           tr = tr  +  "<div id='twr_"+row_counter+"' class='box' >";
         }
         counter = counter + 1;

              tr = tr  +  "<div  id='tws_"+i+"'  >" ;
              tr = tr  +  "<span  id='tws_"+i+"_btns' >";
              tr = tr  +  "</span>";
              tr = tr  +  "</div>";

              tr = tr  +  "<div  id='tws_"+i+"_spot' >";
              tr = tr  +  "</div>";

               if (counter > 0) {
                  tr = tr  +  "</div>";
                  counter = 0;
               row_counter = row_counter + 1;
               }

         op = op + tr ;

        });  // end loop

       $("#mobile_view").html(op);  

}



function tws_showall()  { 
    tws_btns();
    for (var k=0;k<main_array.length;k++) {
     tws_show(k);
   }
 }



function tws_show(i)
  {
     if (main_array[i] != null) {
          var tr = "";
          if (main_array[i].hide == false) {
              tr =  "<div style='width:200px;' >";
              tr = tr  +  "<span>" + main_array[i].from_user + "</span>";
              tr = tr  +  "<span >" + main_array[i].created_at + "</span>";
              tr = tr  +  "<span >";
              tr = tr + " <img src='"+main_array[i].profile_image_url + "' width='50px' height='50px' >";
              tr = tr + "</span>";

              var turl = "http://twitter.com/Support/status/" + main_array[i].id_str;
              tr = tr  +  "<span style='width:150px;' >";
              tr = tr  +   main_array[i].text ;
              tr = tr  +  "</span>"; 
              tr = tr  +   "<a href='"+ turl +"' target='_blank'  >link</a>" ;

              tr = tr  +  "</div>";

           var lbl = "tws_" + i + "_spot";
            var obj = document.getElementById(lbl); 
           if (obj != null) {
              obj.innerHTML=tr;
              obj.className=main_array[i].state;
           }
       }
    }
  }



function tws_hide(i) {
       main_array[i].hide=true;
       tws_btns(i);
       var lbl = "tws_" + i + "_spot";
       var obj = document.getElementById(lbl); 
       obj.innerHTML="";
 }





function tws_toggle(i)
  {
  

  if (main_array[i] != null) {

      if (main_array[i].hide == false) {
              tws_hide(i);

     } else {

          main_array[i].hide = false;

           tws_show(i);
      }
 
    }

 }



 
function tws_saveall()
{

   for (var i=0;i<main_array.length;i++) {
       tws_store(i);
    }

}





  function tws_setstate(ptwid,pstate)
  {


     for (var k=0; (k <main_array.length) ; k++) {

           if (main_array[k] != null) {
              
               if (main_array[k].id_str == ptwid) {

                 main_array[k].state = pstate;
                 if (pstate == "none") {
                   main_array[k].hide = false;
                  } else {
                    main_array[k].hide = true;
                  }
              }
          }
      }

}



