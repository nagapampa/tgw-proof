var mConfigurationRelationhips = angular.module('mConfigurationRelationhips', [])
.service('mConfigurationRelationhips', function ($http) {  

    //create an Relationship class
    var Attribute = function(attrName, attrValue, arrRelationships){
        this.attrName = attrName;
        this.attrValue = attrValue;
        this.arrRelationships = arrRelationships;
    };  

    var attributes = [];

    //create a Attributes class to hold all attribute value drop-downs
    var AttributeRelationships = function (wristToFloorValues, handLengthValues, heightValues, driverDistanceValues, yardClubValues) {
        this.wristToFloorValues = wristToFloorValues;
        this.handLengthValues = handLengthValues;
        this.heightValues = heightValues;
        this.driverDistanceValues = driverDistanceValues;
        this.yardClubValues = yardClubValues;
    };

    var attributeRelationships;

    //create an Relationship class
    var Relationship = function(attrName, attrValue){
        this.attrName = attrName;
        this.attrValue = attrValue;
    };  

    //declare drop down values arrays
    var wristToFloorValues = []; //p_wristtofloor
    var handLengthValues = []; //p_handlength
    var heightValues = []; //p_height
    var driverDistanceValues = []; //p_driverdistance
    var yardClubValues = []; //p_150yardclub

    //declare value determined by relationships defined
    var matchedAttribute;

    return {
        getRelationships: function (data) {
            //reset to empty to prevent duplicate values
            wristToFloorValues = [];
            handLengthValues = [];
            heightValues = [];
            driverDistanceValues = [];
            yardClubValues = [];

            angular.forEach(data.catalogEntryView[0].x_attributeRelationship, function(x_attributeRelationship) {
                angular.forEach(x_attributeRelationship, function(value, key) {
                    attrName = key; //Attribute name
                    angular.forEach(value, function(value2, key) {
                        attrValue = key; // Attribute value
                        relationships = [];
                        angular.forEach(value2, function(value3, key) {
                            relationship = new Relationship(key, value3); //Relationship object
                            relationships.push(relationship);
                        }); 
                        attribute = new Attribute(attrName, attrValue, relationships);  
                        attributes.push(attribute);
                        switch (attrName) {
                            case "p_wristtofloor":
                                wristToFloorValues.push(attribute);
                            break;
                            case "p_handlength":
                                handLengthValues.push(attribute);
                            break;
                            case "p_height":
                                heightValues.push(attribute);
                            break;
                            case "p_driverdistance":
                                driverDistanceValues.push(attribute);
                            break;
                            case "p_150yardclub":
                                yardClubValues.push(attribute);
                            break;
                        }
                    }); 
                });   
            }); 
            attributeRelationships = new AttributeRelationships(wristToFloorValues, handLengthValues, heightValues, driverDistanceValues, yardClubValues); 
            return attributeRelationships; 
        },

        findMatch: function(selectedValue, lookupQuestion, questions, configValues) {
            matchedAttribute = new Attribute('','','');
            //loop through questions and find the object that matches the selectedValue
            angular.forEach(questions, function(value, key) {
                if(key == lookupQuestion){
                    angular.forEach(value.values, function(questionValue, questionKey) {
                        if(questionKey == selectedValue){
                            matchedValue = questionValue; 
                            angular.forEach(configValues, function(value, key) {
                                if(value.value == matchedValue){
                                    matchedAttribute = value; 
                                }
                                                                 
                            }); 
                        }
                                 
                    }); 
                }                                  
            });
            console.log(matchedAttribute);
            return matchedAttribute; 
        }
    };
            
});