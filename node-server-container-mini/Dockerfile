# build stage

FROM node:12-stretch AS BUILD

WORKDIR /build

COPY package.json package-lock.json ./

RUN npm ci

COPY  . .

# runtime stage

FROM alpine:3.10 AS RUN

RUN apk add --update nodejs

RUN addgroup -S node && adduser -S node -G node

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code/

COPY --from=BUILD --chown=node:node /build .

CMD [ "node", "index.js" ]