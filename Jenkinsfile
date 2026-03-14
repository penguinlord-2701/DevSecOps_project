pipeline {
agent any

environment {
    AWS_ACCESS_KEY_ID = credentials('aws-access-key')
    AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
    AWS_DEFAULT_REGION = 'us-east-1c'
}

stages {

    stage('1 - Checkout Source Code') {
        steps {
            git branch: 'main', url: 'https://github.com/penguinlord-2701/DevSecOps_project.git'
        }
    }

    stage('2 - Install Dependencies') {
        steps {
            sh 'npm install --prefix app'
        }
    }

    stage('3 - Build Docker Image') {
        steps {
            sh 'docker build -t devsecops-app .'
        }
    }

    stage('4 - Infrastructure Security Scan (Trivy)') {
        steps {
            sh 'trivy config terraform/'
        }
    }

    stage('5 - Terraform Init') {
        steps {
            sh 'terraform -chdir=terraform init'
        }
    }

    stage('6 - Terraform Plan') {
        steps {
            sh 'terraform -chdir=terraform plan'
        }
    }

    stage('7 - Deploy Application Container') {
        steps {
            sh 'docker run -d -p 3000:3000 devsecops-node || true'
        }
    }

}

post {
    always {
        echo 'Pipeline completed'
    }
}


}
