/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('HelpController', ['$scope', '$location', '$http', 'Customizer', 'mConfigurationOptions', 'mConfigurationRelationhips',
  function($scope, $location, $http, Customizer, mConfigurationOptions, mConfigurationRelationhips) {

    $scope.updateBackground = function($event){
      console.log('element data: '+  event.currentTarget.name + '/' + event.currentTarget.value);
    }

    //get product relationship data from JSON file
    $http.get('js/relationships.json').success(function(data) { 
      $scope.attributeValues = mConfigurationRelationhips.getRelationships(data);
    });

    //get product configuration data from JSON file
    $http.get('js/product.json').success(function(data) {
      $scope.configValues = mConfigurationOptions.getProduct(data);
    });

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

    //set variable to determine Help vs. Customize page for sub-navigation
    $scope.helpPage = 'true';

    //set static dropdown values
    $scope.feetMeasurement = ['4','5','6'];
    $scope.inchesMeasurement = ['0','1','2','3','4','5','6','7','8','9','10','11'];
    $scope.trajectoryMeasurement = ['Low', 'Low-Mid', 'Mid', 'Mid-High', 'High'];
    $scope.longestFingerMeasurement =['2', '3', '4', '5'];

    //set the Singleton for the model to persist across steps
    $scope.model = Customizer;
    
    $scope.submitStep1 = function() {
      //set the Lie Angle based off the relationship defined in mConfigurationRelationhips
      $scope.model.lieAngle = mConfigurationRelationhips.getLieAngle($scope.model.wrist)
      $location.path('/help/2');
    }; //submitStep1

    $scope.submitStep2 = function() {
      //set the Lie Angle based off the relationship defined in mConfigurationRelationhips
      $scope.model.shaftFlex = mConfigurationRelationhips.getShaftFlex($scope.model.driverDistance)
      $location.path('/help/3');
    }; //submitStep2

    $scope.submitStep3 = function() {
      //set the Grip Size based off the relationship defined in mConfigurationRelationhips
      $scope.model.gripSize = mConfigurationRelationhips.getGripSize($scope.model.handLength)
      $location.path('/helpReview');
    }; //submitStep3

    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    }; //sub-navigation method used to track page location
    
  }]);