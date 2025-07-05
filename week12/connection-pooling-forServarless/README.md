# Prisma + Cloudflare Workers (Data Proxy)

This project demonstrates how to use **Prisma ORM** with **Cloudflare Workers** using the **Prisma Data Proxy**, which enables safe and efficient database access in a serverless environment.

## ⚡ Tech Stack

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Prisma ORM (Edge Client)](https://www.prisma.io/docs/orm/prisma-client/edge)
- [Prisma Data Proxy](https://www.prisma.io/docs/orm/data-access/data-proxy)
- PostgreSQL / MySQL (any Prisma-supported DB)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cloudflare-prisma-worker.git
cd cloudflare-prisma-worker

```

## Install Dependencies

```
npm install
```


## Set Up Prisma Schema

Edit prisma/schema.prisma:

```
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["dataProxy"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") // Use the Prisma Data Proxy URL
}
```


## Push Database Schema

```
npx prisma db push

```
## Generate Prisma Client (Edge)
```
npx prisma generate

```