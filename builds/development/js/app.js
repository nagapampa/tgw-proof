var tgwClubCustomizer = angular.module ('tgwClubCustomizer',  ['ngRoute']);

var tgwClubCustomizer = angular.module('tgwClubCustomizer', [
  'ngRoute',
  'tgwCustomizerControllers',
  'CustomizerService'
]);

tgwClubCustomizer.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/help', {
      templateUrl: 'views/help.html',
      controller: 'HelpController'
    }).
    when('/specs', {
      templateUrl: 'views/specs.html',
      controller:  'SpecsController'
    }).when('/helpReview', {
      templateUrl: 'views/specs.html',
      controller:  'HelpController'
    }).
    when('/intro', {
      templateUrl: 'views/intro.html'
    }).
    when('/help/2', {
      templateUrl: 'views/help2.html',
      controller: 'HelpController'
    }).
    when('/help/3', {
      templateUrl: 'views/help3.html',
      controller: 'HelpController'
    }).
    when('/help/4', {
      templateUrl: 'views/help4.html',
      controller: 'HelpController'
    }).
    otherwise({
      redirectTo: '/intro'
    });
}]);