/**
 * @author Neville Dastur
 * 
 * This Javascript module is for use with the Titanium Appcelerator
 * TestFlightTi module found in the MarketPlace
 * https://marketplace.appcelerator.com/apps/4114
 * 
 * Copyright 2012 Neville Dastur

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 * 
 */

var _osname = Ti.Platform.osname;
var is_iOS = _osname === 'ipad' || _osname === 'iphone';

if(is_iOS) {
    var TF = require('com.clinsoftsolutions.testflight');
}

exports.takeOff = function(_teamToken, _testingFlag) {
	if(is_iOS) {
		TF.takeOff(_teamToken, _testingFlag);
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.setOptions = function(_args) {
	if(is_iOS) {
		if ( typeof(_args) == "object") {
			TF.setOptions(_args);
		}
		else {
			Ti.API.error("An object needs to passed to TestFlight options.");
		}
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.testException = function() {
	if(is_iOS) {
		TF.testException();
	}	
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.passCheckpoint = function(_msg) {
	if(is_iOS) {
		TF.passCheckpoint(_msg);
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.launchFeedbackView = function() {
	if(is_iOS) {
		TF.launchFeedbackView();
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.submitFeedback = function(_text) {
	if(is_iOS) {
		TF.submitFeedback(_text);
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}	
};

exports.remoteLog = function(_text) {
	if(is_iOS) {
		TF.remoteLog(_text);
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}		
};

exports.addCustomEnvironmentInformation = function(_key, _value) {
	if(is_iOS) {
		TF.addCustomEnvironmentInformation(_key, _value);
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}	
};

exports.setTesting = function() {
	if(is_iOS) {
		TF.setTesting();
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
	}
};

exports.oldUDID = function() {
	if(is_iOS) {
		return TF.oldUDID;
	}
	else {
		Ti.API.info("Testflight does not yet support platforms other than iOS.");
		return "";
	}
};
