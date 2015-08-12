var tgwClubCustomizer = angular.module ('tgwClubCustomizer',  ['ngRoute']);

var tgwClubCustomizer = angular.module('tgwClubCustomizer', [
  'ngRoute',
  'tgwCustomizerControllers',
  'CustomizerService',
  'mConfigurationOptions', 
  'mConfigurationRelationhips'
]);

tgwClubCustomizer.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/specs', {
      templateUrl: 'views/specs.html',
      controller:  'SpecsController'
    }).
    otherwise({
      redirectTo: '/specs'
    });
}]);