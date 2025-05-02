pipeline {
    agent { label 'agent-1' }
    stages {
        stage('Dummy') {
            steps {
                echo 'Just a dummy stage'
            }
        }
    }
    post {
        success {
            emailext (
                from: 'drlakshmi90@gmail.com',
                subject: "Build Success",
                body: "This is a success email from Jenkins.",
                to: 'drlakshmi90@gmail.com',
                mimeType: 'text/plain'
            )
        }
    }
}
