(function(){
var app = angular.module('booksApp');

app.directive('booksDirective', function(){
	return{
	        restrict: 'E',
	        replace: false,
	        templateUrl:'partials/booksTemplate.html',
	        controller:'booksController'
	    }
	});

}());


