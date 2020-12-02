FROM node:14 as builder
WORKDIR /usr/src/website
COPY . .
RUN yarn &\
  yarn build

FROM nginx:1.19
COPY --from=builder /usr/src/website/build /usr/share/nginx/html