


var main_array = [];
var tws_limit= 20;


function dfm_twsget(pyear,pmon,pweek)
 {
   var url='deskfm/twitter/dfm_dbget.php';
   url = url + "?yr="+ pyear;
   url = url + "&mon="+ pmon;
   url = url + "&lim="+ tws_limit;


   if (pweek != undefined) {
    url = url + "&week="+ pweek;
   }
   url = url + "&chip="+ cur_chip;


    $.getJSON(url,function(json) {
    main_array = json;
    dfm_buildblocks();
    for (var k=0; (k <main_array.length) ; k++) {

       if (main_array[k] != null) {
           main_array[k].state = "stored";
           main_array[k].hide = false;
       }
          
    }
    tws_showall();

   });   // end get json 
 }


 
function tws_store(i)
  {

     var url='deskfm/twitter/tws_store.php?';

     url = url + "twid="+main_array[i].id_str;

     url = url + "&twuser="+encodeURIComponent(main_array[i].from_user);
     url = url + "&twpicurl="+encodeURIComponent(main_array[i].profile_image_url);
     url = url + "&twtext="+encodeURIComponent(main_array[i].text);

     var td1 = main_array[i].created_at; 
     var td2 = td1.slice(td1.indexOf(',')+1, td1.indexOf('+'));

     var pcs = td2.split(' ');
    var bigd = new Date(td2); 

    var df = bigd.getFullYear() + "-" + (bigd.getMonth()+1) + "-" + bigd.getDate();
    df = df + " " + bigd.getHours() + ":" + bigd.getMinutes() + ":" + bigd.getSeconds();

     url = url + "&twdate="+encodeURIComponent(df); 

    $.get(url, function(data) {
         var lbl =  "#tws_"+i;
 
         $(lbl).addClass('tws_stored') ;
            // alert(data);
            main_array[i].state = "stored";
            tws_btns(i);
            tws_show(i);

      } );
 }


function tws_unstore(i)
  {

     var url='deskfm/twitter/tws_unstore.php?';
     url = url + "twid="+main_array[i].id_str;

    $.get(url, function(data) {
         var lbl =  "#tws_"+i;
         $(lbl).addClass('tws_none') ;
            // alert(data);
            main_array[i].state = "none";
            tws_btns(i);
            tws_show(i);
      } );
 }




 
function tws_ignore(i)
  {
     var url='deskfm/twitter/tws_ignore.php?';
     url = url + "twid="+main_array[i].id_str;
     url = url + "&twuser="+encodeURI(main_array[i].from_user);

      $.get(url, function(data) {
    //    alert(data);
         main_array[i].state = "ignored"; 
         tws_hide(i);

        var lbl = "#tws_"+i;
         $(lbl).addClass('tws_ignored') ;

       } );
 }



function tws_reget(qry_str)
 {

     var query = "";
     var rpp = 100;
     if (is_mobile == true) {
         rpp = 25;
     }
     if (qry_str != undefined) {
       query="?callback=?&"+qry_str;
     }

     var url='http://search.twitter.com/search.json';

     var op = "";
     var cur_page = 0;

      var s = url + query;
//     alert(s);
     $.getJSON(s,function(json) {

        var np = json.next_page; 
        cur_page = json.page; 
        var rfsh = json.refresh_url +"&rpp=100";

        main_array = [];
        main_array = json.results;

        if (cur_page >1) {
             var prev_page = cur_page - 1;
            op = op + "<input type=button value='prev page' onClick='tws_reget(\""+rfsh+"&page="+prev_page+"\")' > ";
         } 

        if (np != undefined) {
          np = np.substring(1, np.length); 
          op = op + "<input type=button value='next page' onClick='tws_reget(\""+np+"\")' > "; 
        } 

        if (main_array != undefined) {

        op = op + "<input type=button value='save all' onClick='tws_saveall();' > "; 
      
       $("#feed_btns").html(op);  

        dfm_buildblocks();
        for (var k=0; (k <main_array.length) ; k++) {

           if (main_array[k] != null) {
               main_array[k].state = "none";
               main_array[k].hide = false;

            }
          }

       tws_showall();
       tws_check_state();
        }

    });   // end get json 
}




function tws_get(qry_str)
 {

     var query = "";
     var rpp = 100;
     if (is_mobile == true) {
         rpp = 25;
     }
     var qe = escape(qry_str);
     if (qry_str != undefined) {
       query ="?callback=?&q="+qe + "&rpp="+rpp;
     }

     var url='';
     url = 'deskfm/twitter/tws_search.php';

     var op = "";
     var cur_page = 0;

     var s = "";
//      s = url + query;
     s = url ;

     $.getJSON(s,function(json) {

        var np = json.next_page; 
        cur_page = json.page; 
        var rfsh = json.refresh_url +"&rpp=100";

        if (cur_page >1) {
             var prev_page = cur_page - 1;
            op = op + "<input type=button value='prev page' onClick='tws_reget(\""+rfsh+"&page="+prev_page+"\")' > ";
        } 

        if (np != undefined) {
          np = np.substring(1, np.length); 
          op = op + "<input type=button value='next page' onClick='tws_reget(\""+np+"\")' > "; 
        } 

        op = op + "<input type=button value='save all' onClick='tws_saveall();' > "; 

        $("#feed_btns").html(op);  

        add_unsorted(json);

    });   // end get json 
}



function tws_check_state()
  {

     for (var k=0; (k <main_array.length) ; k++) {

           if (main_array[k] != null) {
               main_array[k].state = "none";
               main_array[k].hide = false;

            }
          }

     var url='deskfm/twitter/tws_getids.php';
      $.get(url, function(data) {  

         var stored_twids = [];
         stored_twids = data.split("|"); 

          for (var i=0; (i <stored_twids.length) ; i++) {
                tws_setstate(stored_twids[i],"stored");
          }

         var url2='deskfm/twitter/tws_getignids.php';

          $.get(url2, function(data2) {  
            var ignored_twids = [];
            ignored_twids = data2.split("|");

            for (var j=0; (j <ignored_twids.length) ; j++) {
                tws_setstate(ignored_twids[j],"ignored");
           }

            tws_showall();
         } );

     } );
 }


  
