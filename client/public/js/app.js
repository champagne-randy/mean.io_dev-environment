angular.module('sampleApp', [
							'ngRoute', 
							'appRoutes', 
							'homeController', 
							'nerdController', 
							'nerdService',
							'semanticController'
							]
				);
angular.module('appRoutes', [])
    .config([
            '$routeProvider', 
            '$locationProvider', 
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: '/views/homeView.html',
                        controller: 'homeController'
                    })
                    .when('/nerds', {
                        templateUrl: '/views/nerdView.html',
                        controller: 'nerdController'
                    })
                    .when('/semantic', {
                        templateUrl: '/views/semanticView.html',
                        controller: 'semanticController'
                    });
                $locationProvider.html5Mode(true); 
            }
            ]);
angular.module('homeController', [])
	.controller('homeController', ['$scope', function($scope) {
    	$scope.tagline = 'To the moon and back! Then back again bruh ^_^.';   
	}]);
angular.module('nerdController', [])
	.controller('nerdController', ['$scope', function($scope) {
    	$scope.tagline = 'Nothing beats a pocket protector!';
	}]);  

	
angular.module('nerdService', [])
    .factory('Nerd', ['$http', function($http) {
        return {
            // call to get all nerds
            get : function() {
                return $http.get('/api/nerds');
            },
            // these will work when more API routes are defined on the Node side of things
            // call to POST and create a new nerd
            create : function(nerdData) {
                return $http.post('/api/nerds', nerdData);
            },
            // call to DELETE a nerd
            delete : function(id) {
                return $http.delete('/api/nerds/' + id);
            }
        };
    }]);

 
angular.module('semanticController', [])
	.controller('semanticController', ['$scope', function($scope) {
    	$scope.tagline = 'Hellz yeah. Vive la Semantique!';   
    	$scope.updateActive = function() {

    	};
	}]);
/*
	ToDo:
	- port this code into an agular controller as ng-click function
*/

$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});

	$('.accordion').accordion();

/*
	// This code will activate modal on submit w/o validation
	$('.submit').click(function(){
		$('.ui.modal').modal('show');
		// debugger;
	});
*/


	var validationObj = {
		firstName: {
			identifier  : 'first-name',
			rules: [
			{
				type   : 'empty',
				prompt : 'Please enter your first name'
			}
			]
		},
		lastName: {
			identifier  : 'last-name',
			rules: [
			{
				type   : 'empty',
				prompt : 'Please enter your last name'
			}
			]
		},
		username: {
			identifier : 'username',
			rules: [
			{
				type   : 'empty',
				prompt : 'Please enter a username'
			}
			]
		},
		password: {
			identifier : 'password',
			rules: [
			{
				type   : 'empty',
				prompt : 'Please enter a password'
			},
			{
				type   : 'length[6]',
				prompt : 'Your password must be at least 6 characters'
			},
			{
				type: 'containsNumbers',
				prompt : 'Need a number'
			}
			]
		}
	};

	// http://semantic-ui.com/behaviors/form.html for details
	$.fn.form.settings.rules.containsNumbers = function(value){
		var regex = new RegExp("[0-9]");
		return regex.test(value);
	};

	$('.form').form(validationObj, {
		inline: false,	// this allows you to add the validation inline
		onSuccess: function(){
			$('.ui.modal').modal('show');
		} 
	});

});

