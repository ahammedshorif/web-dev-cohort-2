# 🐳 Docker Overview

This project uses Docker to containerize the application, making it easy to build, run, and deploy in any environment.

---

## 📦 What is Docker?

Docker is a platform for developing, shipping, and running applications inside lightweight containers. It ensures consistency across development, testing, and production environments.

---

## 📁 Project Structure

├── Dockerfile
├── .dockerignore
├── docker-compose.yml (optional)
├── src/
├── package.json
└── README.md




---

## 🛠️ Docker Commands

| Command | Description |
|--------|-------------|
| `docker --version` | Check Docker installation |
| `docker build -t my-app .` | Build Docker image from current directory |
| `docker images` | List all images |
| `docker run -p 3000:3000 my-app` | Run the app and map port 3000 |
| `docker ps` | View running containers |
| `docker stop <container>` | Stop a running container |
| `docker rm <container>` | Remove a container |
| `docker rmi <image>` | Remove an image |
| `docker-compose up --build` | Build and run containers using Compose |

---

## 📄 Dockerfile Example

```Dockerfile
# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and start app
EXPOSE 3000
CMD ["node", "index.js"]


## Using Cli

# Build the Docker image
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
