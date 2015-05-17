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