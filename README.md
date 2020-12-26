# Example WebApp
This is a simple boiler plate application to demonstrate how a JS frontend can be combined with a Java backend

## Stack
Frontend
* NPM (package manager)
* Parcel (bundler)
* Jest (testing framework)
* Vue (framework)
* Bootstrap

Backend
* Java
* Spring Boot
* Junit

SDLC
* Maven

## Developing

Run backend in IDE by launching
```sh
WebAppApplication.java
```

Run frontend in hot module reloading mode

First install dependencies:
```sh
npm start
```
This proxies /api calls to localhost:8080

## Running
To create a production JAR build:

```sh
mvn install
```

Build a docker image

```sh
docker build -t example/webapp .
```

Run docker container
```sh
docker run -d -p 8080:8080 example/webapp
```

## Testing

To run both frontend and backend tests:

```sh
mvn test
```

