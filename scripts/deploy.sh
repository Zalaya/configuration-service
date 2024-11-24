#! /bin/bash

SERVICE=""
DOCKER_COMPOSE_FILE="$(dirname "$0")/../docker-compose.yml"

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -s|--service) SERVICE="$2"; shift ;;
    -h|--help) echo "Usage: deploy.sh -s|--service <service>"; exit 1 ;;
    *) echo "Unknown parameter passed: $1"; exit 1 ;;
  esac
  shift
done

docker-compose -f $DOCKER_COMPOSE_FILE down $SERVICE
docker-compose -f $DOCKER_COMPOSE_FILE build $SERVICE
docker-compose -f $DOCKER_COMPOSE_FILE up -d $SERVICE
