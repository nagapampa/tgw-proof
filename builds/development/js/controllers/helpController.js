tgwClubCustomizer.controller('HelpController', 
  function($scope, $location) {

  $scope.feet = ['4','5','6','7'];
  $scope.inches = ['0','1','2','3','4','5','6','7','8','9','10','11'];
  
  $scope.submitStep1 = function() {
    console.log('Going to step 2 with variables: '+$scope);
    $location.path('/help/2');
  }; //

  $scope.submitStep2 = function() {
    console.log('Going to step 3 with variables: '+$scope);
    $location.path('/help/3');
  }; //submitStep2


}); //HelpController