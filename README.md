
# Docker + Python + HTTP Server

This repository contains an example of how to create a HTTP server using Python and Docker.

The reason of this project is to CI/CD course from DIO.

## How to use

1. Clone this repository
2. Run `docker-compose up` to start the server
3. Open your browser and go to `http://localhost:8000`

## How it works

The server is created using the `http.server` module from Python's standard library. The server is started using the `docker-compose` command, which builds a Docker image based on the `Dockerfile` in this repository. The image is then run as a container, and the server is started using the `command` specified in the `docker-compose.yml` file.

The server is configured to listen on port 8000, and the `docker-compose.yml` file maps this port to port 8000 on the host machine. This means that you can access the server from your browser by going to `http://localhost:8000`.

The server is also configured to log information to the console, so you can see what's happening by running `docker-compose logs -f` in another terminal window.
