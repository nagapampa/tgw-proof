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
    }).
    otherwise({
      redirectTo: '/fittingGuide'
    });
}]);