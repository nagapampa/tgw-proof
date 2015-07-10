tgwClubCustomizer.controller('SpecsController', 
  function($scope, $http) {

  $http.get('js/product.json').success(function(data) {
    $scope.product = data;
    $scope.attributes = data.catalogEntryView[0].x_attributes;

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

  });
  
  $scope.addToCart = function() {
    console.log('Add to cart with scope variables: '+$scope);
  }; //addToCart


}); //SpecsController