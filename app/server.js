const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/topics", (req, res) => {
  res.json([
    {
      title: "Docker",
      description: "Containerization platform used to package applications with dependencies."
    },
    {
      title: "Terraform",
      description: "Infrastructure as Code tool used to provision cloud infrastructure."
    },
    {
      title: "Jenkins",
      description: "Automation server used to implement CI/CD pipelines."
    },
    {
      title: "Trivy",
      description: "Security scanner used to detect vulnerabilities in containers and infrastructure."
    },
    {
      title: "DevSecOps",
      description: "Practice of integrating security into DevOps workflows."
    }
  ]);
});

app.listen(3000, () => {
  console.log("DevSecOps learning website running on port 3000");
});