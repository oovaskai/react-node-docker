FROM node:14.2

# http://lingoes.net/en/translator/langcode.htm
ENV LANG fi-FI.UTF-8

# https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
ENV TIMEZONE Europe/Helsinki
RUN ln -snf /usr/share/zoneinfo/$TIMEZONE /etc/localtime && echo $TIMEZONE > /etc/timezone

WORKDIR /home/node
COPY package.json .

RUN yarn install