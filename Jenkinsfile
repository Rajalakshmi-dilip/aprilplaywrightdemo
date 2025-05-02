pipeline {
        agent { label 'agent-1' }
    stages {
        stage('Test Email') {
            steps {
                script {
                    emailext(
                        to: 'drlakshmi90@gmail.com',
                        subject: "✅ Jenkins Email Test",
                        body: "🎉 This is a test email from the Jenkins pipeline.",
                        mimeType: 'text/html'
                    )
                }
            }
        }
    }
    post {
        failure {
            emailext(
                to: 'drlakshmi90@gmail.com',
                subject: "❌ Jenkins Build Failed",
                body: "The build has failed. Please check the logs.",
                mimeType: 'text/html'
            )
        }
    }
}