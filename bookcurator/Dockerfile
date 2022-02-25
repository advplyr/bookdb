FROM node:17-alpine

WORKDIR /bookcurator
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD [ "node", "index.js" ]