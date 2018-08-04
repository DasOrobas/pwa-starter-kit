FROM node:8.11.3-alpine
WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
EXPOSE 8081
EXPOSE 4444

COPY . .