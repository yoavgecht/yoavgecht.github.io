(function(){
	
var app = angular.module('booksApp', ['ui.router', 'ngMessages']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('books', {
			url:'/',
			templateUrl:'partials/books.html',
			controller:'booksController'
		})
}])

}());

