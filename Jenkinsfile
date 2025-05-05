pipeline {
    agent { label 'agent-1' }

    environment {
        PLAYWRIGHT_HTML_REPORT = 'playwright-report'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm ci'
            }
        }

        stage('Run Single Test Spec') {
            steps {
                echo 'Running login.spec.js using Playwright...'
                bat 'npx playwright test tests/login.spec.js --reporter=html'
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
