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
            angular.forEach(data.catalogEntryView[0].x_attributes, function(x_attributes) {
                if (x_attributes.identifier == 'p_shaftType') 
                    shaftTypeValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_shaftFlex') 
                    shaftFlexValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_lieAngle') 
                    lieAngleValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_shaftLength') 
                    shaftLengthValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_grip') 
                    gripValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_gripSize') 
                    gripSizeValues.push(x_attributes);
                else if (x_attributes.identifier == 'p_clubs') 
                    clubsValues.push(x_attributes);
            });   

            product = new Product(data, shaftTypeValues, shaftFlexValues, lieAngleValues, shaftLengthValues, gripValues, gripSizeValues, clubsValues); 
            return product;
        }
    };
            
});