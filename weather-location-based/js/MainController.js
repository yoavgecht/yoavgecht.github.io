app.controller('MainController', ['$scope', 'forecast', 'GeolocationSvc', function($scope, forecast, GeolocationSvc){
	forecast.lookup().then(function(data){
		var data = data.data;
		$scope.sevenDays = data.list;
		$scope.weather = data.list.weather
		$scope.cityName = data.city.name;
		$scope.countryName = data.city.country;
		$('.loader').hide();
		$('.container-fluid').show();
	});


}]);

