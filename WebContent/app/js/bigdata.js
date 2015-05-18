
var selectedTab  = "#star_all";
var selectedTabHeader = "#tab_star_all";

$(document).ready(function(){
	$('#star_all').tab('show');
	fetchProbabilities(0,100);
});

function fetchProbabilities(rating, limit){
	$.get("http://localhost:8080/conusa/backend/app/service/probability", {rating:rating,limit:limit} ,
	    function(response) {
		      var appTemplate = ''; 
			  $.each(response, function(key,val){
				  var prob = val;
				  console.log(val.word, val.probability);
			  });

	});
}
