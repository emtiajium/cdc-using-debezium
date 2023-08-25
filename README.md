[![CI](https://github.com/emtiajium/cdc-using-debezium/actions/workflows/ci.yml/badge.svg)](https://github.com/emtiajium/cdc-using-debezium/actions/workflows/ci.yml)

# What is this repository for?

TO BE ADDED

# How to Run

###### Prerequisites

➜ Install Node 18.13.0 using [nvm](https://github.com/nvm-sh/nvm)

➜ Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

###### Clone the repo and install all dependencies

➜ `git clone git@github.com:emtiajium/cdc-using-debezium.git`

➜ `cd cdc-using-debezium`

➜ `npm install`

###### Create the configuration

➜ `npm run create:env`

###### Run backing services

➜ `source .env`

➜ `docker-compose up -d`

###### Synchronize model changes into the database

➜ `npm run migration:run`

###### Register the PostgreSQL connector to monitor the database

➜ `bash debezium-connector-setup.bash`

###### Start the Debezium UI

➜ <http://localhost:8099>

## Remove backing services

➜ `npm run clean:docker-containers`

## Change Logs

-   `0.0.1`: --- ---
