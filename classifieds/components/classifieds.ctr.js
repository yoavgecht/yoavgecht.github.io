(function(){
	"use strict"
	angular.module('ngClassifieds')
		   .controller('classifiedsCtrl', ['$scope', '$http', 'classifiedsFactory', '$mdSidenav', '$mdToast', '$mdDialog', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
		   	classifiedsFactory.getClassifieds().then(function(data){
		   		$scope.classifieds = data.data;
		   	});

		   	var contact = {
		   		name: 'yoav',
		   		phone: '(555) 555-55555',
		   		email: 'yoavgecht@gmail.com'
		   	}

		   	$scope.openSidebar = function(){
				$mdSidenav('left').open();
			}  

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}  

			$scope.saveClassified = function(classified){
				if(classified){
					classified.contact = contact;
					$scope.classifieds.push(classified);
					showToast('Classified Saved!');
				}

				$scope.classified = {};
				$scope.closeSidebar();
				
			}

			$scope.editClassified = function(classified){
				$scope.editing = true;
				$scope.openSidebar();
				$scope.classified = classified;
			}

			$scope.saveEdit = function(){
				$scope.editing = false;
				$scope.classified = {};
				$scope.closeSidebar();
				showToast('Edit Saved!');
			}

			$scope.deleteClassified = function(event, classified){
				var confirm = $mdDialog.confirm().title('Are you sure you want to delete ' + classified.title + '?').ok('Yes').cancel('No').targetEvent(event);
				$mdDialog.show(confirm).then(function(){
					$scope.classifieds.splice($scope.classifieds.indexOf(classified), 1);
				}, function(){

				});
			}

			function showToast(message){
				$mdToast.show(
					$mdToast.simple().content(message).position('top', 'left').hideDelay(3000)
				)
			}
		}]);	   
}());