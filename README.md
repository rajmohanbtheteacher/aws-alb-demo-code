
# 🌐 ALB to EC2 Metadata Visualizer (Animated Static Web App)

This project demonstrates how an **AWS Application Load Balancer (ALB)** routes traffic to two **EC2 instances** across **multiple Availability Zones**. The static web app fetches live **EC2 metadata** from the instances and visualizes it using animations and icons.

## 🖼️ Architecture Diagram

```
Browser --> ALB (Static Web App HTML/CSS/JS)
                 |
         ---------------------
         |                   |
     EC2-1               EC2-2
 (AZ-1, Apache2)     (AZ-2, Apache2)
 Metadata Served     Metadata Served
 on port 8080        on port 8080
```

## 🧾 EC2 Setup Instructions (Ubuntu 22.04)

1. Copy and run the metadata server script on each EC2 instance:
   - See `README-instructions.txt` in this bundle for full steps.

2. Allow inbound TCP port `8080` in the EC2 Security Group.

3. Place this website content in Apache's `/var/www/html`.

## 🎨 Features

- Animated ALB and EC2 display.
- Fetches and shows live EC2 metadata.
- Responsive and beautiful layout.
- Reusable in demos, tutorials, or cloud architecture labs.
