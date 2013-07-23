

// takes in ID and query as a STRING
function update_bt (pspotid, pquery){
	this.spotid = "";
	if (pspotid != undefined)
		this.spotid = pspotid;
	this.showing = true;
	this.query = "";
	if(pquery !=undefined)
		this.query = pquery;
}

update_bt.prototype.action = function(){
	//calls the php file to update DB	
	alert("here");
	$.get('http://localhost/dillon/quick_script.php?TableName=dfm_tweets', function(retarray) {
//		alert("hello")
//		alert(retarray);
		$('#Dillon').html(retarray);
        });
}
