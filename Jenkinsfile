pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Unstable') {
            steps {
                sh 'echo Building... Failure here will fail the build'
                sh 'exit 1'
                script {
                    junit allowEmptyResults: true, testResults: 'report/APIReport.xml'
                }
            }
        }
    }
}
