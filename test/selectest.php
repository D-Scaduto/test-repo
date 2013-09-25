<!--link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" /-->
<link rel="stylesheet" href="../css/jquery-ui.css" />


<script type="text/javascript" src="../lib/jquery-code.js"></script>


<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<!--script type="text/javascript" src="../lib/jquery-ui-1.10.3.custom.min.js"></script-->


<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<!--script type="text/javascript" src="lib/jquery-ui-1.10.3.custom.js"></script-->


<!-- CSS -->
<!--style type="text/css">
.list {
    background-color: lightblue;
}

#items .ui-selected {
    background: red;
    color: white;
    font-weight: bold;
}

#items {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100px;
}

#items li {
    margin: 2px;
    padding: 2px;
}
</style-->

<!-- Javascript -->
<script>
$(function () {
	$("#items").selectable({
		selected: function (event, ui) {
			var selected = $("li[class$='ui-selected']").length;
			$("#info").html("you selected " + selected + " items!");
		}
	});
});
</script>

<!-- HTML -->
<ul id="items">
    <li class="list">Item 1</li>
    <li class="list">Item 2</li>
    <li class="list">Item 3</li>
    <li class="list">Item 4</li>
    <li class="list">Item 5</li>
    <li class="list">Item 6</li>
    <li class="list">Item 7</li>
    <li class="list">Item 8</li>
    <li class="list">Item 9</li>
    <li class="list">Item 10</li>
</ul>
<div id="info">you selected 0 items!</div>
