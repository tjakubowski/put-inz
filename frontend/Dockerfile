FROM node:14-slim

WORKDIR /usr/frontend

ENV PATH /usr/frontend/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
