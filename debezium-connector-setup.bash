source setup-env.bash

curl --location 'http://localhost:8083/connectors' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "cdc-using-debezium-connector",
    "config": {
        "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
        "tasks.max": "1",
        "database.hostname": "'$DEVICE_IP'",
        "database.port": "'$TYPEORM_PORT'",
        "database.user": "'$TYPEORM_USERNAME'",
        "database.password": "'$TYPEORM_PASSWORD'",
        "database.dbname": "'$TYPEORM_DATABASE'",
        "database.server.id": "184054",
        "topic.prefix": "cdc-using-debezium",
        "database.include.list": "public.'$TYPEORM_DATABASE'",
        "schema.history.internal.kafka.bootstrap.servers": "cdc-using-debezium-kafka:9092",
        "schema.history.internal.kafka.topic": "schema-changes.cdc-using-debezium"
    }
}'

curl --location 'http://localhost:8083/connectors/cdc-using-debezium-connector' | jq '.'

# curl --location --request DELETE 'http://localhost:8099/api/connectors/1/cdc-using-debezium-connector'
