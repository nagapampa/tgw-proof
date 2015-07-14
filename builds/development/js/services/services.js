var CustomizerService = angular.module('CustomizerService', [])
.service('Customizer', function () {
    
    var feet = '';
    var inches = '';
    return {
        getFeet: function () {
            return feet;
        },
        setFeet: function (value) {
            feet = value;
        },
        getInches: function () {
            return inches;
        },
        setInches: function (value) {
            inches = value;
        }
    };
});