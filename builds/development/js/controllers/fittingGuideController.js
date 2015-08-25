/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('HelpController', ['$scope', '$http', 'Customizer', 'mConfigurationOptions', 'mConfigurationRelationhips',
  function($scope, $http, Customizer, mConfigurationOptions, mConfigurationRelationhips) {

    $scope.updateBackground = function($event){
      console.log('element data: '+  event.currentTarget.name + '/' + event.currentTarget.value);
    }
    
    var product, relationships, clubAttributes, questions;
    //get product configuration data from JSON file
    $http.get('js/product.json').success(function(data) {
      $scope.configValues = mConfigurationOptions.getProduct(data);
      product = data;
      
      //get product relationship data from JSON file
      $http.get('js/relationships.json').success(function(data) { 
        $scope.attributeValues = mConfigurationRelationhips.getRelationships(data);
        relationships = data;
        //using jQuery, combine product and relationships
        $().customizerRelationships(product, relationships);
        var configData = angular.fromJson($().customizerRelationships.getRelationships());  
        angular.forEach(configData, function(key, value) {
          //add the clubAttributes and questions to the $scope
          if(value === 'clubAttributes')
            clubAttributes = key;
          else if(value === 'questions')
            questions = key;
        });

      });

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
      $scope.model.lieAngle = mConfigurationRelationhips.findMatch($scope.model.wrist, 'p_wristtofloor', questions, $scope.configValues.lieAngleValues);
      $scope.model.shaftLength = mConfigurationRelationhips.findMatch($scope.model.feet+'\''+$scope.model.inches+'\"', 'p_height', questions, $scope.configValues.shaftLengthValues);
      $scope.completed1 = true;
      $scope.currentStep = 2;
    }; //submitStep1

    $scope.submitStep2 = function() {
      //set the Shaft Flex based off the relationship defined in mConfigurationRelationhips
      $scope.model.shaftFlex = mConfigurationRelationhips.findMatch($scope.model.driverDistance, 'p_150yardclub', questions, $scope.configValues.shaftFlexValues);
      $scope.completed2 = true;
      $scope.currentStep = 3;
    }; //submitStep2

    $scope.submitStep3 = function() {
      //set the Grip Size based off the relationship defined in mConfigurationRelationhips
      $scope.model.gripSize = mConfigurationRelationhips.findMatch($scope.model.handLength, 'p_handlength', questions, $scope.configValues.gripSizeValues);
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