# OhMyBank

## Run the app

To run the whole stack of the application please refer to the deploy repo where you will find the docker-compose.yml file. This file will help you bring up both the backend and the frontend of the app.

The docker-compose.yml in this repo is just here for testing purposes. The mock-api provided in `src/mock-api` does not count as the final API server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

> You don't need to do this if you are launching from the `docker-compose.yml` file in the deploy repo.

Run `docker build -t omb-ui .` to build the container image.

## Running from a container

> You don't need to do this if you are launching from the `docker-compose.yml` file in the deploy repo.

Run `docker run -it --rm -p 9000:80 omb-ui` to run the application in a container environment. You need to build it first with the step above. The app will be served on port `9000`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
