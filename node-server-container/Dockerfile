FROM node:12-stretch

USER node

WORKDIR /home/node/code/

COPY --chown=node:node index.js /home/node/code/

CMD ["node", "index.js"]