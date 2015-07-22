var CustomizerService = angular.module('CustomizerService', [])
.service('Customizer', function () {
    
    var feet = '';
    var inches = '';
    var wrist = '';
    var wrist2 = '';
    var dexterity = 'right';
    var gender = 'male';
    var driverDistance = '';
    var handLength = '';
    var longestFinger = '';
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
        },
        getWrist: function () {
            return wrist;
        },
        setWrist: function (value) {
            wrist = value;
        },
        getWrist2: function () {
            return wrist2;
        },
        setWrist2: function (value) {
            wrist2 = value;
        },
        getDexterity: function () {
            return dexterity;
        },
        setDexterity: function (value) {
            dexterity = value;
        },
        getGender: function () {
            return gender;
        },
        setGender: function (value) {
            gender = value;
        },
        getDriverDistance: function () {
            return driverDistance;
        },
        setDriverDistance: function (value) {
            driverDistance = value;
        },
        getHandLength: function () {
            return handLength;
        },
        setHandLength: function (value) {
            handLength = value;
        },
        getLongestFinger: function () {
            return longestFinger;
        },
        setLongestFinger: function (value) {
            longestFinger = value;
        }
    };
});