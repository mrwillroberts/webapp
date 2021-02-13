# Example WebApp Frontend

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode (with parcel):

```sh
npm start
```
This proxies /api calls to localhost:8080

## Running
To create a production build:

```sh
npm run build-prod
```

Maven wrapper copies prod build output to static resources folder of backend 
So the application can be run as a single process
```sh
java -jar ../target/web-app-<version>.jar
```

## Testing

To run unit tests:

```sh
npm test
```

## Credits

* [createapp.dev](https://createapp.dev/)  
* https://github.com/eirslett/frontend-maven-plugin  
* https://dev.to/s2engineers/proxy-your-backend-api-to-the-parcel-development-server-5bh4  
* https://developer.okta.com/blog/2018/07/19/simple-crud-react-and-spring-boot  