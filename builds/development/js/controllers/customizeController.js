/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('SpecsController', ['$scope', '$http', 'mConfigurationOptions',
  
  function($scope, $http, mConfigurationOptions) {

    //get product configuration data from JSON file
    $http.get('js/product.json').success(function(data) {
      $scope.configValues = mConfigurationOptions.getProduct(data);
    }); 
    
    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

    //using the JSON string passed in, get the property for the Attribute and return the String value
    $scope.findAttribute = function (attrJSON){
    	return angular.fromJson(attrJSON);
    };

  }]);