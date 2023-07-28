pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            agent {
                docker {
                    image 'trion/ng-cli'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh 'npm install'
                sh 'ng build --progress false --prod --aot'
                sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
                archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'trion/ng-cli'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh 'ng test --progress false --watch false'
                junit '**/test-results.xml'
            }
        }
    }
}
