#!/bin/bash

docker compose up -d -V

sleep 5m

docker-compose -f docker-compose.relayer.yaml up