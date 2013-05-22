

var infb = false;


function fb_getname() {

    FB.getLoginStatus(function(response) { 
      if (response.authResponse) {
       FB.api('/me', function(response) {

           pname = response.first_name;
           nicky.sharee.facebookid = response.id;
           nicky.sharee.name = response.first_name;
           nicky.sharee.set_shape("facebook");

      } );

    }  else {

          FB.login(function(response){ 

           pname = response.first_name;
           nicky.sharee.facebookid = response.id;
           nicky.sharee.name = response.first_name;
           nicky.sharee.set_shape("facebook");

          });

     }

    });
}





function fb_yeastand() {

         FB.ui({ method: 'feed', 
            message: 'yea i stand up at my desk, sometimes. '});

}




