FROM node:12.16.3-stretch

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .

CMD yarn start
