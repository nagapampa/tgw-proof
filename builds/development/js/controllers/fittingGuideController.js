/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('HelpController', ['$scope', '$http', 'Customizer', 'mConfigurationOptions', 'mConfigurationRelationhips',
  function($scope, $http, Customizer, mConfigurationOptions, mConfigurationRelationhips) {

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
      return angular.fromJson(attrJSON);
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

    //set the variable to show/hide DIV steps
    $scope.currentStep = 1;
    $scope.completed1 = false;
    $scope.completed2 = false;
    $scope.completed3 = false;
    
    $scope.submitStep1 = function() {
      //set the Lie Angle based off the relationship defined in mConfigurationRelationhips
      $scope.model.lieAngle = mConfigurationRelationhips.findMatch($scope.attributeValues.wristToFloorValues, $scope.model.wrist, $scope.configValues.lieAngleValues);
      $scope.completed1 = true;
      $scope.currentStep = 2;
    }; //submitStep1

    $scope.submitStep2 = function() {
      //set the Lie Angle based off the relationship defined in mConfigurationRelationhips
      $scope.model.shaftFlex = mConfigurationRelationhips.findMatch($scope.attributeValues.driverDistanceValues, $scope.model.driverDistance, $scope.configValues.shaftFlexValues);
      $scope.completed2 = true;
      $scope.currentStep = 3;
    }; //submitStep2

    $scope.submitStep3 = function() {
      //set the Grip Size based off the relationship defined in mConfigurationRelationhips
      $scope.model.gripSize = mConfigurationRelationhips.findMatch($scope.attributeValues.handLengthValues, $scope.model.handLength, $scope.configValues.gripSizeValues);
      $scope.completed3 = true;
      $scope.currentStep = 4;
    }; //submitStep3

    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

    $scope.navigate = function(stepNumber) {
      $scope.currentStep = stepNumber;
    }//navigation to toggle step DIVs
    
  }]);