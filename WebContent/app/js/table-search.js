/**
	**options to have following keys:
		**searchText: this should hold the value of search text
		**searchPlaceHolder: this should hold the value of search input box placeholder
**/

var nBefore = 0;
var nAfter  = 0;

(function($){
	$.fn.tableSearch = function(options){
		if(!$(this).is('table')){
			return;
		}
		var tableObj = $(this),
			searchText = (options.searchText)?options.searchText:'Search: ',
			searchPlaceHolder = (options.searchPlaceHolder)?options.searchPlaceHolder:'',
			divObj = $('<div style="float:right;">'+searchText+'</div><br /><br />'),
			inputObj = $('#search_table'),
			caseSensitive = false,
			searchFieldVal = '',
			pattern = '';
		inputObj.off('keyup').on('keyup', function(){
			searchFieldVal = $(this).val();
			pattern = (caseSensitive)?RegExp('.*\\b'+searchFieldVal+'\\b.*'):RegExp('.*\\b'+searchFieldVal+'\\b.*', 'i');
			tableObj.find('tbody tr').hide().each(function(){
				var currentRow = $(this);
				currentRow.find('td').each(function(){
					if(pattern.test($(this).html())){
						var targetIndex = $(this).html().indexOf(searchFieldVal)-nBefore;
						var wordElement = $(this).html().substring(targetIndex, targetIndex+searchFieldVal.length+nAfter);
						currentRow.highlight(searchFieldVal);
						currentRow.show();
						return false;
					}
				});
			});
		});
		return tableObj;
	}
}(jQuery));

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};