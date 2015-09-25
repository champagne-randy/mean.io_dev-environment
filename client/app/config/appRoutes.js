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