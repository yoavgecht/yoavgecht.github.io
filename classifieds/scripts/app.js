var app = angular.module('ngClassifieds', ['ngMaterial'])
				 .config(function($mdThemingProvider){

			 	$mdThemingProvider.theme('defualt')
				 	.primaryPalette('teal')
				 	.accentPalette('orange');
				 }).directive("helloWorld", function(){
				 	return{
				 		 template:"<h1>{{message}}</h1>"
				 	}
				 });
