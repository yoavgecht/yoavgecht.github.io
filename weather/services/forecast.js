// app.factory('GeolocationSvc', ['$q', '$window', function ($q, $window) {
// 	return function(){
// 		var deferred = $q.defer();
// 		 if(!$window.navigator) {
//           deferred.reject(new Error('Geolocation is not supported'));
//         } else {
//           $window.navigator.geolocation.getCurrentPosition(function(position) {
//             deferred.resolve({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             });
//           }, deferred.reject);
//         }
//          return deferred.promise;
// }
		
// }]);

app.factory('forecast', ['$q','$http', function($q, $http){
	var userLocation = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat={{POSITION.lat}}&lon={{POSITION.lng}}&mode=json&units=metric&cnt=7&callback=';

	return{
		urlForLatLng: function(lat, lng) {
        return userLocation.replace(/{{POSITION.lat}}/ig, lat)
        				   .replace(/{{POSITION.lng}/, lng);
	},

	lookupByLatLng: function(lat, lng) {
          var deferred = $q.defer();
          var url = this.urlForLatLng(lat, lng);

          return $http.get(url)
			.success(function(data){
				return data;
			}).error(function(err){
				return err;
			});
	},

	lookup: function() {
          var deferred = $q.defer();
          var self = this;

		   GeolocationSvc().then(function(position){
		   deferred.resolve(self.lookupByLatLng(position.lat, position.lng));
          }, deferred.reject);

          return deferred.promise;
		}
	}
	
}]);

