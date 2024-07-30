FROM node:17-alpine

MAINTAINER Anish kumar Mourya <anish@bjshomedelivery.com>

#RUN npm install -g yarn
RUN mkdir -p  /app

WORKDIR /app

# Installing dependencies
COPY package.json /app

COPY ./ /app

RUN yarn global add next@canary
RUN yarn global add libvips
RUN yarn add sharp
RUN set NODE_OPTIONS=--openssl-legacy-provider

RUN yarn install
ENV NODE_ENV=production
# Building app
RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build

# expose port
EXPOSE 3000

# Running the app
CMD [ "yarn","run","start" ]