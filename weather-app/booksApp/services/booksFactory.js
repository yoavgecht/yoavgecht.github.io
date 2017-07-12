(function(){

var app = angular.module('booksApp');

	var fetchBooks = function($http){

		var getBooks = function(){
		var books;
		var booksUrl = 'data/data.json'; 

		return $http.get(booksUrl).then(function(response){
			books = response.data;
			return books;
		})
	}
		return{
			getBooks:getBooks
		}

	}

	

app.factory('fetchBooks', fetchBooks);


}());

