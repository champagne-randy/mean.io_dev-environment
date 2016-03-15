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