source setup-env.bash

curl --location 'http://localhost:8083/connectors' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "cdc-using-debezium-connector",
    "config": {
        "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
        "database.hostname": "'$DEVICE_IP'",
        "database.port": "'$TYPEORM_PORT'",
        "database.user": "'$TYPEORM_USERNAME'",
        "database.password": "'$TYPEORM_PASSWORD'",
        "database.dbname": "'$TYPEORM_DATABASE'",
        "database.server.id": "184054",
        "table.include.list": "public.User",
        "topic.prefix": "cdc-using-debezium-topic"
    }
}'

curl --location 'http://localhost:8083/connectors/cdc-using-debezium-connector' | jq '.'

# curl --location --request DELETE 'http://localhost:8099/api/connectors/1/cdc-using-debezium-connector'
