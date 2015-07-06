tgwClubCustomizer.controller('SpecsController', 
  function($scope, $http) {

  $http.get('js/product.json').success(function(data) {
    $scope.product = data;
    console.log(data);
  });
  
  $scope.addToCart = function() {
    console.log('Add to cart with scope variables: '+$scope);
  }; //addToCart


}); //SpecsController