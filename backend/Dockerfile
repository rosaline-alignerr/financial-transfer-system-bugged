FROM node:16.14-alpine

WORKDIR /app-backend

COPY package.json .

RUN npm install

COPY . .

# Use nodemon for live reload in development
CMD ["npx", "nodemon", "--watch", "./src/**", "./src/server.ts"]