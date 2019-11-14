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
                script {
                    try{
                        sh 'exit 1'
                    }
                    catch(exc){
                        sh 'exit 0'
                    }
                }
            }
        }
    }
}
