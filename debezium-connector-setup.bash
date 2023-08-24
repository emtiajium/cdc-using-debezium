curl --location 'http://localhost:8083/connectors' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
    "name": "cdc-using-debezium-connector",
    "config": {
        "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
        "tasks.max": "1",
        "database.hostname": "192.168.1.110",
        "database.port": "5443",
        "database.user": "postgres",
        "database.password": "123",
        "database.dbname": "cdc-using-debezium",
        "database.server.id": "184054",
        "topic.prefix": "cdc-using-debezium",
        "database.include.list": "public.cdc-using-debezium",
        "schema.history.internal.kafka.bootstrap.servers": "cdc-using-debezium-kafka:9092",
        "schema.history.internal.kafka.topic": "schema-changes.cdc-using-debezium"
    }
}
'
