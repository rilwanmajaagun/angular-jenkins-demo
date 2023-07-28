pipeline {
    agent { docker { image 'node:18.16.0-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'ng build --progress false --prod --aot'
                sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
            }
            archive 'dist.tar.gz'
        }
    }
}