# Dockerfile for backend
FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
