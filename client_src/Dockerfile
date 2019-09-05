# stage: 1
FROM node AS builder
WORKDIR /usr/src/client
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /usr/src/client
COPY --from=builder /usr/src/client/build .
CMD ["serve", "-p", "80", "-s", "."]
