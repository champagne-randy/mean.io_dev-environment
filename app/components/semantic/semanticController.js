angular.module('semanticController', [])
	.controller('semanticController', ['$scope', function($scope) {
    	$scope.tagline = 'Hellz yeah. Vive la Semantique!';   
    	$scope.updateActive = function(event) {
    		angular.element( document.querySelector( '.active' )).removeClass('active');
			$( event.target ).addClass('active'); 
    	};
	}]);