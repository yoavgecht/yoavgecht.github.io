(function(){

var app = angular.module('booksApp');


var booksController = function($scope, fetchBooks, $window){
	    //Getting the data from the server
		fetchBooks.getBooks().then(function(response){
			$scope.books = response;
		});

		$scope.selectedBooks = [];

		$scope.checkSelected = function(){
			return $scope.selectedBooks.length > 0;
		}
		

		//Creating an array from selected checkboxes values
		$scope.toggleSelection = function toggleSelection(bookName) {
            var idx = $scope.selectedBooks.indexOf(bookName);
 
		     // is currently selected
		     if (idx > -1) {
		       $scope.selectedBooks.splice(idx, 1);
		     }
 
		     // is newly selected
		     else {
		       $scope.selectedBooks.push(bookName);
		     }

         };

         //enabling selected books to be eddited
	    $scope.editBook = function(book){
	    	$scope.editing = true;
	    	document.getElementsByTagName('button')[0].disabled = true;
	    	document.getElementsByTagName('button')[1].disabled = true;
	    	var textInput = document.getElementsByClassName('form-control');
	    	if(book !== 'undefined' && book.length > 0){
			for(var i = 0; i < book.length; i++){
				angular.forEach($scope.books, function(bookItem, index){
					if(book[i] == bookItem.title){
						if(textInput[index * 3].value == bookItem.title){
							textInput[index * 3].disabled = false;
							textInput[index * 3  + 1].disabled = false;
							textInput[index * 3 + 2].disabled = false;
							textInput[index * 3].style.background = "#f3f3f3";
							textInput[index * 3 + 1].style.background = "#f3f3f3";
							textInput[index * 3 + 2].style.background = "#f3f3f3";
						}
					}

						if($scope.editing){
				 			document.getElementsByName('bookCheckbox')[index].disabled = true;
						 }
					});
				}

    		} else{
    			$window.alert('Please select a book to edit');
    			$scope.editing = false;
    		}
	    }

	    //saving text fields values when clicking out of a text field
	     $scope.saveBook = function(book, value){
	     	$scope.editing = false;
	     	if(book !== undefined){
	     		var booksArray = [];
	     		var textInput = document.getElementsByClassName('form-control');
					angular.forEach($scope.books, function(bookItem, index){
						var titleTextField = textInput[index * 3];
						var authorTextField = textInput[index * 3 + 1];
						var dateTextField = textInput[index * 3 + 2];
						if(book == bookItem.title){
							bookItem.title = titleTextField.value;
				 			titleTextField.disabled = true;
							titleTextField.style.background = "#fff";
							if((authorTextField.disabled == true) && (dateTextField.disabled == true)){
									booksArray.push(bookItem.title)
									removeFromSelectedBooks(booksArray);
							}
							if( titleTextField.classList.contains('ng-invalid') || authorTextField.classList.contains('ng-invalid') || dateTextField.classList.contains('ng-invalid') ){
							    $scope.editing = true;
								if(titleTextField.classList.contains('ng-invalid')){
									titleTextField.disabled = false;
								} else if(authorTextField.classList.contains('ng-invalid')){
										authorTextField.disabled = false;
								} else {
									dateTextField.disabled = false;
								}
							}
							
							for (var i = 0; i < textInput.length; i++){
								if(textInput[i].disabled != true){
								 	return;	
								}
							}
					 	} 

					 	if(book == bookItem.author){
				 			bookItem.title = titleTextField.value;
				 			authorTextField.disabled = true;
							authorTextField.style.background = "#fff";
							if((titleTextField.disabled == true) && (dateTextField.disabled == true)){
								booksArray.push(bookItem.title)
								removeFromSelectedBooks(booksArray);
							}
							for (var i = 0; i < textInput.length; i++){
								if(textInput[i].disabled != true){
								 	return;	
								}
							}		
					 	}

					 	if(book == bookItem.date){
				 			bookItem.title = titleTextField.value;
				 			dateTextField.disabled = true;
							dateTextField.style.background = "#fff";
							if((titleTextField.disabled == true) && (authorTextField.disabled == true)){
								booksArray.push(bookItem.title)
								removeFromSelectedBooks(booksArray);
							}	
							for (var i = 0; i < textInput.length; i++){
								if(textInput[i].disabled != true){
								 	return;	
								} 
							}		
					 	}
					});
    		} else{
    			return false;
    		}

    		console.log($scope.books);
	    }

	    //removing selected checkbox values form the checkbox values array
	    removeFromSelectedBooks = function(book){
	    	angular.forEach($scope.books, function(bookItem, index){
	    		if(book == bookItem.title){
	    			var selectedBooksIndex = $scope.selectedBooks.indexOf(book);
	    			$scope.selectedBooks.splice(selectedBooksIndex, 1);
	    			var checkboxList = document.getElementsByName('bookCheckbox');
	    			if($scope.selectedBooks.length < 1){
	 					$scope.editing = false;
	    				for(var i = 0; i < checkboxList.length; i++){
	    					checkboxList[i].disabled = false;
	    					checkboxList[i].checked = false;
	    				}
	    			}
	    		}
	    	});
	    }

	    //deleting a book item
	    $scope.deleteBook = function(book){
    		if(book !== undefined && book.length > 0){
    			var confirm = $window.confirm('Are you sure you want to delete ' + book + '?');
				if(confirm){
					for(var i = 0; i < book.length; i++){
						angular.forEach($scope.books, function(value, index){
							if(book[i] == value.title){
								$scope.books.splice(index, 1);
							}
						});
					}

					$scope.editing = false;
					var checkboxList = document.getElementsByName('bookCheckbox');
	    				for(var i = 0; i < checkboxList.length; i++){
	    					checkboxList[i].disabled = false;
	    					checkboxList[i].checked = false;
	    				}

					$scope.selectedBooks = [];
				}

    		} else{
    			$window.alert('Please select a book to delete');
    		}

    		console.log($scope.books);
		}

		};



app.controller('booksController', ['$scope', 'fetchBooks', '$window', booksController])

}());