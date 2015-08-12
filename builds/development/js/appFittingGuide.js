var tgwFittingGuide = angular.module ('tgwFittingGuide',  ['ngRoute']);

var tgwFittingGuide = angular.module('tgwFittingGuide', [
  'ngRoute',
  'tgwCustomizerControllers',
  'CustomizerService',
  'mConfigurationOptions', 
  'mConfigurationRelationhips'
]);

tgwFittingGuide.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/fittingGuide', {
      templateUrl: 'views/help.html',
      controller: 'HelpController'
    }).when('/helpReview', {
      templateUrl: 'views/specs.html',
      controller:  'HelpController'
    }).
    when('/help/2', {
      templateUrl: 'views/help2.html',
      controller: 'HelpController'
    }).
    when('/help/3', {
      templateUrl: 'views/help3.html',
      controller: 'HelpController'
    }).
    otherwise({
      redirectTo: '/fittingGuide'
    });
}]);