#!/bin/bash

if [[ -z "$SERVER_USER" || -z "$SERVER_PWD" || -z "$SERVER_HOST" ]]; then
    echo "Please set SERVER_USER, SERVER_PWD, and SERVER_HOST variables before running this script."
    exit 1
fi

REMOTE_COMMAND=$(cat <<EOF
cd /home/ubuntu/project/FW-front || exit 1

echo "Starting your application..."
git checkout main
git pull
rm -rf target
mvn clean package -DskipTests
docker build -t fugoworld_frontend .
docker stop fugoworld_frontend
docker rm fugoworld_frontend
docker run -d -p "$PORT":"$PORT" -e PORT="$PORT" --name fugoworld_frontend fugoworld_frontend
EOF
)

sshpass -p "$SERVER_PWD" ssh -o StrictHostKeyChecking=no "$SERVER_USER"@"$SERVER_HOST" "$REMOTE_COMMAND"
