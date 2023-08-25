[![CI](https://github.com/emtiajium/cdc-using-debezium/actions/workflows/ci.yml/badge.svg)](https://github.com/emtiajium/cdc-using-debezium/actions/workflows/ci.yml)

# What is this repository for?

TO BE ADDED

# How to Run

###### Prerequisites

➜ Install Node 18.13.0 using [nvm](https://github.com/nvm-sh/nvm)

➜ Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

➜ Install [jq](https://jqlang.github.io/jq/download/) to prettify the JSON

###### Clone the repo and install all dependencies

➜ `git clone git@github.com:emtiajium/cdc-using-debezium.git`

➜ `cd cdc-using-debezium`

➜ `npm install`

###### Create the configuration

➜ `npm run create:env`

###### Run backing services (Postgres, Kafka, Debezium Connect, Debezium UI)

➜ `source setup-env.bash`

➜ `docker-compose up -d`

###### Synchronize model changes into the database

➜ `npm run migration:run`

###### Register the PostgreSQL connector to monitor the database

➜ `bash debezium-connector-setup.bash`

###### Start the Debezium UI (Optional)

➜ <http://localhost:8099>

###### View change events

➜ Insert/Update/Delete data (e.g., insert a user: `sql-snippets/insert-users.sql`)

➜ `docker exec cdc-using-debezium-kafka /opt/bitnami/kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic cdc-using-debezium-topic.public.User --from-beginning | jq '.'`

## Remove backing services

➜ `npm run clean:docker-containers`

## Reading materials

-   [Debezium official tutorial](https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/)
-   [Kafka](https://kafka.apache.org/)
-   [Kafka connection](https://debezium.io/documentation/reference/2.3/tutorial.html)
    > I haven't used Zookeeper

## Change Logs

-   `0.0.1`: --- ---
