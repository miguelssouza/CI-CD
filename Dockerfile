FROM node:16

WORKDIR /app

COPY ./server/. /app/

EXPOSE 3000

RUN npm install
