/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('SpecsController', ['$scope', '$http', 'Customizer',
  
  function($scope, $http, Customizer) {
    
    $http.get('js/product.json').success(function(data) {
      $scope.product = data;
      $scope.attributes = data.catalogEntryView[0].x_attributes;

      // get arrays of attribute types
      $scope.shaftTypeValues = [];
      $scope.shaftFlexValues = [];
      $scope.lieAngleValues = [];
      $scope.shaftLengthValues = [];
      $scope.gripValues = [];
      $scope.gripSizeValues = [];
        angular.forEach($scope.attributes, function(x_attributes) {
            if (x_attributes.identifier == 'p_InkColor') 
                $scope.shaftTypeValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.shaftFlexValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.lieAngleValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.shaftLengthValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.gripValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.gripSizeValues.push(x_attributes);

        });

        $scope.dexterity = 'right';
        $scope.clubs = '9.0';

    });
    
    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

  }]);

tgwCustomizerControllers.controller('HelpController', ['$scope', '$location', '$http', 'Customizer',
  function($scope, $location, $http, Customizer) {

    //get the data from the .JSON
    $http.get('js/product.json').success(function(data) {
      $scope.product = data;

      $scope.attributes = data.catalogEntryView[0].x_attributes;

      // get arrays of attribute types
      $scope.shaftTypeValues = [];
      $scope.shaftFlexValues = [];
      $scope.lieAngleValues = [];
      $scope.shaftLengthValues = [];
      $scope.gripValues = [];
      $scope.gripSizeValues = [];
        angular.forEach($scope.attributes, function(x_attributes) {
            if (x_attributes.identifier == 'p_InkColor') 
                $scope.shaftTypeValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.shaftFlexValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.lieAngleValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.shaftLengthValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.gripValues.push(x_attributes);
            else if (x_attributes.identifier == 'p_Message') 
                $scope.gripSizeValues.push(x_attributes);

        });

      //preset values
      $scope.helpPage = 'true';
      $scope.clubs = '9.0';

      //set static dropdown values
      $scope.feetMeasurement = ['4','5','6','7'];
      $scope.inchesMeasurement = ['0','1','2','3','4','5','6','7','8','9','10','11'];

      $scope.wristMeasurement = ['24','25','26','27'];
      $scope.wrist2Measurement = ['0', '1/4', '1/2', '3/4'];

      $scope.trajectoryMeasurement = ['Low', 'Low-Mid', 'Mid', 'Mid-High', 'High'];

      $scope.handLengthMeasurement =['5', '6', '7', '8', '9'];
      $scope.longestFingerMeasurement =['2', '3', '4', '5'];

      //set Singleton values
      $scope.feet = Customizer.getFeet();
      $scope.inches = Customizer.getInches();
      $scope.wrist = Customizer.getWrist();
      $scope.wrist2 = Customizer.getWrist2();
      $scope.dexterity = Customizer.getDexterity();
      $scope.gender = Customizer.getGender();
      $scope.driverDistance = Customizer.getDriverDistance();
      $scope.handLength = Customizer.getHandLength();
      $scope.longestFinger = Customizer.getLongestFinger();

        //set question for club type
        if(true){
          $scope.distanceQuestion = 'What iron do you hit 150 yards?';
        }else{
          $scope.distanceQuestion = 'How far do you hit your driver?';
        }
    });
    
    $scope.submitStep1 = function() {
      Customizer.setFeet($scope.feet);
      Customizer.setInches($scope.inches);
      Customizer.setWrist($scope.wrist);
      Customizer.setWrist2($scope.wrist2);
      Customizer.setDexterity($scope.dexterity);
      Customizer.setGender($scope.gender);
      $location.path('/help/2');
    }; //submitStep1

    $scope.submitStep2 = function() {
      Customizer.setDriverDistance($scope.driverDistance);
      $location.path('/help/3');
    }; //submitStep2

    $scope.submitStep3 = function() {
      Customizer.setHandLength($scope.handLength);
      Customizer.setLongestFinger($scope.longestFinger);
      $location.path('/helpReview');
    }; //submitStep3

    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };
    
  }]);
