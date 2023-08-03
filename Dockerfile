FROM node:12.16.1-alpine

WORKDIR /usr

COPY package*.json ./

RUN npm install -g

COPY . ./

EXPOSE 3001

ARG NODE_ENV=development

CMD npm run start
