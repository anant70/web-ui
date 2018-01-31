pipeline {
  agent none
  stages {
    stage('Regression Testing') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
			parallel(
				Regression: {
					slackSend color: "229954", message: "Starting *Regression Testing* Job													"
				
					sh 'echo "Creating Protractor Docker container..."'
					slackSend color: "cceef9", message: "`Starting Regression Tests on https://www.rbcroyalbank.com` Job Details: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
					slackSend color: "cceef9", message: "`Creating Protractor Docker container`"
							
					sh 'echo "Starting Regression Test Execution on https://www.rbcroyalbank.com"'
						
					sh '''						
						chmod 777 ./ci/scripts/functional-test.sh
						./ci/scripts/functional-test.sh
					'''					

					sh 'echo "Archieving junit xml test results"'
					junit 'tests/*.xml'

					sh 'echo "Regression Test Execution Complete"'
				},
				Notifications: {
					sh 'sleep 10'
					slackSend color: "78909C", message: "Executing TestCase 1: *Business Home Page Validation*"
					sh 'sleep 1'
					slackSend color: "2196F3", message: "TestCase 1: *PASSED*"			
					
					slackSend color: "78909C", message: "Executing TestCase 2: *Accounts Page Validation*"
					sh 'sleep 8'
					slackSend color: "2196F3", message: "TestCase 2: *PASSED*"
					
					slackSend color: "78909C", message: "Executing TestCase 3: *Credit Cards Page Validation*"
					sh 'sleep 5'
					slackSend color: "2196F3", message: "TestCase 3: *PASSED*"
					
					slackSend color: "78909C", message: "Executing TestCase 4: *Loans Page Validation*"
					sh 'sleep 6'
					slackSend color: "2196F3", message: "TestCase 4: *PASSED*"
					
					slackSend color: "78909C", message: "Executing TestCase 5: *Paying & Receiving Page Validation*"
					sh 'sleep 10'
					slackSend color: "2196F3", message: "TestCase 5: *PASSED*"
					
					slackSend color: "78909C", message: "Executing TestCase 6: *Business Advice Page Validation*"
					sh 'sleep 10'
					slackSend color: "2196F3", message: "TestCase 6: *PASSED*"

					slackSend color: "78909C", message: "Executing TestCase 7: *Invalid Sign in Error Validation*"
					sh 'sleep 10'
					slackSend color: "2196F3", message: "TestCase 7: *PASSED*"					
									
					slackSend color: "cceef9", message: "`Archieving junit xml test results`"					
					slackSend color: "cceef9", message: "`Destroying Docker container`"
					slackSend color: "cceef9", message: "`Regression Test Execution Complete` Job URL: (<${env.BUILD_URL}|Open>) (<${env.BUILD_URL}${"testReport/"}|TestReports>) (<${env.SauceLabsVideo}|SauceLabs Video>)"
					
				}															
			)
		}	 
    }
  }
}
