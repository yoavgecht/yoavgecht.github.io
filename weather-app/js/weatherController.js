(function(){

var app = angular.module('weatherApp');

var weatherController = function($scope, fetchCities){

	var vm = this;

	vm.cities = ['Tel Aviv', 'Vancouver', 'Moscow', 'Hong Kong', 'Wellington', 'Sydney', 'London'];



	vm.selectedCities = [];

	vm.disableWeatherTab = function(){
		vm.weatherTab = document.getElementById('weatherTab');
		vm.weatherTab.removeAttribute('data-toggle');
	}
	

	vm.toggleSelection = function toggleSelection(city) {

	    var idx = vm.selectedCities.indexOf(city);

	    // is currently selected
	    if (idx > -1) {
	      vm.selectedCities.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      vm.selectedCities.push(city);
	    }

	    if(vm.selectedCities.length < 1){
	    	vm.weatherTab.removeAttribute('data-toggle');
	    } else{
	    	vm.weatherTab.setAttribute('data-toggle', 'tab');
	    }

	    console.log(vm.selectedCities)
  	};

	 vm.update = function(city){
	  	fetchCities.getCities(city).then(function(response){
	  		document.getElementById('loader').style.display = "block";
			vm.citiesData = response;
			console.log(vm.citiesData);
		})
	 };

	 vm.setActive = function(event){
	 	console.log(event);
	 }
}


app.controller('weatherController', ['$scope', 'fetchCities', weatherController]); 

}());