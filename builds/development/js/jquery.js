(function( $ ) {

	var x_attributes;
	var relationshipObject;
	
	var clubAttributes = {
		"p_shaftflex" : [
		
		],
		
		"p_grip" : [
		
		],
		
		"p_shaftlength" : [
		
		],
		
		"p_lieangle" : [
		
		]
		
		
	};
	
	var questions = {
		"p_150yardclub" : {
			"associatedAttribute" : "p_shaftflex",
			"values" : {}
		},
		"p_driverdistance" : {
			"associatedAttribute" : "p_shaftflex",
			"values" : {}
		},
		"p_handlength" : {
			"associatedAttribute" : "p_grip",
			"values" : {}
		},
		"p_height" : {
			"associatedAttribute" : "p_shaftlength",
			"values" : {}
		},
		"p_wristtofloor" : {
			"associatedAttribute" : "p_lieangle",
			"values" : {}
		}
	}

	$.fn.customizerRelationships = function(product, relationships){
		x_attributes = product.catalogEntryView[0].x_attributes;
		relationshipObject = relationships.catalogEntryView[0].x_attributeRelationship[0];
		
		populateQuestionsArray();
	}
	
	$.fn.customizerRelationships.getRelationships = function(){
		return {
			"clubAttributes" : clubAttributes,
			"questions" : questions
		};
	}

	function populateQuestionsArray(){
		populateHeight();
		populateYardClub();
		populateDriverDistance();
		populateHandLength();
		populateWristToFloor();
	}

	function populateHeight(){
		var heightBreakpoints = [
			"4'10\"",
			"5'1\"",
			"5'3\"",
			"5'6\"",
			"5'8\"",
			"6'1\"",
			"6'3\"",
			"6'5\"",
			"6'8\""	
		];
	
		var currentValue = relationshipObject["p_height"]["6'8\""][questions["p_height"]["associatedAttribute"]][0];
	
		for(var feet=7; feet >= 4; feet--){
			for(var inches=12; inches >= 0; inches--){
				var heightString = feet+"'"+inches+"\"";
			
				if(heightBreakpoints.indexOf(heightString) > -1){
					currentValue = 
						relationshipObject["p_height"][heightString][questions["p_height"]
										  ["associatedAttribute"]][0];
										  
						clubAttributes["p_shaftlength"].push(currentValue);
				}
			
				questions["p_height"]["values"][heightString] = currentValue;
			}
		}
	}

	function populateYardClub(){
		var clubOptions = [
			"hybrid",
			"3/4 iron",
			"5 iron",
			"6 iron",
			"7 iron",
			"8 iron",
			"9 iron",
			"PW"
		];
	
		for(var i = 0; i < clubOptions.length; i++){
			questions["p_150yardclub"]["values"][clubOptions[i]] = 
				relationshipObject["p_150yardclub"][clubOptions[i]][questions["p_150yardclub"]
							["associatedAttribute"]][0];
			clubAttributes["p_shaftflex"].push(questions["p_150yardclub"]["values"][clubOptions[i]]);
		}
	}

	function populateDriverDistance(){
		var driveDistancesOptions = [
			"0",
			"180",
			"210",
			"240",
			"270"
		];
	
		for(var i = 0; i < driveDistancesOptions.length; i++){
			questions["p_driverdistance"]["values"][driveDistancesOptions[i]] = 
				relationshipObject["p_driverdistance"][driveDistancesOptions[i]][questions["p_driverdistance"]
							["associatedAttribute"]][0];
			clubAttributes["p_shaftflex"].push(questions["p_driverdistance"]["values"][driveDistancesOptions[i]]);
		}
	}

	function populateHandLength(){
		var handLengthOptions = [
			"5\"",
			"6\"",
			"7\"",
			"8\"",
			"9\"",
			"10\""
		];
	
		for(var i = 0; i < handLengthOptions.length; i++){
			questions["p_handlength"]["values"][handLengthOptions[i]] = 
				relationshipObject["p_handlength"][handLengthOptions[i]]["p_gripsize"][0];
				
			clubAttributes["p_grip"].push(questions["p_handlength"]["values"][handLengthOptions[i]]);
		}
	}

	function populateWristToFloor(){
		var wristBreakpoints = [
			"29\"",
			"32\"",
			"33\"",
			"34\"",
			"35\"",
			"36\"",
			"37\"",
			"39\""
		
		];
	
		var currentValue = relationshipObject["p_wristtofloor"]["39\""][questions["p_wristtofloor"]["associatedAttribute"]][0];
	
			for(var inches=39; inches >= 24; inches--){
				var wristString = inches + "\"";
			
				if(wristBreakpoints.indexOf(wristString) > -1){
					currentValue = 
						relationshipObject["p_wristtofloor"][wristString][questions["p_wristtofloor"]
										  ["associatedAttribute"]][0];
						clubAttributes["p_lieangle"].push(currentValue);
				}
			
				questions["p_wristtofloor"]["values"][wristString] = currentValue;
			}
	}

}( jQuery ));