(function(){

var app = angular.module('weatherApp');

	var fetchCities = function($http){

		var getCities = function(city){
			if(city === null){
				city = '';
			}
		var cities;
		var citiesUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=81b46d587d200cc1814f1c351408534f&q=' + city; 

		return $http.get(citiesUrl).then(function(response){
			cities = response.data;
			return cities;
		})
	}
		return{
			getCities:getCities
		}

	}

	

app.factory('fetchCities', fetchCities);


}());