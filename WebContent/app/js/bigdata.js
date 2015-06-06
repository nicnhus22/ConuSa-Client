
var selectedTab  = "#star_all";
var selectedTabHeader = "#tab_star_all";

$(document).ready(function(){
	$('#star_all').tab('show');
	fetchProbabilities(0,100);
});

function fetchProbabilities(rating, limit){
	$.get("http://localhost:8080/conusa/backend/app/service/probability", {rating:rating,limit:limit} ,
	    function(response) {
			  var ranking = 1;
		      var probaTemplate = ''; 
			  $.each(response, function(key,val){
				  var prob = val;
				  probaTemplate += '<tr><td>'+ranking+'</td><td>'+val.word+'</td><td>'+val.probability+'</td></tr>';
				  console.log(ranking,val.word,val.probability);
				  ranking++;
			  });
			  var table = '<table class="table table-hover">'+
							'<tbody>'+
								probaTemplate
							'</tbody>'+
						'</table>';
			$(selectedTab).html(table);
			$('table.table').tableSearch({
			    searchText:'Search Table',
			    searchPlaceHolder:'Input Value'
			});

	});
}
