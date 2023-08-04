FROM node:16.20.1-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3001

ARG NODE_ENV=development

CMD npm run start
