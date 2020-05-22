# React & Node/Express & docker-compose

## Info
Set up development environment for React client and Node server without installing node and modules to your host machine.  
By default, images are build from node:latest. More info about Node images @ [Docker Hub](https://hub.docker.com/_/node/).

## Usage

### Start development environment
```
$ docker-compose up
```
And browse to: [http://localhost:3000](http:localhost:3000)  
  
### Install dependencies by adding them to package.json and rebuild
```
$ docker-compose up --build
```

### Build React app and start server in production mode
```
$ docker-compose up -d --no-deps client
$ docker-compose exec client yarn build
$ docker cp client-dev:/app/build server/.
$ docker-compose down
$ docker-compose -f production.yml up
```
And browse to: [http://localhost:3003](http:localhost:3003)

### Stop and remove production server container
```
$ docker-compose -f production.yml down
```

### Server locales and timezone
Set by ENV variables in server/Dockerfile:
```
ENV LANG fi-FI.UTF-8
ENV TIMEZONE Europe/Helsinki
```
[Language ISO codes](http://lingoes.net/en/translator/langcode.htm)  
[Timezones in tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
