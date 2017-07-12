
var artistControllers = angular.module('artistControllers', []);
	//List controller
	artistControllers.controller('ListController', ['$scope','$http', function ($scope, $http) {
		$http.get('js/data.json').success(function(data){
			$scope.artists = data;
			$scope.artistsOrder = 'name';
			console.log(data);
		});
	}]);	

	//Details controller

//List controller
artistControllers.controller('DetailsController', ['$scope','$http', 
	'$routeParams', function ($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = '$routeParams.itemId';
	});
}]);