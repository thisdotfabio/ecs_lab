from node:alpine

WORKDIR /usr

COPY webserver/package.json ./

COPY webserver/tsconfig.json ./

COPY webserver/src ./src

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]