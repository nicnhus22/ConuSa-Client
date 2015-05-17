var applications = [];
var selectedApp  = "BBM";
var selectedTab  = "#star_5";

$(document).ready(function(){
	$('#star_5').tab('show');
	fetchApplications("",true);
	fetchReviews(selectedApp);
});



function fetchReviews(appName){
	$.get("http://localhost:8080/conusa/backend/app/service/review", {name:appName,rating:selectedTab.substr(selectedTab.length - 1)} ,
	    function(response) {
			// console.log(response);
		
			// Display reviews
			var reviewsTemplate = '';
		    $.each(response.reviews, function(key,val){
		       reviewsTemplate += '<tr><td>'+val+'</td></tr>';
		    });
			var table = '<table class="table table-hover">'+
							'<tbody>'+
								reviewsTemplate
							'</tbody>'+
						'</table>';
			$(selectedTab).html(table);
			$('table.table').tableSearch({
                searchText:'Search Table',
                searchPlaceHolder:'Input Value'
            });
			
			// Display Occurence Map
			$("#word_occurence").html("")
			var occurences = response.occurenceMap;
			for(var i in occurences){
				var word = occurences[i].word;
				var occu = occurences[i].occurence;
				wordClick = word.replace(/'/g,"\\'");
				$("#word_occurence").append('<a class="word" href="javascript:void(0)" onclick="onWordClick(\''+wordClick+'\')">'+word+' <span class="badge">'+occu+'</span></a>')
			}
	});
}

function fetchApplications(appName, all){
	$.get("http://localhost:8080/conusa/backend/app/service/application", {name:appName,fetchAll:all} ,
	    function(response) {
		      var appTemplate = ''; 
			  $.each(response, function(key,val){
		    	   applications.push(key);
		    	   appTemplate += '<li><img id="'+key+'" src="'+val.icon+'" onclick="onAppClick(this)" class="img-reponsive app" width="100%"/></li>';
		      });
			  
		      $("#app_list").html(appTemplate);
	    });
}