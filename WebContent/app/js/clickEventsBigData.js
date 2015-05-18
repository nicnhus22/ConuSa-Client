	
function onTabClick(tabNumber){
	selectedTab = "#star_"+tabNumber;
	selectedTabHeader = "#tab_star_"+tabNumber; 
	$('#star_'+tabNumber).tab('show');
	fetchProbabilities(tabNumber,100);
}

$('#tab_star_5').click(function (e) {
  e.preventDefault();
  onTabClick(5);
});
$('#tab_star_4').click(function (e) {
  e.preventDefault();
  onTabClick(4);
});
$('#tab_star_3').click(function (e) {
  e.preventDefault();
  onTabClick(3);
});
$('#tab_star_2').click(function (e) {
  e.preventDefault();
  onTabClick(2);
});
$('#tab_star_1').click(function (e) {
  e.preventDefault();
  onTabClick(1);
});