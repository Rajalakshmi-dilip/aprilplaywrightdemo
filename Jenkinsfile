pipeline {
    agent { label 'agent-1' }

    environment {
        // Optionally define Node or other environment variables here
        PLAYWRIGHT_HTML_REPORT = 'playwright-report'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm ci'
            }
        }

        stage('Run Single Test Spec') {
            steps {
                echo 'Running validLogin.spec.js using Playwright...'
                sh 'npx playwright test tests/validLogin.spec.js --reporter=html'
            }
        }

        stage('Archive Report') {
            steps {
                echo 'Archiving Playwright HTML report...'
                publishHTML (target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
