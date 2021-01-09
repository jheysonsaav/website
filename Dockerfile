FROM node:14
WORKDIR /usr/src/web
COPY . .
RUN yarn && yarn build
CMD [ "yarn", "start" ]
