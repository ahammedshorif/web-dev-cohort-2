

## 🐘 PostgreSQL with Docker

This project uses PostgreSQL running in a Docker container to provide a consistent and isolated database environment.

---

### 📥 1. Pull PostgreSQL Image

Pull the official PostgreSQL image from Docker Hub:

```bash
docker pull postgres
```
# run postgrass in docker
```
docker run --name my-postgres \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -d postgres
```

--name my-postgres: Container name

-e POSTGRES_USER: Username for PostgreSQL

-e POSTGRES_PASSWORD: Password for the user

-e POSTGRES_DB: Default database to create

-p 5432:5432: Map container port 5432 to host

-d: Run container in background (detached mode)

# Connect to PostgreSQL with psql

```
psql -h localhost -U myuser -d mydatabase
```