var applications = [];
var selectedApp  = "Dropbox";
var selectedTab  = "#star_5";
var selectedTabHeader = "#tab_star_5";

$(document).ready(function(){
	$('#star_5').tab('show');
	fetchApplications("",true);
	fetchReviews(selectedApp);
	fetchAppInformation(selectedApp);
});



function fetchReviews(appName){
	$.get("http://localhost:8080/conusa/backend/app/service/review", {name:appName,rating:selectedTab.substr(selectedTab.length - 1)} ,
	    function(response) {

			var overrider = '<div class="btn-group">'+
							  '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'+
							    'Change <span class="caret"></span>'+
							  '</button>'+
							  '<ul class="dropdown-menu" role="menu">'+
							    '<li><a href="#"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></a></li>'+
							    '<li><a href="#"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></a></li>'+
							    '<li><a href="#"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></a></li>'+
							    '<li><a href="#"><i class="fa fa-star"></i><i class="fa fa-star"></i></a></li>'+
							    '<li><a href="#"><i class="fa fa-star"></i></a></li>'+
							  '</ul>'+
							'</div>';
		
			// Display reviews
			var reviewsTemplate = '';
		    $.each(response.reviews, function(key,val){
		       reviewsTemplate += '<tr class="review_text"><td onclick="onReviewClick(\''+val.id+'\')">'+val.text+'</td><td class="review_override">'+overrider+'</td></tr>';
		    });
			var table = '<table class="table table-hover">'+
							'<thead>'+
								'<tr><th>Review</th><th>Override</th></tr>'+
							'</thead>'+
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
			
			// Display review count
			var reviewCount = response.reviewCount;
			$(selectedTabHeader+" a").append('<span class="badge">'+reviewCount+'</span>')
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
			  selectedApp = applications[0];
		      $("#app_list").html(appTemplate);
		      
			  $("ul#app_list li img").css("opacity","0.2");
			  $("#"+selectedApp).css("opacity","1");
	    });
}

function fetchAppInformation(appName){
	$.get("http://localhost:8080/conusa/backend/app/service/application", {name:appName,fetchAll:false} ,
	    function(response) {
		     console.log(response);	  
		     
		     var chart = '';
		     var title = '';
		     $.each(response, function(key,val){
		    	 title = key;
		    	 chart += '<li class="past" title="Five"><span class="bar" data-number="'+val.five+'"></span><span class="number">'+val.five+'</span></li>';
		    	 chart += '<li class="past" title="Four"><span class="bar" data-number="'+val.four+'"></span><span class="number">'+val.four+'</span></li>';
		    	 chart += '<li class="past" title="Three"><span class="bar" data-number="'+val.three+'"></span><span class="number">'+val.three+'</span></li>';
		    	 chart += '<li class="past" title="Two"><span class="bar" data-number="'+val.two+'"></span><span class="number">'+val.two+'</span></li>';
		    	 chart += '<li class="past" title="One"><span class="bar" data-number="'+val.one+'"></span><span class="number">'+val.one+'</span></li>';
		     });
		     $("#app_title").html(title);
		     $("#app_rating_chart").append(chart);
		     $('.chart').horizBarChart({
	    	  selector: '.bar',
	    	  speed: 3000
	    	});
	    });
}
