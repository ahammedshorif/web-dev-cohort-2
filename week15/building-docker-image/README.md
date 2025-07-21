# Create Dockerfile

# Write the command in Dockerfile
```
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000


CMD [ "node", "index.js" ]

```


# Build the image - Command

```
docker build -t [image-name] .

```


