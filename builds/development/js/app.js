var tgwClubCustomizer = angular.module ('tgwClubCustomizer',  ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

tgwClubCustomizer.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/help', {
      templateUrl: 'views/help.html'
    }).
    when('/specs', {
      templateUrl: 'views/specs.html'
    }).
    when('/intro', {
      templateUrl: 'views/intro.html'
    }).
    otherwise({
      redirectTo: '/intro'
    });
}]);