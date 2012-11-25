TestFlightTiJS
==============

Common JS module to use with paid for Titanium Marketplace module

Found at [https://marketplace.appcelerator.com/apps/4114](https://marketplace.appcelerator.com/apps/4114)

** Example use:

Copy the testflightjs.js file into the Resource directory

    var TF = require('testflightjs');
    TF.setTesting();	// Remove in release, otherwise app will be REJECTED
    TF.takeOff("__REPLACE WITH YOUR TEAM TOKEN __");

Then use:
   TF.passCheckpoint("A checkpoint was passed");

