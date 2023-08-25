docker exec cdc-using-debezium-postgres psql --username=postgres --dbname=cdc-using-debezium --command='SHOW wal_level'
docker exec cdc-using-debezium-postgres psql --username=postgres --dbname=cdc-using-debezium --command='SHOW shared_preload_libraries'
