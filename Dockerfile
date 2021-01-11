FROM node:14 as builder
WORKDIR /usr/src/web
COPY . .
RUN yarn && yarn build

FROM node:14-alpine
WORKDIR /usr/src/web
COPY --from=builder /usr/src/web/build .
