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
				$("#word_occurence").append('<a class="word" href="javascript:void(0)" onclick="onWordClick(\''+word+'\')">'+word+' <span class="badge">'+occu+'</span></a>')
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

function onAppClick(application){
	var app = $(application).attr("id");
	$("#"+selectedApp).css("border","none");
	$("#"+app).css("border","2px solid rgba(0,0,0,0.1)");
	selectedApp = app;
	fetchReviews(selectedApp);
}

function onWordClick(word){
	$('table.table').removeHighlight();
	$('#search_table').val(word).change();
}
	
$('#tab_star_5').click(function (e) {
  e.preventDefault();
  $('#search_table').val("");
  selectedTab = "#star_5";
  $('#star_5').tab('show');
  fetchReviews(selectedApp);
});
$('#tab_star_4').click(function (e) {
  e.preventDefault();
  $('#search_table').val("");
  selectedTab = "#star_4";
  $('#star_4').tab('show');
  fetchReviews(selectedApp);
});
$('#tab_star_3').click(function (e) {
  e.preventDefault();
  $('#search_table').val("");
  selectedTab = "#star_3";
  $('#star_3').tab('show');
  fetchReviews(selectedApp);
});
$('#tab_star_2').click(function (e) {
  e.preventDefault();
  $('#search_table').val("");
  selectedTab = "#star_2";
  $('#star_2').tab('show');
  fetchReviews(selectedApp);
});
$('#tab_star_1').click(function (e) {
  e.preventDefault();
  $('#search_table').val("");
  selectedTab = "#star_1";
  $('#star_1').tab('show');
  fetchReviews(selectedApp);
});