angular.module('sampleApp', [
							'ngRoute', 
							'appRoutes', 
							'homeController', 
							'nerdController', 
							'nerdService'
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

 