pipeline {
agent any


environment {
    AWS_ACCESS_KEY_ID = credentials('aws-access-key')
    AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
    AWS_DEFAULT_REGION = 'us-east-1'
}

stages {

    stage('1 - Checkout Source Code') {
        steps {
            git branch: 'main', url: 'https://github.com/penguinlord-2701/DevSecOps_project.git'
        }
    }

    stage('2 - Build Docker Image') {
        steps {
            sh 'docker build -t devsecops-app .'
        }
    }

    stage('3 - Infrastructure Security Scan (Trivy)') {
        steps {
            sh 'trivy config terraform/'
        }
    }

    stage('4 - Terraform Init') {
        steps {
            sh 'terraform -chdir=terraform init'
        }
    }

    stage('5 - Terraform Plan') {
        steps {
            sh 'terraform -chdir=terraform plan'
        }
    }

   stage('6 - Deploy on EC2') {
    steps {
        sh '''
        ssh -o StrictHostKeyChecking=no -i /var/lib/jenkins/security.pem ec2-user@18.212.253.97 "

        # Stop ALL containers using port (fix port conflict)
        docker rm -f $(docker ps -aq) || true

        # Remove old image (optional clean)
        docker rmi devsecops-app || true

        # Clone repo if not exists
        if [ ! -d DevSecOps_project ]; then
            git clone https://github.com/penguinlord-2701/DevSecOps_project.git
        fi

        # Enter project directory
        cd DevSecOps_project

        # Pull latest changes
        git pull

        # Build new image
        docker build -t devsecops-app .

        # Run container properly
        docker run -d \
          --name devsecops-container \
          --restart unless-stopped \
          -p 3000:3000 \
          devsecops-app
        "
        '''
    }
}
    stage('7 - Verify Deployment') {
        steps {
            sh 'docker ps'
        }
    }

}

post {
    always {
        echo 'Pipeline completed'
    }
}


}
