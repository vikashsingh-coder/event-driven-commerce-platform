#!/bin/bash


case $1 in

start)

docker compose up -d
;;

stop)

docker compose down
;;

logs)

docker compose logs -f
;;

restart)

docker compose restart
;;

*)

echo "Usage: start|stop|logs|restart"

;;

esac