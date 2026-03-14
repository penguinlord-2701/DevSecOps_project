# DevSecOps Project – Secure CI/CD Pipeline for Cloud Infrastructure

## Project Overview

This project demonstrates the implementation of a **DevSecOps pipeline** that integrates security practices directly into the CI/CD lifecycle.

The pipeline automatically builds a containerized web application, scans infrastructure code for security vulnerabilities, and prepares secure infrastructure deployment using Terraform.

Security checks are integrated early in the development process to detect misconfigurations before deployment.

---

# Objectives

The objectives of this project are:

* Implement **Infrastructure as Code (IaC)** using Terraform
* Containerize a web application using Docker
* Build a **CI/CD pipeline using Jenkins**
* Integrate **automated security scanning using Trivy**
* Detect and remediate infrastructure vulnerabilities
* Deploy and verify the application automatically

---

# Tools and Technologies

| Tool      | Purpose                 |
| --------- | ----------------------- |
| Docker    | Containerization        |
| Jenkins   | CI/CD automation        |
| Terraform | Infrastructure as Code  |
| Trivy     | Security scanning       |
| AWS EC2   | Cloud infrastructure    |
| Node.js   | Web application runtime |
| GitHub    | Source code repository  |

---

# DevSecOps Architecture

The architecture of the implemented DevSecOps pipeline is illustrated below.

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Jenkins CI/CD Pipeline
   │
   ├── Source Code Checkout
   ├── Docker Image Build
   ├── Infrastructure Security Scan
   ├── Terraform Initialization
   ├── Terraform Planning
   ├── Application Deployment
   └── Deployment Verification
   │
   ▼
AWS Cloud Infrastructure
   │
   ▼
Docker Container Running Web Application
```

This architecture ensures that **security scanning is performed before infrastructure provisioning**, following the core DevSecOps principle of **Shift Left Security**.

---

# Project Directory Structure

```
DevSecOps_project
│
├── app
│   ├── server.js
│   └── package.json
│
├── terraform
│   ├── main.tf
│   ├── provider.tf
│   └── security.tf
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

# Application Description

A simple **Node.js web application** was created to demonstrate deployment through the DevSecOps pipeline.

The application runs inside a Docker container and listens on port **3000**.

Example URL:

```
http://localhost:3000
```

or

```
http://<EC2_PUBLIC_IP>:3000
```

---

# Containerization

The application is containerized using **Docker** to ensure portability and consistency across environments.

Docker enables:

* Isolated application execution
* Environment consistency
* Simplified deployment
* Scalability

The container image is automatically built during the CI/CD pipeline.

---

# Infrastructure as Code

Infrastructure resources are defined using **Terraform**, which enables automated provisioning and version-controlled infrastructure configuration.

The infrastructure configuration includes:

* AWS EC2 instance definition
* Security group configuration
* Networking rules
* Secure instance configuration

Using Infrastructure as Code ensures that infrastructure is **reproducible, auditable, and secure**.

---

# Jenkins CI/CD Pipeline

A Jenkins pipeline automates the DevSecOps workflow.

The pipeline performs the following stages:

1. Source Code Checkout
2. Docker Image Build
3. Infrastructure Security Scan
4. Terraform Initialization
5. Terraform Plan
6. Application Deployment
7. Deployment Verification

Each stage is executed automatically whenever the pipeline runs.

---

# Security Scanning with Trivy

Terraform infrastructure code is scanned using **Trivy** to identify potential misconfigurations and vulnerabilities.

Security scanning is integrated early in the pipeline to prevent insecure infrastructure deployment.

Example issues detected during scanning include:

* Public SSH access
* Unrestricted network rules
* Unencrypted storage
* Insecure metadata service configuration

---

# AI Driven Security Remediation

Artificial Intelligence was used to analyze the vulnerability reports and recommend secure remediation strategies.

## AI Prompt Used

```
Analyze Terraform security vulnerabilities detected by Trivy and recommend remediation strategies to secure the infrastructure configuration.
```

## Identified Risks

* Public SSH access from any IP address
* Unrestricted outbound network access
* Unencrypted root block storage
* Instance metadata service not protected

## AI Recommended Fixes

* Restrict SSH access to trusted IP addresses
* Limit outbound network access rules
* Enable encryption for root storage volumes
* Enforce IMDSv2 authentication

These improvements significantly enhanced the infrastructure security posture.

---

# Pipeline Execution Result

The Jenkins pipeline successfully executed all stages and completed deployment.

Example pipeline result:

```
Finished: SUCCESS
```

This confirms that the DevSecOps pipeline executed successfully and the application was deployed.

---

# Application Deployment

The Docker container running the Node.js application was successfully deployed and verified.

The application can be accessed through the server's public IP address on port **3000**.

---

# Screenshots

The following screenshots are included in the project documentation:

1. Jenkins Pipeline Execution
2. Trivy Security Scan Report
3. Terraform Plan Output
4. Docker Container Running
5. Application Running on Public IP

---

# Conclusion

This project demonstrates a complete **DevSecOps pipeline implementation** where security is integrated into every stage of the software delivery process.

Key achievements include:

* Automated CI/CD pipeline
* Containerized application deployment
* Infrastructure as Code implementation
* Automated infrastructure security scanning
* Secure cloud infrastructure configuration

By incorporating security checks into the pipeline, vulnerabilities can be detected early and mitigated before infrastructure deployment.

---

# Future Improvements

Possible improvements for this system include:

* Automated Terraform Apply deployment
* Kubernetes based container orchestration
* Integration with AWS Security Hub
* Continuous security monitoring
* Integration with vulnerability management platforms

---

# Author

Dax
DevSecOps Project
