pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/penguinlord-2701/DevSecOps_project.git'

            }
        }

        stage('Terraform Security Scan') {
            steps {
                sh 'trivy config terraform/'
            }
        }

        stage('Terraform Init') {
            steps {
                sh 'terraform -chdir=terraform init'
            }
        }

        stage('Terraform Plan') {
            steps {
                sh 'terraform -chdir=terraform plan'
            }
        }
    }
}
