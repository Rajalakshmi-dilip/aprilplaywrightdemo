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
                from: 'drlakshmi90@gmail.com', // MUST MATCH the Gmail you used in Jenkins config
                subject: "Build Success",
                body: "This is a success email from Jenkins.",
                to: 'drlakshmi1890@gmail.com',
                mimeType: 'text/plain'
            )
        }
    }
}