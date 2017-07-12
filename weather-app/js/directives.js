(function(){


var app = angular.module('weatherApp');

app.directive('citySelectionDirective', function(){

	return{
		replace:'true',
		templateUrl:'partials/cities.html',
	}

})

}());