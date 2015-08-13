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
    	var x_attribute = angular.fromJson(attrJSON);
    	if(attrJSON){
    		attr = new Attribute(x_attribute.sequence, x_attribute.value, x_attribute.field3, x_attribute.identifier, x_attribute.uniqueID);
    		return attr;
    	}
    };

    var Attribute = function(sequence, value, field3, identifier, uniqueID){
        this.sequence = sequence;
        this.value = value;
        this.field3 = field3;
        this.identifier = identifier;
        this.uniqueID = uniqueID;
    };

  }]);