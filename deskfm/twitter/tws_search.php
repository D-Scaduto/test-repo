<?php
require_once('../../lib/codebird.php');
 
$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();

$reply = $cb->oauth2_token();
$bearer_token = $reply->access_token;

?>

<?php 

    $reply = $cb->search_tweets('q=standing desk',true);

    echo json_encode($reply);


?> 

