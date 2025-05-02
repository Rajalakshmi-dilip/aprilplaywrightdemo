pipeline {
        agent { label 'agent-1' }
    stages {
        stage('Test Email') {
            steps {
                script {
                    echo 'Trying to send test email...'
                    emailext (
                        from: 'drlakshmi90@gmail.com',
                        subject: "Test Email from Jenkins",
                        body: "This is a test email sent from Jenkins.",
                        to: 'drlakshmi90@gmail.com'
                    )
                    echo 'Email attempted'
                }
            }
        }
    }
}
