(function(){

var app = angular.module('weatherApp', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl:'partials/home.html',
			controller:'weatherController',
			controller:'weatherController as vm'
		})
	}]);

app.filter('convertToCelsius', function(){
	return function(temp){
		var celsius = parseInt(temp) - 273.15;
		return celsius.toFixed(0);
	}
});


}());