pipeline {
    agent { label 'agent-1' }

    stages {
        stage('Notify Start') {
            steps {
                script {
                    emailext (
                        subject: "Build Started: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                        body: "Build is now running: ${env.BUILD_URL}",
                        to: 'rajalakshmi.d@optisolbusiness.com'
                    )
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci' // or 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test tests/validLogin.spec.js'
            }
        }

        stage('Generate HTML Report') {
            steps {
                bat 'npx playwright show-report --output=playwright-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*.*', fingerprint: true
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }

        success {
            emailext (
                subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Good news! Build succeeded: ${env.BUILD_URL}",
                to: 'rajalakshmi.d@optisolbusiness.com'
            )
        }

        failure {
            emailext (
                subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Oh no! Build failed: ${env.BUILD_URL}",
                to: 'rajalakshmi.d@optisolbusiness.com'
            )
        }
    }
}
