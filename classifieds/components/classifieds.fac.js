(function(){

	"use strict";
	angular.module('ngClassifieds')
			.factory("classifiedsFactory", ['$http', function($http){
				function getClassifieds(){
					return $http.get('data/data.json');
				}

		   		return {
		   			getClassifieds: getClassifieds
		   		}
		}])
}());