pipeline {
    agent { label 'agent-1' }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // or 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test tests/validLogin.spec.js'
            }
        }

        stage('Generate HTML Report') {
            steps {
                sh 'npx playwright show-report --output=playwright-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*.*', fingerprint: true
            publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
    }
}
