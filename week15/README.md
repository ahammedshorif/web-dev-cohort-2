## Docker
# All docker Comands

# Docker Commands Cheat Sheet

> A handy reference to manage Docker containers, images, volumes, and networks.

---

## Check Docker Installation
```bash
docker --version
```

---

## Image Commands

### Build an image
```bash
docker build -t your-image-name .
```

### List images
```bash
docker images
```

### Remove an image
```bash
docker rmi image-name-or-id
```

---

## 🚀 Container Commands

### Run a container (foreground)
```bash
docker run -p 3000:3000 your-image-name
```

### Run a container (detached)
```bash
docker run -d -p 3000:3000 your-image-name
```

### List running containers
```bash
docker ps
```

### List all containers
```bash
docker ps -a
```

### Stop a container
```bash
docker stop container-id
```

### Restart a container
```bash
docker restart container-id
```

### Remove a container
```bash
docker rm container-id
```

---

## Volume Commands

### List volumes
```bash
docker volume ls
```

### Remove a volume
```bash
docker volume rm volume-name
```

### Run with volume
```bash
docker run -v volume-name:/app/data your-image-name
```

---

## 🌐 Network Commands

### List networks
```bash
docker network ls
```

### Connect container to network
```bash
docker network connect network-name container-id
```

---

## Debugging & Logs

### Inspect a container
```bash
docker inspect container-id
```

### View logs
```bash
docker logs container-id
```

### Open terminal in container
```bash
docker exec -it container-id bash
```

---

## Cleanup Commands

### Remove stopped containers
```bash
docker container prune
```

### Remove unused data
```bash
docker system prune -a
```

---

## Docker Compose

### Start services
```bash
docker-compose up
```

### Start in background
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### Build services
```bash
docker-compose build
```

---
