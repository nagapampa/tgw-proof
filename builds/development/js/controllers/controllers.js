/* Controllers */

var tgwCustomizerControllers = angular.module('tgwCustomizerControllers', []);

tgwCustomizerControllers.controller('SpecsController', ['$scope', '$http', 'Customizer', 'mConfigurationOptions',
  
  function($scope, $http, Customizer, mConfigurationOptions) {

    //get product data from JSON file
    $http.get('js/product.json').success(function(data) {
      //populate configuration values
      $scope.configValues = mConfigurationOptions.getProduct(data);
    }); 
    
    $scope.addToCart = function() {
      console.log('Add to cart');
    }; //addToCart

  }]);

tgwCustomizerControllers.controller('HelpController', ['$scope', '$location', '$http', 'Customizer', 'mConfigurationOptions',
  function($scope, $location, $http, Customizer, mConfigurationOptions) {

    $scope.updateBackground = function($event){
      console.log('element name '+  event.currentTarget.name);
      console.log('element value '+  event.currentTarget.value);
    }

    //get product data from JSON file
    $http.get('js/product.json').success(function(data) {
      //populate configuration values
      $scope.configValues = mConfigurationOptions.getProduct(data);

      //preset values
      $scope.helpPage = 'true';

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
      $scope.driverDistance = Customizer.getDriverDistance();
      $scope.handLength = Customizer.getHandLength();
      $scope.longestFinger = Customizer.getLongestFinger();
      $scope.shaftType = Customizer.getShaftType();
      $scope.trajectory = Customizer.getTrajectory();

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
      Customizer.setClubs($scope.clubs);
      $location.path('/help/2');
    }; //submitStep1

    $scope.submitStep2 = function() {
      Customizer.setShaftType($scope.shaftType);
      Customizer.setDriverDistance($scope.driverDistance);
      Customizer.setTrajectory($scope.trajectory);
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