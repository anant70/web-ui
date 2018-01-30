exports.config = {
  
    //seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
    //chromeDriver: 'node_modules/protractor/selenium/chromedriver',  IEDriverServer3.4.0.zip		
    //seleniumAddress: 'http://localhost:4444/wd/hub',
  
    //Location of E2E test specs
    specs: [
    //'../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/signUpHealthFirstPageSpec.js'
	//'../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/smokeHealthFirstPageSpec.js'	 
	//'../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/smokeHealthFirstPageSpec.js'	 
    //'../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/smokeHFOrgSpec.js'
    '../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/smoke-spec-RBC.js'	 
    
    ],
	
	//Communicates directly Chrome Driver or Firefox Driver, bypassing any Selenium Server. If this is true, settings for seleniumAddress and seleniumServerJar will be ignored
	//directConnect: true,
	
	//Sauce Labs - While using sauce, comment the seleniumAddress
  	sauceUser: 'Cognizant_Integration',
    sauceKey: 'a90e4692-648f-49b8-9691-b372a9973c12',

    // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    version: 'latest',
	platform: 'macOS 10.13',
	name: 'RBC First Smoke Tests',
	//screenResolution:'1024x768',
	//'time-zone': 'Detroit',
	// maxSessions: 2,
	//shardTestFiles: true,
    //maxInstances: 2
	
	chromeOptions: {
		//args: ['no-sandbox', '--start-fullscreen']
		//args: ['no-sandbox','headless']
		//args: ['no-sandbox']
		args: ['no-sandbox', '--start-maximized']
	}
	
	//proxy: {
      //proxyType: "MANUAL"
    //}	
  },
  
  jasmineNodeOpts: {
	  defaultTimeoutInterval: 2500000,
	  isVerbose: true,
	  showColors: true
  },
  
  //baseUrl: 'https://www.homedepot.com/',

  // testing framework, jasmine is the default
  framework: 'jasmine2',
  
  onPrepare: function() {
	    var jasmineReporters = require('jasmine-reporters');
	    
	    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	        consolidateAll: true,
	        savePath: '../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/testresults',
	        filePrefix: 'xmloutput'
	    }));
  }
};
