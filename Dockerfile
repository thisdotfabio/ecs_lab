from 833585471893.dkr.ecr.us-east-1.amazonaws.com/node:alpine

WORKDIR /usr

COPY webserver/package.json ./

COPY webserver/tsconfig.json ./

COPY webserver/src ./src

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]