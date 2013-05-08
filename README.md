TestFlightTiJS
==============

Common JS module to use with the paid for Titanium Marketplace module

Found at [https://marketplace.appcelerator.com/apps/4114](https://marketplace.appcelerator.com/apps/4114)

The idea behind this module is to allow all the TestFlight calls to be left in place for an android app too.
In essence this module does the test for iOS before calling the relevant TestFlight function. Once TestFlight release
the Android SDK we will make an Android module too and you probably won't need this.

**Example use:**

Copy the testflightjs.js file into the Resource directory

    var TF = require('testflightjs');
    TF.setTesting();	// Remove in release, otherwise app will be REJECTED
    TF.takeOff("__REPLACE WITH YOUR TEAM TOKEN __");

Note you no longer need the `var TF = require('com.clinsoftsolutions.testflight');` line

Then use:

    TF.passCheckpoint("A checkpoint was passed");

