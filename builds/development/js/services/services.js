var CustomizerService = angular.module('CustomizerService', [])
.service('Customizer', function () {
    
    var feet = '';
    var inches = '';
    var wrist = '';
    var wrist2 = '';
    var dexterity = 'right';
    var driverDistance = '';
    var handLength = '';
    var longestFinger = '';
    var shaftType = '';
    var trajectory = '';
    var clubs = '';
    var gripType = '';
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
        },
        getShaftType: function () {
            return shaftType;
        },
        setShaftType: function (value) {
            shaftType = value;
        },
        getTrajectory: function () {
            return trajectory;
        },
        setTrajectory: function (value) {
            trajectory = value;
        },
        setClubs: function () {
            return clubs;
        },
        getClubs: function (value) {
            clubs = value;
        },
        setGripType: function () {
            return gripType;
        },
        getGripType: function (value) {
            gripType = value;
        }
    };
});