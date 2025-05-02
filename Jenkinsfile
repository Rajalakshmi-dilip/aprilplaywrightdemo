pipeline {
        agent { label 'agent-1' }
    stages {
        stage('Test Email') {
            steps {
                script {
                    emailext (
                        subject: "Test Email from Jenkins",
                        body: "This is a test email sent from Jenkins.",
                        to: 'drlakshmi90@gmail.com'
                    )
                }
            }
        }
    }
}
