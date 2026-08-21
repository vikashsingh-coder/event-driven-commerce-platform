#!/usr/bin/env bash

set -e

echo "Checking PostgreSQL..."

docker exec ecommerce-postgres \
  pg_isready \
  -U ecommerce \
  -d ecommerce

echo "PostgreSQL OK"


echo "Checking MongoDB..."

docker exec ecommerce-mongodb \
  mongosh \
  --quiet \
  -u ecommerce \
  -p ecommerce_dev_password \
  --authenticationDatabase admin \
  --eval "db.adminCommand({ ping: 1 })"

echo "MongoDB OK"


echo "Checking Redis..."

docker exec ecommerce-redis \
  redis-cli \
  -a ecommerce_redis_password \
  ping

echo "Redis OK"


echo "Checking RabbitMQ..."

docker exec ecommerce-rabbitmq \
  rabbitmq-diagnostics \
  -q \
  ping

echo "RabbitMQ OK"


echo ""
echo "All infrastructure components are healthy."