pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rashikudale/nodejs-demo-app'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo No tests defined yet!'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat """
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker push %DOCKER_IMAGE%
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
