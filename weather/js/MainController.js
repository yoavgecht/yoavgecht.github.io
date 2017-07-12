
// app.controller('MainController', ['$scope', 'GeolocationSvc', function($scope, GeolocationSvc){
// 		$scope.loc = GeolocationSvc();
// 		console.log($scope.loc);
// 		// forecast.success(function(data){
// 		// $scope.sevenDays = data.list;
// 		// $scope.weather = data.list.weather
// 		// $scope.cityName = data.city.name;
// 		// $scope.countryName = data.city.country;
// 		// })
// }]);




app.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
	forecast.lookup().then(function(data){
		var data = data.data;
		$scope.sevenDays = data.list;
		$scope.weather = data.list.weather
		$scope.cityName = data.city.name;
		$scope.countryName = data.city.country;
	});
}]);