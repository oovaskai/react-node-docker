# React & Node/Express & docker-compose

## Info
Set up development environment for React client and Node server without installing node & npm etc. to your host machine.  

## Usage

### Build React dev image with create-react-app
```
// create base container 
$ docker run -it --name cra-base node:latest npx create-react-app app

// commit to a new image:
$ docker commit cra-base react:dev

// remove base container
$ docker rm cra-base
```
More info about Node images @ [Docker Hub](https://hub.docker.com/_/node/)

### Start development environment
```
$ docker-compose up
```
And browse to: [http:localhost:3000](http:localhost:3000)  
  
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
And browse to: [http:localhost:3003](http:localhost:3003)

### Stop and remove production server container
```
$ docker-compose -f production.yml down
```

### Server locales and timezone
Check server/Dockerfile