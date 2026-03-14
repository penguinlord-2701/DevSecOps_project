resource "aws_instance" "web" {
  ami           = "ami-02dfbd4ff395f2a1b"
  instance_type = "t2.micro"

  metadata_options {
    http_tokens = "required"
  }

  root_block_device {
    encrypted = true
  }

  tags = {
    Name = "DevSecOps-Instance"
  }
}