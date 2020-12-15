FROM node:12-alpine

RUN npm i -g nodemon

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code/

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

CMD [ "nodemon","index.js" ]