tgwClubCustomizer.controller('HelpController', 
  function($scope, $location, $http) {

  $scope.feetMeasurement = ['4','5','6','7'];
  $scope.inchesMeasurement = ['0','1','2','3','4','5','6','7','8','9','10','11'];

  $http.get('js/product.json').success(function(data) {
    $scope.product = data;
    console.log(data);
  });
  
  $scope.submitStep1 = function() {
    console.log($scope.profile.feet);
    $location.path('/help/2');
  }; //

  $scope.submitStep2 = function() {
    $location.path('/help/3');
  }; //submitStep2

  $scope.submitStep3 = function() {
    $location.path('/help/4');
  }; //submitStep3

  $scope.addToCart = function() {
    console.log('Add to cart');
  }; //addToCart


}); //HelpController