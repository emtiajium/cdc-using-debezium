server=localhost:9092
topic=cdc-using-debezium-topic.public.User

docker exec cdc-using-debezium-kafka sh -c 'cd /opt/bitnami/kafka/bin && ls'

docker exec cdc-using-debezium-kafka /opt/bitnami/kafka/bin/kafka-topics.sh --bootstrap-server $server --list

docker exec cdc-using-debezium-kafka /opt/bitnami/kafka/bin/kafka-topics.sh --bootstrap-server $server --describe $topic

docker exec cdc-using-debezium-kafka /opt/bitnami/kafka/bin/kafka-console-consumer.sh --bootstrap-server $server --topic $topic --from-beginning | jq '.'

docker exec cdc-using-debezium-kafka /opt/bitnami/kafka/bin/kafka-metadata-quorum.sh --bootstrap-server $server describe --status
