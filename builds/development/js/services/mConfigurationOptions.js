var mConfigurationOptions = angular.module('mConfigurationOptions', [])
.service('mConfigurationOptions', function ($http) {

    //create a Product class
    var Product = function (product, shaftTypeValues, shaftFlexValues, lieAngleValues, shaftLengthValues, gripValues, gripSizeValues, clubsValues) {
        this.product = product;
        this.shaftTypeValues = shaftTypeValues;
        this.shaftFlexValues = shaftFlexValues;
        this.lieAngleValues = lieAngleValues;
        this.shaftLengthValues = shaftLengthValues;
        this.gripValues = gripValues;
        this.gripSizeValues = gripSizeValues;
        this.clubsValues = clubsValues;
        this.dexterity = 'right';
    };

    var product;

    //create an Attribute class
    var Attribute = function(sequence, value, field3, identifier, uniqueID){
        this.sequence = sequence;
        this.value = value;
        this.field3 = field3;
        this.identifier = identifier;
        this.uniqueID = uniqueID;
    };

    //using the JSON string passed in, loop through the 'values' array and create new Attribute objects
    var setAttributeArray = function (attrs){
        var tempAttrs = [];
        angular.forEach(attrs.values, function(x_attribute) {
            attr = new Attribute(x_attribute.sequence, x_attribute.value, x_attribute.field3, x_attribute.identifier, x_attribute.uniqueID);
            tempAttrs.push(attr);
        }); 
        return tempAttrs;
    };

    //declare drop down values arrays
    var shaftTypeValues = [];
    var shaftFlexValues = [];
    var lieAngleValues = [];
    var shaftLengthValues = [];
    var gripValues = [];
    var gripSizeValues = [];
    var clubsValues = [];
    var dexterity = 'right';

    return {
        getProduct: function (data) {
            //reset to empty to prevent duplicate values
            shaftTypeValues = [];
            shaftFlexValues = [];
            lieAngleValues = [];
            shaftLengthValues = [];
            gripValues = [];
            gripSizeValues = [];
            clubsValues = [];

            angular.forEach(data.catalogEntryView[0].x_attributes, function(x_attributes) {
                if (x_attributes.identifier == 'p_shaftType') 
                    shaftTypeValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_shaftFlex') 
                    shaftFlexValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_lieAngle') 
                    lieAngleValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_shaftLength') 
                    shaftLengthValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_grip') 
                    gripValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_gripSize') 
                    gripSizeValues = setAttributeArray(x_attributes);
                else if (x_attributes.identifier == 'p_clubs') 
                    clubsValues = setAttributeArray(x_attributes);
            });   

            product = new Product(data, shaftTypeValues, shaftFlexValues, lieAngleValues, shaftLengthValues, gripValues, gripSizeValues, clubsValues); 
            return product;
        }
    };
            
});